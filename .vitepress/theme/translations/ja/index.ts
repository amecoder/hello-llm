// ja translation set (generated).
import type { Translation } from '../types.ts'
import { QUIZ1 } from './quiz1.ts'
import { EXAM } from './exam.ts'
import { CHATGPT } from './chatgpt.ts'
import { CLAUDE } from './claude.ts'
import { GEMINI } from './gemini.ts'
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
  101: "第1章 はじめに",
  102: "第2章 画面を見て回る",
  103: "第3章 会話の管理",
  104: "第4章 ファイル・写真と画像づくり",
  105: "第5章 記憶とカスタマイズ",
  106: "第6章 検索とディープリサーチ",
  107: "第7章 プロジェクト・プラグイン・Work",
  108: "第8章 プライバシーとデータ管理",
  109: "第9章 音声で会話する",
  110: "第10章 実習課題",
  111: "第11章 専門家のように使う",
  201: "第1章 始め方",
  202: "第2章 画面を見てみよう",
  203: "第3章 会話の管理",
  204: "第4章 ファイルとアーティファクト",
  205: "第5章 記憶とカスタマイズ",
  206: "第6章 検索とリサーチ",
  207: "第7章 プロジェクト・コネクタ・スキル",
  208: "第8章 Cowork",
  209: "第9章 プライバシーと安全",
  210: "第10章 音声とスマホ",
  211: "第11章 実習課題",
  212: "第12章 専門家のように使う",
  301: "第1章 はじめに",
  302: "第2章 画面を見てみよう",
  303: "第3章 会話の管理",
  304: "第4章 ファイルと作成",
  305: "第5章 記憶とカスタマイズ",
  306: "第6章 検索とDeep Research",
  307: "第7章 スキルと連携アプリ",
  308: "第8章 仕事を任せる",
  309: "第9章 プライバシーと安全",
  310: "第10章 音声とスマホ",
  311: "第11章 実習課題",
  312: "第12章 プロのように使う",
}

export const ja: Translation = {
  chapters,
  questions: { ...QUIZ1, ...EXAM, ...CHATGPT, ...CLAUDE, ...GEMINI },
  level: { ...LEVEL_BASIC, ...LEVEL_INTERMEDIATE, ...LEVEL_ADVANCED, ...LEVEL_EXPERT },
}
