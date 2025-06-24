<template>
  <div class="fixed z-50 mb-2" style="bottom: 90px; right: 10px; width: 400px;">
    <div
      class="bg-gradient-to-r from-gray-100 to-gray-300 p-5 rounded-lg shadow-lg animate__animated animate__fadeInRight">

      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800 border-b pb-2 w-full text-center">
          Thank you for writing to us!
        </h2>
        <button
          @click="chatstore.close_thankyou"
          class="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
      </div>

      <!-- Optional message -->
      <p class="text-gray-700 text-center mt-4">
        We’ve received your message. Our team will get back to you soon.
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
;
import { useChatStore } from '../../stores/useChat'

const chatstore = useChatStore()
</script>

<style scoped>
/* Optionally tweak styles here */
</style>
