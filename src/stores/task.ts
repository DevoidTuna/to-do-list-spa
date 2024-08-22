import { defineStore } from 'pinia'
import { Task } from '@/types/Task'
import { useSnackBar } from './snackbar'
import { DateTime } from 'luxon'
import { useUserStore } from './user'

export const useTaskStore = defineStore('task', {
  state: () => {
    return {
      items: [] as Task[],
    }
  },
  persist: true,
  actions: {
    store (content: string): Task {
      if (useUserStore().preference === 'local') {
        return {
          id: this.items.length,
          content,
          created_at: DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss'),
          end_at: null,
          finished_at: null,
        } as object as Task
      }
      return { content } as object as Task
    },
    pushItem (item: Task) {
      this.items.push(item)
    },
    destroy (item: Task) {
      const selectedIndex = this.items.findIndex(obj => obj === item)
      if (selectedIndex >= 0) this.items.splice(selectedIndex, 1)
    },
    update (item: Task) {
      const oldItem = this.items.find(obj => obj.id === item.id)

      if (oldItem) {
        const index = this.items.findIndex(obj => obj.id === item.id)
        this.items[index] = item
      } else {
        useSnackBar().show(`Error trying updating ${item.id}`, 'error')
      }
    },
    setFetchData (data: Task[]) {
      this.items = data
    },
  },
})
