<script setup lang="ts">
// Interactive builder for chapter 7: fill labelled fields, get an XML or Markdown prompt.
// Runs entirely in the browser — nothing is sent anywhere.
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { useData } from 'vitepress'
import { buildPrompt, headingOf, SECTIONS, type PromptFields, type PromptMode } from '../prompt-builder'
import { langOf, uiOf } from '../i18n.ts'

const UI = uiOf('builder')

const ROWS: Record<keyof PromptFields, number> = { context: 2, document: 5, example: 2, instructions: 3, format: 2 }

const { lang: siteLang } = useData()
const lang = computed(() => langOf(siteLang.value))
const ui = computed(() => UI[lang.value])
// labels come from SECTIONS so the form and the markdown headings never drift apart
const FIELDS = computed(() =>
  SECTIONS.map((s) => ({ key: s.key, label: headingOf(s, lang.value), hint: ui.value.hints[s.key], rows: ROWS[s.key] })),
)

const emptyFields = (): PromptFields => ({ context: '', document: '', example: '', instructions: '', format: '' })

const fields = reactive<PromptFields>(emptyFields())
const mode = ref<PromptMode>('xml')
const status = ref<'idle' | 'copied' | 'failed'>('idle')
let resetTimer: ReturnType<typeof setTimeout> | undefined

const output = computed(() => buildPrompt(fields, mode.value, lang.value))

function setStatus(next: 'copied' | 'failed') {
  clearTimeout(resetTimer)
  status.value = next
  resetTimer = setTimeout(() => (status.value = 'idle'), next === 'copied' ? 2000 : 6000)
}

function fill(values: PromptFields) {
  Object.assign(fields, values)
  clearTimeout(resetTimer)
  status.value = 'idle'
}

async function copy() {
  try {
    // navigator.clipboard is undefined on non-secure origins; the throw lands in catch
    await navigator.clipboard.writeText(output.value)
    setStatus('copied')
  } catch (err) {
    console.error('clipboard write failed', err)
    setStatus('failed')
  }
}

onBeforeUnmount(() => clearTimeout(resetTimer))
</script>

<template>
  <div class="pb">
    <div class="pb-toolbar">
      <div class="pb-modes" role="group" :aria-label="ui.modes">
        <button type="button" :class="{ on: mode === 'xml' }" :aria-pressed="mode === 'xml'" @click="mode = 'xml'">{{ ui.xml }}</button>
        <button type="button" :class="{ on: mode === 'markdown' }" :aria-pressed="mode === 'markdown'" @click="mode = 'markdown'">{{ ui.markdown }}</button>
      </div>
      <div class="pb-actions">
        <button type="button" @click="fill(ui.sample)">{{ ui.fillSample }}</button>
        <button type="button" @click="fill(emptyFields())">{{ ui.clear }}</button>
      </div>
    </div>

    <div class="pb-grid">
      <div class="pb-inputs">
        <label v-for="f in FIELDS" :key="f.key" class="pb-field">
          <span class="pb-label">{{ f.label }}</span>
          <textarea v-model="fields[f.key]" :rows="f.rows" :placeholder="f.hint" />
        </label>
      </div>

      <div class="pb-output">
        <div class="pb-output-head">
          <span id="pb-output-label" class="pb-label">{{ ui.result }}</span>
          <button type="button" class="pb-copy" :disabled="!output" @click="copy">{{ status === 'copied' ? ui.copied : ui.copy }}</button>
        </div>
        <p class="pb-status" :class="{ failed: status === 'failed' }" aria-live="polite">
          <template v-if="status === 'copied'">{{ ui.copiedMsg }}</template>
          <template v-else-if="status === 'failed'">{{ ui.failedMsg }}</template>
        </p>
        <pre class="pb-pre" aria-labelledby="pb-output-label">{{ output || ui.empty }}</pre>
      </div>
    </div>

    <p class="pb-note">{{ ui.note }}</p>
  </div>
</template>

<style scoped>
.pb { border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 16px; margin: 16px 0; background: var(--vp-c-bg-soft); }
.pb-toolbar { display: flex; flex-wrap: wrap; gap: 8px; justify-content: space-between; margin-bottom: 12px; }
.pb-modes, .pb-actions { display: flex; gap: 6px; }
.pb button { border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 4px 12px; font-size: 14px; background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; }
.pb button:hover { border-color: var(--vp-c-brand-1); }
.pb button.on { background: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); color: var(--vp-c-white); }
.pb button:disabled { opacity: 0.5; cursor: not-allowed; }
.pb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 720px) { .pb-grid { grid-template-columns: 1fr; } }
.pb-inputs { display: flex; flex-direction: column; gap: 10px; }
.pb-field { display: flex; flex-direction: column; gap: 4px; }
.pb-label { font-size: 13px; font-weight: 600; color: var(--vp-c-text-2); }
.pb textarea { width: 100%; border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 8px; font-size: 14px; line-height: 1.5; background: var(--vp-c-bg); color: var(--vp-c-text-1); resize: vertical; }
.pb textarea:focus { outline: none; border-color: var(--vp-c-brand-1); }
.pb-output { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.pb-output-head { display: flex; justify-content: space-between; align-items: center; }
.pb-pre { flex: 1; margin: 0; min-height: 200px; padding: 12px; border-radius: 8px; background: var(--vp-code-block-bg); font-size: 13px; line-height: 1.6; white-space: pre-wrap; word-break: break-word; }
.pb-note { margin: 10px 0 0; font-size: 12px; color: var(--vp-c-text-3); }
.pb-status { margin: 0; min-height: 1.2em; font-size: 12px; color: var(--vp-c-text-2); }
.pb-status.failed { color: var(--vp-c-danger-1); }
</style>
