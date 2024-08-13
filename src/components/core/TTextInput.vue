<template>
  <v-text-field
    v-bind="$attrs"
    class="mb-1"
    :color="color"
    :density="isMobile ? 'compact' : 'comfortable'"
    :disabled="disabled"
    :label="label"
    :model-value="modelValue"
    :rules="rules"
    :variant="variant"
    @update:model-value="update($event)"
  />
</template>

<script lang="ts">
  import { defineComponent, type PropType } from 'vue'
  import type VariantProp from '../../types/vuetify/Variant'
  import type { ValidationRule } from '@/types/vuetify/ValidationRule'

  export default defineComponent({
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      rules: {
        type: Array as PropType<ValidationRule[]>,
        required: false,
        default: undefined,
      },
      label: {
        type: String,
        default: '',
      },
      variant: {
        type: String as PropType<VariantProp>,
        default: 'outlined',
      },
      color: {
        type: String,
        default: 'primary',
      },
      disabled: {
        type: Boolean,
        required: false,
        default: undefined,
      },
    },
    emits: ['update:modelValue'],
    computed: {
      isMobile (): boolean {
        return this.$vuetify.display.smAndDown
      },
    },
    methods: {
      update (value: string): void {
        this.$emit('update:modelValue', value)
      },
    },
  })
</script>
