<script setup lang="ts">
// "I've read this chapter" button at the end of each chapter.
import { computed, nextTick, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { DONE_TEXT, TRANSLATED_STAGES, langOf, localePrefix, stageTitle } from '../i18n.ts'
import { CHAPTER_TITLE_EN } from '../quiz-bank-en.ts'
import { CHAPTERS } from '../quiz-bank'
import { summarize, toggleRead } from '../progress.ts'
import { CHAPTER_NUMBERS, loadProgress, progress, progressLoaded, saveProgress, storageBlocked } from '../progress-store'
import { chaptersOf, stageOf } from '../stages.ts'

const props = defineProps<{ chapter: number }>()

const isRead = computed(() => progress.value.read.includes(props.chapter))
// count only the chapters of this chapter's stage (common guide, ChatGPT guide, ...)
const stage = computed(() => stageOf(props.chapter))
const status = computed(() => summarize(progress.value, chaptersOf(stage.value.id, CHAPTER_NUMBERS)))
const { lang } = useData()
const lg = computed(() => langOf(lang.value))
const t = computed(() => DONE_TEXT[lg.value])
const stageName = computed(() => stageTitle(stage.value, lg.value))
// links and titles follow the page language; untranslated chapters keep the Korean title
const nextChapter = computed(() => {
  if (status.value.next === null) return null
  const c = CHAPTERS[status.value.next]
  if (lg.value === 'ko') return c
  // a stage without an English version links to the Korean page
  const translated = TRANSLATED_STAGES[lg.value].includes(stage.value.id)
  return { title: CHAPTER_TITLE_EN[status.value.next] ?? c.title, link: (translated ? localePrefix(lg.value) : '') + c.link }
})

onMounted(loadProgress)

const markBtn = ref<HTMLButtonElement>()
const undoBtn = ref<HTMLButtonElement>()

// the clicked button is replaced by the other one, so move keyboard focus along with it
async function toggle() {
  saveProgress(toggleRead(progress.value, props.chapter))
  await nextTick()
  ;(isRead.value ? undoBtn : markBtn).value?.focus()
}
</script>

<template>
  <div class="cd" :class="{ done: isRead }">
    <p class="cd-ask" role="status">
      <template v-if="!isRead">{{ t.ask }}</template>
      <template v-else>{{ t.marked(stageName, status.total, status.done) }}</template>
    </p>
    <button v-if="!isRead" ref="markBtn" type="button" class="cd-btn" :disabled="!progressLoaded" @click="toggle">{{ t.mark }}</button>
    <template v-else>
      <p v-if="nextChapter && status.next !== chapter + 1" class="cd-next">
        {{ t.unread }} <a :href="withBase(nextChapter.link)">{{ nextChapter.title }}</a>
      </p>
      <button ref="undoBtn" type="button" class="cd-undo" @click="toggle">{{ t.undo }}</button>
    </template>
    <p class="cd-note">
      {{ t.note }} <a :href="withBase(localePrefix(lg) + '/guide/')">{{ t.toc }}</a>{{ t.tocAfter }}
      <span v-if="storageBlocked">{{ t.blocked }}</span>
    </p>
  </div>
</template>

<style scoped>
.cd { border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 14px 16px; margin: 28px 0 16px; background: var(--vp-c-bg-soft); }
.cd.done { border-color: var(--vp-c-green-2); background: var(--vp-c-green-soft); }
.cd p { margin: 0; }
.cd-ask { font-weight: 700; line-height: 1.6; }
.cd-next { margin-top: 4px !important; font-size: 14px; }
.cd-btn { margin-top: 8px; border: 1px solid var(--vp-button-brand-border); border-radius: 8px; padding: 6px 14px; font-size: 14px; font-weight: 600; background: var(--vp-button-brand-bg); color: var(--vp-button-brand-text); cursor: pointer; }
.cd-btn:disabled { opacity: 0.5; cursor: default; }
.cd-undo { margin-top: 8px; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 3px 10px; font-size: 13px; background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; }
.cd-note { margin-top: 10px !important; font-size: 13px; line-height: 1.6; color: var(--vp-c-text-2); }
</style>
