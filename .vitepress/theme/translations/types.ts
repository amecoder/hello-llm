// Translated quiz/exam/level text for one language. Ids, chapters, answer indexes and external
// sources always come from the Korean banks; only reader-facing text is swapped.
export type QuestionText = { prompt: string; choices: readonly string[]; explain: string }

export type Translation = {
  chapters: Record<number, string>
  // chapter quizzes and the understanding-check exam (ids never overlap)
  questions: Record<string, QuestionText>
  // AI knowledge level test
  level: Record<string, QuestionText>
}
