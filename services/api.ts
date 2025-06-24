// services/api.ts
import axios from 'axios'

export const useApi = () => {
  const config = useRuntimeConfig()

  const apiKey = config.public.API_KEY
  const baseURL = config.public.API_BASE_URL

//  console.log('[API] baseURL:', baseURL)
//  console.log('[API] apiKey:', apiKey)

  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Customer ' + apiKey,
    },
    withCredentials: true,
  })

  return instance
}
