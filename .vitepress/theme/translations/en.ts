// English translation set, assembled from the English data files.
import { CHAPTER_TITLE_EN, QUESTION_TEXT_EN } from '../quiz-bank-en.ts'
import { EXAM_TEXT_EN } from '../exam-bank-en.ts'
import { LEVEL_TEXT_EN } from '../level-bank-en/index.ts'
import type { Translation } from './types.ts'

export const en: Translation = {
  chapters: CHAPTER_TITLE_EN,
  questions: { ...QUESTION_TEXT_EN, ...EXAM_TEXT_EN },
  level: LEVEL_TEXT_EN,
}
