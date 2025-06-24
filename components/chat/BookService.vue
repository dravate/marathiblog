<template>
  <Transition name="fade">
    <div class="fixed z-50" style="bottom: 120px; right: 10px; width: 350px; height: auto;">
      <div
        class="bg-gradient-to-r from-gray-100 to-gray-300 p-5 rounded-lg animate__animated animate__fadeInRight shadow-lg">
        <div class="grid grid-cols-10 items-center">
          <h1 class="col-span-9 text-gray-900 text-center text-2xl font-extrabold border-b-4 mb-6">Write to Us</h1>
          <div class="text-right">
            <button @click="chatstore.book_service_close()">
              <font-awesome-icon :icon="['fas', 'chevron-down']" size="lg" class="text-gray-600" />
            </button>
          </div>
        </div>

        <form @submit.prevent="write_service">
          <div class="mb-4">
            <label class="block text-gray-900 text-sm font-bold mb-1">Name</label>
            <input
              class="w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring"
              v-model.trim="form.firstname"
              @blur="clearValidity('firstname')"
              placeholder="Your Name" 
              :disabled="submitting" 

              />
            <p v-if="!validity.firstname" class="text-red-500 text-sm">Please fill out your name</p>
          </div>

          <div class="mb-4">
            <label class="block text-gray-900 text-sm font-bold mb-1">Mobile Number</label>
            <input
              class="w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring"
              v-model.trim="form.mobile"
              @blur="clearValidity('mobile')"
              placeholder="Your 10 digit mobile" />
            <p v-if="!validity.mobile" class="text-red-500 text-sm">Please enter a valid 10-digit number</p>
          </div>

          <div class="mb-4">
            <label class="block text-gray-900 text-sm font-bold mb-1">Message</label>
            <textarea
              rows="4"
              class="w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring"
              v-model.trim="form.message"
              @blur="clearValidity('message')"
              placeholder="Your message please" 
              :disabled="submitting"

              />
            <p v-if="!validity.message" class="text-red-500 text-sm">Message is required</p>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
               :disabled="submitting"

              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring">
             {{ submitting ? 'Submitting...' : 'Submit' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useChatStore } from '../../stores/useChat'
import type { Chat } from '../../types/chat'

const chatstore = useChatStore()

const submitting = ref(false) // NEW



const form = reactive<Chat>({
  firstname: '',
  lastname: '',
  mobile: '',
  message: ''
})

const formIsValid = ref(true)
const validity = reactive({
  firstname: true,
  mobile: true,
  message: true
})

function clearValidity(field: keyof typeof validity) {
  validity[field] = true
}

function validateForm() {
  formIsValid.value = true
  if (!form.firstname) {
    validity.firstname = false
    formIsValid.value = false
  }
  if (!form.message) {
    validity.message = false
    formIsValid.value = false
  }
  const mobileFormat = /^\d{10}$/
  if (!form.mobile || !mobileFormat.test(form.mobile)) {
    validity.mobile = false
    formIsValid.value = false
  }
}

async function write_service() {
  validateForm()
  if (!formIsValid.value) return

   submitting.value = true // block form


  try {
    await chatstore.write_service({ ...form })
    chatstore.show_thankyou()
  } catch (error) {
    chatstore.set_error((error as Error).message)
  }
  finally {
    submitting.value = false // un-block form
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
