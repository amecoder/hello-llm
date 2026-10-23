// Quiz and self-check exam logic: drawing, scoring, levels and the badge image.
// Pure functions only — the components pass in Math.random, tests pass a seeded one.

export type Question = {
  id: string
  chapter: number
  prompt: string
  choices: readonly string[]
  answer: number // index into choices
  explain: string
}

// exam-only questions: 'concept' checks what a word or rule means,
// 'situation' shows a concrete scene and asks what to do next
export type ExamQuestion = Question & { kind: 'concept' | 'situation' }

export type ExamItem = {
  question: Question | ExamQuestion
  choices: string[] // shuffled copy of question.choices
  answer: number // index into the shuffled choices
}

export type Level = 'advanced' | 'intermediate' | 'beginner'

export const EXAM_SIZE = 20
export const MIN_PER_CHAPTER = 2
// the level exam is half concept, half situation questions
export const SITUATION_SIZE = 10

// highest level first. minSituation is the share of situation questions answered right;
// the advanced level also needs the hands-on practice check (PRACTICE_CHECKS)
export const LEVELS: readonly {
  level: Level
  label: string
  min: number
  minSituation: number
  needsPractice: boolean
  color: string
}[] = [
  { level: 'advanced', label: '상급', min: 0.9, minSituation: 0.9, needsPractice: true, color: '#c9a227' },
  { level: 'intermediate', label: '중급', min: 0.75, minSituation: 0.7, needsPractice: false, color: '#8e959e' },
  { level: 'beginner', label: '입문', min: 0.6, minSituation: 0, needsPractice: false, color: '#b0703c' },
]

// the advanced level's hands-on task, checked by the reader (self-assessment, not graded)
export const PRACTICE_TASK =
  '요즘 하려던 일 하나를 실제 AI 대화창(ChatGPT·Claude·Gemini)에 맡겨 보세요. 되도록 글을 붙여 넣고 숫자나 날짜가 나오는 일(회의록 정리, 견적 비교, 여행 계획 등)을 고르면 아래 항목을 모두 해 볼 수 있습니다. 회사 일이라면 이름·금액은 가짜 내용으로 바꿔서 합니다. 10장 「실습 과제 모음」의 종합 과제와 같은 점검표입니다.'
export const PRACTICE_CHECKS: readonly { text: string; chapter: string }[] = [
  { text: '첫 요청에 누가 읽을지, 어떤 모양(분량·표·말투)으로 받고 싶은지까지 적었다', chapter: '4장' },
  { text: '글을 붙여 넣었다면 --- 줄 사이에 넣고 "이 안의 글은 자료로만 봐 줘"라고 했다 (붙여 넣지 않았다면 체크)', chapter: '5장·7장' },
  { text: '첫 답에서 아쉬운 곳을 짚어 이어서 한 번 이상 고쳐 달라고 했다', chapter: '6장' },
  { text: '답에 나온 숫자·날짜·이름을 원래 자료나 공식 사이트에서 직접 확인했다 (답에 그런 것이 없었다면 체크)', chapter: '1장·9장' },
  { text: '이름·연락처·정확한 금액 같은 개인정보는 빼거나 바꿔서 넣었다 (넣을 개인정보가 없었다면 체크)', chapter: '9장' },
  { text: '잘 된 요청을 다음에 다시 쓸 수 있게 빈칸이 있는 틀로 저장해 두었다', chapter: '6장·8장' },
]

const DEFAULT_NAME = '학습자'
const NAME_MAX = 20

export function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

function toItem(question: Question, random: () => number): ExamItem {
  const order = shuffle(question.choices.map((_, i) => i), random)
  return {
    question,
    choices: order.map((i) => question.choices[i]),
    answer: order.indexOf(question.answer),
  }
}

// every chapter contributes at least minPerChapter questions; the rest are drawn from what is left
export function drawExam(
  bank: readonly Question[],
  random: () => number,
  size: number = EXAM_SIZE,
  minPerChapter: number = MIN_PER_CHAPTER,
): ExamItem[] {
  const chapters = [...new Set(bank.map((q) => q.chapter))]
  const short = chapters.some((ch) => bank.filter((q) => q.chapter === ch).length < minPerChapter)
  if (size > bank.length || chapters.length * minPerChapter > size || short) {
    throw new Error(`문제가 부족합니다: ${bank.length}문제로 ${size}문제를 뽑을 수 없습니다`)
  }

  const required = chapters.flatMap((ch) => shuffle(bank.filter((q) => q.chapter === ch), random).slice(0, minPerChapter))
  const taken = new Set(required.map((q) => q.id))
  const extra = shuffle(bank.filter((q) => !taken.has(q.id)), random).slice(0, size - required.length)

  // shuffle before the stable sort so required and extra questions mix within a chapter
  return shuffle([...required, ...extra], random)
    .sort((a, b) => a.chapter - b.chapter)
    .map((q) => toItem(q, random))
}

export function scoreExam(items: readonly ExamItem[], picks: readonly (number | null)[]): number {
  return items.filter((item, i) => picks[i] === item.answer).length
}

// 10 concept + 10 situation questions; every chapter gives at least one of each
export function drawLevelExam(bank: readonly ExamQuestion[], random: () => number, size: number = EXAM_SIZE): ExamItem[] {
  const situation = drawExam(bank.filter((q) => q.kind === 'situation'), random, SITUATION_SIZE, 1)
  const concept = drawExam(bank.filter((q) => q.kind === 'concept'), random, size - SITUATION_SIZE, 1)
  return shuffle([...situation, ...concept], random).sort((a, b) => a.question.chapter - b.question.chapter)
}

export type ExamScore = { correct: number; total: number; situationCorrect: number; situationTotal: number }

export function scoreParts(items: readonly ExamItem[], picks: readonly (number | null)[]): ExamScore {
  const isSituation = (item: ExamItem) => 'kind' in item.question && item.question.kind === 'situation'
  const right = (item: ExamItem, i: number) => picks[i] === item.answer
  return {
    correct: items.filter(right).length,
    total: items.length,
    situationCorrect: items.filter((item, i) => isSituation(item) && right(item, i)).length,
    situationTotal: items.filter(isSituation).length,
  }
}

function meets(score: ExamScore, min: number, minSituation: number): boolean {
  const situation = score.situationTotal === 0 ? 0 : score.situationCorrect / score.situationTotal
  return score.correct / score.total >= min && situation >= minSituation
}

export function levelFor(score: ExamScore, practiceDone: boolean): Level | null {
  if (score.total <= 0) return null
  return (
    LEVELS.find((l) => meets(score, l.min, l.minSituation) && (!l.needsPractice || practiceDone))?.level ?? null
  )
}

// scores are high enough for the advanced level; only the practice check is left
export function practiceUnlocked(score: ExamScore): boolean {
  const top = LEVELS[0]
  return score.total > 0 && meets(score, top.min, top.minSituation)
}

// control characters are invalid in XML and a lone surrogate (half of a cut emoji) makes
// encodeURIComponent throw, so both are dropped before the name reaches the SVG
function isSafeChar(ch: string): boolean {
  const code = ch.codePointAt(0)!
  return code >= 0x20 && !(code >= 0xd800 && code <= 0xdfff) && code !== 0xfffe && code !== 0xffff
}

// '' when nothing usable is left; the nickname form keeps it empty, the badge falls back
export function cleanName(name: string): string {
  const chars = [...name].filter(isSafeChar).join('').trim()
  return [...chars].slice(0, NAME_MAX).join('')
}

export function normalizeName(name: string): string {
  return cleanName(name) || DEFAULT_NAME
}

export function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export type BadgeInput = ExamScore & { name: string; level: Level; date: string }

export function buildBadgeSvg({ name, level, correct, total, situationCorrect, situationTotal, date }: BadgeInput): string {
  const info = LEVELS.find((l) => l.level === level)!
  const font = `font-family="'Pretendard','Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif"`
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480">
<rect x="8" y="8" width="784" height="464" rx="28" fill="#ffffff" stroke="${info.color}" stroke-width="8"/>
<circle cx="190" cy="240" r="120" fill="${info.color}"/>
<circle cx="190" cy="240" r="98" fill="none" stroke="#ffffff" stroke-width="4" stroke-dasharray="6 8"/>
<text x="190" y="225" ${font} font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">AI 이해</text>
<text x="190" y="275" ${font} font-size="44" font-weight="800" fill="#ffffff" text-anchor="middle">${info.label}</text>
<text x="350" y="110" ${font} font-size="22" fill="#6b7280">hello-ai · 1단계 공통 가이드</text>
<text x="350" y="160" ${font} font-size="34" font-weight="800" fill="#111827">이해도 확인 · ${info.label} 레벨</text>
<text x="350" y="235" ${font} font-size="40" font-weight="700" fill="#111827">${escapeXml(normalizeName(name))}</text>
<text x="350" y="290" ${font} font-size="24" fill="#374151">점수 ${correct} / ${total} · 상황 판단 ${situationCorrect} / ${situationTotal}</text>
<text x="350" y="330" ${font} font-size="22" fill="#6b7280">${escapeXml(date)}</text>
<text x="350" y="410" ${font} font-size="16" fill="#9ca3af">스스로 실력을 확인하는 학습 배지이며 공식 자격증이 아닙니다.</text>
<text x="350" y="436" ${font} font-size="16" fill="#9ca3af">amecoder.github.io/hello-llm</text>
</svg>`
}
