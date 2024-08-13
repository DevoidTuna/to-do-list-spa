import type { RouteRecordRaw } from 'vue-router'
import Login from '@/pages/auth/login-view.vue'
import { useUserStore } from '@/stores/user'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    redirect: () => {
      if (useUserStore().user !== null) {
        return { path: '/dashboard' }
      } else {
        return { path: '/login' }
      }
    },
  },
]

export default routes.map(route => {
  const meta = { requiresAuth: false }
  return { ...route, meta }
})
