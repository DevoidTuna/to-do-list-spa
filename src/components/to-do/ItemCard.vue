<template>
  <v-hover v-slot="{ isHovering, props }" open-delay="10">
    <v-card
      :class="{ 'bg-grey-lighten-5': finishedItem}"
      :elevation="finishedItem ? 1 : isHovering ? 6 : 3"
      rounded="lg"
      v-bind="props"
    >
      <v-col class="d-flex justify-space-between align-center" :class="{'py-1': finishedItem}">
        <div class="d-flex ga-4 align-center">
          <v-btn
            :color="finishedItem ? 'white' : 'primary'"
            :icon="finishedItem ? 'mdi-close' : 'mdi-check'"
            :variant="finishedItem ? 'flat' : 'elevated'"
            @click="changeStatus(item)"
          />
          <div
            class="text-body-1"
            :class="{ 'text-decoration-line-through': finishedItem}"
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
  import { useTodoStore } from '@/stores/todo'
  import { ToDoItem } from '@/types/ToDoItem'
  import { DateTime } from 'luxon'
  import { defineComponent, PropType } from 'vue'

  export default defineComponent({
    props: {
      item: {
        type: Object as PropType<ToDoItem>,
        required: true,
      },
    },
    setup () {
      return { todo: useTodoStore() }
    },
    computed: {
      finishedItem (): boolean {
        return !!this.item.finished_at
      },
    },
    methods: {
      changeStatus (item: ToDoItem): ToDoItem | undefined {
        try {
          const updatedItem = item
          updatedItem.finished_at = item.finished_at
            ? null
            : DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss')
          this.todo.update(updatedItem)
          return updatedItem
        } catch (error) {
          this.$snackbar.show(
            'An error occurred while updating the item status',
            'error'
          )
        }
      },
      destroy (item: ToDoItem): void {
        try {
          return this.todo.destroy(item)
        } catch (error) {
          this.$snackbar.show(
            'An error occurred while deleting the item',
            'error'
          )
        }
      },
    },
  })
</script>
