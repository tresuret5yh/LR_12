import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ApiPage from '@/pages/ApiPage.vue'
import FormPage from '@/pages/FormPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/api',
      name: 'api',
      component: ApiPage
    },
    {
      path: '/form',
      name: 'form',
      component: FormPage
    }
  ]
})

export default router