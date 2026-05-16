"""Convert extracted_data.json into a hand-curated src/data/anyangData.js.

For each dong we:
  - merge population + age cohort + computed metrics
  - attach an approximate center coordinate and a small hexagonal polygon
    (purely for visual demo; not real admin boundaries)
"""
from __future__ import annotations
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_JSON = ROOT / "scripts" / "extracted_data.json"
BOUNDARIES_JSON = ROOT / "src" / "data" / "anyangBoundaries.json"
OUT_JS = ROOT / "src" / "data" / "anyangData.js"

# Approximate (lat, lng) centers for every dong (hand-curated for demo).
# These are NOT official admin centroids—just plausible-looking points
# spread across 안양시 so the heatmap looks realistic in a screenshot.
DONG_CENTERS: dict[str, tuple[float, float]] = {
    # 만안구
    "안양1동": (37.3943, 126.9271),
    "안양2동": (37.4015, 126.9230),
    "안양3동": (37.4090, 126.9220),
    "안양4동": (37.3975, 126.9155),
    "안양5동": (37.3895, 126.9180),
    "안양6동": (37.3925, 126.9320),
    "안양7동": (37.3855, 126.9290),
    "안양8동": (37.4030, 126.9305),
    "안양9동": (37.4115, 126.9155),
    "석수1동": (37.4290, 126.9075),
    "석수2동": (37.4250, 126.8995),
    "충훈동":  (37.4170, 126.9060),
    "박달동":  (37.3780, 126.9080),
    "호현동":  (37.3760, 126.9170),
    # 동안구
    "비산1동": (37.4080, 126.9450),
    "비산2동": (37.4115, 126.9420),
    "비산3동": (37.4060, 126.9505),
    "부흥동":  (37.3990, 126.9560),
    "달안동":  (37.3995, 126.9610),
    "관양동":  (37.4060, 126.9620),
    "인덕원동": (37.4040, 126.9745),
    "부림동":  (37.3955, 126.9525),
    "평촌동":  (37.3925, 126.9575),
    "평안동":  (37.3935, 126.9695),
    "귀인동":  (37.3870, 126.9685),
    "호계1동": (37.3805, 126.9555),
    "호계2동": (37.3845, 126.9580),
    "호계3동": (37.3860, 126.9650),
    "범계동":  (37.3870, 126.9580),
    "신촌동":  (37.3950, 126.9760),
    "갈산동":  (37.4005, 126.9690),
}


def hex_polygon(center: tuple[float, float], r_lat: float = 0.0035, r_lng: float = 0.0045):
    """Return a 6-vertex polygon (lat,lng pairs) around center."""
    cy, cx = center
    pts = []
    for i in range(6):
        a = math.radians(60 * i + 30)  # 30° offset → "flat-top" hexagon
        pts.append([round(cy + r_lat * math.sin(a), 6),
                    round(cx + r_lng * math.cos(a), 6)])
    return pts


def _round_ring(ring, digits=6):
    return [[round(p[0], digits), round(p[1], digits)] for p in ring]


def _centroid(ring):
    """Simple centroid (arithmetic mean of vertices, no area weighting).

    Good enough for tooltip/marker positioning on small admin polygons.
    """
    n = len(ring)
    if not n:
        return (0.0, 0.0)
    return (
        round(sum(p[0] for p in ring) / n, 6),
        round(sum(p[1] for p in ring) / n, 6),
    )


def main() -> None:
    raw = json.loads(DATA_JSON.read_text(encoding="utf-8"))

    pops = {p["dong"]: p for p in raw["population_by_dong"]}
    ages = raw["dong_age_breakdown"]

    # Real admin boundaries (vuski/admdongkor) keyed by dong name. May be missing
    # if the file hasn't been generated yet; in that case fall back to hexagons.
    boundaries: dict[str, list] = {}
    if BOUNDARIES_JSON.exists():
        for b in json.loads(BOUNDARIES_JSON.read_text(encoding="utf-8")):
            # rings is a list of rings; use the first (outer) ring for the polygon.
            boundaries[b["dong"]] = b["rings"][0]
        print(f"· loaded {len(boundaries)} real boundaries from {BOUNDARIES_JSON.name}")
    else:
        print(f"· NOTE: {BOUNDARIES_JSON.name} not found; using hexagon fallback for all dongs")

    # Reduce 5-year cohorts into the standard 0/10/20/.../80+ buckets
    def bucket(rows: list) -> list[dict]:
        out: dict[str, dict] = {}
        for r in rows:
            label = r["label"]
            if label.endswith("세 이상"):
                key = "80+"
            else:
                lo = int(label.split("~")[0])
                key = f"{(lo // 10) * 10}대"
                if key == "0대":
                    key = "0~9세"
                elif key == "10대" and lo < 10:
                    key = "0~9세"
            o = out.setdefault(key, {"label": key, "total": 0, "male": 0, "female": 0})
            o["total"] += r["total"]
            o["male"] += r["male"]
            o["female"] += r["female"]
        # 10-year buckets in fixed order
        order = ["0~9세", "10대", "20대", "30대", "40대", "50대", "60대", "70대", "80+"]
        # re-aggregate 0~4세 + 5~9세 (these have label "0대" from above when lo<10)
        # The above mapping puts 0~4세 and 5~9세 into "0~9세" via the lo<10 branch
        return [out[k] for k in order if k in out]

    dongs_out = []
    for dong_name, center in DONG_CENTERS.items():
        if dong_name not in pops:
            continue
        p = pops[dong_name]
        age_rows = ages.get(dong_name, [])
        bucketed = bucket(age_rows)

        # Derived metrics
        female_20s = next((b for b in bucketed if b["label"] == "20대"), {}).get("female", 0)
        male_20s = next((b for b in bucketed if b["label"] == "20대"), {}).get("male", 0)
        total_20s = female_20s + male_20s
        senior = sum(
            b["total"] for b in bucketed
            if b["label"] in ("60대", "70대", "80+")
        )

        # Prefer real boundary from vuski/admdongkor. Falls back to hexagon if
        # the boundary file is missing or the dong name didn't match.
        real_ring = boundaries.get(dong_name)
        if real_ring:
            polygon = _round_ring(real_ring)
            poly_center = _centroid(real_ring)
            is_real = True
        else:
            polygon = hex_polygon(center)
            poly_center = (center[0], center[1])
            is_real = False

        dongs_out.append({
            "dong": dong_name,
            "gu": p["gu"],
            "center": [poly_center[0], poly_center[1]],
            "polygon": polygon,
            "boundarySource": "vuski/admdongkor#ver20251231" if is_real else "hexagon-approx",
            "population": {
                "total": p["total"],
                "male": p["male"],
                "female": p["female"],
                "households": p["households"],
                "koreans": p["koreans"],
                "foreigners": p["foreigners"],
            },
            "ageBuckets": bucketed,        # 10-year buckets
            "ageDetailed": age_rows,        # 5-year buckets for the detailed view
            "derived": {
                "twenties_total": total_20s,
                "twenties_female": female_20s,
                "twenties_male": male_20s,
                "twenties_pct": round(total_20s / p["total"] * 100, 1) if p["total"] else 0,
                "female_twenties_pct": round(female_20s / p["total"] * 100, 1) if p["total"] else 0,
                "senior_total": senior,
                "senior_pct": round(senior / p["total"] * 100, 1) if p["total"] else 0,
                "foreigner_pct": round(p["foreigners"] / p["total"] * 100, 2) if p["total"] else 0,
                "avg_household_size": round(p["total"] / p["households"], 2) if p["households"] else 0,
            },
        })

    # Sort: 만안구 → 동안구, then by dong name
    dongs_out.sort(key=lambda d: (0 if d["gu"] == "만안구" else 1, d["dong"]))

    # City-level data
    city_age = raw["city_age_brackets"]
    city_age_no_total = [r for r in city_age if r["label"] != "계"]
    city_industries = [r for r in raw["city_industry_sections"]
                       if r["section"] != "**" and r["workers"]]
    city_industry_top_mid = raw["city_industry_top_mid"][:12]
    foreigner_age = raw["foreigner_age"]

    payload = {
        "ANYANG_CENTER": [37.3943, 126.9271],
        "CITY_TOTAL": {
            "total": 570598,
            "korean": 563279,
            "foreigner": 7319,
            "households": 239981,
            "manangu_total": 239149,
            "donganggu_total": 331449,
            "establishments": 66906,
            "workers": 284815,
        },
        "dongs": dongs_out,
        "cityAgeBrackets": city_age_no_total,
        "cityIndustrySections": city_industries,
        "cityIndustryTopMid": city_industry_top_mid,
        "foreignerAge": foreigner_age,
    }

    js_lines = [
        "// AUTO-GENERATED from scripts/build_dong_js.py · 발표용 데이터 (수정 시 주의)",
        "// 출처: 안양시 주민등록인구통계표 2025.12.31 / 산업세세분류별 총괄 2024 / 2025 안양시 사회조사",
        "//",
        "// ⚠ 각 동 폴리곤(polygon) 좌표는 발표 시연 시각화를 위한 근사치이며,",
        "//   실제 행정경계와는 일치하지 않습니다. 인구·세대·외국인·연령·산업 데이터는 모두 실측치입니다.",
        "",
    ]

    def js(value, indent: int = 0) -> str:
        return json.dumps(value, ensure_ascii=False, indent=2)

    js_lines.append(f"export const ANYANG_CENTER = {js(payload['ANYANG_CENTER'])};\n")
    js_lines.append(f"export const CITY_TOTAL = {js(payload['CITY_TOTAL'])};\n")
    js_lines.append(f"export const cityAgeBrackets = {js(payload['cityAgeBrackets'])};\n")
    js_lines.append(f"export const cityIndustrySections = {js(payload['cityIndustrySections'])};\n")
    js_lines.append(f"export const cityIndustryTopMid = {js(payload['cityIndustryTopMid'])};\n")
    js_lines.append(f"export const foreignerAge = {js(payload['foreignerAge'])};\n")
    js_lines.append(f"export const dongs = {js(payload['dongs'])};\n")

    js_lines.append(
        """
// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
export function getDong(name) {
  return dongs.find((d) => d.dong === name);
}

export function rankByMetric(metricFn) {
  return [...dongs]
    .map((d) => ({ dong: d.dong, gu: d.gu, value: metricFn(d) }))
    .sort((a, b) => b.value - a.value);
}

// Compute a 0–100 heat intensity for a given metric across all dongs
export function heatIntensity(metricKey) {
  const values = dongs.map((d) => readMetric(d, metricKey));
  const min = Math.min(...values);
  const max = Math.max(...values);
  return dongs.reduce((acc, d) => {
    const v = readMetric(d, metricKey);
    const t = max === min ? 0.5 : (v - min) / (max - min);
    acc[d.dong] = t; // 0–1
    return acc;
  }, {});
}

export function readMetric(d, key) {
  switch (key) {
    case 'population':
      return d.population.total;
    case 'femaleTwenties':
      return d.derived.female_twenties_pct;
    case 'twenties':
      return d.derived.twenties_pct;
    case 'foreigner':
      return d.derived.foreigner_pct;
    case 'senior':
      return d.derived.senior_pct;
    case 'households':
      return d.population.households;
    default:
      return 0;
  }
}
"""
    )

    OUT_JS.write_text("\n".join(js_lines), encoding="utf-8")
    print(f"Wrote {OUT_JS}  ({OUT_JS.stat().st_size:,} bytes)")
    print(f"Dongs emitted: {len(dongs_out)}")


if __name__ == "__main__":
    main()
