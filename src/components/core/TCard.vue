<template>
  <div>
    <span v-show="label" class="span-label">{{ label }}</span>
    <v-card
      class="pa-1 pa-md-2"
      :class="[{ 'label-style': label !== null }]"
      :elevation="label ? '0' : elevation"
      :rounded="rounded"
    >
      <v-card-title class="d-flex align-center">
        <v-icon
          v-if="icon"
          class="mr-2 mb-2"
          :color="iconColor"
          :icon="icon"
          :size="isMobile ? 'default' : 'large'"
        />
        <h5 v-if="isMobile" class="mb-2">{{ title }}</h5>
        <h4 v-else class="mb-2">{{ title }}</h4>
      </v-card-title>
      <slot />
    </v-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      label: {
        type: String,
        default: null,
      },
      elevation: {
        type: String,
        default: '3',
      },
      rounded: {
        type: String,
        default: 'md',
      },
      title: {
        type: String,
        required: false,
        default: '',
      },
      icon: {
        type: String,
        required: false,
        default: '',
      },
      iconColor: {
        type: String,
        required: false,
        default: 'primary',
      },
    },
    computed: {
      isMobile (): boolean {
        return this.$vuetify.display.smAndDown
      },
    },
  })
</script>

<style scoped lang="scss">
.label-style {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-top: 1ch;
}

.span-label {
  position: relative;
  top: 10px;
  left: 16px;
  font-size: 12px;
  padding: 0px 4px;
  background: white;
  height: 18px;
  display: flex;
  width: fit-content;
  z-index: 1;
}
</style>
