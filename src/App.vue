<template>
  <v-app>
    <the-snackbar />
    <t-app-bar app />
    <v-main>
      <v-container class="ml-md-2 mx-0 pr-md-8 pr-4" fluid>
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
  import TAppBar from './components/core/TAppBar.vue'
  import TheSnackbar from './components/core/TheSnackbar.vue'

  export default defineComponent({
    components: {
      TAppBar,
      TheSnackbar,
    },
  })
</script>
