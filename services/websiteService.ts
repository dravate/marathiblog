// services/siteService.ts
import { useApi  } from "./api";



export const fetchSiteDetails = async () => {
  const api = useApi()
  const response = await api.get('/api/customer/website/')
  return response.data
}
