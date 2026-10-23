// All level test questions in one list; each level lives in its own file to keep files small.
import type { LevelQuestion } from '../level-test'
import { BASIC_QUESTIONS } from './basic.ts'
import { INTERMEDIATE_QUESTIONS } from './intermediate.ts'
import { ADVANCED_QUESTIONS } from './advanced.ts'
import { EXPERT_QUESTIONS } from './expert.ts'

export const LEVEL_QUESTIONS: readonly LevelQuestion[] = [
  ...BASIC_QUESTIONS,
  ...INTERMEDIATE_QUESTIONS,
  ...ADVANCED_QUESTIONS,
  ...EXPERT_QUESTIONS,
]
