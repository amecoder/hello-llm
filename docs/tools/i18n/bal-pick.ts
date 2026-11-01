// write <name>-bal-in.json: questions whose correct choice is the longest or shortest
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { LEVEL_QUESTIONS } from '/Users/amecoder/study/hello-llm/.vitepress/theme/level-bank/index.ts'
import { QUESTIONS } from '/Users/amecoder/study/hello-llm/.vitepress/theme/quiz-bank.ts'
import { EXAM_QUESTIONS } from '/Users/amecoder/study/hello-llm/.vitepress/theme/exam-bank.ts'
const [dir, name] = process.argv.slice(2)
const all = [...LEVEL_QUESTIONS, ...QUESTIONS, ...EXAM_QUESTIONS]
const en: { id: string; choices: string[] }[] = JSON.parse(readFileSync(existsSync(`${dir}/${name}.json`) && /-(ja|zh-hans|zh-hant|es)$/.test(name) ? `${dir}/${name}.json` : `${dir}/${name}-en.json`, 'utf8'))
const bad = en.flatMap((e) => {
  const q = all.find((x) => x.id === e.id)!
  const lens = e.choices.map((c) => c.length)
  const extreme = lens[q.answer] === Math.max(...lens) || lens[q.answer] === Math.min(...lens)
  return extreme ? [{ id: e.id, correctIndex: q.answer, choices: e.choices }] : []
})
writeFileSync(`${dir}/${name}-bal-in.json`, JSON.stringify(bad, null, 1))
console.log(name, 'to balance', bad.length)
