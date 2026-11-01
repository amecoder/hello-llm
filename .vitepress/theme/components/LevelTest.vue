<script setup lang="ts">
// AI knowledge level tests: pick an open level, answer 50 questions in 5 subjects, see per-subject
// scores, and on a pass unlock the next level and save a badge. Answers and scores stay in the page;
// only the passed levels (and the nickname) are kept in this browser via progress-store.
import { computed, nextTick, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { LEVEL_QUESTIONS } from '../level-bank'
import { localizeLevelQuestion } from '../level-bank-en'
import { langOf } from '../i18n.ts'
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

// strings with <strong> are rendered with v-html: pass only numbers and constants, never the reader's name
const UI = {
  ko: {
    quitConfirm: '지금까지 고른 답이 모두 사라집니다. 그만둘까요?',
    pick: '열린 레벨을 골라 시험을 보세요.',
    loading: '합격 기록을 불러오는 중…',
    passed: '✓ 합격',
    locked: (prev: string) => `🔒 ${prev}에 합격하면 볼 수 있습니다`,
    retake: '다시 보기',
    take: '시험 보기',
    storage: '합격 기록은 닉네임·읽음 표시와 함께 이 브라우저에만 저장되고 어디로도 보내지지 않습니다. 첫 화면의 「진행 현황 초기화」를 누르면 함께 지워져 레벨이 다시 잠깁니다.',
    head: (label: string, subjects: number, count: number, total: number, perSubject: number) =>
      `<strong>${label}</strong> · ${subjects}과목 ${count}문제 · 합격: 전체 ${total}문제 이상, 과목마다 ${perSubject}문제 이상`,
    subject: (n: number, name: string) => `${n}과목 ${name}`,
    answered: (a: number, t: number) => `${a} / ${t} 문제 답함`,
    answerAll: ' · 모두 답하면 채점할 수 있어요',
    submit: '채점하기',
    quit: '그만두고 레벨 고르기로',
    score: (label: string, t: number, c: number) => `${label} · ${t}문제 중 <strong>${c}문제</strong> —`,
    pass: '합격',
    fail: '불합격',
    colSubject: '과목',
    colRight: '맞힌 문제',
    colResult: '결과',
    subjectFail: '과락',
    subjectPass: '통과',
    passedBefore: '이미 합격한 레벨이라 이번 결과와 상관없이 합격 기록은 그대로 남습니다.',
    howToPass: (total: number, perSubject: number) =>
      `합격하려면 전체 ${total}문제 이상, 그리고 모든 과목에서 ${perSubject}문제 이상 맞혀야 합니다. 아래 틀린 문제의 해설과 공부할 자료를 보고 다시 도전해 보세요.`,
    congrats: (label: string, color: string) => `축하합니다! <strong style="color: ${color}">${label}</strong>에 합격했습니다.`,
    unlocked: (next: string) => ` 이제 <strong>${next}</strong> 시험이 열렸습니다.`,
    nameLabel: '배지에 넣을 이름 (비워 두면 "학습자". 첫 화면에서 정한 닉네임이 미리 들어갑니다)',
    namePlaceholder: '예: 김하늘',
    badgeAlt: (label: string) => `AI 지식 레벨 시험 ${label} 합격 배지`,
    savePng: '배지 이미지 저장 (PNG)',
    saveError: 'PNG로 저장하지 못했습니다. 위 배지 그림을 길게 누르거나 오른쪽 클릭해서 저장할 수 있습니다(이때는 SVG 그림 파일로 저장됩니다).',
    review: (n: number) => `틀린 문제 다시 보기 (${n}개)`,
    answer: '정답:',
    study: '공부할 자료:',
    takeNext: (next: string) => `${next} 시험 보기`,
    retry: '새 문제로 다시 보기',
    backToPick: '레벨 고르기로',
  },
  en: {
    quitConfirm: 'All the answers you picked so far will be lost. Stop the test?',
    pick: 'Pick an open level and take its test.',
    loading: 'Loading your pass records…',
    passed: '✓ Passed',
    locked: (prev: string) => `🔒 Opens after you pass ${prev}`,
    retake: 'Take again',
    take: 'Take the test',
    storage: 'Pass records are saved only in this browser, together with your nickname and read marks, and never sent anywhere. Pressing "Reset progress" on the home page clears them too and locks the levels again.',
    head: (label: string, subjects: number, count: number, total: number, perSubject: number) =>
      `<strong>${label}</strong> · ${subjects} subjects, ${count} questions · To pass: ${total}+ correct overall and ${perSubject}+ in every subject`,
    subject: (n: number, name: string) => `Subject ${n}: ${name}`,
    answered: (a: number, t: number) => `${a} / ${t} answered`,
    answerAll: ' · answer every question to get graded',
    submit: 'Grade my answers',
    quit: 'Stop and go back to levels',
    score: (label: string, t: number, c: number) => `${label} · <strong>${c} of ${t}</strong> correct —`,
    pass: 'Passed',
    fail: 'Not passed',
    colSubject: 'Subject',
    colRight: 'Correct',
    colResult: 'Result',
    subjectFail: 'Below minimum',
    subjectPass: 'OK',
    passedBefore: 'You already passed this level, so your pass record stays no matter how this attempt went.',
    howToPass: (total: number, perSubject: number) =>
      `To pass you need ${total}+ correct overall and ${perSubject}+ correct in every subject. Read the explanations and study links for the questions you missed below, then try again.`,
    congrats: (label: string, color: string) => `Congratulations! You passed <strong style="color: ${color}">${label}</strong>.`,
    unlocked: (next: string) => ` The <strong>${next}</strong> test is now open.`,
    nameLabel: 'Name on the badge (blank means "Learner"; the nickname you set on the home page is filled in for you)',
    namePlaceholder: 'e.g. Sky Kim',
    badgeAlt: (label: string) => `AI Knowledge Level Test ${label} pass badge`,
    savePng: 'Save badge image (PNG)',
    saveError: "Couldn't save as PNG. You can long-press or right-click the badge above to save it (it saves as an SVG image).",
    review: (n: number) => `Review the questions you missed (${n})`,
    answer: 'Answer:',
    study: 'Study material:',
    takeNext: (next: string) => `Take the ${next} test`,
    retry: 'Try again with new questions',
    backToPick: 'Back to levels',
  },
}

const { lang: siteLang } = useData()
const lang = computed(() => langOf(siteLang.value))
const ui = computed(() => UI[lang.value])
const labelOf = (l: { label: string; labelEn: string }) => (lang.value === 'en' ? l.labelEn : l.label)
const audienceOf = (l: { audience: string; audienceEn: string }) => (lang.value === 'en' ? l.audienceEn : l.audience)
const subjectsOf = (l: { subjects: readonly string[]; subjectsEn: readonly string[] }) => (lang.value === 'en' ? l.subjectsEn : l.subjects)

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
    ? buildLevelBadgeSvg({ name: name.value, level: level.value, correct: result.value.correct, total: result.value.total, date: badgeDate.value, lang: lang.value })
    : '',
)
const minSubject = Math.ceil(PASS_SUBJECT * PER_SUBJECT)
const minTotal = Math.ceil(PASS_TOTAL * PER_SUBJECT * SUBJECT_COUNT)

const statusOf = (l: KnowledgeLevel) => levelStatus(l, progress.value.passed)
// the level right before this one, e.g. 중급 → 초급
const previousLabel = (l: KnowledgeLevel) => {
  const prev = LEVEL_TESTS[LEVEL_TESTS.findIndex((x) => x.level === l) - 1]
  return prev ? labelOf(prev) : ''
}
const subjectGroups = computed(() =>
  Array.from({ length: SUBJECT_COUNT }, (_, i) => ({
    subject: i + 1,
    entries: items.value.map((item, index) => ({ item, index })).filter(({ item }) => item.question.subject === i + 1),
  })),
)

function start(l: KnowledgeLevel) {
  level.value = l
  passedBefore.value = progress.value.passed.includes(l)
  // questions are drawn in the page language; answer indexes are shared with the Korean bank
  items.value = drawLevelTest(LEVEL_QUESTIONS.map((q) => localizeLevelQuestion(q, lang.value)), l, Math.random)
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
  if (answered.value > 0 && !window.confirm(ui.value.quitConfirm)) return
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
      <p id="lt-focus" tabindex="-1" class="lt-note" role="status">{{ progressLoaded ? ui.pick : ui.loading }}</p>
      <div class="lt-cards">
        <section v-for="l in LEVEL_TESTS" :key="l.level" class="lt-card" :class="statusOf(l.level)" :style="{ borderTopColor: l.color }">
          <h3>{{ labelOf(l) }}</h3>
          <p class="lt-for">{{ audienceOf(l) }}</p>
          <ol class="lt-subjects">
            <li v-for="s in subjectsOf(l)" :key="s">{{ s }}</li>
          </ol>
          <p v-if="statusOf(l.level) === 'passed'" class="lt-state ok">{{ ui.passed }}</p>
          <p v-else-if="statusOf(l.level) === 'locked'" class="lt-state">{{ ui.locked(previousLabel(l.level)) }}</p>
          <button v-if="statusOf(l.level) !== 'locked'" type="button" class="lt-primary" :disabled="!progressLoaded" @click="start(l.level)">
            {{ statusOf(l.level) === 'passed' ? ui.retake : ui.take }}
          </button>
        </section>
      </div>
      <p class="lt-note">{{ ui.storage }}</p>
    </template>

    <template v-else-if="stage === 'exam'">
      <p id="lt-focus" tabindex="-1" class="lt-head" v-html="ui.head(labelOf(info), SUBJECT_COUNT, items.length, minTotal, minSubject)" />
      <section v-for="group in subjectGroups" :key="group.subject" :aria-labelledby="`lt-s${group.subject}`">
        <h3 :id="`lt-s${group.subject}`" class="lt-subject">{{ ui.subject(group.subject, subjectsOf(info)[group.subject - 1]) }}</h3>
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
        <span id="lt-answered">{{ ui.answered(answered, items.length) }}<template v-if="answered < items.length">{{ ui.answerAll }}</template></span>
        <button type="button" class="lt-primary" :disabled="answered < items.length" aria-describedby="lt-answered" @click="submit">{{ ui.submit }}</button>
      </div>
      <button type="button" class="lt-secondary" @click="quit">{{ ui.quit }}</button>
    </template>

    <template v-else>
      <p id="lt-focus" tabindex="-1" class="lt-score" role="status">
        <span v-html="ui.score(labelOf(info), result.total, result.correct)" />
        <strong :class="result.passed ? 'ok' : 'no'">{{ result.passed ? ui.pass : ui.fail }}</strong>
      </p>
      <table class="lt-table">
        <thead><tr><th>{{ ui.colSubject }}</th><th>{{ ui.colRight }}</th><th>{{ ui.colResult }}</th></tr></thead>
        <tbody>
          <tr v-for="s in result.subjects" :key="s.subject">
            <td>{{ s.subject }}. {{ subjectsOf(info)[s.subject - 1] }}</td>
            <td>{{ s.correct }} / {{ s.total }}</td>
            <td :class="result.failedSubjects.includes(s.subject) ? 'no' : 'ok'">{{ result.failedSubjects.includes(s.subject) ? ui.subjectFail : ui.subjectPass }}</td>
          </tr>
        </tbody>
      </table>
      <p v-if="passedBefore" class="lt-note">{{ ui.passedBefore }}</p>
      <p v-if="!result.passed" class="lt-note">
        {{ ui.howToPass(minTotal, minSubject) }}
      </p>

      <div v-if="result.passed" class="lt-badge">
        <p v-html="ui.congrats(labelOf(info), info.color) + (next && !passedBefore ? ui.unlocked(labelOf(next)) : '')" />
        <label class="lt-name">
          <span>{{ ui.nameLabel }}</span>
          <input v-model="name" type="text" maxlength="20" :placeholder="ui.namePlaceholder" />
        </label>
        <img class="lt-badge-img" :src="`data:image/svg+xml;charset=utf-8,${encodeURIComponent(badgeSvg)}`" :alt="ui.badgeAlt(labelOf(info))" />
        <button type="button" class="lt-primary" @click="savePng">{{ ui.savePng }}</button>
        <p v-if="saveError" class="lt-error" role="alert">{{ ui.saveError }}</p>
      </div>

      <template v-if="wrong.length">
        <h3>{{ ui.review(wrong.length) }}</h3>
        <ul class="lt-review">
          <li v-for="item in wrong" :key="item.question.id">
            <p class="lt-from">{{ ui.subject(item.question.subject, subjectsOf(info)[item.question.subject - 1]) }}</p>
            <p class="lt-prompt">{{ item.question.prompt }}</p>
            <p>{{ ui.answer }} <strong>{{ item.choices[item.answer] }}</strong></p>
            <p class="lt-explain">{{ item.question.explain }}</p>
            <p class="lt-from">{{ ui.study }} <a :href="sourceHref(item.question.source.url)">{{ item.question.source.title }}</a></p>
          </li>
        </ul>
      </template>

      <div class="lt-actions">
        <button v-if="result.passed && next" type="button" class="lt-primary" @click="start(next.level)">{{ ui.takeNext(labelOf(next)) }}</button>
        <button type="button" class="lt-secondary" @click="start(level)">{{ ui.retry }}</button>
        <button type="button" class="lt-secondary" @click="goTo('pick')">{{ ui.backToPick }}</button>
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
