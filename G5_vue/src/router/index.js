import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/AboutusView',
      name: 'AboutusView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutusView.vue')
    },
    {
      path: '/NewView',
      name: 'NewView',
      component: () => import('@/views/NewsView.vue')
    },
    {
      path: '/DiaryView',
      name: 'DiaryView',
      component: () => import('@/views/DiaryView.vue')
    },
    {
      path: '/CourseView',
      name: 'CourseView',
      component: () => import('@/views/CourseView.vue')
    },
    {
      path: '/BentoView',
      name: 'BentoView',
      component: () => import('@/views/BentoView.vue')
    }
  ]
})

export default router
