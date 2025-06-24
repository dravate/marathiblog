// store/chatservice.ts
import { defineStore } from 'pinia'
import type { Chat } from '../types/chat'
import { writeChat } from '../services/chatService'

export const useChatStore = defineStore('chatservice', {
  state: () => ({
    thankyou: false,
    bookservice: false,
    errorMessage: '',
  }),
  actions: {
    book_service() {
      this.bookservice = true
    },
    book_service_close() {
      this.bookservice = false
    },
    show_thankyou() {
      this.thankyou = true
      this.bookservice = false
    },
    reset() {
      this.thankyou = false
      this.bookservice = false
    },

    async write_service(data: Chat) {
      try {
        await writeChat(data)
        this.show_thankyou()
        setTimeout(() => {
          this.reset()
        }, 3000)
      } catch (error: any) {
        this.set_error(error.message || 'Something went wrong')
      }
    },

    set_error(message: string) {
      this.errorMessage = message
    },
  },
})
