import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { STAGES } from '../.vitepress/theme/stages.ts'
import { slugify } from '../.vitepress/slugify.ts'

const ROOT = join(import.meta.dirname, '..')

// One fixed sentence per label, so every chapter promises the same thing.
const LABELS: Record<string, { type: string; text: string }> = {
  필수: { type: 'tip', text: '이 단계를 따라가려면 꼭 읽으세요.' },
  선택: { type: 'info', text: '필요할 때 읽으세요. 건너뛰어도 뒤 장을 따라갈 수 있습니다.' },
  심화: { type: 'warning', text: '앞 장을 익힌 뒤 더 잘 쓰고 싶을 때 읽으세요.' },
}

const chaptersOf = (dir: string) => readdirSync(join(ROOT, dir)).filter((f) => /^\d\d-.+\.md$/.test(f)).sort()

function labelOf(md: string, file: string): string {
  const lines = md.split('\n')
  assert.match(lines[0], /^# /, `${file}: first line must be the title`)
  const m = lines[2]?.match(/^<Badge type="(\w+)" text="(\S+)" \/> (.+)$/)
  assert.ok(m, `${file}: the line right after the title must be a reading label`)
  const [, type, label, text] = m
  assert.ok(label in LABELS, `${file}: unknown label ${label}`)
  assert.equal(type, LABELS[label].type, `${file}: badge type for ${label}`)
  assert.equal(text, LABELS[label].text, `${file}: sentence for ${label}`)
  return label
}

test('every Korean chapter starts with one reading label: 필수, 선택 or 심화', () => {
  let count = 0
  for (const stage of STAGES) {
    for (const f of chaptersOf(stage.dir)) {
      labelOf(readFileSync(join(ROOT, stage.dir, f), 'utf8'), `${stage.dir}/${f}`)
      count++
    }
  }
  assert.equal(count, 97)
})

test('each stage table of contents shows the same label as the chapter itself', () => {
  for (const stage of STAGES) {
    const readme = readFileSync(join(ROOT, stage.dir, 'README.md'), 'utf8')
    assert.match(readme, /^\| 장 \| 읽기 \| 제목 \| 이런 걸 알게 됩니다 \|$/m, `${stage.dir}: table header`)
    for (const f of chaptersOf(stage.dir)) {
      const row = readme.split('\n').find((l) => l.startsWith('|') && l.includes(`](${f})`))
      assert.ok(row, `${stage.dir}: no row for ${f}`)
      const cell = row.split('|')[2].trim()
      assert.equal(cell, labelOf(readFileSync(join(ROOT, stage.dir, f), 'utf8'), f), `${stage.dir}/${f}: table vs chapter`)
    }
  }
})

/** Heading ids that sit inside a ::: details box (hidden until the reader opens it). */
function foldedIds(md: string, file = ''): Set<string> {
  const ids = new Set<string>()
  const open: { colons: number; details: boolean }[] = []
  let fence = false
  for (const line of md.split('\n')) {
    if (line.startsWith('```')) fence = !fence
    if (fence) continue
    const c = line.match(/^(:{3,})\s*(\S*)/)
    if (c && c[2]) { open.push({ colons: c[1].length, details: c[2] === 'details' }); continue }
    if (c) {
      const top = open.pop()
      assert.equal(top?.colons, c[1].length, `${file}: a ${c[1]} line closes a box opened with a different number of colons`)
      continue
    }
    const h = line.match(/^#{2,6} (.+)$/)
    if (h && open.some((b) => b.details)) ids.add(slugify(h[1].trim()))
  }
  assert.equal(open.length, 0, `${file}: a ::: box is never closed`)
  return ids
}

test('no Korean page links to a heading hidden inside a folded box', () => {
  const pages = STAGES.flatMap((s) => readdirSync(join(ROOT, s.dir)).filter((f) => f.endsWith('.md')).map((f) => join(s.dir, f)))
  const folded = new Map(pages.map((p) => [p, foldedIds(readFileSync(join(ROOT, p), 'utf8'), p)]))
  for (const src of pages) {
    const md = readFileSync(join(ROOT, src), 'utf8')
    for (const [, target, anchor] of md.matchAll(/\]\(([^)#\s]*\.md)?#([^)\s]+)\)/g)) {
      const dest = target ? join(src, '..', target) : src
      const ids = folded.get(dest)
      if (ids) assert.ok(!ids.has(decodeURIComponent(anchor)), `${src} links to #${anchor} folded inside ${dest}`)
    }
  }
})

test('the five deeper sections of chapter 1 show a short summary and fold the rest', () => {
  const md = readFileSync(join(ROOT, 'guide/00-common/01-what-is-llm.md'), 'utf8')
  const deep = ['학습했다는 건 무슨 뜻일까?', '검색하고 도구를 쓰는 AI', '모델의 크기 — 매개변수(파라미터)', '그런데 정말 생각하는 걸까?', '글만 읽는 게 아니에요 — 문서·사진·소리·영상']
  const sections = md.split(/^## /m).slice(1)
  for (const title of deep) {
    const body = sections.find((s) => s.startsWith(`${title}\n`))
    assert.ok(body, `missing section ${title}`)
    assert.match(body, /^<Badge type="warning" text="심화" \/> /m, `${title}: needs a 심화 badge`)
    assert.match(body, /^:{3,} details /m, `${title}: body must be folded`)
    assert.ok(!/^#{3} /m.test(body.split(/^:{3,} details /m)[0]), `${title}: subheadings must sit inside the fold`)
  }
})
