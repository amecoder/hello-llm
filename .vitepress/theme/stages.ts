// Learning stages and how chapter numbers map to them: 1-99 are the common guide,
// 101-199 the ChatGPT guide (101 = its chapter 1), 201-299 the Claude guide, 301-399 the Gemini guide,
// 401-499 the 3단계 Claude Code guide, 501-599 the 3단계 Codex guide, 601-699 the 3단계 Antigravity guide, 701-799 the 4단계 AI-SDLC guide, 801-899 the 3단계 Claude Code terminal guide,
// so one number names a chapter site-wide. STAGES is in menu order, which need not follow base.
export type StageId = 'common' | 'chatgpt' | 'claude' | 'gemini' | 'claude-code' | 'codex' | 'antigravity' | 'claude-code-cli' | 'ai-sdlc'

export type Stage = { id: StageId; title: string; dir: string; base: number; link: string }

export const STAGES: readonly Stage[] = [
  { id: 'common', title: '1단계 · 공통 가이드', dir: 'guide/00-common', base: 0, link: '/guide/00-common/' },
  { id: 'chatgpt', title: '2단계 · ChatGPT', dir: 'guide/11-chatgpt', base: 100, link: '/guide/11-chatgpt/' },
  { id: 'claude', title: '2단계 · Claude', dir: 'guide/10-claude', base: 200, link: '/guide/10-claude/' },
  { id: 'gemini', title: '2단계 · Gemini', dir: 'guide/12-gemini', base: 300, link: '/guide/12-gemini/' },
  { id: 'claude-code', title: '3단계 · Claude Code', dir: 'guide/20-claude-code', base: 400, link: '/guide/20-claude-code/' },
  { id: 'claude-code-cli', title: '3단계 · Claude Code 터미널', dir: 'guide/23-claude-code-cli', base: 800, link: '/guide/23-claude-code-cli/' },
  { id: 'codex', title: '3단계 · Codex', dir: 'guide/21-codex', base: 500, link: '/guide/21-codex/' },
  { id: 'antigravity', title: '3단계 · Antigravity', dir: 'guide/22-antigravity', base: 600, link: '/guide/22-antigravity/' },
  { id: 'ai-sdlc', title: '4단계 · AI-SDLC', dir: 'guide/30-ai-sdlc', base: 700, link: '/guide/30-ai-sdlc/' },
]

export function stageOf(chapter: number): Stage {
  return [...STAGES].sort((a, b) => b.base - a.base).find((s) => chapter > s.base)!
}

export function chaptersOf(stage: StageId, chapters: readonly number[]): number[] {
  return chapters.filter((n) => stageOf(n).id === stage).sort((a, b) => a - b)
}
