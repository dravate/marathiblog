<script setup lang="ts">
import { onMounted } from 'vue'
import { useBlogStore } from '../../stores/useBlog'; 
import BlogCard from '../../components/cards/BlogCard.vue';

const blogStore = useBlogStore()

onMounted(() => {
  blogStore.loadBlogs()
})
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
    <BlogCard v-for="blog in blogStore.publishedBlogs" :key="blog.id" :blog="blog" />
  </div>
</template>

