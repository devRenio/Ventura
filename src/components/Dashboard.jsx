import { useMemo } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
import {
  X,
  TrendingUp,
  Users,
  Store,
  Home,
  Sparkles,
  Globe2,
} from 'lucide-react'
import {
  getDong,
  cityIndustryTopMid,
  cityIndustrySections,
  foreignerAge,
  dongs,
  CITY_TOTAL,
} from '../data/anyangData'
import {
  housingSatisfaction,
  neededFacilities,
  commuting,
  getGuOf,
} from '../data/socialSurvey'

const PIE_COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7', '#06b6d4']

export default function Dashboard({
  open,
  dongName,
  onClose,
  onOpenPaywall,
  targetAge = '20대',
  targetGender = '여성',
}) {
  if (!open || !dongName) return null
  const d = getDong(dongName)
  if (!d) return null

  const gu = getGuOf(dongName)
  const genderLabel = targetGender === '남성' ? '남성' : '여성'
  const ageCounts = getAgeCounts(d, targetAge)
  const genderCount = targetGender === '남성' ? ageCounts.male : ageCounts.female
  const genderPercent = Math.round(((genderCount / d.population.total) * 100) * 10) / 10
  const agePercent = Math.round(((ageCounts.total / d.population.total) * 100) * 10) / 10
  const facilityChart = useMemo(
    () => neededFacilities.map((r) => ({ facility: r.facility, value: r[gu] })),
    [gu],
  )
  const commute = commuting[gu]

  const ageChart = d.ageBuckets.map((b) => ({
    age: b.label,
    남: b.male,
    여: b.female,
  }))

  const positionCards = [
    {
      key: 'population',
      label: '총인구',
      value: d.population.total,
      unit: '명',
      rank: rankOf(dongs, (x) => x.population.total, d.dong),
      cityAvg: Math.round(CITY_TOTAL.total / dongs.length),
    },
    {
      key: 'female20',
      label: `${targetAge} ${genderLabel} 비율`,
      value: genderPercent,
      unit: '%',
      rank: rankOf(
        dongs,
        (x) => {
          const c = getAgeCounts(x, targetAge)
          const g = targetGender === '남성' ? c.male : c.female
          return Math.round(((g / x.population.total) * 100) * 10) / 10
        },
        d.dong,
      ),
      cityAvg:
        Math.round(
          (dongs.reduce(
            (sum, x) =>
              sum + (() => {
                const c = getAgeCounts(x, targetAge)
                const g = targetGender === '남성' ? c.male : c.female
                return Math.round(((g / x.population.total) * 100) * 10) / 10
              })(),
            0,
          ) /
            dongs.length) *
            10,
        ) / 10,
    },
    {
      key: 'foreigner',
      label: '외국인 비율',
      value: d.derived.foreigner_pct,
      unit: '%',
      rank: rankOf(dongs, (x) => x.derived.foreigner_pct, d.dong),
      cityAvg: Math.round(((CITY_TOTAL.foreigner / CITY_TOTAL.total) * 100) * 100) / 100,
    },
  ]

  // 안양시 산업 분포 (중분류 Top 8) — 발표용 PIE
  const industryChart = cityIndustryTopMid.slice(0, 7).map((r) => ({
    name: r.name.replace(/^\d+\./, ''),
    value: r.workers,
  }))
  const industrySections = cityIndustrySections
    .filter((r) => r.workers)
    .sort((a, b) => b.workers - a.workers)
    .slice(0, 6)
    .map((r) => ({
      name: r.name.replace(/^[A-Z]\./, '').replace(/\(.+\)$/, ''),
      workers: r.workers,
    }))
  const foreignerAgeChart = foreignerAge.map((r) => ({
    age: r.label,
    인원: r.total,
  }))

  // 5점 척도 만족도 → 가중 평균 (1~5)
  const sat = housingSatisfaction.find((r) => r['권역'] === gu)
  const satisfactionScore = sat
    ? (
        (5 * sat.매우만족 +
          4 * sat.약간만족 +
          3 * sat.보통 +
          2 * sat.약간불만족 +
          1 * sat.매우불만족) /
        100
      ).toFixed(2)
    : '–'

  // 권역 비교 레이더 (만안구 vs 동안구)
  const radarData = [
    {
      metric: '주거만족',
      만안구: weightedSat('만안구'),
      동안구: weightedSat('동안구'),
    },
    { metric: '통근률',   만안구: commuting.만안구.통근통학률, 동안구: commuting.동안구.통근통학률 },
    { metric: '서울통근', 만안구: commuting.만안구.서울,       동안구: commuting.동안구.서울 },
    { metric: '공원수요', 만안구: 40.8, 동안구: 37.3 },
    { metric: '주차수요', 만안구: 41.7, 동안구: 26.5 },
    { metric: '의료수요', 만안구: 39.4, 동안구: 20.6 },
  ]

  return (
    <div className="absolute inset-0 z-[500] flex items-center justify-center p-4 sm:p-8">
      <div
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 flex h-full max-h-[94vh] w-full max-w-6xl animate-fadeIn flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl">
        {/* 헤더 */}
        <div className="flex items-start justify-between border-b border-white/10 bg-gradient-to-r from-red-500/20 via-orange-500/10 to-transparent px-6 py-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-red-300">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-400" />
              상권 리포트 · 실측 데이터
            </div>
            <h2 className="mt-1 text-2xl font-bold text-white">
              {d.dong}{' '}
              <span className="text-base font-medium text-slate-400">
                · {d.gu} / 안양시
              </span>
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              주민등록인구(2025.12.31) {d.population.total.toLocaleString('ko-KR')}명 · 세대 {d.population.households.toLocaleString('ko-KR')} · 외국인 {d.population.foreigners.toLocaleString('ko-KR')}명
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* 본문 */}
        <div className="scrollbar-thin flex-1 overflow-y-auto px-6 py-5">
          {/* KPI 카드 */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <KpiCard
              icon={<Users size={18} />}
              label="총 인구"
              value={d.population.total.toLocaleString('ko-KR') + '명'}
              accent="text-red-400"
              trend={`남 ${pct(d.population.male, d.population.total)}% · 여 ${pct(d.population.female, d.population.total)}%`}
            />
            <KpiCard
              icon={<Sparkles size={18} />}
              label={`${targetAge} ${genderLabel} 비율`}
              value={genderPercent + '%'}
              accent="text-pink-400"
              trend={`${genderCount.toLocaleString('ko-KR')}명`}
            />
            <KpiCard
              icon={<Home size={18} />}
              label="세대 수"
              value={d.population.households.toLocaleString('ko-KR')}
              accent="text-amber-400"
              trend={`평균 가구원 ${d.derived.avg_household_size}명`}
            />
            <KpiCard
              icon={<Globe2 size={18} />}
              label="등록 외국인"
              value={d.population.foreigners.toLocaleString('ko-KR') + '명'}
              accent="text-emerald-400"
              trend={`${d.derived.foreigner_pct}%`}
            />
          </div>

          {/* 차트 그리드 */}
          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <ChartCard
              title="동 포지션 (31개 동 순위)"
              subtitle="선택 동 vs 안양시 평균"
              className="lg:col-span-3"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {positionCards.map((c) => (
                  <div key={c.key} className="rounded-lg border border-white/10 bg-slate-900/50 p-3">
                    <div className="text-[11px] text-slate-400">{c.label}</div>
                    <div className="mt-1 text-xl font-bold text-white">
                      {Number(c.value).toLocaleString('ko-KR')}
                      {c.unit}
                    </div>
                    <div className="mt-1 text-[11px] text-amber-300">
                      31개 동 중 {c.rank}위
                    </div>
                    <div className="mt-1 text-[11px] text-slate-400">
                      안양시 평균 {Number(c.cityAvg).toLocaleString('ko-KR')}
                      {c.unit}
                    </div>
                  </div>
                ))}
              </div>
            </ChartCard>

            {/* 연령별 인구 막대 */}
            <ChartCard
              title={`${d.dong} 연령별 인구 분포`}
              subtitle="단위: 명, 10세 구간 · 외국인 제외"
              className="lg:col-span-2"
            >
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={ageChart} barGap={4}>
                  <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="age" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    cursor={{ fill: 'rgba(239,68,68,0.08)' }}
                    formatter={(v) => v.toLocaleString('ko-KR') + '명'}
                  />
                  <Legend wrapperStyle={{ fontSize: 12, color: '#cbd5e1' }} iconType="circle" />
                  <Bar dataKey="남" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="여" fill="#ef4444" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* 산업 비중 도넛 */}
            <ChartCard
              title="안양시 종사자수 Top 7 업종"
              subtitle="2024 사업체조사 · 중분류 기준"
            >
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={industryChart}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={45}
                    outerRadius={80}
                    paddingAngle={2}
                  >
                    {industryChart.map((_, i) => (
                      <Cell
                        key={i}
                        fill={PIE_COLORS[i % PIE_COLORS.length]}
                        stroke="#0f172a"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v, name) => [v.toLocaleString('ko-KR') + '명', name]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-2 space-y-1 text-[11px] text-slate-300">
                {industryChart.slice(0, 4).map((r, i) => (
                  <div key={r.name} className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: PIE_COLORS[i] }}
                    />
                    <span className="truncate">{r.name}</span>
                    <span className="ml-auto tabular-nums text-slate-400">
                      {r.value.toLocaleString('ko-KR')}
                    </span>
                  </div>
                ))}
              </div>
            </ChartCard>

            {/* 권역 비교 레이더 */}
            <ChartCard
              title={`${gu} vs 다른 권역 비교`}
              subtitle="2025 안양시 사회조사 · % 기준"
            >
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart data={radarData} outerRadius="80%">
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: '#cbd5e1', fontSize: 10 }} />
                  <PolarRadiusAxis tick={{ fill: '#475569', fontSize: 9 }} angle={45} />
                  <Radar
                    name="만안구"
                    dataKey="만안구"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.35}
                  />
                  <Radar
                    name="동안구"
                    dataKey="동안구"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.25}
                  />
                  <Legend wrapperStyle={{ fontSize: 11, color: '#cbd5e1' }} iconType="circle" />
                  <Tooltip contentStyle={tooltipStyle} />
                </RadarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* 필요 공공시설 막대 */}
            <ChartCard
              title={`${gu} 주민이 가장 필요로 하는 공공시설`}
              subtitle="복수응답 · 단위: %"
              className="lg:col-span-2"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={facilityChart} layout="vertical" margin={{ left: 24 }}>
                  <CartesianGrid stroke="#334155" strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis
                    type="category"
                    dataKey="facility"
                    stroke="#cbd5e1"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    width={120}
                  />
                  <Tooltip contentStyle={tooltipStyle} formatter={(v) => v + '%'} />
                  <Bar dataKey="value" fill="#f97316" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="안양시 외국인 연령대 분포"
              subtitle="주민등록 기준 · 단위: 명"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={foreignerAgeChart}>
                  <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="age" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={tooltipStyle} formatter={(v) => `${v.toLocaleString('ko-KR')}명`} />
                  <Bar dataKey="인원" fill="#10b981" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="안양시 대분류 산업 종사자 Top 6"
              subtitle="사업체조사 2024"
              className="lg:col-span-2"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={industrySections} layout="vertical" margin={{ left: 24 }}>
                  <CartesianGrid stroke="#334155" strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    stroke="#cbd5e1"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    width={140}
                  />
                  <Tooltip contentStyle={tooltipStyle} formatter={(v) => `${v.toLocaleString('ko-KR')}명`} />
                  <Bar dataKey="workers" fill="#8b5cf6" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* 인사이트 */}
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            <InsightCard
              tag="인구 구성"
              tone="red"
              title={`${targetAge} 비율 ${agePercent}% (${genderLabel} ${genderPercent}%)`}
              text={`해당 동의 ${targetAge} ${genderLabel} 인구는 ${genderCount.toLocaleString('ko-KR')}명으로, 안양시 전체 평균과 비교 시 ${categoryByAgePct(agePercent)} 권역입니다.`}
            />
            <InsightCard
              tag="외국인"
              tone="emerald"
              title={`외국인 ${d.population.foreigners.toLocaleString('ko-KR')}명 (${d.derived.foreigner_pct}%)`}
              text={`안양시 평균 외국인 비율은 ${((CITY_TOTAL.foreigner / CITY_TOTAL.total) * 100).toFixed(2)}%로, 본 동은 ${d.derived.foreigner_pct >= 2 ? '평균 이상의 다문화 상권' : '평균 수준 이하'}입니다.`}
            />
            <InsightCard
              tag="권역 통근"
              tone="indigo"
              title={`${gu} 평균 통근 ${commute.평균소요분}분`}
              text={`${gu} 거주자 ${commute.통근통학률}% 가 통근·통학 중이며, 그 중 서울 출퇴근 비중은 ${commute.서울}% 입니다. (사회조사 2025)`}
            />
          </div>
        </div>

        {/* 푸터 CTA */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 bg-slate-950/40 px-6 py-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Store size={14} className="text-amber-400" />
            안양시 전체 사업체{' '}
            <b className="text-slate-200">{CITY_TOTAL.establishments.toLocaleString('ko-KR')}개</b>{' '}
            · 종사자 {CITY_TOTAL.workers.toLocaleString('ko-KR')}명 · 주거만족도 {satisfactionScore}/5
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5"
            >
              닫기
            </button>
            <button
              onClick={onOpenPaywall}
              className="rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:brightness-110"
            >
              <TrendingUp size={14} className="-mt-0.5 mr-1 inline" />
              고급 데이터 보기 →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// --------------------------- helpers ---------------------------
const tooltipStyle = {
  background: '#0f172a',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8,
  color: '#e2e8f0',
  fontSize: 12,
}

function weightedSat(gu) {
  const r = housingSatisfaction.find((x) => x['권역'] === gu)
  if (!r) return 0
  // 5점 척도 → 0~100 스케일로 환산해서 레이더에서 비교 가능하도록
  const w = 5 * r.매우만족 + 4 * r.약간만족 + 3 * r.보통 + 2 * r.약간불만족 + 1 * r.매우불만족
  return Math.round(w / 5) // 0~100 근사
}

function pct(part, total) {
  if (!total) return '0.0'
  return ((part / total) * 100).toFixed(1)
}

function getAgeCounts(d, targetAge) {
  const buckets = d.ageBuckets
  if (targetAge === '50대 이상') {
    const set = new Set(['50대', '60대', '70대', '80+'])
    return buckets
      .filter((b) => set.has(b.label))
      .reduce(
        (acc, b) => ({
          male: acc.male + b.male,
          female: acc.female + b.female,
          total: acc.total + b.total,
        }),
        { male: 0, female: 0, total: 0 },
      )
  }
  const one = buckets.find((b) => b.label === targetAge)
  return one
    ? { male: one.male, female: one.female, total: one.total }
    : { male: 0, female: 0, total: 0 }
}

function categoryByAgePct(p) {
  if (p >= 18) return '초고밀'
  if (p >= 14) return '활성'
  if (p >= 10) return '평균 수준'
  return '연령 비중 저조'
}

function rankOf(items, scoreFn, targetDong) {
  const sorted = [...items].sort((a, b) => scoreFn(b) - scoreFn(a))
  const idx = sorted.findIndex((x) => x.dong === targetDong)
  return idx >= 0 ? idx + 1 : '-'
}

function KpiCard({ icon, label, value, trend, accent = 'text-white' }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className={accent}>{icon}</span>
          {label}
        </span>
        <span className="truncate text-right text-emerald-400">{trend}</span>
      </div>
      <div className={`mt-2 text-2xl font-bold ${accent}`}>{value}</div>
    </div>
  )
}

function ChartCard({ title, subtitle, children, className = '' }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-slate-800/40 p-4 ${className}`}>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <span className="shrink-0 text-[11px] text-slate-400">{subtitle}</span>
      </div>
      {children}
    </div>
  )
}

const toneMap = {
  red: 'border-red-400/30 bg-red-500/10 text-red-200',
  emerald: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200',
  indigo: 'border-indigo-400/30 bg-indigo-500/10 text-indigo-200',
}
function InsightCard({ tag, tone = 'red', title, text }) {
  return (
    <div className={`rounded-xl border ${toneMap[tone]} p-3`}>
      <div className="text-[10px] font-semibold uppercase tracking-widest opacity-80">
        {tag}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{title}</div>
      <p className="mt-1 text-[12px] leading-relaxed text-slate-300">{text}</p>
    </div>
  )
}
