<template>
  <nav
    v-if="breadcrumb.length"
    aria-label="breadcrumb"
    class="text-sm py-4 px-6 text-gray-600"
  >
    <ol class="flex space-x-2">
      <li>
        <NuxtLink to="/" class="hover:underline text-blue-600">Home</NuxtLink>
        <span v-if="breadcrumb.length"> / </span>
      </li>
      <li v-for="(crumb, index) in breadcrumb" :key="index" class="flex items-center space-x-1">
        <span v-if="index !== 0">/</span>
        <NuxtLink
          v-if="index !== breadcrumb.length - 1"
          :to="crumb.path"
          class="hover:underline text-blue-600"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="font-semibold">{{ truncate(crumb.label, 1) }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const breadcrumb = computed(() => {
  const segments = route.path.split('/').filter(Boolean)

  // Don't show breadcrumb on home page
  if (segments.length === 0) {
    return []
  }

  let path = ''
  return segments.map((segment) => {
    path += `/${segment}`
    return {
      label: decodeURIComponent(segment.replace(/-/g, ' ')),
      path,
    }
  })
})



function truncate(text: string, words: number): string {

  const parts = text.split(/\s+/);

  if (parts.length <= words) return text;
  return parts.slice(0, words).join("-") + "...";
}


</script>
