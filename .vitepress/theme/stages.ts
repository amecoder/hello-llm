// Learning stages and how chapter numbers map to them: 1-99 are the common guide,
// 101-199 the ChatGPT guide (101 = its chapter 1), so one number names a chapter site-wide.
export type StageId = 'common' | 'chatgpt'

export type Stage = { id: StageId; title: string; dir: string; base: number; link: string }

export const STAGES: readonly Stage[] = [
  { id: 'common', title: '1단계 · 공통 가이드', dir: 'guide/00-common', base: 0, link: '/guide/00-common/' },
  { id: 'chatgpt', title: '2단계 · ChatGPT', dir: 'guide/11-chatgpt', base: 100, link: '/guide/11-chatgpt/' },
]

export function stageOf(chapter: number): Stage {
  return [...STAGES].reverse().find((s) => chapter > s.base)!
}

export function chaptersOf(stage: StageId, chapters: readonly number[]): number[] {
  return chapters.filter((n) => stageOf(n).id === stage).sort((a, b) => a - b)
}
