<template>
  <v-col>
    <t-card elevation="6" icon="mdi-plus" rounded="lg" title="Add task">
      <v-form @submit.prevent="submit">
        <v-row class="mx-0">
          <v-col class="d-flex ga-2 align-center">
            <t-text-input
              v-model="item.content"
              box
              :disabled="loading"
              hide-details
              :loading="loading"
            />
            <v-btn class="mb-2" icon="mdi-plus" :loading="loading" type="submit" />
          </v-col>
        </v-row>
      </v-form>
    </t-card>
  </v-col>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useUserStore } from '@/stores/user'
  import { useTodoStore } from '@/stores/todo'
  import TodoService from '@/services/TodoService'

  export default defineComponent({
    setup () {
      return { user: useUserStore(), todo: useTodoStore() }
    },
    data () {
      return {
        loading: false,
        item: {
          content: '',
        },
      }
    },
    methods: {
      async submit () {
        try {
          if (!this.item.content.trim()) return this.$snackbar.show('Empty field.', 'warning', 1000)

          this.loading = true
          const toDoItem = this.todo.store(this.item.content)

          if (this.user.preference === 'local') {
            this.todo.pushItem(toDoItem)
          } else {
            const { data } = await new TodoService().store(toDoItem)
            this.todo.pushItem(data.data)
          }

          this.item.content = ''
          this.$snackbar.show('To-do item created with success', 'success')
        } catch (error) {
          this.$snackbar.show('An error occurred while performing your operation, please try again.', 'error')
        } finally {
          this.loading = false
        }
      },
    },
  })
</script>
