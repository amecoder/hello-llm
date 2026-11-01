// Translated text by language, and the helpers the components use to show it.
// A missing entry falls back to Korean, so a half-translated language still works.
import type { Lang } from '../i18n.ts'
import { localePrefix } from '../i18n.ts'
import type { LevelQuestion } from '../level-test.ts'
import type { Question } from '../quiz.ts'
import { CHAPTERS } from '../quiz-bank.ts'
import { en } from './en.ts'
import { ja } from './ja/index.ts'
import type { Translation } from './types.ts'

export const TRANSLATIONS: Partial<Record<Lang, Translation>> = { en, ja }

export function chapterTitleOf(n: number, lang: Lang): string {
  return TRANSLATIONS[lang]?.chapters[n] ?? CHAPTERS[n].title
}

export function localizeQuestion<T extends Question>(q: T, lang: Lang): T {
  const text = TRANSLATIONS[lang]?.questions[q.id]
  return text === undefined ? q : { ...q, ...text }
}

// a study link into this guide points at the translated chapter when there is one
function localizeSource(source: LevelQuestion['source'], lang: Lang): LevelQuestion['source'] {
  if (!source.url.startsWith('/guide/')) return source
  const n = Object.keys(CHAPTERS).map(Number).find((k) => CHAPTERS[k].link === source.url)
  const title = n === undefined ? undefined : TRANSLATIONS[lang]?.chapters[n]
  return title === undefined ? source : { title, url: `${localePrefix(lang)}${source.url}` }
}

export function localizeLevelQuestion(q: LevelQuestion, lang: Lang): LevelQuestion {
  if (lang === 'ko') return q
  const text = TRANSLATIONS[lang]?.level[q.id]
  return { ...q, ...(text ?? {}), source: localizeSource(q.source, lang) }
}
