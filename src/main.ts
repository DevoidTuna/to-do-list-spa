/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import '@/styles/main.scss'
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import { useSnackBar } from './stores/snackbar'
const app = createApp(App)

registerPlugins(app)

app.config.globalProperties.$snackbar = useSnackBar()

app.mount('#app')
