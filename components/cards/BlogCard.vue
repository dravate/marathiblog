<template>
  <NuxtLink :to="`/blogs/${blog.slug}`" class="group block rounded-lg border p-4 hover:border-green-500 transition">
     <!-- Cover Image -->
    <img
      v-if="blog?.cover_image_url"
      :src="blog.cover_image_url"
      alt="Cover Image"
      class="w-full h-64 object-cover rounded mb-6 shadow"
    />

     <p v-if="blog?.created_at" class="text-xs text-gray-500 mt-2 font-bold mb-2">
      <font-awesome-icon :icon="['fa', 'calendar']" />
        {{ formatDate(blog?.created_at) }}
      </p>

    <h2 class="text-lg font-bold mb-2">{{ blog.title }}</h2>
    <div class="text-sm text-gray-600 dark:text-gray-400" v-html="blog.excerpt" />
    <div class="flex flex-wrap gap-2 mt-3">
      <span
        v-for="tag in blog.tags"
        :key="tag"
        class="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded text-xs"
      >
        #{{ tag }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  blog: any
}>()


function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}


</script>

