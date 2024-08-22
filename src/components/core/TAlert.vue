<template>
  <v-slide-y-transition>
    <v-alert v-if="show" class="text-center mb-2" v-bind="$attrs" :type="type">
      <slot />
    </v-alert>
  </v-slide-y-transition>
</template>

<script lang="ts">
  import { Types } from '@/types/vuetify/Types'
  import { defineComponent, PropType } from 'vue'

  export default defineComponent({
    props: {
      show: {
        type: Boolean,
        default: true,
      },
      type: {
        type: String as PropType<Types>,
        default: 'info' as Types,
      },
    },
  })
</script>
