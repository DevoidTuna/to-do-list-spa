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
  import { useTaskStore } from '@/stores/task'
  import { Task } from '@/types/Task'

  export default defineComponent({
    setup () {
      return { task: useTaskStore() }
    },
    computed: {
      items (): Task[] {
        return [...this.task.items].sort((a, b) => b.id - a.id)
      },
    },
  })
</script>
