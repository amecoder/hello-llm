<script setup lang="ts">
// Nickname form and reading progress, shown on the intro page and the table of contents.
import { computed, nextTick, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { TRANSLATED_STAGES, langOf, localePrefix, stageTitle, uiOf } from '../i18n.ts'
import { chapterTitleOf } from '../translations/index.ts'
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

const UI = uiOf('progress')

const { lang: siteLang } = useData()
const lang = computed(() => langOf(siteLang.value))
const ui = computed(() => UI[lang.value])
const prefix = computed(() => localePrefix(lang.value))
// chapter titles follow the page language; untranslated chapters keep the Korean title
function chapterTitle(n: number): string {
  return chapterTitleOf(n, lang.value)
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
      const title = stageTitle(stage, lang.value)
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
