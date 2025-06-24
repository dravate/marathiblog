<template>
  <div>
    <ThankYou v-if="chatstore.thankyou" />
    <BookService v-else-if="chatstore.bookservice" />
    <div v-else id="body">
      <div id="chat-circle" @click="bookservice" class="z-10 btn hide btn-raised">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useChatStore } from '../../stores/useChat'
import BookService from './BookService.vue'
import ThankYou from './ThankYou.vue'

const chatstore = useChatStore()
const bookservice = () => {
  chatstore.book_service()
}
</script>

<style scoped>
@import '@/assets/css/chat.css'; /* Move your styles to this file (optional, cleaner) */
</style>

