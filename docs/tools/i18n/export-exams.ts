import { writeFileSync } from 'node:fs'
import { EXAM_QUESTIONS } from '/Users/amecoder/study/hello-llm/.vitepress/theme/exam-bank.ts'
import { LEVEL_QUESTIONS } from '/Users/amecoder/study/hello-llm/.vitepress/theme/level-bank/index.ts'
const pick = ({ id, prompt, choices, explain }: { id: string; prompt: string; choices: readonly string[]; explain: string }) => ({ id, prompt, choices, explain })
const dir = process.argv[2]
writeFileSync(`${dir}/exam-ko.json`, JSON.stringify(EXAM_QUESTIONS.map(pick), null, 1))
for (const level of ['basic', 'intermediate', 'advanced', 'expert']) {
  writeFileSync(`${dir}/level-${level}-ko.json`, JSON.stringify(LEVEL_QUESTIONS.filter((q) => q.level === level).map(pick), null, 1))
}
