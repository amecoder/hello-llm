<script setup lang="ts">
// Nickname form and reading progress, shown on the intro page and the table of contents.
import { computed, nextTick, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { STAGE_TITLE_EN, TRANSLATED_STAGES, langOf, localePrefix, type Lang } from '../i18n.ts'
import { CHAPTER_TITLE_EN } from '../quiz-bank-en.ts'
import { CHAPTERS } from '../quiz-bank'
import { setNickname, summarize } from '../progress.ts'
import { chaptersOf, STAGES } from '../stages.ts'
import {
  CHAPTER_NUMBERS,
  clearProgress,
  loadProgress,
  progress,
  progressLoaded,
  saveProgress,
  storageBlocked,
} from '../progress-store'

const UI = {
  ko: {
    region: '내 학습 현황',
    loading: '내 학습 현황을 불러오는 중…',
    ask: '닉네임을 정하고 시작해 보세요',
    optional: '(건너뛰어도 됩니다)',
    placeholder: '예: 하늘',
    save: '저장',
    hint: '이해도 확인 시험의 레벨 배지에 이 이름이 들어갑니다. 실명이 아니어도 됩니다.',
    hello: '님, 반가워요.',
    rename: '닉네임 바꾸기',
    count: (total: number, done: number) => `${total}장 중 ${done}장`,
    countAfter: '을 다 읽었어요.',
    barLabel: (stage: string) => `${stage} 읽은 장 수`,
    read: '✓ 읽음',
    next: '다음에 읽을 장:',
    allDone: '모든 장을 읽었어요.',
    examBefore: ' ',
    exam: '이해도 확인 시험',
    examAfter: '으로 내 AI 이해 레벨을 확인해 보세요.',
    note1: '닉네임·읽음 표시·레벨 시험 합격 기록은 ',
    noteStrong: '이 브라우저에만',
    note2: ' 저장되고 어디로도 보내지지 않습니다. 그래서 다른 기기나 다른 브라우저에서는 이어지지 않습니다.',
    blocked: ' 지금은 브라우저가 저장을 막고 있어 페이지를 닫으면 사라집니다.',
    reset: '진행 현황 초기화',
    confirm: '닉네임·읽음 표시·레벨 시험 합격 기록을 모두 지울까요? 되돌릴 수 없습니다.',
  },
  en: {
    region: 'My progress',
    loading: 'Loading your progress…',
    ask: 'Pick a nickname to get started',
    optional: '(you can skip this)',
    placeholder: 'e.g. Sky',
    save: 'Save',
    hint: "This name goes on the level badge of the understanding check. It doesn't have to be your real name.",
    hello: ', nice to see you.',
    rename: 'Change nickname',
    count: (total: number, done: number) => `${done} of ${total} chapters`,
    countAfter: ' read.',
    barLabel: (stage: string) => `Chapters read in ${stage}`,
    read: '✓ Read',
    next: 'Next to read:',
    allDone: "You've read every chapter.",
    examBefore: ' Check your AI level with the ',
    exam: 'understanding check',
    examAfter: '.',
    note1: 'Your nickname, read marks and level test passes are saved ',
    noteStrong: 'only in this browser',
    note2: " and never sent anywhere. So they don't carry over to another device or browser.",
    blocked: ' Your browser is blocking storage right now, so this disappears when you close the page.',
    reset: 'Reset progress',
    confirm: 'Delete your nickname, read marks and level test passes? This cannot be undone.',
  },
} satisfies Record<Lang, Record<string, unknown>>

const { lang: siteLang } = useData()
const lang = computed(() => langOf(siteLang.value))
const ui = computed(() => UI[lang.value])
const prefix = computed(() => localePrefix(lang.value))
// chapter titles follow the page language; untranslated chapters keep the Korean title
function chapterTitle(n: number): string {
  return lang.value === 'en' ? (CHAPTER_TITLE_EN[n] ?? CHAPTERS[n].title) : CHAPTERS[n].title
}

const draft = ref('')
const editing = ref(false)
// no nickname yet always means the form, whichever page the reader came from
const showForm = computed(() => editing.value || progress.value.nickname === '')
const nameInput = ref<HTMLInputElement>()
const changeBtn = ref<HTMLButtonElement>()
// one block per stage that has chapters
const stages = computed(() =>
  STAGES.filter((stage) => lang.value === 'ko' || TRANSLATED_STAGES[lang.value].includes(stage.id))
    .map((stage) => {
      const chapters = chaptersOf(stage.id, CHAPTER_NUMBERS)
      const status = summarize(progress.value, chapters)
      const title = lang.value === 'en' ? STAGE_TITLE_EN[stage.id] : stage.title
      return { stage, title, chapters, status, next: status.next }
    })
    .filter((s) => s.chapters.length > 0),
)

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
  if (!window.confirm(ui.value.confirm)) return
  clearProgress()
  draft.value = ''
  editing.value = false
  await nextTick()
  nameInput.value?.focus()
}
</script>

<template>
  <section class="mp" :aria-label="ui.region">
    <p v-if="!progressLoaded" class="mp-loading" role="status">{{ ui.loading }}</p>
    <template v-else>
      <form v-if="showForm" class="mp-name" @submit.prevent="saveName">
        <label for="mp-nickname">{{ ui.ask }} <span class="mp-opt">{{ ui.optional }}</span></label>
        <div class="mp-row">
          <input id="mp-nickname" ref="nameInput" v-model="draft" type="text" maxlength="20" :placeholder="ui.placeholder" autocomplete="nickname" />
          <button type="submit" class="mp-btn">{{ ui.save }}</button>
        </div>
        <p class="mp-hint">{{ ui.hint }}</p>
      </form>
      <p v-else class="mp-hello">
        <strong>{{ progress.nickname }}</strong>{{ ui.hello }}
        <button ref="changeBtn" type="button" class="mp-link" @click="editName">{{ ui.rename }}</button>
      </p>

      <div v-for="s in stages" :key="s.stage.id" class="mp-status">
        <p><a :href="withBase(prefix + s.stage.link)">{{ s.title }}</a> — <strong>{{ ui.count(s.status.total, s.status.done) }}</strong>{{ ui.countAfter }}</p>
        <div class="mp-bar" role="progressbar" :aria-valuenow="s.status.done" aria-valuemin="0" :aria-valuemax="s.status.total" :aria-label="ui.barLabel(s.title)">
          <span :style="{ width: `${(s.status.done / s.status.total) * 100}%` }" />
        </div>
        <ol class="mp-list">
          <li v-for="n in s.chapters" :key="n" :class="{ read: progress.read.includes(n) }">
            <a :href="withBase(prefix + CHAPTERS[n].link)">{{ chapterTitle(n) }}</a>
            <span v-if="progress.read.includes(n)" class="mp-check">{{ ui.read }}</span>
          </li>
        </ol>
        <p v-if="s.next !== null">
          {{ ui.next }} <a :href="withBase(prefix + CHAPTERS[s.next].link)">{{ chapterTitle(s.next) }}</a>
        </p>
        <p v-else-if="s.stage.id === 'common'">
          {{ ui.allDone }}{{ ui.examBefore }}<a :href="withBase(prefix + '/guide/00-common/certificate')">{{ ui.exam }}</a>{{ ui.examAfter }}
        </p>
        <p v-else>{{ ui.allDone }}</p>
      </div>

      <p class="mp-note">
        {{ ui.note1 }}<strong>{{ ui.noteStrong }}</strong>{{ ui.note2 }}
        <span v-if="storageBlocked">{{ ui.blocked }}</span>
      </p>
      <button type="button" class="mp-reset" @click="clearAll">{{ ui.reset }}</button>
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
