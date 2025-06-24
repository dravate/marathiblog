<!-- components/cards/InfoCard.vue -->
<template>
  
  
  <NuxtLink :to="to" class="group relative flex flex-col gap-1 border p-6 rounded-lg transition-all hover:border-[#00DC82] dark:border-white/10 dark:bg-white/5 bg-gray-50/10">
    <slot name="icon" />
    <slot name="title" />
    <slot name="description" />

    <SimpleCarousel v-if="items?.length > 1" :items="items" class="mt-2" />

    <svg class="absolute right-4 top-4 size-4 group-hover:size-5 transition-all text-gray-400 group-hover:text-[#00DC82]">
      <path fill="currentColor" d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8Z"/>
    </svg>
  </NuxtLink>
</template>

<script setup lang="ts">
import SimpleCarousel from '../carousel/ServicesCarousel.vue'

defineProps<{
  to: string
  items?: any[]
}>()
</script>
