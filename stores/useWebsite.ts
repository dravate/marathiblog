// stores/siteSettings.ts
import { defineStore } from 'pinia'

import {  fetchSiteDetails } from '../services/websiteService';

export const useWebSiteStore = defineStore('WebSite', {
  state: () => ({
    logo: '',
    title: '',
    tagline: '',
    vision: '',
    mission: '',
    core_values: '',
    services: [],
    testimonials: [],
    about: '',
  }),
  actions: {

    async loadSettings() {
      try {
        const data = await fetchSiteDetails()
       // console.log(data); 

        this.logo = data.logo
        this.title = data.title
        this.tagline = data.subtitle
        this.vision = data.vision
        this.mission = data.mission
        this.core_values = data.core_values
         // ✅ Only include active services
    this.services = Array.isArray(data.services)
      ? data.services.filter(service => service.status === true)
      : []
      
        this.testimonials = data.testimonials
        this.about = data.about;
      } catch (error) {
        console.error('Error loading site settings:', error)
      }
    },
  },
})



