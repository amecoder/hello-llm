import { readFileSync } from 'node:fs'
import { QUESTIONS } from '/Users/amecoder/study/hello-llm/.vitepress/theme/quiz-bank.ts'
import { EXAM_QUESTIONS } from '/Users/amecoder/study/hello-llm/.vitepress/theme/exam-bank.ts'
import { LEVEL_QUESTIONS } from '/Users/amecoder/study/hello-llm/.vitepress/theme/level-bank/index.ts'
const all = [...QUESTIONS, ...EXAM_QUESTIONS, ...LEVEL_QUESTIONS]
for (const f of process.argv.slice(2)) {
  const tr: { id: string; choices: string[] }[] = JSON.parse(readFileSync(f, 'utf8'))
  let l = 0, s = 0
  for (const t of tr) {
    const q = all.find((x) => x.id === t.id)!
    const lens = t.choices.map((c) => [...c].length)
    if (lens[q.answer] === Math.max(...lens)) l++
    if (lens[q.answer] === Math.min(...lens)) s++
  }
  console.log(f.split('/').pop(), `n=${tr.length} longest=${l} shortest=${s}`)
}
