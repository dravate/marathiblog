<template>
  <div class="max-w-3xl mx-auto py-10 px-4">
    
    <!-- Cover Image -->
    <img
      v-if="blog?.cover_image_url"
      :src="blog.cover_image_url"
      alt="Cover Image"
      class="w-full h-64 object-cover rounded mb-6 shadow"
    />

     <p v-if="blog?.created_at" class="text-xs text-gray-400 mb-4">
       <font-awesome-icon :icon="['fa', 'calendar']" size="2xl" color="gray" />
       <span class="px-4"> {{ formatDate(blog?.created_at) }} </span> 
      </p>
    <!-- Title -->

    <h1 class="text-3xl font-bold mb-4">{{ blog?.title }}</h1>

    <!-- Excerpt -->
    <div v-html="blog?.excerpt" class="text-gray-500 mb-4" />



    <!-- Social Share Buttons -->
<div class="flex items-center space-x-4 mb-6 animate-fade-in">
  <span class="text-xs text-gray-900 font-bold">Share With your Social Connects! </span>

  <!-- Facebook -->
  <a
    :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
    target="_blank"
    rel="noopener noreferrer"
    class="transition-transform transform hover:scale-125 text-blue-600 hover:text-white hover:bg-blue-600 p-2 rounded-full shadow-md"
  >
    <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
  </a>

  <!-- Twitter -->
  <a
    :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${blog?.title}`"
    target="_blank"
    rel="noopener noreferrer"
    class="transition-transform transform hover:scale-125 text-sky-500 hover:text-white hover:bg-sky-500 p-2 rounded-full shadow-md"
  >
    <font-awesome-icon :icon="['fab', 'x-twitter']" size="lg" />
  </a>

  <!-- LinkedIn -->
  <a
    :href="`https://www.linkedin.com/shareArticle?url=${currentUrl}&title=${blog?.title}`"
    target="_blank"
    rel="noopener noreferrer"
    class="transition-transform transform hover:scale-125 text-blue-700 hover:text-white hover:bg-blue-700 p-2 rounded-full shadow-md"
  >
    <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
  </a>

  
  <!-- WhatsApp -->
  <a
    :href="`https://api.whatsapp.com/send?text=Hello, ${blog?.title} - ${currentUrl}`"
    target="_blank"
    rel="noopener noreferrer"
    class="transition-transform transform hover:scale-125 text-green-500 hover:text-white hover:bg-green-500 p-2 rounded-full shadow-md"
  >
    <font-awesome-icon :icon="['fab', 'whatsapp']" size="lg" />
  </a>
</div>



    <!-- Content -->
    <div v-if="blog?.content" class="prose dark:prose-invert">
      <component
        v-for="block in blog.content.blocks"
        :key="block.id"
        :is="getBlockComponent(block.type)"
        :block="block.data"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import { useBlogStore } from '../../stores/useBlog'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import HeaderBlock from '../../components/blog-blocks/HeaderBlock.vue'
import ParagraphBlock from '../../components/blog-blocks/ParagraphBlock.vue'
import QuoteBlock from '../../components/blog-blocks/QuoteBlock.vue'
import CodeBlock from '../../components/blog-blocks/CodeBlock.vue'
import ListBlock from '../../components/blog-blocks/ListBlock.vue'


const blogStore = useBlogStore()
const route = useRoute()
const blog = ref()
const currentUrl = window.location.origin + route.fullPath

const getBlockComponent = (type) => {
  switch (type) {
    case 'header':
      return HeaderBlock
    case 'paragraph':
      return ParagraphBlock
    case 'quote':
      return QuoteBlock
    case 'code':
      return CodeBlock
    case 'list':
      return ListBlock
    default:
      return ParagraphBlock // Fallback
  }
}


function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}


onMounted(async () => {
    //console.log(route.params.slug as string); 
    //console.log('inside mounted section')
  blog.value = await blogStore.fetchBlogBySlug(route.params.slug as string)
})
</script>

