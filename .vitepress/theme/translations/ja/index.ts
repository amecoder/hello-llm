// ja translation set (generated).
import type { Translation } from '../types.ts'
import { QUIZ1 } from './quiz1.ts'
import { EXAM } from './exam.ts'
import { LEVEL_BASIC } from './level-basic.ts'
import { LEVEL_INTERMEDIATE } from './level-intermediate.ts'
import { LEVEL_ADVANCED } from './level-advanced.ts'
import { LEVEL_EXPERT } from './level-expert.ts'

const chapters: Record<number, string> = {
  1: "第1章 LLMとは何か",
  2: "第2章 なぜこれほど話題なのか",
  3: "第3章 なぜ学ぶべきか",
  4: "第4章 プロンプトの基本",
  5: "第5章 プロンプトのパターン",
  6: "第6章 会話を続けながら仕上げる",
  7: "第7章 構造化プロンプト",
  8: "第8章 メタプロンプティング",
  9: "第9章 安全に使う",
  10: "第10章 実践課題集",
  11: "第11章 専門家のように使う",
}

export const ja: Translation = {
  chapters,
  questions: { ...QUIZ1, ...EXAM },
  level: { ...LEVEL_BASIC, ...LEVEL_INTERMEDIATE, ...LEVEL_ADVANCED, ...LEVEL_EXPERT },
}
