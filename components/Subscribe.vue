<template>
    


    <div
      class="relative flex flex-col gap-1 border p-6 rounded-lg border-gray-200 dark:border-white/10 dark:bg-white/5 bg-gray-50/10 group hover:dark:border-[#00DC82] hover:border-[#00DC82] transition-all">
      <div
        class="w-[32px] h-[32px] bg-[#00DC82]/5 flex items-center justify-center border rounded border-[#00DC82] transition-all dark:border-[#00DC82]/50 group-hover:dark:border-[#00DC82]/80 dark:bg-[#020420] text-[#00DC82] dark:text-[#00DC82]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
          <path fill="currentColor"
            d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6Zm90.5-67.9v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9Zm-45.3-45.3H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4Z"
            opacity=".2" />
          <path fill="currentColor"
            d="M96.6 177a7.9 7.9 0 0 0-10.1 5c-6.6 19.7-27.9 25.8-40.2 27.7c1.9-12.3 8-33.6 27.7-40.2a8 8 0 1 0-5.1-15.1c-16.4 5.4-28.4 18.4-34.8 37.5a91.8 91.8 0 0 0-4.6 26.6a8 8 0 0 0 8 8a91.8 91.8 0 0 0 26.6-4.6c19.1-6.4 32.1-18.4 37.5-34.8a7.9 7.9 0 0 0-5-10.1Z" />
          <path fill="currentColor"
            d="M227.6 41.8a15.7 15.7 0 0 0-13.4-13.4c-11.3-1.7-40.6-2.5-69.2 26.1l-9 8.9H74.7a16.2 16.2 0 0 0-11.3 4.7l-32.3 32.4a15.9 15.9 0 0 0-4 15.9a16 16 0 0 0 12.2 11.1l39.5 7.9l41.8 41.8l7.9 39.5a16 16 0 0 0 11.1 12.2a14.7 14.7 0 0 0 4.6.7a15.6 15.6 0 0 0 11.3-4.7l32.4-32.3a16.2 16.2 0 0 0 4.7-11.3V120l8.9-9c28.6-28.6 27.8-57.9 26.1-69.2ZM74.7 79.4H120l-39.9 39.9l-37.7-7.5Zm81.6-13.6c7.8-7.8 28.8-25.6 55.5-21.6c4 26.7-13.8 47.7-21.6 55.5L128 161.9L94.1 128Zm20.3 115.5l-32.4 32.3l-7.5-37.7l39.9-39.9Z" />
        </svg>
      </div>
      <svg
        class="absolute right-4 top-4 dark:text-white/40 text-[#020420]/20 group-hover:text-[#00DC82] size-4 group-hover:size-5 transition-all"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <path fill="currentColor"
          d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8Z" />
      </svg>
      <h2 class="font-semibold text-base mt-1">Subscribe to Newsletter</h2>
      <p class="text-sm text-gray-700 dark:text-gray-200 group-hover:dark:text-gray-100">
         Provide your email address below, and you'll be the first to know about our newest products, special promotions, vlogs and more!.</p>
    
    
           <form @submit.prevent="subscribe" class="flex items-center mt-4">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          class="px-6 py-3 bg-green-600 text-white font-semibold rounded-r-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>

    
    
    </div>


  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const email = ref('');
  
  const subscribe = () => {
    // Replace with your actual subscription logic/API call
    console.log('Subscribed with email:', email.value);
    // Optionally reset the input after submission
    email.value = '';
  };
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
