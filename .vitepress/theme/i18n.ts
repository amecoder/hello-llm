// UI strings for the reader-facing components, by site language.
// Korean is the source language; other locales live under /<lang>/ (see .vitepress/config.mts).
import type { StageId } from './stages.ts'
import { CONTENT, UI_TEXT, type Ui } from './locales/index.ts'

export type Lang = keyof typeof UI_TEXT

// one part of the screen text, for every language: uiOf('quiz').en.label
export function uiOf<K extends keyof Ui>(key: K): Record<Lang, Ui[K]> {
  return Object.fromEntries(Object.entries(UI_TEXT).map(([lang, ui]) => [lang, ui[key]])) as Record<Lang, Ui[K]>
}

// VitePress gives the locale's lang attribute (e.g. 'en-US', 'ja-JP'); the root locale is Korean
export function langOf(siteLang: string): Lang {
  const code = siteLang.toLowerCase()
  return (Object.keys(UI_TEXT) as Lang[]).find((l) => l !== 'ko' && code.startsWith(l)) ?? 'ko'
}

// path prefix of a locale: '' for Korean (site root), '/en' for English
export function localePrefix(lang: Lang): string {
  return lang === 'ko' ? '' : `/${lang}`
}

export const QUIZ_TEXT = uiOf('quiz')

export const DONE_TEXT = uiOf('done')

// stage name in the page language (Korean comes from stages.ts)
export function stageTitle(stage: { id: StageId; title: string }, lang: Lang): string {
  return lang === 'ko' ? stage.title : CONTENT[lang].stages[stage.id]
}

// stages whose pages exist under /<lang>/; the rest link to the Korean pages
export const TRANSLATED_STAGES: Record<Exclude<Lang, 'ko'>, readonly StageId[]> = {
  en: ['common', 'chatgpt', 'claude', 'gemini', 'claude-code', 'codex', 'antigravity', 'ai-sdlc'],
  ja: ['common', 'chatgpt', 'claude', 'gemini', 'claude-code', 'codex', 'antigravity', 'ai-sdlc'],
}
