"""Quick inspection of anyangBoundaries.json: how many rings per dong, centroid."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = ROOT / "src" / "data" / "anyangBoundaries.json"
data = json.loads(src.read_text(encoding="utf-8"))

multi = []
for d in data:
    rings = d["rings"]
    if len(rings) > 1:
        multi.append((d["dong"], len(rings), [len(r) for r in rings]))
    # quick centroid from first ring
    first = rings[0]
    lat = sum(p[0] for p in first) / len(first)
    lng = sum(p[1] for p in first) / len(first)
    print(f"{d['dong']:<8} rings={len(rings):>2}  vertices={d['vertex_count']:>3}  centroid=({lat:.5f},{lng:.5f})")

print("\n--- dongs with multi rings ---")
for m in multi:
    print(m)
