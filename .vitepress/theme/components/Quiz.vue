<script setup lang="ts">
// One-question check at the end of a section. Answers stay in the page; nothing is saved or sent.
import { computed, nextTick, ref } from 'vue'
import { useData } from 'vitepress'
import { QUESTIONS } from '../quiz-bank'
import { localizeQuestion } from '../translations/index.ts'
import { QUIZ_TEXT, langOf } from '../i18n.ts'

const props = defineProps<{ id: string }>()

const { lang } = useData()
const t = computed(() => QUIZ_TEXT[langOf(lang.value)])
// English pages show the translated text; answer index is shared with the Korean source
const question = computed(() => {
  const q = QUESTIONS.find((item) => item.id === props.id)
  return q && localizeQuestion(q, langOf(lang.value))
})
const picked = ref<number | null>(null)
const correct = computed(() => question.value !== undefined && picked.value === question.value.answer)
const retryButton = ref<HTMLButtonElement | null>(null)
const firstChoice = ref<HTMLButtonElement[]>([])

// choices become disabled after a pick, so move keyboard focus somewhere that still exists
async function pick(i: number) {
  picked.value = i
  await nextTick()
  retryButton.value?.focus()
}

async function retry() {
  picked.value = null
  await nextTick()
  firstChoice.value[0]?.focus()
}
</script>

<template>
  <div v-if="question" class="qz">
    <p class="qz-label">{{ t.label }}</p>
    <p :id="`qz-${id}`" class="qz-prompt">{{ question.prompt }}</p>
    <div class="qz-choices" role="group" :aria-labelledby="`qz-${id}`">
      <button
        v-for="(choice, i) in question.choices"
        :key="i"
        ref="firstChoice"
        type="button"
        :class="{
          right: picked !== null && i === question.answer,
          wrong: picked === i && i !== question.answer,
        }"
        :aria-pressed="picked === i"
        :disabled="picked !== null"
        @click="pick(i)"
      >
        {{ choice }}
        <span v-if="picked !== null && i === question.answer" class="qz-mark">{{ t.right }}</span>
        <span v-else-if="picked === i" class="qz-mark">{{ t.mine }}</span>
      </button>
    </div>
    <!-- live region stays mounted so screen readers announce the result when it fills in -->
    <div class="qz-result" aria-live="polite">
      <template v-if="picked !== null">
        <p :class="correct ? 'ok' : 'no'">
          {{ correct ? t.correct : t.wrong(question.choices[question.answer]) }}
        </p>
        <p class="qz-explain">{{ question.explain }}</p>
        <button ref="retryButton" type="button" class="qz-retry" @click="retry">{{ t.retry }}</button>
      </template>
    </div>
  </div>
  <p v-else class="qz-missing">{{ t.missing }} {{ id }}</p>
</template>

<style scoped>
.qz { border: 1px solid var(--vp-c-divider); border-left: 4px solid var(--vp-c-brand-1); border-radius: 10px; padding: 14px 16px; margin: 20px 0; background: var(--vp-c-bg-soft); }
.qz p { margin: 0; }
.qz-label { font-size: 13px; font-weight: 700; color: var(--vp-c-brand-1); }
.qz-prompt { margin: 4px 0 10px !important; font-weight: 600; line-height: 1.6; }
.qz-choices { display: flex; flex-direction: column; gap: 6px; }
.qz-choices button { text-align: left; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 8px 12px; font-size: 14px; line-height: 1.5; background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; }
.qz-choices button:hover:not(:disabled) { border-color: var(--vp-c-brand-1); }
.qz-choices button:disabled { cursor: default; }
.qz-choices button.right { border-color: var(--vp-c-green-1); background: var(--vp-c-green-soft); }
.qz-choices button.wrong { border-color: var(--vp-c-red-1); background: var(--vp-c-red-soft); }
.qz-mark { margin-left: 6px; font-size: 12px; font-weight: 700; white-space: nowrap; }
.qz-result { margin-top: 10px; display: flex; flex-direction: column; gap: 4px; }
.qz-result:empty { margin-top: 0; }
.qz-result .ok { font-weight: 700; color: var(--vp-c-green-1); }
.qz-result .no { font-weight: 700; color: var(--vp-c-red-1); }
.qz-explain { font-size: 14px; line-height: 1.6; color: var(--vp-c-text-2); }
.qz-retry { align-self: flex-start; margin-top: 4px; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 3px 10px; font-size: 13px; background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; }
.qz-missing { color: var(--vp-c-danger-1); }
</style>
