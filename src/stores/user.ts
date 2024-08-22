import { defineStore } from 'pinia'
import { User } from '@/types/User'
import { useTodoStore } from './todo'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null as User | null,
      token: null as string | null,
      preference: undefined as 'local' | 'web' | undefined,
    }
  },
  persist: true,
  actions: {
    setUser (user: User) {
      this.user = user
    },
    setToken (token: string | null) {
      this.token = token
    },
    setPreference (preference: 'local' | 'web') {
      this.preference = preference
    },
    logout () {
      useTodoStore().$reset()
      this.$reset()
    },
  },
})
