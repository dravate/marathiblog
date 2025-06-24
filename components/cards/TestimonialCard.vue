<!-- components/cards/TestimonialCard.vue -->
<template>
  <div class="p-6 border rounded-lg shadow-sm bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 flex flex-col items-center gap-4">
    <!-- Picture -->
    <img
      :src="testimonial.pic"
      alt="Testimonial picture"
      class="w-16 h-16 rounded-full object-cover border"
    />

    <!-- Content -->
    <div class="text-center sm:text-left">
      <p class="text-sm text-gray-700 dark:text-gray-300 italic mb-2">
        “{{ testimonial.description }}”
      </p>
      <div class="font-semibold text-base">
        {{ testimonial.name }}
      </div>
      <div class="text-xs text-gray-500 dark:text-gray-400">
        {{ testimonial.position }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ testimonial: any }>()
</script>
