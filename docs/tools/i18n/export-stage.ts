import { writeFileSync } from 'node:fs'
import { QUESTIONS } from '/Users/amecoder/study/hello-llm/.vitepress/theme/quiz-bank.ts'
// usage: node export-stage.ts <dir> <name> <minChapter> <maxChapter>
const [dir, name, lo, hi] = process.argv.slice(2)
const out = QUESTIONS.filter((q) => q.chapter >= Number(lo) && q.chapter <= Number(hi)).map(({ id, prompt, choices, explain }) => ({ id, prompt, choices, explain }))
writeFileSync(`${dir}/${name}-ko.json`, JSON.stringify(out, null, 1))
console.log(name, out.length)
