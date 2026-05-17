import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import { ANYANG_CENTER, dongs } from "../data/anyangData";
import cityBoundary from "../data/anyangCityBoundary.json";

const MIN_ZOOM = 11;
const MAX_ZOOM = 16;
const DEFAULT_ZOOM = 12.5;
const ZOOM_STEP = 0.25;

// 단조 함수로 0–1 값을 빨강 그라데이션으로 변환 (Yellow → Orange → Red)
function heatColor(t) {
  // 0 → #ffd07a (옅은 노랑), 0.5 → #f97316 (오렌지), 1 → #b91c1c (진한 빨강)
  if (t < 0.5) {
    const k = t / 0.5;
    return interp("#ffd07a", "#f97316", k);
  }
  const k = (t - 0.5) / 0.5;
  return interp("#f97316", "#b91c1c", k);
}

function interp(c1, c2, t) {
  const a = hex2rgb(c1);
  const b = hex2rgb(c2);
  const r = Math.round(a[0] + (b[0] - a[0]) * t);
  const g = Math.round(a[1] + (b[1] - a[1]) * t);
  const bl = Math.round(a[2] + (b[2] - a[2]) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}
function hex2rgb(h) {
  const v = h.replace("#", "");
  return [
    parseInt(v.slice(0, 2), 16),
    parseInt(v.slice(2, 4), 16),
    parseInt(v.slice(4, 6), 16),
  ];
}

function formatValue(metricKey, v) {
  if (metricKey === "population" || metricKey === "households") {
    return v.toLocaleString("ko-KR");
  }
  return v.toFixed(1);
}

function getAgeCounts(d, targetAge) {
  const buckets = d.ageBuckets;
  if (targetAge === "50대 이상") {
    const set = new Set(["50대", "60대", "70대", "80+"]);
    return buckets
      .filter((b) => set.has(b.label))
      .reduce(
        (acc, b) => ({
          male: acc.male + b.male,
          female: acc.female + b.female,
          total: acc.total + b.total,
        }),
        { male: 0, female: 0, total: 0 },
      );
  }
  const one = buckets.find((b) => b.label === targetAge);
  return one
    ? { male: one.male, female: one.female, total: one.total }
    : { male: 0, female: 0, total: 0 };
}

function metricValue(d, metricKey, targetAge, targetGender) {
  const age = getAgeCounts(d, targetAge);
  switch (metricKey) {
    case "targetGenderAge":
      return targetGender === "남성"
        ? (age.male / d.population.total) * 100
        : (age.female / d.population.total) * 100;
    case "targetAge":
      return (age.total / d.population.total) * 100;
    case "population":
      return d.population.total;
    case "foreigner":
      return d.derived.foreigner_pct;
    case "senior":
      return d.derived.senior_pct;
    case "households":
      return d.population.households;
    default:
      return 0;
  }
}

export default function MapArea({
  selectedDong,
  onAreaClick,
  metric = "targetGenderAge",
  onMetricChange,
  targetAge = "20대",
  targetGender = "여성",
}) {
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [guFilter, setGuFilter] = useState("전체");
  const [dongQuery, setDongQuery] = useState("");
  const METRICS = [
    {
      key: "targetGenderAge",
      label: `${targetAge} ${targetGender} 비율`,
      unit: "%",
    },
    { key: "targetAge", label: `${targetAge} 비율`, unit: "%" },
    { key: "population", label: "총 인구", unit: "명" },
    { key: "foreigner", label: "외국인 비율", unit: "%" },
    { key: "senior", label: "60세 이상 비율", unit: "%" },
    { key: "households", label: "세대 수", unit: "세대" },
  ];
  const intensities = useMemo(() => {
    const values = dongs.map((d) =>
      metricValue(d, metric, targetAge, targetGender),
    );
    const min = Math.min(...values);
    const max = Math.max(...values);
    return dongs.reduce((acc, d) => {
      const v = metricValue(d, metric, targetAge, targetGender);
      acc[d.dong] = max === min ? 0.5 : (v - min) / (max - min);
      return acc;
    }, {});
  }, [metric, targetAge, targetGender]);
  const metricInfo = METRICS.find((m) => m.key === metric) ?? METRICS[0];
  const ranked = useMemo(
    () =>
      [...dongs]
        .map((d) => ({
          ...d,
          value: metricValue(d, metric, targetAge, targetGender),
        }))
        .sort((a, b) => b.value - a.value),
    [metric, targetAge, targetGender],
  );
  const top5 = ranked.slice(0, 5);

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={ANYANG_CENTER}
        zoom={DEFAULT_ZOOM}
        minZoom={MIN_ZOOM}
        maxZoom={MAX_ZOOM}
        zoomSnap={ZOOM_STEP}
        zoomDelta={ZOOM_STEP}
        scrollWheelZoom
        wheelPxPerZoomLevel={1200}
        zoomControl
        className="h-full w-full"
      >
        <ZoomSync zoom={zoom} onZoomChange={setZoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · Ventura'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* 31개 동 폴리곤 히트맵 */}
        {dongs.map((d) => {
          const t = intensities[d.dong] ?? 0;
          const fill = heatColor(t);
          const isSelected = d.dong === selectedDong;
          const isFilteredOut = guFilter !== "전체" && d.gu !== guFilter;
          return (
            <Polygon
              key={d.dong}
              positions={d.polygon}
              pathOptions={{
                className: `dong-polygon${isSelected ? " dong-polygon--selected" : ""}`,
                color: isSelected ? "#ffffff" : "#450a0a",
                weight: isSelected ? 2.5 : 0.6,
                opacity: isFilteredOut ? 0.18 : isSelected ? 1 : 0.55,
                fillColor: fill,
                fillOpacity: isFilteredOut ? 0.08 : isSelected ? 0.85 : 0.6,
              }}
              eventHandlers={{
                click: () => onAreaClick?.(d.dong),
                mouseover: (e) => e.target.bringToFront(),
              }}
            >
              <Tooltip
                direction="top"
                offset={[0, -8]}
                opacity={1}
                sticky
                className="!border-0"
              >
                <div className="text-xs">
                  <div className="font-semibold text-red-700">{d.dong}</div>
                  <div className="text-slate-700">
                    {metricInfo.label}{" "}
                    <b>
                      {formatValue(
                        metric,
                        metricValue(d, metric, targetAge, targetGender),
                      )}
                      {metricInfo.unit}
                    </b>
                  </div>
                  <div className="text-[10px] text-slate-500">
                    인구 {d.population.total.toLocaleString("ko-KR")}명 · 세대{" "}
                    {d.population.households.toLocaleString("ko-KR")}
                  </div>
                  <div className="mt-0.5 text-[10px] text-red-500">
                    클릭하여 상권 리포트 보기
                  </div>
                </div>
              </Tooltip>
            </Polygon>
          );
        })}

        {/* ----------- 안양시 외곽 테두리 (모든 동 위에 한 겹) ----------- */}
        {/* 글로우용 두꺼운 라인 (아래쪽) */}
        <Polygon
          positions={cityBoundary.rings}
          pathOptions={{
            className: "city-outline-glow",
            color: "#ef4444",
            weight: 10,
            opacity: 0.25,
            fill: false,
            interactive: false,
          }}
        />
        {/* 메인 외곽 라인 */}
        <Polygon
          positions={cityBoundary.rings}
          pathOptions={{
            className: "city-outline",
            color: "#fecaca",
            weight: 2.5,
            opacity: 0.95,
            fill: false,
            interactive: false,
            dashArray: "0",
            lineCap: "round",
            lineJoin: "round",
          }}
        />
      </MapContainer>

      {/* ----------- 좌상단: 범례 + 데이터 출처 ----------- */}
      <div className="pointer-events-none absolute left-4 top-4 z-[400] flex max-w-[280px] flex-col gap-2">
        <div className="pointer-events-auto rounded-xl border border-white/10 bg-slate-900/85 px-4 py-3 text-xs shadow-2xl backdrop-blur-md">
          <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-widest text-slate-400">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            {metricInfo.label} · 안양시 31개 행정동
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400">낮음</span>
            <div
              className="h-2 flex-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #ffd07a 0%, #f97316 50%, #b91c1c 100%)",
              }}
            />
            <span className="text-[10px] text-slate-400">높음</span>
          </div>
          <div className="mt-2 text-[10px] leading-snug text-slate-400">
            출처: 안양시 주민등록인구통계표(2025.12.31) · 사업체조사(2024)
            <br />
            행정동 경계:{" "}
            <a
              href="https://github.com/vuski/admdongkor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 underline decoration-dotted hover:text-white"
            >
              vuski/admdongkor
            </a>{" "}
            (ver20251231)
          </div>
        </div>
      </div>

      {/* ----------- 우상단: 지표 토글 ----------- */}
      <div className="pointer-events-none absolute right-4 top-4 z-[400] flex flex-col gap-2">
        <div className="pointer-events-auto flex gap-1 rounded-xl border border-white/10 bg-slate-900/85 p-1 text-xs shadow-2xl backdrop-blur-md">
          {["전체", "만안구", "동안구"].map((g) => (
            <button
              key={g}
              onClick={() => setGuFilter(g)}
              className={[
                "rounded-md px-2.5 py-1 transition",
                guFilter === g
                  ? "bg-indigo-500/80 text-white"
                  : "text-slate-300 hover:bg-white/5",
              ].join(" ")}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="pointer-events-auto flex flex-wrap gap-1 rounded-xl border border-white/10 bg-slate-900/85 p-1 text-xs shadow-2xl backdrop-blur-md">
          {METRICS.map((m) => (
            <button
              key={m.key}
              onClick={() => onMetricChange?.(m.key)}
              className={[
                "rounded-lg px-3 py-1.5 transition",
                m.key === metric
                  ? "bg-red-500/90 text-white shadow-md shadow-red-500/30"
                  : "text-slate-300 hover:bg-white/5",
              ].join(" ")}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* ----------- 좌하단: 동 검색 + TOP5 랭킹 ----------- */}
      <div className="pointer-events-none absolute bottom-16 left-4 z-[400] w-72">
        <div className="pointer-events-auto rounded-xl border border-white/10 bg-slate-900/85 p-3 text-xs shadow-2xl backdrop-blur-md">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            동 검색 / {metricInfo.label} TOP 5
          </div>
          <input
            type="text"
            value={dongQuery}
            onChange={(e) => setDongQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              const found = dongs.find((d) =>
                d.dong.toLowerCase().includes(dongQuery.trim().toLowerCase()),
              );
              if (found) onAreaClick?.(found.dong);
            }}
            placeholder="예: 안양1동, 평촌동"
            className="mb-2 w-full rounded-md border border-white/10 bg-slate-800/60 px-2 py-1.5 text-xs text-white outline-none placeholder:text-slate-500 focus:border-indigo-400"
          />
          <div className="space-y-1">
            {top5.map((d, idx) => (
              <button
                key={d.dong}
                onClick={() => onAreaClick?.(d.dong)}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-xs text-slate-200 transition hover:bg-white/5"
              >
                <span>
                  {idx + 1}. {d.dong}
                  <span className="ml-1 text-[10px] text-slate-500">
                    ({d.gu})
                  </span>
                </span>
                <span className="font-semibold text-amber-300">
                  {formatValue(metric, d.value)}
                  {metricInfo.unit}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ----------- 우하단: 줌 슬라이더 ----------- */}
      <div className="pointer-events-none absolute bottom-20 right-4 z-[400]">
        <div className="pointer-events-auto w-56 rounded-xl border border-white/10 bg-slate-900/85 px-4 py-3 text-xs shadow-2xl backdrop-blur-md">
          <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-slate-400">
            <span>지도 확대</span>
          </div>
          <input
            type="range"
            min={MIN_ZOOM}
            max={MAX_ZOOM}
            step={ZOOM_STEP}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="h-2 w-full cursor-pointer accent-red-500"
          />
          <div className="mt-1 flex justify-between text-[10px] text-slate-500">
            <span>광역</span>
            <span>상세</span>
          </div>
        </div>
      </div>

      {/* ----------- 하단: 가이드 ----------- */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 z-[400] -translate-x-1/2">
        <div className="pointer-events-auto rounded-full border border-white/10 bg-slate-900/85 px-5 py-2 text-[11px] text-slate-300 shadow-xl backdrop-blur-md">
          💡 동을 클릭하면 실측 인구·연령·외국인·세대 통계 리포트가 열립니다
          {selectedDong && (
            <span className="ml-3 rounded-full bg-red-500/20 px-2 py-0.5 text-red-200">
              현재: {selectedDong}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ZoomSync({ zoom, onZoomChange }) {
  const map = useMapEvents({
    zoomend: () => {
      onZoomChange(Number(map.getZoom().toFixed(1)));
    },
  });

  useEffect(() => {
    const current = Number(map.getZoom().toFixed(1));
    if (current !== zoom) {
      map.setZoom(zoom, { animate: true });
    }
  }, [map, zoom]);

  return null;
}
