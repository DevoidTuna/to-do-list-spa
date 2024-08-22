<template>
  <v-hover v-slot="{ isHovering, props }" open-delay="30">
    <v-card
      :class="{ 'bg-grey-lighten-3': finishedItem }"
      :elevation="finishedItem ? 1 : isHovering ? 6 : 3"
      rounded="lg"
      v-bind="props"
    >
      <v-col
        class="d-flex justify-space-between align-center"
        :class="{ 'py-1': finishedItem }"
      >
        <div class="d-flex ga-4 align-center">
          <v-btn
            color="primary"
            icon="mdi-check"
            :variant="finishedItem ? 'flat' : 'outlined'"
            @click="changeStatus(item)"
          />
          <div
            class="text-body-1"
            :class="{ 'text-decoration-line-through': finishedItem }"
          >
            {{ item.content }}
          </div>
        </div>
        <v-btn
          color="error"
          icon="mdi-delete"
          variant="outlined"
          @click="destroy(item)"
        />
      </v-col>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
  import TodoService from '@/services/TodoService'
  import { useTaskStore } from '@/stores/task'
  import { useUserStore } from '@/stores/user'
  import { Task } from '@/types/Task'
  import { DateTime } from 'luxon'
  import { defineComponent, PropType } from 'vue'

  export default defineComponent({
    props: {
      item: {
        type: Object as PropType<Task>,
        required: true,
      },
    },
    setup () {
      return { task: useTaskStore(), user: useUserStore() }
    },
    computed: {
      finishedItem (): boolean {
        return !!this.item.finished_at
      },
    },
    methods: {
      async changeStatus (item: Task) {
        try {
          const updatedItem = item
          updatedItem.finished_at = item.finished_at
            ? null
            : DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss')
          this.task.update(updatedItem)
          if (this.user.preference === 'web') { await new TodoService().update(item.id, item) }
          return updatedItem
        } catch (error) {
          this.$snackbar.show(
            'An error occurred while updating the item status',
            'error'
          )
        }
      },
      async destroy (item: Task): Promise<void> {
        try {
          this.task.destroy(item)
          if (this.user.preference === 'web') {
            await new TodoService().destroy(item)
            this.task.destroy(item)
          }
        } catch (error) {
          this.$snackbar.show(
            'An error occurred while deleting the item ' + item.id,
            'error'
          )
        }
      },
    },
  })
</script>
