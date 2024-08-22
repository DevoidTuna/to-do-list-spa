<template>
  <section>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <item-store class="mb-5" />
        <v-fade-transition hide-on-leave>
          <v-col v-if="loading"><v-progress-linear indeterminate /></v-col>
          <item-info v-if="!loading" :sync="sync" />
        </v-fade-transition>
        <item-list v-if="!loading" />
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
  import TodoService from '@/services/TodoService'
  import { useTodoStore } from '@/stores/todo'
  import { useUserStore } from '@/stores/user'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup () {
      return { todo: useTodoStore(), user: useUserStore() }
    },
    data () {
      return {
        loading: true,
        sync: false,
      }
    },
    computed: {
      items () {
        return this.todo.items
      },
    },
    async created () {
      await this.fetch()
    },
    methods: {
      async fetch (): Promise<void> {
        try {
          if (this.todo.items.length > 0) this.loading = false
          if (this.user.preference === 'web') {
            this.sync = true
            const { data } = await new TodoService().index()
            this.todo.setFetchData(data.data)
          }
        } catch (error) {
          this.$snackbar.show('An error occurred while synchronizing tasks', 'error')
        } finally {
          this.loading = false
          this.sync = false
        }
      },
    },
  })
</script>
