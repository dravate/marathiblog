<template>
  
   <p class="my-2" v-html="block.text"></p>
</template>

<script setup lang="ts">
defineProps<{ block: { text: string } }>()
</script>

