<template>
  <v-footer
    class="bg-tertiary text-center d-flex flex-column"
    style="max-height: 120px;"
  >
    <div>
      <v-btn
        v-for="(item, index) in social"
        :key="index"
        class="mx-4 mb-4"
        color="white"
        :icon="item.icon"
        variant="text"
        @click="open(item.link)"
      />
    </div>

    <v-divider />

    <div>
      {{ new Date().getFullYear() }} — <strong>DevoidTuna</strong>
    </div>
  </v-footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    computed: {
      social () {
        return [
          {
            icon: 'mdi-linkedin',
            link: 'https://www.linkedin.com/in/patrick-brining',
          },
          {
            icon: 'mdi-github',
            link: 'https://github.com/DevoidTuna',
          },
          {
            icon: 'mdi-instagram',
            link: 'https://www.instagram.com/patrickbrining/',
          },
        ]
      },
    },
    methods: {
      open (link: string): Window | null {
        return window.open(link, '_blank')
      },
    },
  })
</script>
