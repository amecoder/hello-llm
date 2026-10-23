<script setup lang="ts">
// Nickname form and reading progress, shown on the intro page and the table of contents.
import { computed, nextTick, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { CHAPTERS } from '../quiz-bank'
import { setNickname, summarize } from '../progress.ts'
import {
  CHAPTER_NUMBERS,
  clearProgress,
  loadProgress,
  progress,
  progressLoaded,
  saveProgress,
  storageBlocked,
} from '../progress-store'

const draft = ref('')
const editing = ref(false)
// no nickname yet always means the form, whichever page the reader came from
const showForm = computed(() => editing.value || progress.value.nickname === '')
const nameInput = ref<HTMLInputElement>()
const changeBtn = ref<HTMLButtonElement>()
const status = computed(() => summarize(progress.value, CHAPTER_NUMBERS))
const nextChapter = computed(() => (status.value.next === null ? null : CHAPTERS[status.value.next]))

onMounted(loadProgress)

// the form and the greeting replace each other, so keep keyboard focus on what is shown
async function saveName() {
  saveProgress(setNickname(progress.value, draft.value))
  editing.value = false
  await nextTick()
  ;(showForm.value ? nameInput : changeBtn).value?.focus()
}

async function editName() {
  draft.value = progress.value.nickname
  editing.value = true
  await nextTick()
  nameInput.value?.focus()
}

async function clearAll() {
  if (!window.confirm('닉네임과 읽음 표시를 모두 지울까요? 되돌릴 수 없습니다.')) return
  clearProgress()
  draft.value = ''
  editing.value = false
  await nextTick()
  nameInput.value?.focus()
}
</script>

<template>
  <section class="mp" aria-label="내 학습 현황">
    <p v-if="!progressLoaded" class="mp-loading" role="status">내 학습 현황을 불러오는 중…</p>
    <template v-else>
      <form v-if="showForm" class="mp-name" @submit.prevent="saveName">
        <label for="mp-nickname">닉네임을 정하고 시작해 보세요 <span class="mp-opt">(건너뛰어도 됩니다)</span></label>
        <div class="mp-row">
          <input id="mp-nickname" ref="nameInput" v-model="draft" type="text" maxlength="20" placeholder="예: 하늘" autocomplete="nickname" />
          <button type="submit" class="mp-btn">저장</button>
        </div>
        <p class="mp-hint">이해도 확인 시험의 레벨 배지에 이 이름이 들어갑니다. 실명이 아니어도 됩니다.</p>
      </form>
      <p v-else class="mp-hello">
        <strong>{{ progress.nickname }}</strong>님, 반가워요.
        <button ref="changeBtn" type="button" class="mp-link" @click="editName">닉네임 바꾸기</button>
      </p>

      <div class="mp-status">
        <p><strong>{{ status.total }}장 중 {{ status.done }}장</strong>을 다 읽었어요.</p>
        <div class="mp-bar" role="progressbar" :aria-valuenow="status.done" aria-valuemin="0" :aria-valuemax="status.total" aria-label="읽은 장 수">
          <span :style="{ width: `${(status.done / status.total) * 100}%` }" />
        </div>
        <ol class="mp-list">
          <li v-for="n in CHAPTER_NUMBERS" :key="n" :class="{ read: progress.read.includes(n) }">
            <a :href="withBase(CHAPTERS[n].link)">{{ CHAPTERS[n].title }}</a>
            <span v-if="progress.read.includes(n)" class="mp-check">✓ 읽음</span>
          </li>
        </ol>
        <p v-if="nextChapter">
          다음에 읽을 장: <a :href="withBase(nextChapter.link)">{{ nextChapter.title }}</a>
        </p>
        <p v-else>
          모든 장을 읽었어요. <a :href="withBase('/guide/00-common/certificate')">이해도 확인 시험</a>으로 내 AI 이해 레벨을 확인해 보세요.
        </p>
      </div>

      <p class="mp-note">
        닉네임과 읽음 표시는 <strong>이 브라우저에만</strong> 저장되고 어디로도 보내지지 않습니다. 그래서 다른 기기나 다른 브라우저에서는 이어지지 않습니다.
        <span v-if="storageBlocked"> 지금은 브라우저가 저장을 막고 있어 페이지를 닫으면 사라집니다.</span>
      </p>
      <button type="button" class="mp-reset" @click="clearAll">진행 현황 초기화</button>
    </template>
  </section>
</template>

<style scoped>
.mp { border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 16px 18px; margin: 24px 0; background: var(--vp-c-bg-soft); }
.mp p { margin: 0; line-height: 1.7; }
.mp-loading { color: var(--vp-c-text-2); font-size: 14px; }
.mp-name label { font-weight: 700; }
.mp-opt { font-weight: 400; font-size: 13px; color: var(--vp-c-text-2); }
.mp-row { display: flex; gap: 8px; margin-top: 6px; flex-wrap: wrap; }
.mp-row input { flex: 1 1 160px; max-width: 280px; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 6px 10px; font-size: 15px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }
.mp-btn { border: 1px solid var(--vp-button-brand-border); border-radius: 8px; padding: 6px 14px; font-size: 14px; font-weight: 600; background: var(--vp-button-brand-bg); color: var(--vp-button-brand-text); cursor: pointer; }
.mp-hint { margin-top: 4px !important; font-size: 13px; color: var(--vp-c-text-2); }
.mp-link { margin-left: 6px; border: none; padding: 0; background: none; font-size: 13px; color: var(--vp-c-brand-1); text-decoration: underline; cursor: pointer; }
.mp-status { margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--vp-c-divider); }
.mp-bar { height: 8px; margin: 6px 0 10px; border-radius: 4px; background: var(--vp-c-default-soft); overflow: hidden; }
.mp-bar span { display: block; height: 100%; background: var(--vp-c-brand-1); transition: width 0.3s; }
.mp-list { margin: 0 0 8px; padding-left: 20px; font-size: 14px; }
.mp-list li { margin: 2px 0; }
.mp-list li.read a { color: var(--vp-c-text-2); }
.mp-check { margin-left: 6px; font-size: 12px; font-weight: 700; color: var(--vp-c-green-1); white-space: nowrap; }
.mp-note { margin-top: 12px !important; font-size: 13px; color: var(--vp-c-text-2); }
.mp-reset { margin-top: 10px; border: 1px solid var(--vp-c-red-2); border-radius: 8px; padding: 4px 12px; font-size: 13px; background: var(--vp-c-bg); color: var(--vp-c-red-1); cursor: pointer; }
.mp-reset:hover { background: var(--vp-c-red-soft); }
</style>
