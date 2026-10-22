// Quiz and self-check exam logic: drawing, scoring, grading and the badge image.
// Pure functions only — the components pass in Math.random, tests pass a seeded one.

export type Question = {
  id: string
  chapter: number
  prompt: string
  choices: readonly string[]
  answer: number // index into choices
  explain: string
}

export type ExamItem = {
  question: Question
  choices: string[] // shuffled copy of question.choices
  answer: number // index into the shuffled choices
}

export type Grade = 'gold' | 'silver' | 'bronze'

export const EXAM_SIZE = 20
export const MIN_PER_CHAPTER = 2

// highest cut-off first
export const GRADES: readonly { grade: Grade; label: string; min: number; color: string }[] = [
  { grade: 'gold', label: '골드', min: 0.9, color: '#c9a227' },
  { grade: 'silver', label: '실버', min: 0.7, color: '#8e959e' },
  { grade: 'bronze', label: '브론즈', min: 0.5, color: '#b0703c' },
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

export function gradeFor(correct: number, total: number): Grade | null {
  if (total <= 0) return null
  const ratio = correct / total
  return GRADES.find((g) => ratio >= g.min)?.grade ?? null
}

// control characters are invalid in XML and a lone surrogate (half of a cut emoji) makes
// encodeURIComponent throw, so both are dropped before the name reaches the SVG
function isSafeChar(ch: string): boolean {
  const code = ch.codePointAt(0)!
  return code >= 0x20 && !(code >= 0xd800 && code <= 0xdfff) && code !== 0xfffe && code !== 0xffff
}

export function normalizeName(name: string): string {
  const chars = [...name].filter(isSafeChar).join('').trim()
  return chars === '' ? DEFAULT_NAME : [...chars].slice(0, NAME_MAX).join('')
}

export function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export type BadgeInput = { name: string; grade: Grade; correct: number; total: number; date: string }

export function buildBadgeSvg({ name, grade, correct, total, date }: BadgeInput): string {
  const info = GRADES.find((g) => g.grade === grade)!
  const font = `font-family="'Pretendard','Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif"`
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480">
<rect x="8" y="8" width="784" height="464" rx="28" fill="#ffffff" stroke="${info.color}" stroke-width="8"/>
<circle cx="190" cy="240" r="120" fill="${info.color}"/>
<circle cx="190" cy="240" r="98" fill="none" stroke="#ffffff" stroke-width="4" stroke-dasharray="6 8"/>
<text x="190" y="225" ${font} font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">LLM 이해</text>
<text x="190" y="275" ${font} font-size="44" font-weight="800" fill="#ffffff" text-anchor="middle">${info.label}</text>
<text x="350" y="110" ${font} font-size="22" fill="#6b7280">hello-llm · 1단계 공통 가이드</text>
<text x="350" y="160" ${font} font-size="34" font-weight="800" fill="#111827">LLM 이해 인증 배지</text>
<text x="350" y="235" ${font} font-size="40" font-weight="700" fill="#111827">${escapeXml(normalizeName(name))}</text>
<text x="350" y="290" ${font} font-size="24" fill="#374151">점수 ${correct} / ${total} · 등급 ${info.label}</text>
<text x="350" y="330" ${font} font-size="22" fill="#6b7280">${escapeXml(date)}</text>
<text x="350" y="410" ${font} font-size="16" fill="#9ca3af">스스로 실력을 확인하는 학습 배지이며 공식 자격증이 아닙니다.</text>
<text x="350" y="436" ${font} font-size="16" fill="#9ca3af">amecoder.github.io/hello-llm</text>
</svg>`
}
