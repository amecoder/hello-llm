// English text for the AI knowledge level test. Ids, subjects, answer indexes and external
// sources come from the Korean bank (level-bank/); only the reader-facing text is swapped.
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
