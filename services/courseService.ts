// services/siteService.ts
import { useApi  } from "./api";



export const fetchCourseDetails = async () => {
  const api = useApi()
  const response = await api.get('/api/customer/blogpost/tag/course/')
  console.log(response.data); 
  
  return response.data
}

export async function fetchCourseBySlug(slug: string) {
  const api = useApi()
  const res = await api.get(`/api/customer/blogpost/slug/${slug}/`)
  return res.data
}