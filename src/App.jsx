import { useState } from "react";
import L from "leaflet";
import { MapPinned, Sparkles, ChevronDown } from "lucide-react";
import MapArea from "./components/MapArea";
import Dashboard from "./components/Dashboard";
import AIAgentForm from "./components/AIAgentForm";
import { dongs, CITY_TOTAL } from "./data/anyangData";

// Leaflet 기본 마커 아이콘 경로 패치 (Vite + 번들러 환경 대응)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function App() {
  const [selectedDong, setSelectedDong] = useState("안양1동");
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [metric, setMetric] = useState("targetGenderAge");
  const [targetAge, setTargetAge] = useState("20대");
  const [targetGender, setTargetGender] = useState("여성");
  const [pickerOpen, setPickerOpen] = useState(false);

  const handleAreaClick = (dongName) => {
    setSelectedDong(dongName);
    setDashboardOpen(true);
  };

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-slate-950 text-slate-100">
      {/* ============== 헤더 ============== */}
      <header className="z-[600] flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-slate-900/90 px-5 backdrop-blur">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500 shadow-md shadow-red-500/30">
            <MapPinned size={16} className="text-white" />
          </div>
          <div className="leading-tight">
            <h1 className="text-sm font-bold tracking-tight text-white">
              Ventura
            </h1>
            <p className="text-[10px] text-slate-400">
              AI 상권 분석 · 안양시 {CITY_TOTAL.total.toLocaleString("ko-KR")}명
              · 31개 행정동
            </p>
          </div>

        </div>

        <div className="flex items-center gap-2">
          {/* 동 선택 드롭다운 */}
          <DongPicker
            selected={selectedDong}
            open={pickerOpen}
            onToggle={() => setPickerOpen((v) => !v)}
            onSelect={(name) => {
              setSelectedDong(name);
              setPickerOpen(false);
            }}
          />

          <button
            onClick={() => setDashboardOpen(true)}
            className="hidden items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-200 transition hover:bg-white/5 md:flex"
          >
            <Sparkles size={13} className="text-amber-300" />
            {selectedDong} 리포트 열기
          </button>
        </div>
      </header>

      {/* ============== 본문 ============== */}
      <main className="relative flex flex-1 overflow-hidden">
        <section className="relative flex-1">
          <MapArea
            selectedDong={selectedDong}
            onAreaClick={handleAreaClick}
            metric={metric}
            onMetricChange={setMetric}
            targetAge={targetAge}
            targetGender={targetGender}
          />
          <Dashboard
            open={dashboardOpen}
            dongName={selectedDong}
            onClose={() => setDashboardOpen(false)}
            targetAge={targetAge}
            targetGender={targetGender}
          />
        </section>

        <AIAgentForm
          selectedDong={selectedDong}
          onSelectDong={setSelectedDong}
          targetAge={targetAge}
          onTargetAgeChange={setTargetAge}
          targetGender={targetGender}
          onTargetGenderChange={setTargetGender}
        />
      </main>

    </div>
  );
}

// ------------------------------------------------------------------
// DongPicker: 헤더 우측의 31개 행정동 선택 드롭다운
// ------------------------------------------------------------------
function DongPicker({ selected, open, onToggle, onSelect }) {
  const manan = dongs.filter((d) => d.gu === "만안구");
  const dongang = dongs.filter((d) => d.gu === "동안구");

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-100 transition hover:bg-slate-800"
      >
        <MapPinned size={12} className="text-red-400" />
        {selected}
        <ChevronDown
          size={12}
          className={open ? "rotate-180 transition" : "transition"}
        />
      </button>
      {open && (
        <>
          {/* 바깥 클릭 시 닫기 */}
          <div className="fixed inset-0 z-[700]" onClick={onToggle} />
          <div className="absolute right-0 top-full z-[710] mt-1 w-72 animate-fadeIn overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur">
            <div className="scrollbar-thin max-h-[380px] overflow-y-auto p-2">
              <DongGroup
                title="만안구"
                items={manan}
                selected={selected}
                onSelect={onSelect}
              />
              <DongGroup
                title="동안구"
                items={dongang}
                selected={selected}
                onSelect={onSelect}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function DongGroup({ title, items, selected, onSelect }) {
  return (
    <div className="mb-2 last:mb-0">
      <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
        {title}
      </div>
      <div className="grid grid-cols-2 gap-1">
        {items.map((d) => (
          <button
            key={d.dong}
            onClick={() => onSelect(d.dong)}
            className={[
              "flex items-center justify-between rounded-md px-2 py-1.5 text-left text-xs transition",
              d.dong === selected
                ? "bg-red-500/20 text-red-200"
                : "text-slate-300 hover:bg-white/5",
            ].join(" ")}
          >
            <span>{d.dong}</span>
            <span className="text-[10px] text-slate-500">
              {(d.population.total / 10000).toFixed(1)}만
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
