<template>
  <v-snackbar
    v-model="snackbar.visible"
    :color="snackbar.type"
    elevation="24"
    location="right top"
    :timeout="snackbar.timeout"
    transition="scroll-x-reverse-transition"
  >
    <div>
      <v-icon class="mr-2" density="compact" :icon="` ${icons[snackbar.type]}`" size="large" />
      {{ snackbar.message }}
    </div>
  </v-snackbar>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useSnackBar } from '../../stores/snackbar'

  export default defineComponent({
    data () {
      return {
        snackbar: useSnackBar(),
        icons: {
          success: ' mdi-check-circle',
          info: ' mdi-information',
          warning: ' mdi-alert-circle',
          error: ' mdi-alpha-x-circle',
        },
      }
    },
  })
</script>
