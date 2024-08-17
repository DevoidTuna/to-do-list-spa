import { defineStore } from 'pinia'
import { ToDoItem } from '@/types/ToDoItem'
import { useSnackBar } from './snackbar'
import { DateTime } from 'luxon'
import { useUserStore } from './user'

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      items: [] as ToDoItem[],
    }
  },
  persist: true,
  actions: {
    store (content: string): ToDoItem {
      if (useUserStore().preference === 'local') {
        return {
          id: this.items.length,
          content,
          created_at: DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss'),
          end_at: null,
          finished_at: null,
        }
      }
      return { content } as object as ToDoItem
    },
    pushItem (item: ToDoItem) {
      this.items.push(item)
    },
    destroy (item: ToDoItem) {
      this.items.splice(this.items.indexOf(item), 1)
    },
    update (item: ToDoItem) {
      const oldItem = this.items.find(obj => obj.id === item.id)

      if (oldItem) {
        const index = this.items.findIndex(obj => obj.id === item.id)
        this.items[index] = item
      } else {
        useSnackBar().show(`Error trying updating ${item.id}`, 'error')
      }
    },
  },
})
