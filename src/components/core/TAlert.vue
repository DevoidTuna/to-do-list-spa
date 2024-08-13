<template>
  <v-slide-y-transition>
    <v-alert v-if="show" class="text-center mb-2" :color="color">
      <slot />
    </v-alert>
  </v-slide-y-transition>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      show: {
        type: Boolean,
        default: true,
      },
      color: {
        type: String,
        required: true,
      },
    },
  })
</script>
