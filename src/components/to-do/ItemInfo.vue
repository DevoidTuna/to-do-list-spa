<template>
  <v-col class="py-2">
    <v-row class="my-1 mr-0" justify="space-between">
      <h3 class="mx-4 text-h4 font-weight-bold text-primary">
        Pending:
        <v-fade-transition leave-absolute>
          <span :key="`tasks-${remainingTasks}`">
            {{ remainingTasks }}
          </span>
        </v-fade-transition>
      </h3>

      <div class="d-flex align-center">
        <v-slide-y-reverse-transition class="d-flex">
          <v-col v-if="sync" class="d-flex align-center ga-2">
            Syncing
            <v-progress-circular
              class="mr-1"
              indeterminate
              size="20"
              width="2"
            />
          </v-col>
        </v-slide-y-reverse-transition>

        <strong class="mx-4 text-success-darken-2">
          tasks: {{ qntTasks }}
        </strong>

        <v-divider vertical />

        <strong class="mx-4 text-info-darken-2">
          completed: {{ completedTasks }}
        </strong>

        <v-spacer />

        <v-progress-circular
          v-model="progress"
          class="me-2"
          color="primary"
          size="35"
          width="5"
        />
      </div>
    </v-row>
    <v-divider class="mt-2" />
  </v-col>
</template>

<script lang="ts">
  import { useTaskStore } from '@/stores/task'
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      sync: {
        type: Boolean,
        default: false,
      },
    },
    setup () {
      return { task: useTaskStore() }
    },
    computed: {
      completedTasks (): number {
        return this.task.items.filter(task => task.finished_at).length
      },
      remainingTasks (): number {
        return this.task.items.filter(task => !task.finished_at).length
      },
      progress (): number {
        return this.completedTasks
          ? (this.completedTasks / this.qntTasks) * 100
          : 0
      },
      qntTasks (): number {
        return this.task.items.length
      },
    },
  })
</script>
