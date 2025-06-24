
<template>
  
<div class="antialiased bg-white dark:bg-[#020420] text-[#020420] dark:text-white min-h-screen flex flex-col">
    <!-- Header -->
  <header class="w-full border-b border-gray-200 dark:border-white/10 px-4 py-4">
  <div class="max-w-[980px] w-full mx-auto flex flex-wrap items-center justify-between gap-4">
    <!-- Logo + Title -->
    <NuxtLink to="/" class="flex items-center gap-4">
      <img :src="webSiteStore.logo" class="w-16 rounded-xl h-auto" />
      <div>
        <h1 class="text-xl sm:text-3xl font-bold">{{ webSiteStore.title }}</h1>
        <span class="text-xs block">{{ webSiteStore.tagline }}</span>
      </div>
    </NuxtLink>

     <button
      class="sm:hidden text-gray-700 dark:text-white focus:outline-none"
      @click="menuOpen = !menuOpen"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>


   <!-- Desktop Nav -->
    <nav class="hidden sm:flex gap-6 text-sm font-medium">
      <NuxtLink to="/" class="hover:text-blue-600 transition">Home</NuxtLink>
      <NuxtLink to="/blogs" class="hover:text-blue-600 transition">Blog</NuxtLink>
      <NuxtLink to="/about" class="hover:text-blue-600 transition">About</NuxtLink>
    </nav>
  </div>
   <!-- Mobile Nav -->
  <div v-if="menuOpen" class="sm:hidden mt-4 space-y-2 text-sm font-medium px-2">
    <NuxtLink to="/" class="block py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-white/10">Home</NuxtLink>
    <NuxtLink to="/blogs" class="block py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-white/10">Blog</NuxtLink>
    <NuxtLink to="/about" class="block py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-white/10">About</NuxtLink>
  </div>

</header>



    <main class="flex-1 w-full px-4 py-6">
  <div class="max-w-[980px] w-full mx-auto">


<BreadCrumb />
    

    <NuxtPage />
  </div>

  <ChatService />

</main>


  


<footer class="w-full px-4 py-6 border-t border-gray-200 dark:border-white/10">
  <div class="max-w-[980px] w-full mx-auto">
      <ul class="flex items-center justify-center gap-4">
          <li>
            <a
              href="https://github.com/dravate"
              target="_blank"
              class="focus-visible:ring-2 text-gray-500 hover:text-[#020420] dark:text-gray-400 dark:hover:text-white"
            >
              <span class="sr-only">Sarathi Dravate Git Repository</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </li>
       
          <li>
            <a
              href="https://x.com/sopan_shewale"
              target="_blank"
              class="focus-visible:ring-2 text-gray-500 hover:text-[#020420] dark:text-gray-400 dark:hover:text-white"
            >
              <span class="sr-only">Sarathi Dravate on X</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
          </li>
        
          <li>
            <a
              href="https://www.linkedin.com/company/sarathi-dravate-technologies-llp"
              target="_blank"
              class="focus-visible:ring-2 text-gray-500 hover:text-[#020420] dark:text-gray-400 dark:hover:text-white"
            >
              <span class="sr-only">Sarathi Dravate Linkedin</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>
            </a>
          </li>
        </ul>
  </div>
</footer>

      </div>
  
       



  </template>



  <script setup lang="ts">
  
import { onMounted, computed } from 'vue'
import { useWebSiteStore } from '../stores/useWebsite'
import BreadCrumb from '../components/BreadCrumb.vue';
import ChatService from '../components/chat/ChatService.vue';

const webSiteStore = useWebSiteStore(); 

const menuOpen = ref(false);


onMounted( 
  
async () => {
  await webSiteStore.loadSettings(); 
}
)

</script>




