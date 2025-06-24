<template>
  <blockquote :class="alignmentClass" class="border-l-4 pl-4  my-8 italic text-gray-700 dark:text-gray-300">
    <p class="mb-1" v-html="block.text"></p>
    <footer v-if="block.caption" class="text-sm text-gray-500">— {{ block.caption }}</footer>
  </blockquote>
</template>

<script setup>
const props = defineProps({
  block: Object
})

const alignmentClass = computed(() => {
  const align = props.block.alignment || 'left'
  return {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align]
})
</script>
