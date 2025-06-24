<!-- components/blog-blocks/ListBlock.vue -->
<template>
  <ul v-if="block.style === 'unordered'" class="list-disc pl-6 space-y-1">
    <li v-for="(item, index) in block.items" :key="index">
      {{ item.content }}
    </li>
  </ul>
  <ol v-else-if="block.style === 'ordered'" class="list-decimal pl-6 space-y-1">
    <li v-for="(item, index) in block.items" :key="index">
      {{ item.content }}
    </li>
  </ol>
</template>

<script setup>
defineProps({
  block: {
    type: Object,
    required: true
  }
})
</script>

