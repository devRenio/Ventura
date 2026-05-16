import { useState } from "react";
import L from "leaflet";
import {
  MapPinned,
  Sparkles,
  Bell,
  Lock,
  Crown,
  X,
  Check,
  Database,
  ChevronDown,
} from "lucide-react";
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
  const [paywallOpen, setPaywallOpen] = useState(false);
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

          <nav className="ml-6 hidden items-center gap-1 text-xs md:flex">
            {[
              { label: "지도 분석", active: true },
              { label: "리포트" },
              { label: "저장한 상권" },
              { label: "커뮤니티" },
            ].map((m) => (
              <button
                key={m.label}
                className={[
                  "rounded-md px-3 py-1.5 transition",
                  m.active
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200",
                ].join(" ")}
              >
                {m.label}
              </button>
            ))}
          </nav>
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
          <button
            onClick={() => setPaywallOpen(true)}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-red-500/30 transition hover:brightness-110"
          >
            <Lock size={12} /> 고급 데이터 보기
          </button>
          <button className="relative rounded-lg p-2 text-slate-300 hover:bg-white/5">
            <Bell size={16} />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-center text-xs font-bold leading-8 text-white">
            EH
          </div>
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
            onOpenPaywall={() => setPaywallOpen(true)}
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

      {paywallOpen && <PaywallModal onClose={() => setPaywallOpen(false)} />}
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

// ------------------------------------------------------------------
// PaywallModal: 고급 데이터 결제 유도 (UI 전용)
// ------------------------------------------------------------------
function PaywallModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[900] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg animate-fadeIn overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl">
        <div className="relative h-28 bg-gradient-to-br from-amber-400 via-red-500 to-purple-600">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-black/30 p-1.5 text-white hover:bg-black/50"
          >
            <X size={16} />
          </button>
          <div className="absolute -bottom-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-slate-900 bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
            <Crown size={24} className="text-white" />
          </div>
        </div>

        <div className="px-6 pb-6 pt-10">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-amber-300">
            Ventura PRO
          </div>
          <h2 className="mt-1 text-2xl font-bold text-white">
            고급 상권 데이터 전체 열람
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            카드사 매출, 통신사 유동인구, 임대 시세까지 PRO 플랜에서 모두
            확인하세요.
          </p>

          <ul className="mt-5 space-y-2 text-sm">
            {[
              "실시간 통신사 기반 유동인구 (5분 단위)",
              "카드사 결제 데이터 · 매출 추정치",
              "동별·시간대별 임대료 히트맵",
              "AI 창업 리스크 시뮬레이션 무제한",
              "리포트 PDF 다운로드 (워터마크 제거)",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-slate-200">
                <Check size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-end justify-between rounded-xl border border-amber-400/30 bg-amber-400/5 px-4 py-3">
            <div>
              <div className="text-[11px] text-amber-300">월간 구독</div>
              <div className="text-2xl font-bold text-white">
                ₩ 39,000
                <span className="text-sm font-normal text-slate-400">/월</span>
              </div>
              <div className="text-[11px] text-slate-400">
                첫 7일 무료 · 언제든 해지
              </div>
            </div>
            <Database size={36} className="text-amber-300/40" />
          </div>

          <div className="mt-5 flex gap-2">
            <button
              onClick={onClose}
              className="flex-1 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5"
            >
              나중에
            </button>
            <button className="flex-[1.5] rounded-lg bg-gradient-to-r from-amber-400 via-red-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110">
              7일 무료로 시작하기 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
