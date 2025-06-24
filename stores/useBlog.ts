// stores/blogStore.ts
import { defineStore } from 'pinia'
import { fetchBlogDetails, fetchBlogBySlug } from '../services/blogService'
import type { BlogPost } from '../types/blog'; 

export const useBlogStore = defineStore('blog', {
  state: () => ({
   blogs: [] as BlogPost[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    publishedBlogs: (state) =>
      state.blogs.filter((post) => post.status === 'published'),
  },

  actions: {
    async loadBlogs() {
      this.loading = true
      this.error = null
      try {
        const data = await fetchBlogDetails()
       //  console.log(data); 
        
        this.blogs = data
      } catch (error: any) {
        console.error('Error loading blogs:', error)
        this.error = error?.message || 'Failed to load blogs'
      } finally {
        this.loading = false
      }
    },

     async fetchBlogBySlug(slug: string) {
      try {
        return await fetchBlogBySlug(slug)
      } catch (e) {
        this.error = 'Blog not found'
      }
    },


  },
})
