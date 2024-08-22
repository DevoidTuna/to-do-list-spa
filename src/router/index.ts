/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import publicRoutes from './public'
import privateRoutes from './private'
import { useUserStore } from '@/stores/user'
const routes: Readonly<RouteRecordRaw[]> = publicRoutes.concat(privateRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, _, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const userStore = useUserStore()

  if (userStore.preference === 'web' && userStore.token) {
    if (to.path === '/' || to.path === '/login') {
      return next('/dashboard')
    }

    if (requiresAuth && !userStore.token) {
      return next('/')
    }
  }

  next()
})

export default router
