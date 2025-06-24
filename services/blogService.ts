// services/siteService.ts
import { useApi  } from "./api";



export const fetchBlogDetails = async () => {
  const api = useApi()
  const response = await api.get('/api/customer/blogpost/')
  return response.data
}

export async function fetchBlogBySlug(slug: string) {
  const api = useApi()
  const res = await api.get(`/api/customer/blogpost/slug/${slug}/`)
  return res.data
}