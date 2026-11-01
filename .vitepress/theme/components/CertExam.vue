<script setup lang="ts">
// Level check: draw exam-only questions, score concept and situation answers, and hand out a level badge.
// Everything runs in the browser — no answers, names or scores leave the page or get stored;
// the only stored value used here is the nickname the reader saved (progress-store).
import { computed, nextTick, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { CHAPTERS } from '../quiz-bank'
import { EXAM_QUESTIONS } from '../exam-bank'
import { CHAPTER_TITLE_EN, localizeQuestion } from '../quiz-bank-en.ts'
import { langOf, localePrefix, uiOf } from '../i18n.ts'
import {
  buildBadgeSvg,
  drawLevelExam,
  EXAM_SIZE,
  LEVELS,
  levelFor,
  PRACTICE_CHECKS,
  certLevelLabel,
  practiceChecksOf,
  practiceTaskOf,
  practiceUnlocked,
  scoreParts,
  SITUATION_SIZE,
  type ExamItem,
} from '../quiz'
import { loadProgress, progress } from '../progress-store'

type Stage = 'intro' | 'exam' | 'result'

// some strings carry <strong> and are rendered with v-html: pass only numbers and constants, never the reader's name
const UI = uiOf('cert')

const { lang: siteLang } = useData()
const lang = computed(() => langOf(siteLang.value))
const ui = computed(() => UI[lang.value])
const levelLabel = (l: (typeof LEVELS)[number]) => certLevelLabel(l.level, lang.value)
const practiceTask = computed(() => practiceTaskOf(lang.value))
const practiceChecks = computed(() => practiceChecksOf(lang.value))
const chapterTitle = (n: number) => (lang.value === 'en' ? (CHAPTER_TITLE_EN[n] ?? CHAPTERS[n].title) : CHAPTERS[n].title)

const stage = ref<Stage>('intro')
const items = ref<ExamItem[]>([])
const picks = ref<(number | null)[]>([])
const name = ref('')
const saveError = ref(false)

const practice = ref<boolean[]>(PRACTICE_CHECKS.map(() => false))

const answered = computed(() => picks.value.filter((p) => p !== null).length)
const score = computed(() => scoreParts(items.value, picks.value))
const practiceDone = computed(() => practice.value.every(Boolean))
const level = computed(() => levelFor(score.value, practiceDone.value))
const levelInfo = computed(() => LEVELS.find((l) => l.level === level.value))
const showPractice = computed(() => practiceUnlocked(score.value))
const levelRule = (l: (typeof LEVELS)[number]) =>
  [
    ui.value.ruleTotal(Math.ceil(l.min * EXAM_SIZE)),
    l.minSituation > 0 ? ui.value.ruleSituation(Math.ceil(l.minSituation * SITUATION_SIZE)) : '',
    l.needsPractice ? ui.value.rulePractice : '',
  ]
    .filter(Boolean)
    .join(', ')
const kindLabel = (item: ExamItem) => ('kind' in item.question && item.question.kind === 'situation' ? ui.value.situation : ui.value.concept)
const wrongItems = computed(() => items.value.filter((item, i) => picks.value[i] !== item.answer))

const today = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
const badgeDate = ref('')
const badgeSvg = computed(() =>
  level.value ? buildBadgeSvg({ name: name.value, level: level.value, ...score.value, date: badgeDate.value, lang: lang.value }) : '',
)

function start() {
  // questions are drawn in the page language; answer indexes are shared with the Korean bank
  items.value = drawLevelExam(EXAM_QUESTIONS.map((q) => localizeQuestion(q, lang.value)), Math.random)
  picks.value = items.value.map(() => null)
  practice.value = PRACTICE_CHECKS.map(() => false)
  saveError.value = false
  goTo('exam')
}

onMounted(loadProgress)

function submit() {
  badgeDate.value = today()
  // start from the saved nickname; the reader can still change it below
  if (name.value.trim() === '') name.value = progress.value.nickname
  goTo('result')
}

// the clicked button disappears with the stage, so focus the container instead of losing focus
async function goTo(next: Stage) {
  stage.value = next
  await nextTick()
  const box = document.getElementById('cert-exam')
  box?.focus({ preventScroll: true })
  box?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// draw the SVG onto a canvas so the reader gets a PNG that any messenger can show
async function savePng() {
  saveError.value = false
  try {
    const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(badgeSvg.value)}`
    const img = new Image()
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = () => reject(new Error('badge image failed to load'))
      img.src = url
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
    link.download = `hello-ai-level-${level.value}.png`
    document.body.appendChild(link)
    link.click()
    link.remove()
    // some browsers start the download asynchronously; revoking right away can leave an empty file
    setTimeout(() => URL.revokeObjectURL(href), 10_000)
  } catch (err) {
    console.error('badge download failed', err)
    saveError.value = true
  }
}
</script>

<template>
  <div id="cert-exam" class="ce" tabindex="-1">
    <template v-if="stage === 'intro'">
      <p v-html="ui.intro(EXAM_SIZE, EXAM_SIZE - SITUATION_SIZE, SITUATION_SIZE)" />
      <table class="ce-grades">
        <thead><tr><th>{{ ui.level }}</th><th>{{ ui.rule }}</th></tr></thead>
        <tbody>
          <tr v-for="l in LEVELS" :key="l.level">
            <td><span class="ce-dot" :style="{ background: l.color }" />{{ levelLabel(l) }}</td>
            <td>{{ levelRule(l) }}</td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="ce-primary" @click="start">{{ ui.start }}</button>
    </template>

    <template v-else-if="stage === 'exam'">
      <ol class="ce-list">
        <li v-for="(item, qi) in items" :key="item.question.id" class="ce-q">
          <p class="ce-chapter">{{ kindLabel(item) }} · {{ chapterTitle(item.question.chapter) }}</p>
          <p :id="`ce-q${qi}`" class="ce-prompt">{{ item.question.prompt }}</p>
          <div class="ce-choices" role="radiogroup" :aria-labelledby="`ce-q${qi}`">
            <label v-for="(choice, ci) in item.choices" :key="ci" :class="{ on: picks[qi] === ci }">
              <input v-model="picks[qi]" type="radio" :name="`q${qi}`" :value="ci" />
              {{ choice }}
            </label>
          </div>
        </li>
      </ol>
      <div class="ce-submit">
        <span>{{ ui.answered(answered, items.length) }}</span>
        <button type="button" class="ce-primary" :disabled="answered < items.length" @click="submit">{{ ui.submit }}</button>
      </div>
      <p v-if="answered < items.length" class="ce-note">{{ ui.answerAll }}</p>
    </template>

    <template v-else>
      <p class="ce-score" v-html="ui.score(score.total, score.correct, score.situationTotal, score.situationCorrect)" />

      <fieldset v-if="showPractice" class="ce-practice">
        <legend>{{ ui.practiceTitle }}</legend>
        <p>{{ ui.practiceLead }} {{ practiceTask }}</p>
        <label v-for="(check, i) in PRACTICE_CHECKS" :key="i">
          <input v-model="practice[i]" type="checkbox" />
          <span>{{ practiceChecks[i].text }} <span class="ce-from">({{ practiceChecks[i].chapter }})</span></span>
        </label>
        <p class="ce-note">{{ ui.practiceNote }}</p>
      </fieldset>

      <div v-if="level && levelInfo" class="ce-badge">
        <p role="status" v-html="ui.myLevel(levelLabel(levelInfo), levelInfo.color)" />
        <label class="ce-name">
          <span>{{ ui.nameLabel }}</span>
          <input v-model="name" type="text" maxlength="20" :placeholder="ui.namePlaceholder" />
        </label>
        <img class="ce-badge-img" :src="`data:image/svg+xml;charset=utf-8,${encodeURIComponent(badgeSvg)}`" :alt="ui.badgeAlt(levelLabel(levelInfo))" />
        <button type="button" class="ce-primary" @click="savePng">{{ ui.savePng }}</button>
        <p v-if="saveError" class="ce-error" role="alert">{{ ui.saveError }}</p>
      </div>
      <p v-else>{{ ui.noBadge(Math.ceil(LEVELS[LEVELS.length - 1].min * EXAM_SIZE)) }}</p>

      <template v-if="wrongItems.length">
        <h3>{{ ui.review }}</h3>
        <ul class="ce-review">
          <li v-for="item in wrongItems" :key="item.question.id">
            <p class="ce-prompt">{{ item.question.prompt }}</p>
            <p>{{ ui.answer }} <strong>{{ item.choices[item.answer] }}</strong></p>
            <p class="ce-explain">{{ item.question.explain }}</p>
            <a :href="withBase(`${localePrefix(lang)}${CHAPTERS[item.question.chapter].link}.html`)">{{ ui.reread(chapterTitle(item.question.chapter)) }}</a>
          </li>
        </ul>
      </template>

      <button type="button" class="ce-secondary" @click="start">{{ ui.retry }}</button>
    </template>

    <p class="ce-privacy">{{ ui.privacy }}</p>
  </div>
</template>

<style scoped>
.ce { border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 16px 20px; margin: 16px 0; background: var(--vp-c-bg-soft); scroll-margin-top: 80px; }
.ce:focus { outline: none; }
.ce p { margin: 6px 0; }
.ce-grades { margin: 12px 0; }
.ce-dot { display: inline-block; width: 12px; height: 12px; border-radius: 50%; margin-right: 6px; vertical-align: -1px; }
.ce button { border-radius: 8px; padding: 6px 16px; font-size: 15px; cursor: pointer; }
.ce-primary { border: 1px solid var(--vp-button-brand-border); background: var(--vp-button-brand-bg); color: var(--vp-button-brand-text); font-weight: 600; }
.ce-primary:disabled { opacity: 0.5; cursor: not-allowed; }
.ce-secondary { margin-top: 16px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1); }
.ce-list { padding-left: 1.4em; }
.ce-q { margin: 0 0 20px; }
.ce-chapter { font-size: 12px; color: var(--vp-c-text-3); }
.ce-prompt { font-weight: 600; line-height: 1.6; }
.ce-choices { display: flex; flex-direction: column; gap: 6px; }
.ce-choices label { display: flex; gap: 8px; align-items: flex-start; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 8px 12px; font-size: 14px; line-height: 1.5; background: var(--vp-c-bg); cursor: pointer; }
.ce-choices label.on { border-color: var(--vp-c-brand-1); }
.ce-choices input { margin-top: 4px; }
.ce-submit { position: sticky; bottom: 0; display: flex; gap: 12px; align-items: center; justify-content: space-between; padding: 10px 0; background: var(--vp-c-bg-soft); border-top: 1px solid var(--vp-c-divider); }
.ce-note, .ce-privacy { font-size: 12px; color: var(--vp-c-text-3); }
.ce-privacy { margin-top: 16px !important; }
.ce-score { font-size: 18px; }
.ce-badge { display: flex; flex-direction: column; gap: 10px; align-items: flex-start; margin: 12px 0 20px; }
.ce-name { display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: var(--vp-c-text-2); }
.ce-name input { width: 240px; max-width: 100%; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 6px 10px; font-size: 15px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }
.ce-badge-img { width: 100%; max-width: 560px; height: auto; border-radius: 12px; }
.ce-error { color: var(--vp-c-danger-1); font-size: 13px; }
.ce-practice { margin: 12px 0; padding: 12px 14px; border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg); }
.ce-practice legend { padding: 0 6px; font-weight: 700; }
.ce-practice label { display: flex; gap: 8px; align-items: flex-start; margin: 6px 0; font-size: 14px; line-height: 1.6; cursor: pointer; }
.ce-practice input { margin-top: 5px; }
.ce-from { color: var(--vp-c-text-2); font-size: 12px; }
.ce-review { padding-left: 1.2em; }
.ce-review li { margin-bottom: 16px; }
.ce-explain { font-size: 14px; color: var(--vp-c-text-2); }
</style>
