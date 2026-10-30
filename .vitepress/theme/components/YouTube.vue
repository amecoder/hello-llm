<script setup lang="ts">
// YouTube player embedded in the page; youtube-nocookie keeps cookies off until the reader plays it
defineProps<{ id: string; title: string }>()
</script>

<template>
  <div class="youtube">
    <iframe
      :src="`https://www.youtube-nocookie.com/embed/${id}`"
      :title="title"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.youtube {
  margin: 12px 0 28px;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.youtube iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
