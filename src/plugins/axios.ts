import axios from 'axios'
import VueAxios from 'vue-axios'
import { useUserStore } from '@/stores/user'
import router from '../router'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.baseURL = import.meta.env.VITE_API_URL
console.log('API Base URL:', axios.defaults.baseURL)

axios.interceptors.request.use(config => {
  const userStore = useUserStore()

  config.headers.Authorization = `Bearer ${userStore.token ?? ''}`
  config.headers.set('User-Id', useUserStore().user?.id)

  return config
})

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401 && error.response.data.message === 'Unauthenticated.') {
    useUserStore().$reset()
    router.push('/')
  }
  return Promise.reject(error)
})

export { axios, VueAxios }
