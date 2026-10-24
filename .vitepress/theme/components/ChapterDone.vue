<script setup lang="ts">
// "I've read this chapter" button at the end of each chapter.
import { computed, nextTick, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { CHAPTERS } from '../quiz-bank'
import { summarize, toggleRead } from '../progress.ts'
import { CHAPTER_NUMBERS, loadProgress, progress, progressLoaded, saveProgress, storageBlocked } from '../progress-store'
import { chaptersOf, stageOf } from '../stages.ts'

const props = defineProps<{ chapter: number }>()

const isRead = computed(() => progress.value.read.includes(props.chapter))
// count only the chapters of this chapter's stage (common guide, ChatGPT guide, ...)
const stage = computed(() => stageOf(props.chapter))
const status = computed(() => summarize(progress.value, chaptersOf(stage.value.id, CHAPTER_NUMBERS)))
const nextChapter = computed(() => (status.value.next === null ? null : CHAPTERS[status.value.next]))

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
      <template v-if="!isRead">이 장을 다 읽었나요?</template>
      <template v-else>✓ 다 읽음으로 표시했습니다. {{ stage.title }} {{ status.total }}장 중 {{ status.done }}장을 읽었어요.</template>
    </p>
    <button v-if="!isRead" ref="markBtn" type="button" class="cd-btn" :disabled="!progressLoaded" @click="toggle">다 읽음으로 표시</button>
    <template v-else>
      <p v-if="nextChapter && status.next !== chapter + 1" class="cd-next">
        아직 안 읽은 장: <a :href="withBase(nextChapter.link)">{{ nextChapter.title }}</a>
      </p>
      <button ref="undoBtn" type="button" class="cd-undo" @click="toggle">표시 취소</button>
    </template>
    <p class="cd-note">
      기록은 이 브라우저에만 저장됩니다. 진행 현황은 <a :href="withBase('/guide/')">전체 목차</a>에서 볼 수 있어요.
      <span v-if="storageBlocked"> 지금은 브라우저가 저장을 막고 있어 페이지를 닫으면 사라집니다.</span>
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
