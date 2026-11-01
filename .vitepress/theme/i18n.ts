// UI strings for the reader-facing components, by site language.
// Korean is the source language; other locales live under /<lang>/ (see .vitepress/config.mts).
import type { StageId } from './stages.ts'

export type Lang = 'ko' | 'en'

export function langOf(siteLang: string): Lang {
  return siteLang.toLowerCase().startsWith('en') ? 'en' : 'ko'
}

// path prefix of a locale: '' for Korean (site root), '/en' for English
export function localePrefix(lang: Lang): string {
  return lang === 'ko' ? '' : `/${lang}`
}

type QuizText = { label: string; right: string; mine: string; correct: string; wrong: (answer: string) => string; retry: string; missing: string }
type DoneText = {
  ask: string
  marked: (stage: string, total: number, done: number) => string
  mark: string
  unread: string
  undo: string
  note: string
  toc: string
  tocAfter: string
  blocked: string
}

export const QUIZ_TEXT: Record<Lang, QuizText> = {
  ko: {
    label: '확인 퀴즈',
    right: '✓ 정답',
    mine: '✗ 내 선택',
    correct: '정답입니다!',
    wrong: (answer) => `아쉬워요. 정답은 "${answer}"입니다.`,
    retry: '다시 풀기',
    missing: '퀴즈를 찾을 수 없습니다:',
  },
  en: {
    label: 'Quick check',
    right: '✓ Correct',
    mine: '✗ Your pick',
    correct: 'Correct!',
    wrong: (answer) => `Not quite. The answer is "${answer}".`,
    retry: 'Try again',
    missing: 'Quiz not found:',
  },
}

export const DONE_TEXT: Record<Lang, DoneText> = {
  ko: {
    ask: '이 장을 다 읽었나요?',
    marked: (stage, total, done) => `✓ 다 읽음으로 표시했습니다. ${stage} ${total}장 중 ${done}장을 읽었어요.`,
    mark: '다 읽음으로 표시',
    unread: '아직 안 읽은 장:',
    undo: '표시 취소',
    note: '기록은 이 브라우저에만 저장됩니다. 진행 현황은',
    toc: '전체 목차',
    tocAfter: '에서 볼 수 있어요.',
    blocked: ' 지금은 브라우저가 저장을 막고 있어 페이지를 닫으면 사라집니다.',
  },
  en: {
    ask: 'Finished this chapter?',
    marked: (stage, total, done) => `✓ Marked as read. You've read ${done} of ${total} chapters in ${stage}.`,
    mark: 'Mark as read',
    unread: 'Not read yet:',
    undo: 'Undo',
    note: 'Progress is saved only in this browser. See your progress on the',
    toc: 'full table of contents',
    tocAfter: '.',
    blocked: ' Your browser is blocking storage right now, so this disappears when you close the page.',
  },
}

export const STAGE_TITLE_EN: Record<StageId, string> = {
  common: 'Stage 1 · Common Guide',
  chatgpt: 'Stage 2 · ChatGPT',
  claude: 'Stage 2 · Claude',
  gemini: 'Stage 2 · Gemini',
  'claude-code': 'Stage 3 · Claude Code',
  codex: 'Stage 3 · Codex',
  antigravity: 'Stage 3 · Antigravity',
  'ai-sdlc': 'Stage 4 · AI-SDLC',
}

// stages whose pages exist under /<lang>/; the rest link to the Korean pages
export const TRANSLATED_STAGES: Record<Exclude<Lang, 'ko'>, readonly StageId[]> = {
  en: ['common', 'chatgpt', 'claude', 'gemini', 'claude-code', 'codex', 'antigravity', 'ai-sdlc'],
}
