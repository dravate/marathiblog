<template>
  
  <component :is="'h' + (block.level || 2)" class="font-bold text-2xl my-4 border-b-1 border-dotted">
    {{ block.text }}
  </component>
</template>

<script setup lang="ts">
defineProps<{ block: { text: string; level?: number } }>()
</script>

