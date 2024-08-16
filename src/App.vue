<template>
  <v-app>
    <t-snackbar />
    <t-app-bar app />
    <v-main>
      <v-container class="mx-0" fluid>
        <router-view v-slot="{ Component }">
          <v-fade-transition hide-on-leave>
            <component :is="Component" />
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>
