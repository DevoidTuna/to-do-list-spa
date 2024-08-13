import { defineStore } from 'pinia'
import { User } from '@/types/User'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null as User | null,
      token: null as string | null,
    }
  },
  persist: true,
  getters: {},
  actions: {
    setUser (user: User) {
      this.user = user
    },
    setToken (token: string | null) {
      this.token = token
    },
    logout () {
      this.$reset()
    },
  },
})
