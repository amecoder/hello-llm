// Shape of the translated content that sits next to Korean source data elsewhere
// (stage titles, level names, badge text, the practice checklist, prompt builder headings).
// Korean keeps its own values in stages.ts / quiz.ts / level-test.ts / prompt-builder.ts.
type Five = readonly [string, string, string, string, string]

export type BadgeText = {
  ring: string
  ringSize: number
  labelSize: number
  guide: string
  title: (label: string) => string
  score: (correct: number, total: number, situationCorrect: number, situationTotal: number) => string
  note: string
}

export type Content = {
  stages: Record<'common' | 'chatgpt' | 'claude' | 'gemini' | 'claude-code' | 'codex' | 'antigravity' | 'ai-sdlc', string>
  builderHeadings: Record<'context' | 'document' | 'example' | 'instructions' | 'format', string>
  defaultName: string
  certLevels: Record<'advanced' | 'intermediate' | 'beginner', string>
  practiceTask: string
  practiceChecks: readonly { text: string; chapter: string }[]
  certBadge: BadgeText
  knowledgeLevels: Record<'basic' | 'intermediate' | 'advanced' | 'expert', { label: string; audience: string; subjects: Five }>
  levelBadge: BadgeText
}
