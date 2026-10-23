// Reading progress kept in the reader's own browser: nickname, chapters marked as read
// and level tests passed.
// Pure functions only — progress-store.ts does the localStorage reads and writes.
import { cleanName } from './quiz.ts'
import { LEVEL_TESTS, type KnowledgeLevel } from './level-test.ts'

export type Progress = { nickname: string; read: readonly number[]; passed: readonly KnowledgeLevel[] }

// kept as hello-llm after the rename to hello-ai: changing it would wipe saved progress
export const STORAGE_KEY = 'hello-llm:progress'
export const EMPTY_PROGRESS: Progress = { nickname: '', read: [], passed: [] }

// stored data can be edited by hand or left over from an older layout, so trust nothing
export function parseProgress(raw: string | null, chapters: readonly number[]): Progress {
  if (raw === null) return EMPTY_PROGRESS
  let data: unknown
  try {
    data = JSON.parse(raw)
  } catch {
    return EMPTY_PROGRESS
  }
  if (typeof data !== 'object' || data === null || Array.isArray(data)) return EMPTY_PROGRESS
  const { nickname, read, passed } = data as Record<string, unknown>
  // keep whichever part is still usable; records from before level tests have no passed list
  const list = Array.isArray(read) ? read : []
  const valid = new Set(list.filter((n): n is number => typeof n === 'number' && chapters.includes(n)))
  const levels = LEVEL_TESTS.map((l) => l.level).filter((l) => Array.isArray(passed) && passed.includes(l))
  return {
    nickname: typeof nickname === 'string' ? cleanName(nickname) : '',
    read: [...valid].sort((a, b) => a - b),
    passed: levels,
  }
}

export function serializeProgress(progress: Progress): string {
  return JSON.stringify(progress)
}

export function toggleRead(progress: Progress, chapter: number): Progress {
  const read = progress.read.includes(chapter)
    ? progress.read.filter((n) => n !== chapter)
    : [...progress.read, chapter].sort((a, b) => a - b)
  return { ...progress, read }
}

export function markPassed(progress: Progress, level: KnowledgeLevel): Progress {
  return progress.passed.includes(level) ? progress : { ...progress, passed: [...progress.passed, level] }
}

export function setNickname(progress: Progress, name: string): Progress {
  return { ...progress, nickname: cleanName(name) }
}

export function summarize(progress: Progress, chapters: readonly number[]) {
  const done = chapters.filter((n) => progress.read.includes(n)).length
  return { done, total: chapters.length, next: chapters.find((n) => !progress.read.includes(n)) ?? null }
}

// share of the page scrolled past, or null when the page fits on one screen
export function scrollRatio(scrollY: number, pageHeight: number, viewportHeight: number): number | null {
  const range = pageHeight - viewportHeight
  if (range <= 0) return null
  return Math.min(1, Math.max(0, scrollY / range))
}
