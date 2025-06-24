<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useBlogStore } from '../stores/useBlog'
import BlogCard from '../components/cards/BlogCard.vue'

const blogStore = useBlogStore()

// Load blogs on mount
onMounted(() => {
  blogStore.loadBlogs()
})

// Only first 4 published blogs
const previewBlogs = computed(() => blogStore.publishedBlogs.slice(0, 4))
</script>

<template>
  <div class="p-4 space-y-6">
    <!-- Blog Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <BlogCard
        v-for="blog in previewBlogs"
        :key="blog.id"
        :blog="blog"
      />
    </div>

    <!-- Read More Button -->
    <div class="flex justify-center">
      <NuxtLink
        to="/blogs"
        class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition"
      >
        Read More...
      </NuxtLink>
    </div>
  </div>
</template>
