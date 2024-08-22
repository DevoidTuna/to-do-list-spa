import type { RouteRecordRaw } from 'vue-router'
import IndexView from '@/pages/auth/index-view.vue'
import AuthView from '@/pages/auth/auth-view.vue'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
  },
  {
    path: '/login',
    name: 'login',
    component: AuthView,
  },
]

export default routes.map(route => {
  const meta = { requiresAuth: false }
  return { ...route, meta }
})
