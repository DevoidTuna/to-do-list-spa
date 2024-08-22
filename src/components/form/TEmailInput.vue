<template>
  <t-text-input
    label="E-mail"
    :model-value="modelValue"
    placeholder="email@example.com"
    prepend-inner-icon="mdi-email"
    :rules="rules.email"
    type="email"
    @update:model-value="update($event)"
  />
</template>

<script lang="ts">
  import TTextInput from '../core/TTextInput.vue'
  import { defineComponent } from 'vue'
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
    },
    emits: ['update:modelValue'],
    data () {
      return {
        rules: {
          email: [
            (v: string) => !!v || 'E-mail is required',
            (v: string) =>
              /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(v) ||
              'E-mail must be valid',
          ] as ValidationRule[],
        },
      }
    },
    methods: {
      update (value: string): void {
        this.$emit('update:modelValue', value)
      },
    },
  })
</script>
