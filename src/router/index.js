import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import About from '@/views/About.vue'
import RECEIPT from '@/views/Receipt.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/news/:author/:id',  // /news/sejin/18
      component: NewsView,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/receipt',
      name: 'Receipt',
      component: RECEIPT,
    },
  ]
})

export default router
