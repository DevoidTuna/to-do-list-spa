import { createPinia } from 'pinia'
import persistence from 'pinia-plugin-persistedstate'

const store = createPinia()

store.use(persistence)

export default store
