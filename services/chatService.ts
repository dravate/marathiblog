// services/siteService.ts
import { useApi  } from "./api";
import type { Chat } from '../types/chat'

export const writeChat = async (payload: Chat): Promise<void> => {
 const api = useApi() 

try {
    const response = await api.post('/api/chat/', payload);
    if (response.status !== 200) {
      throw new Error(`Unexpected response: ${response.status}`)
    }
  } catch (error: any) {
    console.error('Error sending chat to Telegram:', error)
    throw error
  }
}