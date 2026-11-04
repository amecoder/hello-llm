<script setup lang="ts">
// Tells readers of a translated page that AI made the translation. Empty on the Korean original.
import { computed } from 'vue'
import { useData } from 'vitepress'
import { langOf, uiOf } from '../i18n.ts'

const { lang } = useData()
const notice = computed(() => uiOf('translationNotice')[langOf(lang.value)])
</script>

<template>
  <p v-if="notice" class="translation-notice">{{ notice }}</p>
</template>

<style scoped>
.translation-notice {
  max-width: 1152px;
  margin: 0 auto 16px;
  padding: 8px 12px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.5;
}
</style>
