<template>
  <div>
    <v-app-bar
      app
      color="drawerBackground"
      elevation="3"
      :height="isMobile ? 55 : 75"
    >
      <v-row justify="center">
        <v-col class="d-flex justify-start" cols="12" md="8">
          <v-col
            class="my-auto pa-0"
            :class="[{ 'd-flex': !isMobile }]"
            cols="4"
            lg="3"
            xl="2"
          >
            <router-link to="/">
              <v-img
                class="ml-2"
                :height="isMobile ? 50 : 68"
                :src="logo"
                :width="isMobile ? 50 : 68"
              />
            </router-link>
          </v-col>

          <v-col
            class="d-flex align-center justify-end"
            cols="8"
            lg="9"
            xl="10"
          >
            <div v-if="guest" class="d-flex ga-2">
              <t-button variant="outlined" @click="redirectToLogin">Access account</t-button>
            </div>
            <div v-else>
              <t-button color="primary" prepend-icon="mdi-logout" variant="outlined" @click="logout">Logout</t-button>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import logo from '@/assets/images/logo.jpeg'
  import { useUserStore } from '@/stores/user'
  import TButton from '@/components/core/TButton.vue'
  import UserService from '@/services/UserService'

  export default defineComponent({
    components: {
      TButton,
    },
    setup () {
      return { user: useUserStore() }
    },
    data () {
      return {
        logo,
      }
    },
    computed: {
      isMobile (): boolean {
        return this.$vuetify.display.smAndDown
      },
      guest (): boolean {
        return this.user.user === null
      },
    },
    methods: {
      logout () {
        this.user.logout()
        this.$router.push('/')
      },
      redirectToLogin () {
        this.$router.push('/login')
      },
    },
  })
</script>
