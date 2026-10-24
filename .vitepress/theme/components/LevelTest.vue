<script setup lang="ts">
// AI knowledge level tests: pick an open level, answer 50 questions in 5 subjects, see per-subject
// scores, and on a pass unlock the next level and save a badge. Answers and scores stay in the page;
// only the passed levels (and the nickname) are kept in this browser via progress-store.
import { computed, nextTick, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { LEVEL_QUESTIONS } from '../level-bank'
import {
  buildLevelBadgeSvg,
  drawLevelTest,
  gradeLevelTest,
  LEVEL_TESTS,
  levelStatus,
  PASS_SUBJECT,
  PASS_TOTAL,
  PER_SUBJECT,
  SUBJECT_COUNT,
  type KnowledgeLevel,
  type LevelItem,
} from '../level-test'
import { markPassed } from '../progress.ts'
import { loadProgress, progress, progressLoaded, saveProgress } from '../progress-store'

type Stage = 'pick' | 'exam' | 'result'

const stage = ref<Stage>('pick')
const level = ref<KnowledgeLevel>('basic')
const items = ref<LevelItem[]>([])
const picks = ref<(number | null)[]>([])
const name = ref('')
const badgeDate = ref('')
const saveError = ref(false)
// was this level already passed before this attempt? (re-takes keep the record either way)
const passedBefore = ref(false)

onMounted(loadProgress)

const info = computed(() => LEVEL_TESTS.find((l) => l.level === level.value)!)
const next = computed(() => LEVEL_TESTS[LEVEL_TESTS.findIndex((l) => l.level === level.value) + 1])
const answered = computed(() => picks.value.filter((p) => p !== null).length)
const result = computed(() => gradeLevelTest(items.value, picks.value))
const wrong = computed(() => items.value.filter((item, i) => picks.value[i] !== item.answer))
const badgeSvg = computed(() =>
  result.value.passed
    ? buildLevelBadgeSvg({ name: name.value, level: level.value, correct: result.value.correct, total: result.value.total, date: badgeDate.value })
    : '',
)
const minSubject = Math.ceil(PASS_SUBJECT * PER_SUBJECT)
const minTotal = Math.ceil(PASS_TOTAL * PER_SUBJECT * SUBJECT_COUNT)

const statusOf = (l: KnowledgeLevel) => levelStatus(l, progress.value.passed)
// the level right before this one, e.g. 중급 → 초급
const previousLabel = (l: KnowledgeLevel) => LEVEL_TESTS[LEVEL_TESTS.findIndex((x) => x.level === l) - 1]?.label ?? ''
const subjectGroups = computed(() =>
  Array.from({ length: SUBJECT_COUNT }, (_, i) => ({
    subject: i + 1,
    entries: items.value.map((item, index) => ({ item, index })).filter(({ item }) => item.question.subject === i + 1),
  })),
)

function start(l: KnowledgeLevel) {
  level.value = l
  passedBefore.value = progress.value.passed.includes(l)
  items.value = drawLevelTest(LEVEL_QUESTIONS, l, Math.random)
  picks.value = items.value.map(() => null)
  saveError.value = false
  goTo('exam')
}

function submit() {
  const d = new Date()
  badgeDate.value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  if (result.value.passed) saveProgress(markPassed(progress.value, level.value))
  if (name.value.trim() === '') name.value = progress.value.nickname
  goTo('result')
}

// focus the short heading line of the new stage (not the whole 50-question box)
async function goTo(s: Stage) {
  stage.value = s
  await nextTick()
  const target = document.getElementById('lt-focus')
  target?.focus({ preventScroll: true })
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById('level-test')?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
}

function quit() {
  if (answered.value > 0 && !window.confirm('지금까지 고른 답이 모두 사라집니다. 그만둘까요?')) return
  goTo('pick')
}

// same PNG export as the chapter exam badge
async function savePng() {
  saveError.value = false
  try {
    const img = new Image()
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = () => reject(new Error('badge image failed to load'))
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(badgeSvg.value)}`
    })
    const canvas = document.createElement('canvas')
    canvas.width = 1600
    canvas.height = 960
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('canvas 2d context unavailable')
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'))
    if (!blob) throw new Error('canvas export failed')
    const href = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    link.download = `hello-ai-${level.value}.png`
    document.body.appendChild(link)
    link.click()
    link.remove()
    setTimeout(() => URL.revokeObjectURL(href), 10_000)
  } catch (err) {
    console.error('badge download failed', err)
    saveError.value = true
  }
}

const sourceHref = (url: string) => (url.startsWith('/') ? withBase(url) : url)
</script>

<template>
  <div id="level-test" class="lt" tabindex="-1">
    <template v-if="stage === 'pick'">
      <p id="lt-focus" tabindex="-1" class="lt-note" role="status">{{ progressLoaded ? '열린 레벨을 골라 시험을 보세요.' : '합격 기록을 불러오는 중…' }}</p>
      <div class="lt-cards">
        <section v-for="l in LEVEL_TESTS" :key="l.level" class="lt-card" :class="statusOf(l.level)" :style="{ borderTopColor: l.color }">
          <h3>{{ l.label }}</h3>
          <p class="lt-for">{{ l.audience }}</p>
          <ol class="lt-subjects">
            <li v-for="s in l.subjects" :key="s">{{ s }}</li>
          </ol>
          <p v-if="statusOf(l.level) === 'passed'" class="lt-state ok">✓ 합격</p>
          <p v-else-if="statusOf(l.level) === 'locked'" class="lt-state">🔒 {{ previousLabel(l.level) }}에 합격하면 볼 수 있습니다</p>
          <button v-if="statusOf(l.level) !== 'locked'" type="button" class="lt-primary" :disabled="!progressLoaded" @click="start(l.level)">
            {{ statusOf(l.level) === 'passed' ? '다시 보기' : '시험 보기' }}
          </button>
        </section>
      </div>
      <p class="lt-note">합격 기록은 닉네임·읽음 표시와 함께 이 브라우저에만 저장되고 어디로도 보내지지 않습니다. 첫 화면의 「진행 현황 초기화」를 누르면 함께 지워져 레벨이 다시 잠깁니다.</p>
    </template>

    <template v-else-if="stage === 'exam'">
      <p id="lt-focus" tabindex="-1" class="lt-head"><strong>{{ info.label }}</strong> · {{ SUBJECT_COUNT }}과목 {{ items.length }}문제 · 합격: 전체 {{ minTotal }}문제 이상, 과목마다 {{ minSubject }}문제 이상</p>
      <section v-for="group in subjectGroups" :key="group.subject" :aria-labelledby="`lt-s${group.subject}`">
        <h3 :id="`lt-s${group.subject}`" class="lt-subject">{{ group.subject }}과목 {{ info.subjects[group.subject - 1] }}</h3>
        <ol class="lt-list" :start="group.entries[0]?.index + 1">
          <li v-for="{ item, index: qi } in group.entries" :key="item.question.id" class="lt-q">
            <p :id="`lt-q${qi}`" class="lt-prompt">{{ item.question.prompt }}</p>
            <div class="lt-choices" role="radiogroup" :aria-labelledby="`lt-q${qi}`">
              <label v-for="(choice, ci) in item.choices" :key="ci" :class="{ on: picks[qi] === ci }">
                <input v-model="picks[qi]" type="radio" :name="`lt${qi}`" :value="ci" />
                {{ choice }}
              </label>
            </div>
          </li>
        </ol>
      </section>
      <div class="lt-submit">
        <span id="lt-answered">{{ answered }} / {{ items.length }} 문제 답함<template v-if="answered < items.length"> · 모두 답하면 채점할 수 있어요</template></span>
        <button type="button" class="lt-primary" :disabled="answered < items.length" aria-describedby="lt-answered" @click="submit">채점하기</button>
      </div>
      <button type="button" class="lt-secondary" @click="quit">그만두고 레벨 고르기로</button>
    </template>

    <template v-else>
      <p id="lt-focus" tabindex="-1" class="lt-score" role="status">
        {{ info.label }} · {{ result.total }}문제 중 <strong>{{ result.correct }}문제</strong> —
        <strong :class="result.passed ? 'ok' : 'no'">{{ result.passed ? '합격' : '불합격' }}</strong>
      </p>
      <table class="lt-table">
        <thead><tr><th>과목</th><th>맞힌 문제</th><th>결과</th></tr></thead>
        <tbody>
          <tr v-for="s in result.subjects" :key="s.subject">
            <td>{{ s.subject }}. {{ info.subjects[s.subject - 1] }}</td>
            <td>{{ s.correct }} / {{ s.total }}</td>
            <td :class="result.failedSubjects.includes(s.subject) ? 'no' : 'ok'">{{ result.failedSubjects.includes(s.subject) ? '과락' : '통과' }}</td>
          </tr>
        </tbody>
      </table>
      <p v-if="passedBefore" class="lt-note">이미 합격한 레벨이라 이번 결과와 상관없이 합격 기록은 그대로 남습니다.</p>
      <p v-if="!result.passed" class="lt-note">
        합격하려면 전체 {{ minTotal }}문제 이상, 그리고 모든 과목에서 {{ minSubject }}문제 이상 맞혀야 합니다. 아래 틀린 문제의 해설과 공부할 자료를 보고 다시 도전해 보세요.
      </p>

      <div v-if="result.passed" class="lt-badge">
        <p>축하합니다! <strong :style="{ color: info.color }">{{ info.label }}</strong>에 합격했습니다.<template v-if="next && !passedBefore"> 이제 <strong>{{ next.label }}</strong> 시험이 열렸습니다.</template></p>
        <label class="lt-name">
          <span>배지에 넣을 이름 (비워 두면 "학습자". 첫 화면에서 정한 닉네임이 미리 들어갑니다)</span>
          <input v-model="name" type="text" maxlength="20" placeholder="예: 김하늘" />
        </label>
        <img class="lt-badge-img" :src="`data:image/svg+xml;charset=utf-8,${encodeURIComponent(badgeSvg)}`" :alt="`AI 지식 레벨 시험 ${info.label} 합격 배지`" />
        <button type="button" class="lt-primary" @click="savePng">배지 이미지 저장 (PNG)</button>
        <p v-if="saveError" class="lt-error" role="alert">PNG로 저장하지 못했습니다. 위 배지 그림을 길게 누르거나 오른쪽 클릭해서 저장할 수 있습니다(이때는 SVG 그림 파일로 저장됩니다).</p>
      </div>

      <template v-if="wrong.length">
        <h3>틀린 문제 다시 보기 ({{ wrong.length }}개)</h3>
        <ul class="lt-review">
          <li v-for="item in wrong" :key="item.question.id">
            <p class="lt-from">{{ item.question.subject }}과목 {{ info.subjects[item.question.subject - 1] }}</p>
            <p class="lt-prompt">{{ item.question.prompt }}</p>
            <p>정답: <strong>{{ item.choices[item.answer] }}</strong></p>
            <p class="lt-explain">{{ item.question.explain }}</p>
            <p class="lt-from">공부할 자료: <a :href="sourceHref(item.question.source.url)">{{ item.question.source.title }}</a></p>
          </li>
        </ul>
      </template>

      <div class="lt-actions">
        <button v-if="result.passed && next" type="button" class="lt-primary" @click="start(next.level)">{{ next.label }} 시험 보기</button>
        <button type="button" class="lt-secondary" @click="start(level)">새 문제로 다시 보기</button>
        <button type="button" class="lt-secondary" @click="goTo('pick')">레벨 고르기로</button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.lt { margin: 16px 0; scroll-margin-top: 80px; }
.lt:focus { outline: none; }
.lt p { margin: 6px 0; }
.lt-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
.lt-card { border: 1px solid var(--vp-c-divider); border-top: 4px solid; border-radius: 12px; padding: 12px 14px; background: var(--vp-c-bg-soft); display: flex; flex-direction: column; }
.lt-card.locked { opacity: 0.6; }
.lt-card h3 { margin: 0 !important; padding: 0; border: none; font-size: 18px; }
.lt-for { font-size: 13px; color: var(--vp-c-text-2); }
.lt-subjects { margin: 4px 0 8px; padding-left: 18px; font-size: 13px; line-height: 1.6; flex: 1; }
.lt-state { font-size: 13px; color: var(--vp-c-text-2); }
.lt button { border-radius: 8px; padding: 6px 16px; font-size: 15px; cursor: pointer; }
.lt-primary { border: 1px solid var(--vp-button-brand-border); background: var(--vp-button-brand-bg); color: var(--vp-button-brand-text); font-weight: 600; }
.lt-primary:disabled { opacity: 0.5; cursor: not-allowed; }
.lt-secondary { border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1); }
.lt-head { padding: 10px 14px; border-radius: 10px; background: var(--vp-c-bg-soft); font-size: 14px; }
.lt-list { padding-left: 1.6em; }
.lt-subject { margin: 24px 0 8px !important; padding: 0 0 4px !important; border-top: none !important; border-bottom: 2px solid var(--vp-c-divider); font-size: 16px; font-weight: 700; }
.lt-q { margin: 0 0 18px; scroll-margin-bottom: 72px; }
.lt-q::marker { font-weight: 600; }
#lt-focus:focus { outline: none; }
.lt-prompt { font-weight: 600; line-height: 1.6; }
.lt-choices { display: flex; flex-direction: column; gap: 6px; }
.lt-choices label { display: flex; gap: 8px; align-items: flex-start; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 8px 12px; font-size: 14px; line-height: 1.5; background: var(--vp-c-bg); cursor: pointer; }
.lt-choices label.on { border-color: var(--vp-c-brand-1); }
.lt-choices input { margin-top: 4px; }
.lt-submit { position: sticky; bottom: 0; display: flex; gap: 12px; align-items: center; justify-content: space-between; padding: 10px 0; background: var(--vp-c-bg); border-top: 1px solid var(--vp-c-divider); }
.lt-note { font-size: 13px; color: var(--vp-c-text-2); }
.lt-score { font-size: 18px; }
.ok { color: var(--vp-c-green-1); font-weight: 700; }
.no { color: var(--vp-c-red-1); font-weight: 700; }
.lt-badge { display: flex; flex-direction: column; gap: 10px; align-items: flex-start; margin: 16px 0; }
.lt-name { display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: var(--vp-c-text-2); }
.lt-name input { width: 240px; max-width: 100%; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 6px 10px; font-size: 15px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }
.lt-badge-img { width: 100%; max-width: 560px; height: auto; border-radius: 12px; }
.lt-error { color: var(--vp-c-danger-1); font-size: 13px; }
.lt-review { padding-left: 1.2em; }
.lt-review li { margin-bottom: 16px; }
.lt-explain { font-size: 14px; color: var(--vp-c-text-2); }
.lt-from { font-size: 12px; color: var(--vp-c-text-2); }
.lt-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
</style>
