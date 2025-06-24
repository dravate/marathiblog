<template>
  <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
    <code class="language-plaintext">{{ block.code }}</code>
  </pre>
</template>

<script setup lang="ts">
defineProps<{ block: { code: string } }>()
</script>
