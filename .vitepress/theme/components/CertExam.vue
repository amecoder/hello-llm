<script setup lang="ts">
// Level check: draw exam-only questions, score concept and situation answers, and hand out a level badge.
// Everything runs in the browser — no answers, names or scores leave the page or get stored;
// the only stored value used here is the nickname the reader saved (progress-store).
import { computed, nextTick, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { CHAPTERS } from '../quiz-bank'
import { EXAM_QUESTIONS } from '../exam-bank'
import { CHAPTER_TITLE_EN, localizeQuestion } from '../quiz-bank-en.ts'
import { langOf, localePrefix } from '../i18n.ts'
import {
  buildBadgeSvg,
  drawLevelExam,
  EXAM_SIZE,
  LEVELS,
  levelFor,
  PRACTICE_CHECKS,
  PRACTICE_TASK,
  PRACTICE_TASK_EN,
  practiceUnlocked,
  scoreParts,
  SITUATION_SIZE,
  type ExamItem,
} from '../quiz'
import { loadProgress, progress } from '../progress-store'

type Stage = 'intro' | 'exam' | 'result'

// some strings carry <strong> and are rendered with v-html: pass only numbers and constants, never the reader's name
const UI = {
  ko: {
    intro: (size: number, concept: number, situation: number) =>
      `1~9장 내용으로 <strong>${size}문제</strong>를 냅니다. 뜻을 묻는 <strong>개념 문제</strong> ${concept}개와, 실제 장면을 보여 주고 어떻게 할지 묻는 <strong>상황 판단 문제</strong> ${situation}개입니다. 볼 때마다 문제와 보기 순서가 바뀝니다.`,
    level: '레벨',
    rule: '받는 조건',
    ruleTotal: (n: number) => `전체 ${n}문제 이상`,
    ruleSituation: (n: number) => `상황 판단 ${n}문제 이상`,
    rulePractice: '실습 과제 자기 점검 완료',
    start: '시험 시작하기',
    situation: '상황 판단',
    concept: '개념',
    answered: (a: number, t: number) => `${a} / ${t} 문제 답함`,
    submit: '채점하기',
    answerAll: '모든 문제에 답하면 채점할 수 있습니다.',
    score: (t: number, c: number, st: number, sc: number) =>
      `${t}문제 중 <strong>${c}문제</strong>를 맞혔습니다. (상황 판단 ${st}문제 중 ${sc}문제)`,
    practiceTitle: '상급 레벨 실습 과제',
    practiceLead: '점수는 상급 조건을 넘었습니다. 마지막으로 실제로 써 보는 과제가 남았습니다.',
    practiceNote:
      '스스로 확인하는 점검표입니다. 모두 체크하면 아래 배지가 상급 레벨로 바뀝니다. 점수는 저장되지 않으므로 페이지를 닫으면 사라집니다. 지금 과제를 하지 않을 거라면 아래 중급 배지를 먼저 저장하고, 과제를 마친 뒤 시험을 다시 보면 상급을 받을 수 있습니다.',
    myLevel: (label: string, color: string) => `내 AI 이해 레벨은 <strong style="color: ${color}">${label}</strong>입니다!`,
    nameLabel: '배지에 넣을 이름 (비워 두면 "학습자". 첫 화면에서 정한 닉네임이 미리 들어갑니다)',
    namePlaceholder: '예: 김하늘',
    badgeAlt: (label: string) => `이해도 확인 ${label} 레벨 배지`,
    savePng: '배지 이미지 저장 (PNG)',
    saveError: 'PNG로 저장하지 못했습니다. 위 배지 그림을 길게 누르거나 오른쪽 클릭해서 저장할 수 있습니다(이때는 SVG 그림 파일로 저장됩니다).',
    noBadge: (n: number) => `레벨 배지는 ${n}문제 이상 맞히면 받을 수 있습니다. 아래 틀린 문제를 복습한 뒤 다시 도전해 보세요.`,
    review: '틀린 문제 다시 보기',
    answer: '정답:',
    reread: (title: string) => `${title} 다시 읽기`,
    retry: '새 문제로 다시 보기',
    privacy: '답과 점수는 이 브라우저 안에서만 계산되고 어디에도 저장되거나 전송되지 않습니다. 페이지를 닫으면 사라집니다. 이름 칸에 미리 들어가는 닉네임만 이 브라우저에 저장되어 있습니다.',
  },
  en: {
    intro: (size: number, concept: number, situation: number) =>
      `You get <strong>${size} questions</strong> on Chapters 1–9: ${concept} <strong>concept questions</strong> about what things mean, and ${situation} <strong>situation questions</strong> that show a real scene and ask what you would do. The questions and the order of choices change every time.`,
    level: 'Level',
    rule: 'What you need',
    ruleTotal: (n: number) => `${n}+ correct overall`,
    ruleSituation: (n: number) => `${n}+ situation questions correct`,
    rulePractice: 'practice task self-check done',
    start: 'Start the test',
    situation: 'Situation',
    concept: 'Concept',
    answered: (a: number, t: number) => `${a} / ${t} answered`,
    submit: 'Grade my answers',
    answerAll: 'Answer every question to get graded.',
    score: (t: number, c: number, st: number, sc: number) =>
      `You got <strong>${c} of ${t}</strong> right. (${sc} of ${st} situation questions)`,
    practiceTitle: 'Advanced level practice task',
    practiceLead: 'Your score clears the advanced level. One last task is left: actually using it.',
    practiceNote:
      'This is a checklist you mark yourself. Check every item and the badge below turns Advanced. Scores are not saved, so they disappear when you close the page. If you are not doing the task now, save the Intermediate badge below first, then take the test again after the task to get Advanced.',
    myLevel: (label: string, color: string) => `Your AI skill level is <strong style="color: ${color}">${label}</strong>!`,
    nameLabel: 'Name on the badge (blank means "Learner"; the nickname you set on the home page is filled in for you)',
    namePlaceholder: 'e.g. Sky Kim',
    badgeAlt: (label: string) => `Understanding Check ${label} level badge`,
    savePng: 'Save badge image (PNG)',
    saveError: "Couldn't save as PNG. You can long-press or right-click the badge above to save it (it saves as an SVG image).",
    noBadge: (n: number) => `You get a level badge with ${n} or more correct. Review the questions you missed below and try again.`,
    review: 'Review the questions you missed',
    answer: 'Answer:',
    reread: (title: string) => `Reread ${title}`,
    retry: 'Try again with new questions',
    privacy: 'Your answers and score are worked out only inside this browser and are never saved or sent anywhere. They disappear when you close the page. Only the nickname filled into the name box is stored in this browser.',
  },
}

const { lang: siteLang } = useData()
const lang = computed(() => langOf(siteLang.value))
const ui = computed(() => UI[lang.value])
const levelLabel = (l: (typeof LEVELS)[number]) => (lang.value === 'en' ? l.labelEn : l.label)
const practiceTask = computed(() => (lang.value === 'en' ? PRACTICE_TASK_EN : PRACTICE_TASK))
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
          <span>{{ lang === 'en' ? check.textEn : check.text }} <span class="ce-from">({{ lang === 'en' ? check.chapterEn : check.chapter }})</span></span>
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
