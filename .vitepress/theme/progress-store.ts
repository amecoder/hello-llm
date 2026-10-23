// One shared, reactive copy of the reader's progress for every component on the page.
// localStorage only: nothing is sent anywhere. Storage can be blocked (private mode,
// site data off), so every access is guarded and the page still works without it.
import { ref } from 'vue'
import { CHAPTERS } from './quiz-bank.ts'
import {
  EMPTY_PROGRESS,
  parseProgress,
  serializeProgress,
  STORAGE_KEY,
  type Progress,
} from './progress.ts'

export const CHAPTER_NUMBERS = Object.keys(CHAPTERS).map(Number)

export const progress = ref<Progress>(EMPTY_PROGRESS)
// false until read from storage, so components do not flash "0 of 9" before loading
export const progressLoaded = ref(false)
export const storageBlocked = ref(false)

let listening = false

function read(): Progress {
  try {
    return parseProgress(localStorage.getItem(STORAGE_KEY), CHAPTER_NUMBERS)
  } catch (err) {
    console.warn('reading progress failed; continuing without saved progress', err)
    storageBlocked.value = true
    return EMPTY_PROGRESS
  }
}

// call from onMounted: localStorage does not exist during the static build.
// Only the first call reads storage; later mounts (moving to another page) keep the
// in-memory copy, which matters when storage is blocked. Other tabs sync via 'storage'.
export function loadProgress() {
  if (progressLoaded.value) return
  progress.value = read()
  progressLoaded.value = true
  if (!listening) {
    listening = true
    // another tab changed it
    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY || e.key === null) progress.value = read()
    })
  }
}

export function saveProgress(next: Progress) {
  progress.value = next
  try {
    localStorage.setItem(STORAGE_KEY, serializeProgress(next))
  } catch (err) {
    console.warn('saving progress failed; it will last only until the page closes', err)
    storageBlocked.value = true
  }
}

export function clearProgress() {
  progress.value = EMPTY_PROGRESS
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (err) {
    console.warn('clearing progress failed', err)
    storageBlocked.value = true
  }
}
