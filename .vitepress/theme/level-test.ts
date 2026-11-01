// AI knowledge level tests (초급 → 중급 → 고급 → 전문가), set up like a written certification exam:
// 5 subjects x 10 questions, pass with 60% overall and at least 40% in every subject.
// Pure functions only — the component passes in Math.random, tests pass a seeded one.
import { escapeXml, nameFontSize, normalizeName, shuffle } from './quiz.ts'

export type KnowledgeLevel = 'basic' | 'intermediate' | 'advanced' | 'expert'

export type LevelQuestion = {
  id: string // '<level>-s<subject>-<slug>', e.g. 'basic-s1-next-word'
  level: KnowledgeLevel
  subject: number // 1-5, index into LEVEL_TESTS[level].subjects (1-based)
  prompt: string
  choices: readonly string[] // exactly 4
  answer: number // index into choices
  explain: string
  // where to study this; a guide page ('/guide/...') or an official doc / paper (https)
  source: { title: string; url: string }
}

export type LevelInfo = {
  level: KnowledgeLevel
  label: string
  audience: string
  subjects: readonly [string, string, string, string, string]
  labelEn: string
  audienceEn: string
  subjectsEn: readonly [string, string, string, string, string]
  color: string
}

// lowest level first; a level opens once the one before it is passed
export const LEVEL_TESTS: readonly LevelInfo[] = [
  {
    level: 'basic',
    label: '초급',
    audience: 'AI 챗봇을 처음 쓰거나 가끔 쓰는 사람',
    subjects: ['AI와 LLM의 기초', '챗봇 기본 사용', '질문 잘하는 법 기초', '답 확인과 AI의 한계', '안전·개인정보·윤리 기초'],
    labelEn: 'Basic',
    audienceEn: 'People who are new to AI chatbots or use them now and then',
    subjectsEn: ['AI and LLM basics', 'Using a chatbot', 'Asking good questions', 'Checking answers and AI limits', 'Safety, privacy and ethics basics'],
    color: '#4c9a6a',
  },
  {
    level: 'intermediate',
    label: '중급',
    audience: '일과 공부에 AI를 자주 쓰는 사람',
    subjects: ['프롬프트 기법', '대화 설계와 맥락 관리', '구조화와 자료 다루기', '업무 활용과 검증', '위험 관리'],
    labelEn: 'Intermediate',
    audienceEn: 'People who often use AI for work and study',
    subjectsEn: ['Prompting techniques', 'Conversation design and context', 'Structure and handling material', 'Using AI at work and checking it', 'Managing risk'],
    color: '#3d7ec9',
  },
  {
    level: 'advanced',
    label: '고급',
    audience: 'AI가 어떻게 움직이는지 원리까지 알고 싶은 사람',
    subjects: ['LLM 작동 원리', '학습과 정렬', '검색 결합·도구·멀티모달', '추론과 평가', '에이전트와 자동화 기초'],
    labelEn: 'Advanced',
    audienceEn: 'People who want to know how AI works under the hood',
    subjectsEn: ['How LLMs work', 'Training and alignment', 'Retrieval, tools and multimodal', 'Reasoning and evaluation', 'Agents and automation basics'],
    color: '#8a5cc7',
  },
  {
    level: 'expert',
    label: '전문가',
    audience: 'AI 서비스를 만들거나 운영하는 사람',
    subjects: ['트랜스포머와 모델 구조', '학습·미세조정·최적화', '검색 결합 시스템 설계', 'LLM 애플리케이션 운영과 평가', '보안·정렬·거버넌스'],
    labelEn: 'Expert',
    audienceEn: 'People who build or run AI services',
    subjectsEn: ['Transformers and model architecture', 'Training, fine-tuning and optimization', 'Designing retrieval systems', 'Running and evaluating LLM apps', 'Security, alignment and governance'],
    color: '#c9a227',
  },
]

export const SUBJECT_COUNT = 5
export const PER_SUBJECT = 10
export const PASS_TOTAL = 0.6
export const PASS_SUBJECT = 0.4

export type LevelItem = { question: LevelQuestion; choices: string[]; answer: number }

// PER_SUBJECT questions from every subject, subjects in order, questions and choices shuffled
export function drawLevelTest(bank: readonly LevelQuestion[], level: KnowledgeLevel, random: () => number): LevelItem[] {
  return Array.from({ length: SUBJECT_COUNT }, (_, i) => i + 1).flatMap((subject) => {
    const pool = bank.filter((q) => q.level === level && q.subject === subject)
    if (pool.length < PER_SUBJECT) {
      throw new Error(`문제가 부족합니다: ${level} ${subject}과목 ${pool.length}문제`)
    }
    return shuffle(pool, random)
      .slice(0, PER_SUBJECT)
      .map((question) => {
        const order = shuffle(question.choices.map((_, k) => k), random)
        return { question, choices: order.map((k) => question.choices[k]), answer: order.indexOf(question.answer) }
      })
  })
}

export type SubjectScore = { subject: number; correct: number; total: number }
export type LevelResult = { correct: number; total: number; subjects: SubjectScore[]; failedSubjects: number[]; passed: boolean }

export function gradeLevelTest(items: readonly LevelItem[], picks: readonly (number | null)[]): LevelResult {
  const subjects = Array.from({ length: SUBJECT_COUNT }, (_, i) => {
    const inSubject = items.map((item, k) => ({ item, k })).filter(({ item }) => item.question.subject === i + 1)
    return {
      subject: i + 1,
      correct: inSubject.filter(({ item, k }) => picks[k] === item.answer).length,
      total: inSubject.length,
    }
  })
  const correct = subjects.reduce((n, s) => n + s.correct, 0)
  const total = subjects.reduce((n, s) => n + s.total, 0)
  // a subject below the minimum fails the whole test, like 과락 in a written certification exam
  // compare whole numbers of questions, not floating-point ratios
  const failedSubjects = subjects.filter((s) => s.total > 0 && s.correct < Math.ceil(s.total * PASS_SUBJECT)).map((s) => s.subject)
  return { correct, total, subjects, failedSubjects, passed: total > 0 && correct >= Math.ceil(total * PASS_TOTAL) && failedSubjects.length === 0 }
}

// the first level is always open; each next one opens when the previous is passed
export function openLevels(passed: readonly KnowledgeLevel[]): KnowledgeLevel[] {
  const open: KnowledgeLevel[] = []
  for (const info of LEVEL_TESTS) {
    open.push(info.level)
    if (!passed.includes(info.level)) break
  }
  return open
}

// a passed record only counts where the level is reachable in order (records can be edited by hand)
export function levelStatus(level: KnowledgeLevel, passed: readonly KnowledgeLevel[]): 'passed' | 'open' | 'locked' {
  if (!openLevels(passed).includes(level)) return 'locked'
  return passed.includes(level) ? 'passed' : 'open'
}

export type LevelBadgeInput = { name: string; level: KnowledgeLevel; correct: number; total: number; date: string; lang?: 'ko' | 'en' }

export function buildLevelBadgeSvg({ name, level, correct, total, date, lang = 'ko' }: LevelBadgeInput): string {
  const info = LEVEL_TESTS.find((l) => l.level === level)!
  const en = lang === 'en'
  const label = en ? info.labelEn : info.label
  const shown = normalizeName(name, lang)
  const labelSize = en ? 26 : [...info.label].length > 2 ? 40 : 48
  const font = `font-family="'Pretendard','Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif"`
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480">
<rect x="8" y="8" width="784" height="464" rx="28" fill="#ffffff" stroke="${info.color}" stroke-width="8"/>
<circle cx="190" cy="240" r="120" fill="${info.color}"/>
<circle cx="190" cy="240" r="98" fill="none" stroke="#ffffff" stroke-width="4" stroke-dasharray="6 8"/>
<text x="190" y="225" ${font} font-size="${en ? 22 : 26}" font-weight="700" fill="#ffffff" text-anchor="middle">${en ? 'AI Knowledge' : 'AI 지식'}</text>
<text x="190" y="280" ${font} font-size="${labelSize}" font-weight="800" fill="#ffffff" text-anchor="middle">${label}</text>
<text x="350" y="110" ${font} font-size="22" fill="#6b7280">${en ? 'hello-ai · AI Knowledge Level Test' : 'hello-ai · AI 지식 레벨 시험'}</text>
<text x="350" y="160" ${font} font-size="34" font-weight="800" fill="#111827">${en ? `${label} Passed` : `${label} 합격`}</text>
<text x="350" y="235" ${font} font-size="${nameFontSize(shown)}" font-weight="700" fill="#111827">${escapeXml(shown)}</text>
<text x="350" y="290" ${font} font-size="24" fill="#374151">${en ? `Score ${correct}/${total} · all subjects passed` : `점수 ${correct} / ${total} · 5과목 과락 없음`}</text>
<text x="350" y="330" ${font} font-size="22" fill="#6b7280">${escapeXml(date)}</text>
<text x="350" y="410" ${font} font-size="16" fill="#9ca3af">${en ? 'A self-check learning badge, not an official certificate.' : '스스로 실력을 확인하는 학습 배지이며 공식 자격증이 아닙니다.'}</text>
<text x="350" y="436" ${font} font-size="16" fill="#9ca3af">amecoder.github.io/hello-llm</text>
</svg>`
}
