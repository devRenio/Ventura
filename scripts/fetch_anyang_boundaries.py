"""Download admdongkor (vuski) GeoJSON and extract 안양시 31개 행정동 only.

Pipeline:
  1) Stream-download ver20251231 GeoJSON (~35 MB).
  2) Filter features whose adm_nm contains '안양시'.
  3) Verify the dong names match our population dataset.
  4) Optionally simplify polygons (Douglas-Peucker via shapely).
  5) Write src/data/anyangBoundaries.json with WGS84 [lat,lng] arrays
     ready for react-leaflet <Polygon /> consumption.
"""
from __future__ import annotations
import json
import math
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "scripts" / "_admdong_ver20251231.geojson"
OUT_FULL = ROOT / "src" / "data" / "anyangBoundaries.json"
OUT_CITY = ROOT / "src" / "data" / "anyangCityBoundary.json"

URL = (
    "https://raw.githubusercontent.com/vuski/admdongkor/master/"
    "ver20251231/HangJeongDong_ver20251231.geojson"
)

# 우리가 만든 인구통계의 31개 동 이름
EXPECTED_DONGS = {
    "안양1동","안양2동","안양3동","안양4동","안양5동","안양6동","안양7동","안양8동","안양9동",
    "석수1동","석수2동","충훈동","박달동","호현동",
    "비산1동","비산2동","비산3동","부흥동","달안동","관양동","인덕원동","부림동","평촌동",
    "평안동","귀인동","호계1동","호계2동","호계3동","범계동","신촌동","갈산동",
}


def download(url: str, dest: Path) -> None:
    if dest.exists():
        print(f"· cached: {dest.name} ({dest.stat().st_size:,} bytes)")
        return
    print(f"· downloading {url}")
    req = urllib.request.Request(url, headers={"User-Agent": "Ventura-Demo/1.0"})
    with urllib.request.urlopen(req, timeout=60) as r, dest.open("wb") as f:
        f.write(r.read())
    print(f"· saved {dest.name} ({dest.stat().st_size:,} bytes)")


def short_name(adm_nm: str) -> str:
    """'경기도 안양시 만안구 안양1동' -> '안양1동'"""
    return adm_nm.split()[-1]


def simplify_ring(ring: list[list[float]], tol: float) -> list[list[float]]:
    """Light Douglas-Peucker on a single ring of [lng,lat] coords."""
    if len(ring) < 4:
        return ring
    # Iterative DP
    keep = [False] * len(ring)
    keep[0] = keep[-1] = True
    stack = [(0, len(ring) - 1)]
    while stack:
        i, j = stack.pop()
        if j - i < 2:
            continue
        x1, y1 = ring[i]
        x2, y2 = ring[j]
        dx, dy = x2 - x1, y2 - y1
        seg2 = dx * dx + dy * dy or 1e-12
        max_d, max_k = 0.0, -1
        for k in range(i + 1, j):
            x, y = ring[k]
            t = ((x - x1) * dx + (y - y1) * dy) / seg2
            px = x1 + t * dx
            py = y1 + t * dy
            d = math.hypot(x - px, y - py)
            if d > max_d:
                max_d, max_k = d, k
        if max_d > tol and max_k != -1:
            keep[max_k] = True
            stack.append((i, max_k))
            stack.append((max_k, j))
    return [pt for pt, k in zip(ring, keep) if k]


def simplify_geometry(geom: dict, tol: float) -> dict:
    if geom["type"] == "Polygon":
        return {
            "type": "Polygon",
            "coordinates": [simplify_ring(r, tol) for r in geom["coordinates"]],
        }
    if geom["type"] == "MultiPolygon":
        return {
            "type": "MultiPolygon",
            "coordinates": [
                [simplify_ring(r, tol) for r in poly]
                for poly in geom["coordinates"]
            ],
        }
    return geom


def geom_to_latlng_rings(geom: dict) -> list[list[list[float]]]:
    """react-leaflet expects [[lat,lng], ...] rings (no MultiPolygon wrapping)."""
    rings: list[list[list[float]]] = []
    if geom["type"] == "Polygon":
        for ring in geom["coordinates"]:
            rings.append([[lat, lng] for lng, lat in ring])
    elif geom["type"] == "MultiPolygon":
        for poly in geom["coordinates"]:
            for ring in poly:
                rings.append([[lat, lng] for lng, lat in ring])
    return rings


def main() -> int:
    download(URL, RAW)
    print(f"· parsing {RAW.name}...")
    data = json.loads(RAW.read_text(encoding="utf-8"))

    anyang = [f for f in data["features"] if "안양시" in f["properties"]["adm_nm"]]
    print(f"· '안양시' features found: {len(anyang)}")

    short_set = {short_name(f["properties"]["adm_nm"]) for f in anyang}
    missing = EXPECTED_DONGS - short_set
    extra = short_set - EXPECTED_DONGS
    print(f"· matched dongs: {len(short_set & EXPECTED_DONGS)} / {len(EXPECTED_DONGS)}")
    if missing:
        print(f"!! missing in GeoJSON: {sorted(missing)}")
    if extra:
        print(f"!! extra (in GeoJSON but not in our stats): {sorted(extra)}")

    # Very light simplification so neighboring dongs keep shared vertices and
    # the visible gaps between polygons go away. ~5 m tolerance.
    tol = 0.00005
    out_features = []
    for f in anyang:
        name = short_name(f["properties"]["adm_nm"])
        simplified = simplify_geometry(f["geometry"], tol)
        rings = geom_to_latlng_rings(simplified)
        out_features.append({
            "dong": name,
            "adm_nm": f["properties"]["adm_nm"],
            "adm_cd": f["properties"].get("adm_cd"),
            "adm_cd2": f["properties"].get("adm_cd2"),
            "rings": rings,
            "vertex_count": sum(len(r) for r in rings),
        })

    total_v = sum(o["vertex_count"] for o in out_features)
    OUT_FULL.write_text(json.dumps(out_features, ensure_ascii=False), encoding="utf-8")
    print(f"· wrote {OUT_FULL.relative_to(ROOT)} "
          f"({OUT_FULL.stat().st_size:,} bytes, total vertices={total_v})")

    # ---------------------------------------------------------------
    # 안양시 외곽 boundary: shapely 로 31개 동 폴리곤을 union 한 뒤,
    # 살짝 단순화하여 src/data/anyangCityBoundary.json 으로 내보냄.
    # ---------------------------------------------------------------
    try:
        from shapely.geometry import shape, mapping
        from shapely.ops import unary_union
    except ImportError:
        print("!! shapely not installed; skipping city boundary union")
        return 0 if not missing else 2

    geoms = [shape(f["geometry"]).buffer(0) for f in anyang]
    union = unary_union(geoms)
    # Light topology-preserving simplification (≈20 m) for the outer ring.
    union_simple = union.simplify(0.00015, preserve_topology=True)

    city_rings: list[list[list[float]]] = []
    g = mapping(union_simple)
    if g["type"] == "Polygon":
        for ring in g["coordinates"]:
            city_rings.append([[round(lat, 6), round(lng, 6)] for lng, lat in ring])
    elif g["type"] == "MultiPolygon":
        for poly in g["coordinates"]:
            for ring in poly:
                city_rings.append([[round(lat, 6), round(lng, 6)] for lng, lat in ring])

    city_v = sum(len(r) for r in city_rings)
    OUT_CITY.write_text(
        json.dumps({"name": "안양시", "rings": city_rings, "vertex_count": city_v}, ensure_ascii=False),
        encoding="utf-8",
    )
    print(f"· wrote {OUT_CITY.relative_to(ROOT)} "
          f"({OUT_CITY.stat().st_size:,} bytes, rings={len(city_rings)}, vertices={city_v})")

    return 0 if not missing else 2


if __name__ == "__main__":
    sys.exit(main())
