import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import About from '@/views/About.vue'
import RECEIPT from '@/views/Receipt.vue'
import NaraView from '@/views/NaraView.vue'
import MinkyungView from '@/views/MinkyungView.vue'
import SejinView from '@/views/SejinView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/news/sejin/12',
      component: SejinView,
    },
    {
      path: '/news/박민경/11',
      component: MinkyungView,
    },
    {
      path: '/news/이나라/13',
      component: NaraView,
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
