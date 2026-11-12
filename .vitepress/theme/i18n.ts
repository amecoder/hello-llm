// UI strings for the reader-facing components, by site language.
// Korean is the source language; other locales live under /<lang>/ (see .vitepress/config.mts).
import { STAGES, type StageId } from './stages.ts'
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
  en: ['common', 'chatgpt', 'claude', 'gemini', 'claude-code', 'claude-code-cli', 'codex', 'antigravity', 'ai-sdlc'],
  ja: ['common', 'chatgpt', 'claude', 'gemini', 'claude-code', 'claude-code-cli', 'codex', 'antigravity', 'ai-sdlc'],
  'es': ['common', 'chatgpt', 'claude', 'gemini', 'claude-code', 'codex', 'antigravity', 'ai-sdlc'],
  'zh-hant': ['common', 'chatgpt', 'claude', 'gemini', 'claude-code', 'claude-code-cli', 'codex', 'antigravity', 'ai-sdlc'],
  'zh-hans': ['common', 'chatgpt', 'claude', 'gemini', 'claude-code', 'claude-code-cli', 'codex', 'antigravity', 'ai-sdlc'],
}

// The language menu swaps the locale in the address without knowing whether that page exists.
// Pages of an untranslated stage have no copy there, so the reader gets the language's table of contents.
export function untranslatedFallback(path: string, base: string): string | null {
  const rest = (path.startsWith(base) ? path.slice(base.length) : path).replace(/\.html(?=$|[?#])/, '/')
  const lang = (Object.keys(TRANSLATED_STAGES) as (keyof typeof TRANSLATED_STAGES)[]).find((l) => rest.startsWith(`${l}/`))
  if (!lang) return null
  const stage = STAGES.find((s) => rest.startsWith(`${lang}/${s.dir}/`))
  return stage && !TRANSLATED_STAGES[lang].includes(stage.id) ? `${base}${lang}/guide/` : null
}
