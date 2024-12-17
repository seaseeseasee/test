import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/about.vue'
import Act from '../components/act.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/act',
      name: 'act',
      component: Act,
    },
  ],
})

export default router
