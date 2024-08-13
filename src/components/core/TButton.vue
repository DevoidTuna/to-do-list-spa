<template>
  <v-btn
    v-bind="$attrs"
    :disabled="disabled"
    :loading="loading"
    :rounded="rounded"
    :type="type"
    :variant="variant"
  >
    <slot />
  </v-btn>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import type { PropType } from 'vue'
  export default defineComponent({
    name: 'TButton',
    props: {
      variant: {
        type: String as PropType<
          'elevated' | 'flat' | 'text' | 'tonal' | 'outlined' | 'plain'
        >,
        default: 'elevated' as 'elevated',
      },
      rounded: {
        type: String,
        default: 'md',
      },
      type: {
        type: String,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: undefined,
      },
    },
  })
</script>
