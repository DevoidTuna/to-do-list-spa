<template>
  <v-col class="d-flex flex-column ga-3">
    <v-scroll-y-transition group hide-on-leave>
      <div v-for="item in items" :key="item.id">
        <item-card :item="item" />
      </div>
    </v-scroll-y-transition>
  </v-col>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useTodoStore } from '@/stores/todo'
  import { ToDoItem } from '@/types/ToDoItem'

  export default defineComponent({
    setup () {
      return { todo: useTodoStore() }
    },
    computed: {
      items (): ToDoItem[] {
        return [...this.todo.items].sort((a, b) => b.id - a.id)
      },
    },
  })
</script>
