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

  if (requiresAuth && (!userStore.token && userStore.preference !== 'local')) {
    next('/login')
  } else {
    if (
      (to.name === '/auth/login-view' &&
        userStore.token !== null &&
        userStore.token !== '' &&
        userStore.preference === 'web')
    ) {
      next('/dashboard')
    } else {
      next()
    }
  }
})

export default router
