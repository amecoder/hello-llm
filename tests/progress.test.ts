import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  EMPTY_PROGRESS,
  markPassed,
  parseProgress,
  serializeProgress,
  setNickname,
  summarize,
  scrollRatio,
  toggleRead,
} from '../.vitepress/theme/progress.ts'

const CH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

test('a missing or broken record starts empty instead of throwing', () => {
  assert.deepEqual(parseProgress(null, CH), EMPTY_PROGRESS)
  assert.deepEqual(parseProgress('not json', CH), EMPTY_PROGRESS)
  assert.deepEqual(parseProgress('[1,2]', CH), EMPTY_PROGRESS)
  assert.deepEqual(parseProgress('{"nickname":5,"read":"x"}', CH), EMPTY_PROGRESS)
})

test('a saved record comes back, dropping chapters that no longer exist and duplicates', () => {
  const raw = JSON.stringify({ nickname: '하늘', read: [3, 1, 3, 42, 'x'] })
  assert.deepEqual(parseProgress(raw, CH), { nickname: '하늘', read: [1, 3], passed: [] })
})

test('round trip through storage keeps the record', () => {
  const p = { nickname: '하늘', read: [2, 5], passed: ['basic' as const] }
  assert.deepEqual(parseProgress(serializeProgress(p), CH), p)
})

test('marking a chapter read toggles it without changing the old record', () => {
  const before = { nickname: '', read: [4] }
  const after = toggleRead(before, 2)
  assert.deepEqual(after.read, [2, 4])
  assert.deepEqual(before.read, [4])
  assert.deepEqual(toggleRead(after, 4).read, [2])
})

test('the nickname is trimmed, cut to 20 characters and may be cleared', () => {
  assert.equal(setNickname(EMPTY_PROGRESS, '  하늘  ').nickname, '하늘')
  assert.equal(setNickname(EMPTY_PROGRESS, '가'.repeat(30)).nickname, '가'.repeat(20))
  assert.equal(setNickname(EMPTY_PROGRESS, 'a\u0000b').nickname, 'ab')
  assert.equal(setNickname({ nickname: '하늘', read: [] }, '   ').nickname, '')
})

test('the summary counts read chapters and points to the first unread one', () => {
  assert.deepEqual(summarize({ nickname: '', read: [] }, CH), { done: 0, total: 10, next: 1 })
  assert.deepEqual(summarize({ nickname: '', read: [1, 2, 4] }, CH), { done: 3, total: 10, next: 3 })
  assert.deepEqual(summarize({ nickname: '', read: CH }, CH), { done: 10, total: 10, next: null })
})

test('the scroll bar fills from 0 to 1 and stays hidden on pages too short to scroll', () => {
  assert.equal(scrollRatio(0, 3000, 1000), 0)
  assert.equal(scrollRatio(1000, 3000, 1000), 0.5)
  assert.equal(scrollRatio(2000, 3000, 1000), 1)
  // overscroll on phones can go past the ends
  assert.equal(scrollRatio(-50, 3000, 1000), 0)
  assert.equal(scrollRatio(2100, 3000, 1000), 1)
  assert.equal(scrollRatio(0, 900, 1000), null)
})

// chapter files and their read buttons are checked per stage in tests/stages.test.ts

test('a broken chapter list does not throw away a good nickname, and control characters are dropped', () => {
  assert.deepEqual(parseProgress('{"nickname":"하늘","read":"x"}', CH), { nickname: '하늘', read: [], passed: [] })
  assert.deepEqual(parseProgress('{"nickname":"하\\u0007늘","read":[]}', CH), { nickname: '하늘', read: [], passed: [] })
})

test('the intro page and the table of contents both show the progress box', () => {
  const root = join(import.meta.dirname, '..')
  for (const page of ['index.md', 'guide/index.md']) {
    assert.match(readFileSync(join(root, page), 'utf8'), /^<MyProgress \/>$/m, `${page}: no <MyProgress />`)
  }
})

// the store only touches window/localStorage, so a small fake is enough to run it in Node
function fakeBrowser(blocked: boolean) {
  const data = new Map<string, string>()
  const storage = {
    getItem: (k: string) => data.get(k) ?? null,
    setItem: (k: string, v: string) => void data.set(k, v),
    removeItem: (k: string) => void data.delete(k),
  }
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    get() {
      if (blocked) throw new Error('blocked')
      return storage
    },
  })
  Object.defineProperty(globalThis, 'window', { configurable: true, value: { addEventListener() {} } })
  return data
}

test('loading again on the next page keeps what was marked, even when the browser blocks storage', async () => {
  fakeBrowser(true)
  const store = await import(`../.vitepress/theme/progress-store.ts?blocked`)
  store.loadProgress()
  store.saveProgress(toggleRead(store.progress.value, 1))
  store.loadProgress() // a new <ChapterDone> mounts after moving to chapter 2
  assert.deepEqual(store.progress.value.read, [1])
  assert.equal(store.storageBlocked.value, true)
})

test('saved progress is written to and cleared from localStorage', async () => {
  const data = fakeBrowser(false)
  const store = await import(`../.vitepress/theme/progress-store.ts?open`)
  store.loadProgress()
  store.saveProgress(setNickname(store.progress.value, '하늘'))
  assert.equal(data.get('hello-llm:progress'), '{"nickname":"하늘","read":[],"passed":[]}')
  store.clearProgress()
  assert.equal(data.has('hello-llm:progress'), false)
  assert.deepEqual(store.progress.value, EMPTY_PROGRESS)
})

test('passed level tests are kept, cleaned of unknown levels, and can be added once', () => {
  const raw = JSON.stringify({ nickname: '', read: [], passed: ['basic', 'nope', 'basic', 'advanced'] })
  assert.deepEqual(parseProgress(raw, CH).passed, ['basic', 'advanced'])
  // records saved before level tests existed have no passed list
  assert.deepEqual(parseProgress('{"nickname":"하늘","read":[1]}', CH).passed, [])
  const once = markPassed(markPassed(EMPTY_PROGRESS, 'basic'), 'basic')
  assert.deepEqual(once.passed, ['basic'])
  assert.deepEqual(EMPTY_PROGRESS.passed, [])
})
