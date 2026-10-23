<script setup lang="ts">
// Self-check exam: draw questions from the bank, grade them, and hand out a badge image.
// Everything runs in the browser — no answers, names or scores leave the page or get stored;
// the only stored value used here is the nickname the reader saved (progress-store).
import { computed, nextTick, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { CHAPTERS, QUESTIONS } from '../quiz-bank'
import { buildBadgeSvg, drawExam, EXAM_SIZE, GRADES, gradeFor, scoreExam, type ExamItem } from '../quiz'
import { loadProgress, progress } from '../progress-store'

type Stage = 'intro' | 'exam' | 'result'

const stage = ref<Stage>('intro')
const items = ref<ExamItem[]>([])
const picks = ref<(number | null)[]>([])
const name = ref('')
const saveError = ref(false)

const answered = computed(() => picks.value.filter((p) => p !== null).length)
const correct = computed(() => scoreExam(items.value, picks.value))
const grade = computed(() => gradeFor(correct.value, items.value.length))
const gradeInfo = computed(() => GRADES.find((g) => g.grade === grade.value))
const wrongItems = computed(() => items.value.filter((item, i) => picks.value[i] !== item.answer))

const today = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
const badgeDate = ref('')
const badgeSvg = computed(() =>
  grade.value
    ? buildBadgeSvg({ name: name.value, grade: grade.value, correct: correct.value, total: items.value.length, date: badgeDate.value })
    : '',
)

function start() {
  items.value = drawExam(QUESTIONS, Math.random)
  picks.value = items.value.map(() => null)
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
    link.download = `hello-llm-badge-${grade.value}.png`
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
      <p>1~9장에서 <strong>{{ EXAM_SIZE }}문제</strong>를 뽑습니다. 장마다 2문제 이상 나오고, 볼 때마다 문제와 보기 순서가 바뀝니다.</p>
      <table class="ce-grades">
        <thead><tr><th>등급</th><th>맞힌 문제</th></tr></thead>
        <tbody>
          <tr v-for="g in GRADES" :key="g.grade">
            <td><span class="ce-dot" :style="{ background: g.color }" />{{ g.label }}</td>
            <td>{{ Math.ceil(g.min * EXAM_SIZE) }}문제 이상 ({{ g.min * 100 }}%)</td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="ce-primary" @click="start">시험 시작하기</button>
    </template>

    <template v-else-if="stage === 'exam'">
      <ol class="ce-list">
        <li v-for="(item, qi) in items" :key="item.question.id" class="ce-q">
          <p class="ce-chapter">{{ CHAPTERS[item.question.chapter].title }}</p>
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
        <span>{{ answered }} / {{ items.length }} 문제 답함</span>
        <button type="button" class="ce-primary" :disabled="answered < items.length" @click="submit">채점하기</button>
      </div>
      <p v-if="answered < items.length" class="ce-note">모든 문제에 답하면 채점할 수 있습니다.</p>
    </template>

    <template v-else>
      <p class="ce-score">{{ items.length }}문제 중 <strong>{{ correct }}문제</strong>를 맞혔습니다.</p>

      <div v-if="grade && gradeInfo" class="ce-badge">
        <p>축하합니다! <strong :style="{ color: gradeInfo.color }">{{ gradeInfo.label }}</strong> 등급입니다.</p>
        <label class="ce-name">
          <span>배지에 넣을 이름 (비워 두면 "학습자". 첫 화면에서 정한 닉네임이 미리 들어갑니다)</span>
          <input v-model="name" type="text" maxlength="20" placeholder="예: 김하늘" />
        </label>
        <img class="ce-badge-img" :src="`data:image/svg+xml;charset=utf-8,${encodeURIComponent(badgeSvg)}`" :alt="`LLM 이해 인증 ${gradeInfo.label} 배지`" />
        <button type="button" class="ce-primary" @click="savePng">배지 이미지 저장 (PNG)</button>
        <p v-if="saveError" class="ce-error" role="alert">PNG로 저장하지 못했습니다. 위 배지 그림을 길게 누르거나 오른쪽 클릭해서 저장할 수 있습니다(이때는 SVG 그림 파일로 저장됩니다).</p>
      </div>
      <p v-else>배지는 {{ Math.ceil(GRADES[GRADES.length - 1].min * EXAM_SIZE) }}문제 이상 맞히면 받을 수 있습니다. 아래 틀린 문제를 복습한 뒤 다시 도전해 보세요.</p>

      <template v-if="wrongItems.length">
        <h3>틀린 문제 다시 보기</h3>
        <ul class="ce-review">
          <li v-for="item in wrongItems" :key="item.question.id">
            <p class="ce-prompt">{{ item.question.prompt }}</p>
            <p>정답: <strong>{{ item.choices[item.answer] }}</strong></p>
            <p class="ce-explain">{{ item.question.explain }}</p>
            <a :href="withBase(`${CHAPTERS[item.question.chapter].link}.html`)">{{ CHAPTERS[item.question.chapter].title }} 다시 읽기</a>
          </li>
        </ul>
      </template>

      <button type="button" class="ce-secondary" @click="start">새 문제로 다시 보기</button>
    </template>

    <p class="ce-privacy">답·이름·점수는 이 브라우저 안에서만 계산되고 어디에도 저장되거나 전송되지 않습니다. 페이지를 닫으면 사라집니다.</p>
  </div>
</template>

<style scoped>
.ce { border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 16px 20px; margin: 16px 0; background: var(--vp-c-bg-soft); scroll-margin-top: 80px; }
.ce:focus { outline: none; }
.ce p { margin: 6px 0; }
.ce-grades { margin: 12px 0; }
.ce-dot { display: inline-block; width: 12px; height: 12px; border-radius: 50%; margin-right: 6px; vertical-align: -1px; }
.ce button { border-radius: 8px; padding: 6px 16px; font-size: 15px; cursor: pointer; }
.ce-primary { border: 1px solid var(--vp-c-brand-1); background: var(--vp-c-brand-1); color: var(--vp-c-white); font-weight: 600; }
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
.ce-review { padding-left: 1.2em; }
.ce-review li { margin-bottom: 16px; }
.ce-explain { font-size: 14px; color: var(--vp-c-text-2); }
</style>
