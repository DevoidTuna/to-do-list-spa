<template>
  <t-text-input
    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
    :label="label"
    :model-value="modelValue"
    prepend-inner-icon="mdi-key-variant"
    :rules="rules ? rules : rule"
    :type="showPassword ? 'text' : 'password'"
    @click:append-inner="showPassword = !showPassword"
    @update:model-value="update($event)"
  />
</template>

<script lang="ts">
  import TTextInput from '../core/TTextInput.vue'
  import { defineComponent, PropType } from 'vue'
  import type { ValidationRule } from '@/types/vuetify/ValidationRule'

  export default defineComponent({
    components: {
      TTextInput,
    },
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: 'Password',
      },
      rules: {
        type: Array as PropType<ValidationRule[]>,
        default: undefined,
      },
    },
    emits: ['update:modelValue'],
    data () {
      return {
        showPassword: false,
        rule: [
          (v: string) => !!v.trim() || 'Password is required',
        ] as ValidationRule[],
      }
    },
    methods: {
      update (value: string): void {
        this.$emit('update:modelValue', value)
      },
    },
  })
</script>
