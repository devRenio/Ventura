import { useMemo, useState } from 'react'
import {
  Sparkles,
  Coffee,
  Target,
  MapPin,
  Wand2,
  Megaphone,
  Check,
  Bot,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react'
import { getDong, CITY_TOTAL, dongs } from '../data/anyangData'
import {
  commuting,
  housingType,
  retirementReady,
  getGuOf,
} from '../data/socialSurvey'

const INDUSTRY_OPTIONS = [
  '카페',
  '베이커리',
  '디저트 전문점',
  '브런치',
  '일반 음식점',
  '편의·소매',
  '뷰티·헬스',
]

const AGE_OPTIONS = [
  '10대',
  '20대',
  '30대',
  '40대',
  '50대 이상',
]
const GENDER_OPTIONS = ['여성', '남성']

const BUDGET_OPTIONS = ['₩ 8천만', '₩ 1.2억', '₩ 1.5억', '₩ 2억', '₩ 3억+']
const SIZE_OPTIONS = ['10평', '15평', '20평', '30평', '40평+']

export default function AIAgentForm({
  selectedDong = '안양1동',
  onSelectDong,
  targetAge = '20대',
  onTargetAgeChange,
  targetGender = '여성',
  onTargetGenderChange,
}) {
  const d = getDong(selectedDong)
  const gu = getGuOf(selectedDong)
  const commute = commuting[gu]
  const housing = housingType.find((h) => h['권역'] === gu)
  const retire = retirementReady.find((r) => r['권역'] === gu)

  const [form, setForm] = useState({
    industry: '카페',
    budget: '₩ 1.2억',
    size: '15평',
  })

  // 발표용 카피를 동의 실측 수치로 동적으로 구성
  const copy = useMemo(
    () => buildCopy(d, gu, commute, { ...form, targetGender, targetAge }),
    [d, gu, commute, form, targetGender, targetAge],
  )
  const ageCounts = getAgeCounts(d, targetAge)
  const selectedGenderCount = targetGender === '남성' ? ageCounts.male : ageCounts.female
  const selectedGenderPct =
    Math.round(((selectedGenderCount / d.population.total) * 100) * 10) / 10

  if (!d) return null

  return (
    <aside className="flex h-full w-[420px] shrink-0 flex-col border-l border-white/10 bg-slate-900/95 backdrop-blur-xl">
      {/* 사이드바 헤더 */}
      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
            <Bot size={18} className="text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-900 bg-emerald-400" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">Ventura AI 에이전트</h2>
            <p className="text-[11px] text-slate-400">창업 컨설팅 · {selectedDong} 기반</p>
          </div>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
          ● Online
        </span>
      </div>

      {/* 본문 */}
      <div className="scrollbar-thin flex-1 overflow-y-auto px-5 py-5">
        {/* 안내 */}
        <div className="mb-5 rounded-xl border border-indigo-400/20 bg-indigo-500/5 p-3 text-xs text-indigo-100">
          <div className="flex items-center gap-1.5 font-semibold text-indigo-300">
            <Sparkles size={12} /> 분석 완료
          </div>
          <p className="mt-1 leading-relaxed text-indigo-100/80">
            {selectedDong} 주민등록 인구통계와 입력하신 창업 정보를 매칭하여
            맞춤 인사이트를 생성했습니다.
          </p>
        </div>

        {/* 입력 폼 */}
        <h3 className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          <span className="inline-block h-px w-3 bg-slate-500" />
          창업 정보 입력
        </h3>

        <div className="space-y-3">
          <FormField icon={<Coffee size={14} />} label="업종">
            <select
              value={form.industry}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, industry: e.target.value }))
              }
              className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-white outline-none focus:border-indigo-400"
            >
              {INDUSTRY_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-900">
                  {opt}
                </option>
              ))}
            </select>
          </FormField>

          <FormField icon={<Target size={14} />} label="타겟 고객">
            <div className="grid grid-cols-2 gap-2">
              <select
                value={targetAge}
                onChange={(e) => onTargetAgeChange?.(e.target.value)}
                className="rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-white outline-none focus:border-indigo-400"
              >
                {AGE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-900">
                    {opt}
                  </option>
                ))}
              </select>
              <select
                value={targetGender}
                onChange={(e) => onTargetGenderChange?.(e.target.value)}
                className="rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-white outline-none focus:border-indigo-400"
              >
                {GENDER_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </FormField>

          <FormField icon={<MapPin size={14} />} label="희망 지역">
            <select
              value={selectedDong}
              onChange={(e) => onSelectDong?.(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-white outline-none focus:border-indigo-400"
            >
              {dongs.map((dong) => (
                <option key={dong.dong} value={dong.dong} className="bg-slate-900">
                  {dong.gu} · {dong.dong}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="예산 / 평수">
            <div className="grid grid-cols-2 gap-2">
              <select
                value={form.budget}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, budget: e.target.value }))
                }
                className="rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-white outline-none"
              >
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-900">
                    {opt}
                  </option>
                ))}
              </select>
              <select
                value={form.size}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, size: e.target.value }))
                }
                className="rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm text-white outline-none"
              >
                {SIZE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </FormField>
        </div>

        {/* 실데이터 요약 (참고) */}
        <div className="mt-5 grid grid-cols-3 gap-1.5 text-center text-[10px]">
          <MiniStat label="총인구" value={fmt(d.population.total)} unit="명" />
          <MiniStat label={`${targetAge} ${targetGender}`} value={`${selectedGenderPct}`} unit="%" highlight />
          <MiniStat label="세대" value={fmt(d.population.households)} unit="" />
          <MiniStat label="외국인" value={fmt(d.population.foreigners)} unit="명" />
          <MiniStat label="60+" value={`${d.derived.senior_pct}`} unit="%" />
          <MiniStat label="가구원" value={`${d.derived.avg_household_size}`} unit="명" />
        </div>

        {/* AI 응답 1: 브랜드 네이밍 */}
        <AIResponseBlock
          icon={<Wand2 size={14} className="text-purple-300" />}
          label="브랜드 네이밍 제안"
        >
          <p className="text-slate-200">
            {selectedDong}의{' '}
            <b className="text-pink-300">
              {targetAge} {targetGender} {selectedGenderPct}%
              ({selectedGenderCount.toLocaleString('ko-KR')}명)
            </b>{' '}
            밀집도와 {gu} 권역의 거주자 통근률{' '}
            <b className="text-white">{commute.통근통학률}%</b> (평균 {commute.평균소요분}분)을
            고려할 때, 제안하는 브랜드 네이밍은{' '}
            <b className="text-white">「{copy.brandName}」</b> 입니다. 이는 본 동 인구
            구조와 통근 패턴을 반영한 ‘{copy.tagline}’ 라는 브랜드 약속을 담고 있으며,
            검색 키워드 「{selectedDong} {form.industry}」 와의 SEO 적합성도 우수합니다.
          </p>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {copy.brandCandidates.map((n, i) => (
              <span
                key={n}
                className={[
                  'rounded-md border px-2 py-1 text-center text-[11px]',
                  i === 0
                    ? 'border-pink-400/50 bg-pink-500/10 font-semibold text-pink-200'
                    : 'border-white/10 bg-white/5 text-slate-300',
                ].join(' ')}
              >
                {n}
              </span>
            ))}
          </div>
        </AIResponseBlock>

        {/* AI 응답 2: 마케팅 전략 */}
        <AIResponseBlock
          icon={<Megaphone size={14} className="text-orange-300" />}
          label="마케팅 전략 제안"
        >
          <p className="text-slate-200">
            {gu}는 평균 통근 거리가 길고({commute.평균소요분}분),{' '}
            서울 통근 비중이 <b className="text-orange-300">{commute.서울}%</b>로
            평일 출퇴근형 상권 특성이 강합니다. {targetAge} {targetGender}를 타겟으로 할 때{' '}
            <b className="text-white">{copy.strategySlogan}</b> 전략이 ROI가 가장 높게 예측됩니다.
          </p>
          <ul className="mt-3 space-y-1.5 text-[12px] text-slate-300">
            {copy.strategies.map((s) => (
              <StrategyItem key={s}>{s}</StrategyItem>
            ))}
          </ul>
          {housing && (
            <div className="mt-3 rounded-md border border-white/10 bg-slate-900/60 p-2 text-[11px] text-slate-400">
              · {gu} 거주민 주택형태: 아파트 <b className="text-slate-200">{housing.아파트}%</b> /
              단독 {housing.단독주택}% / 연립·다세대 {housing.연립다세대}% (사회조사 2025)
            </div>
          )}
        </AIResponseBlock>

        {/* AI 응답 3: 위험 요인 */}
        <div className="mt-4 rounded-xl border border-red-400/20 bg-red-500/5 p-3 text-xs">
          <div className="mb-1.5 flex items-center gap-1.5 font-semibold text-red-300">
            <AlertTriangle size={12} /> 주의해야 할 위험 요인
          </div>
          <p className="leading-relaxed text-slate-300">
            안양시 전체 사업체 <b className="text-red-300">{fmt(CITY_TOTAL.establishments)}개</b>{' '}
            중 음식점·소매업이 다수이며, 그 중{' '}
            <b>{selectedDong}이 속한 {gu}</b>는{' '}
            {gu === '만안구' ? '대학가·구도심 혼합 상권' : '신도시 아파트 밀집 상권'}
            으로 분류됩니다. {copy.risk}
          </p>
          {retire && (
            <p className="mt-2 text-[11px] text-slate-400">
              · 참고: {gu} 거주자 노후준비 완료 비율 {retire.준비됨}% (사회조사 2025)
            </p>
          )}
        </div>
      </div>

      {/* 입력창 (UI 전용) */}
      <div className="border-t border-white/10 bg-slate-950/40 p-4">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-800/60 px-3 py-2">
          <Sparkles size={14} className="text-indigo-300" />
          <input
            type="text"
            readOnly
            value={`${selectedDong}에 대해 더 궁금한 점을 물어보세요…`}
            className="flex-1 bg-transparent text-xs text-slate-400 outline-none"
          />
          <button className="rounded-md bg-indigo-500 px-2 py-1 text-white transition hover:bg-indigo-400">
            <ChevronRight size={14} />
          </button>
        </div>
        <p className="mt-2 text-center text-[10px] text-slate-500">
          Powered by Ventura GPT · 데이터: 안양시 통계 (2024~2025)
        </p>
      </div>
    </aside>
  )
}

// ----------------------------- helpers -----------------------------
function fmt(n) {
  return n?.toLocaleString('ko-KR') ?? '–'
}

function FormField({ label, icon, children }) {
  return (
    <label className="block">
      <span className="mb-1 flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
        {icon}
        {label}
      </span>
      {children}
    </label>
  )
}

function MiniStat({ label, value, unit, highlight }) {
  return (
    <div
      className={[
        'rounded-md border px-1.5 py-1.5',
        highlight
          ? 'border-pink-400/40 bg-pink-500/10 text-pink-200'
          : 'border-white/10 bg-slate-800/60 text-slate-300',
      ].join(' ')}
    >
      <div className="text-[9px] uppercase tracking-widest opacity-70">{label}</div>
      <div className="mt-0.5 text-[13px] font-bold">
        {value}
        <span className="ml-0.5 text-[9px] opacity-70">{unit}</span>
      </div>
    </div>
  )
}

function AIResponseBlock({ icon, label, children }) {
  return (
    <div className="mt-5">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          {icon}
          {label}
        </h3>
        <span className="text-[10px] text-emerald-400">✓ 분석 완료</span>
      </div>
      <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-slate-800/80 to-slate-800/40 p-4 text-[13px] leading-relaxed shadow-inner">
        <div className="absolute -left-1.5 top-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-900 bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
          <Bot size={12} className="text-white" />
        </div>
        <div className="pl-6">{children}</div>
      </div>
    </div>
  )
}

function StrategyItem({ children }) {
  return (
    <li className="flex items-start gap-2">
      <Check size={13} className="mt-0.5 shrink-0 text-emerald-400" />
      <span>{children}</span>
    </li>
  )
}

// ----------------------------- copywriting -----------------------------
function buildCopy(d, gu, commute, form) {
  const isMan = gu === '만안구'
  const targetGender = form.targetGender === '남성' ? '남성' : '여성'
  const targetAge = form.targetAge || '20대'
  const ageCounts = getAgeCounts(d, targetAge)
  const genderCount = targetGender === '남성' ? ageCounts.male : ageCounts.female
  const genderPct = (genderCount / d.population.total) * 100
  const high20s = genderPct >= 5
  const seniorHeavy = d.derived.senior_pct >= 22
  const industry = (form.industry || '카페').trim()
  const budget = (form.budget || '').trim()
  const size = (form.size || '').trim()

  const brandName = high20s
    ? `모먼트 ${d.dong.replace(/\d+동$/, '')} ${industry}`
    : seniorHeavy
    ? `느린 오후 ${d.dong.replace(/\d+동$/, '')} ${industry}`
    : `브루잉 ${d.dong.replace(/\d+동$/, '')} ${industry}`

  const tagline = high20s
    ? `${targetAge} ${targetGender} 타겟의 짧은 휴식 한 잔`
    : seniorHeavy
    ? '동네 사랑방 같은 조용한 한 잔'
    : '바쁜 출근길 한 잔의 여유'

  const brandCandidates = [
    brandName,
    `${d.dong} 라운지`,
    '하루 한 잔',
    '느린 오후',
    `리프 ${d.dong.replace(/\d+동$/, '')}`,
    '브루잉 데이',
  ]

  const strategySlogan = high20s
    ? "'퇴근길 디저트 세트(₩6,900)' 시간대 한정 번들"
    : "'아침 출근 커피 정기권(월 ₩39,000)' 구독형 모델"

  const strategies = high20s
    ? [
        `인스타그램 릴스 협업: ${gu}권 마이크로 인플루언서 8명 (팔로워 1만–3만)`,
        '네이버 플레이스 ‘저장’ 유도 쿠폰 + 첫 방문 아이스 음료 무료',
        `평일 18–20시 ‘${targetGender} 2인 세트’ 한정 메뉴로 동행 방문 유도`,
        '주말은 안양예술공원 연계 ‘브런치 + 산책’ 큐레이션 노출',
      ]
    : [
        `${commute.평균소요분}분 출근족 대상 ‘To-Go 아메리카노 ₩2,500’ 키오스크`,
        '카카오톡 채널 + 멤버십 도장 10회 → 1잔 무료',
        '점심시간(11:30–13:30) 인근 직장인 대상 샌드위치 세트 운영',
        '주말 ‘동네 손님 환영’ 단골 한정 케이크 컷 이벤트',
      ]

  const risk = isMan
    ? `특히 구도심 특성상 권리금·임대료 변동성이 크고, 음식점·소매업 폐업률이 신도시 대비 다소 높습니다. 현재 설정된 예산(${budget || '미입력'})/규모(${size || '미입력'})에서는 고정비 관리를 우선 고려하세요.`
    : `아파트 밀집 지역이라 유동인구 회전이 빠르지만, 주변 프랜차이즈와 직접 경쟁이 발생합니다. 현재 설정된 예산(${budget || '미입력'})/규모(${size || '미입력'})에서는 회전율 중심 동선 설계를 권장합니다.`

  return { brandName, tagline, brandCandidates, strategySlogan, strategies, risk }
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
