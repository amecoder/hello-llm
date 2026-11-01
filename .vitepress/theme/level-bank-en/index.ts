// English text for the AI knowledge level test. Ids, subjects, answer indexes and external
// sources come from the Korean bank (level-bank/); only the reader-facing text is swapped.
import type { Lang } from '../i18n.ts'
import type { LevelQuestion } from '../level-test.ts'
import { CHAPTERS } from '../quiz-bank.ts'
import { CHAPTER_TITLE_EN } from '../quiz-bank-en.ts'
import { BASIC_TEXT_EN } from './basic.ts'
import { INTERMEDIATE_TEXT_EN } from './intermediate.ts'
import { ADVANCED_TEXT_EN } from './advanced.ts'
import { EXPERT_TEXT_EN } from './expert.ts'

export const LEVEL_TEXT_EN: Record<string, { prompt: string; choices: readonly string[]; explain: string }> = {
  ...BASIC_TEXT_EN,
  ...INTERMEDIATE_TEXT_EN,
  ...ADVANCED_TEXT_EN,
  ...EXPERT_TEXT_EN,
}

// a study link into this guide points at the English chapter when there is one
function localizeSource(source: LevelQuestion['source']): LevelQuestion['source'] {
  if (!source.url.startsWith('/guide/')) return source
  const n = Object.keys(CHAPTERS).map(Number).find((k) => CHAPTERS[k].link === source.url)
  const title = n === undefined ? undefined : CHAPTER_TITLE_EN[n]
  return title === undefined ? source : { title, url: `/en${source.url}` }
}

export function localizeLevelQuestion(q: LevelQuestion, lang: Lang): LevelQuestion {
  if (lang !== 'en') return q
  const text = LEVEL_TEXT_EN[q.id]
  return { ...q, ...(text ?? {}), source: localizeSource(q.source) }
}
