<template>
  <t-text-input
    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
    label="Senha"
    :model-value="modelValue"
    prepend-inner-icon="mdi-key-variant"
    :rules="rules.general"
    :type="showPassword ? 'text' : 'password'"
    @click:append-inner="showPassword = !showPassword"
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
        showPassword: false,
        rules: {
          general: [
            (v: string) => !!v.trim() || 'Senha é obrigatório',
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
