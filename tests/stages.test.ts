import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { STAGES, stageOf, chaptersOf } from '../.vitepress/theme/stages.ts'
import { CHAPTERS } from '../.vitepress/theme/quiz-bank.ts'

const ROOT = join(import.meta.dirname, '..')
const numbers = Object.keys(CHAPTERS).map(Number)

test('chapter numbers map to their stage: 1-99 common guide, 101-199 ChatGPT', () => {
  assert.equal(stageOf(3).id, 'common')
  assert.equal(stageOf(101).id, 'chatgpt')
  assert.deepEqual(chaptersOf('common', [1, 2, 101, 3]), [1, 2, 3])
  assert.deepEqual(chaptersOf('chatgpt', [1, 102, 101]), [101, 102])
})

test('every stage folder has exactly the chapters listed in CHAPTERS, each ending with its own read button', () => {
  for (const stage of STAGES) {
    const dir = join(ROOT, stage.dir)
    const files = existsSync(dir) ? readdirSync(dir).filter((f) => /^\d\d-.+\.md$/.test(f)).sort() : []
    const expected = chaptersOf(stage.id, numbers)
    assert.deepEqual(files.map((f) => stage.base + Number(f.slice(0, 2))), expected, `${stage.dir}: files vs CHAPTERS`)
    for (const f of files) {
      const n = stage.base + Number(f.slice(0, 2))
      assert.equal(CHAPTERS[n].link, `/${stage.dir}/${f.replace(/\.md$/, '')}`, `${f}: CHAPTERS link`)
      const md = readFileSync(join(dir, f), 'utf8')
      const marks = [...md.matchAll(/^<ChapterDone :chapter="(\d+)" \/>$/gm)]
      assert.equal(marks.length, 1, `${f}: needs exactly one <ChapterDone>`)
      assert.equal(Number(marks[0][1]), n, `${f}: wrong chapter number`)
      const after = md.slice(marks[0].index).split('\n').filter((l) => l.trim() !== '')
      assert.match(after[1] ?? '', /^다음 장:/, `${f}: <ChapterDone> must sit right before "다음 장:"`)
    }
  }
})
