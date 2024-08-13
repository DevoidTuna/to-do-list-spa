<template>
  <v-text-field
    v-maska:[dateMask]
    :append-inner-icon="icon"
    color="primary"
    :density="dense"
    :disabled="loading"
    :hide-details="hideDetails"
    :label="label"
    :model-value="date"
    variant="outlined"
    @update:model-value="update($event)"
  />
</template>

<script lang="ts">
  import { defineComponent, type PropType } from 'vue'
  import type DensityProp from '../../types/vuetify/Density'
  import { DateTime } from 'luxon'

  export default defineComponent({
    props: {
      label: {
        type: String,
        default: 'Selecione a Data',
      },
      modelValue: {
        type: String,
        default: '',
      },
      format: {
        type: String,
        required: false,
        default: 'yyyy-mm-dd',
      },
      icon: {
        type: String,
        default: '',
      },
      dense: {
        type: String as PropType<DensityProp>,
        default: 'compact',
      },
      loading: {
        type: Boolean,
        default: false,
      },
      hideDetails: {
        type: Boolean,
        default: true,
      },
    },
    emits: ['update:modelValue'],
    data () {
      return {
        dateMask: {
          mask: ['##/##/####'],
        },
        date: '',
      }
    },
    watch: {
      modelValue (newValue) {
        const date = DateTime.fromFormat(newValue, this.format)
        if (date.isValid) {
          this.date = date.toFormat('dd/mm/yyyy')
        }
      },
    },
    created () {
      const date = DateTime.fromFormat(this.modelValue, this.format)
      if (date.isValid) {
        this.date = date.toFormat('dd/mm/yyyy')
      }
    },
    methods: {
      update (value: string): void {
        this.date = value
        if (this.isValidFormat(value)) {
          let date: DateTime | string = DateTime.fromFormat(value, 'dd/mm/yyyy')
          date = date.toFormat(this.format)
          this.$emit('update:modelValue', date)
        }
      },
      isValidFormat (value: string): boolean {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/
        return regex.test(value)
      },
    },
  })
</script>
