<script setup lang="ts">
// Thin bar along the top edge showing how far down the page the reader has scrolled.
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import { scrollRatio } from '../progress.ts'

const ratio = ref<number | null>(null)
let frame = 0

function measure() {
  frame = 0
  // clientHeight, not innerHeight: innerHeight includes a horizontal scrollbar and the phone address bar
  const root = document.documentElement
  ratio.value = scrollRatio(window.scrollY, root.scrollHeight, root.clientHeight)
}

// scroll fires many times per frame; measure at most once per frame
function schedule() {
  if (!frame) frame = requestAnimationFrame(measure)
}

const route = useRoute()
// page content changes without a reload when following links inside the site
watch(() => route.path, schedule)

let resize: ResizeObserver | undefined
onMounted(() => {
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  // images and quizzes change the page height after load
  resize = new ResizeObserver(schedule)
  resize.observe(document.body)
  measure()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
  resize?.disconnect()
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <div v-if="ratio !== null" class="sp" aria-hidden="true">
    <span :style="{ transform: `scaleX(${ratio})` }" />
  </div>
</template>

<style scoped>
.sp { position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 100; pointer-events: none; }
.sp span { display: block; height: 100%; background: #ff0000; transform-origin: left; } /* YouTube-style red */
</style>
