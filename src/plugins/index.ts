/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from './pinia'
import router from '../router'
import { axios, VueAxios } from '@/plugins/axios'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(pinia)
    .use(VueAxios, axios)
    .use(router)
    .use(vuetify)
}
