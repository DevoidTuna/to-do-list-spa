import type { RouteRecordRaw } from 'vue-router'
import DashboardView from '@/pages/dashboard/dashboard-view.vue'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
]

export default routes.map(route => {
  const meta = { requiresAuth: true }
  return { ...route, meta }
})
