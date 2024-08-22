<template>
  <section class="d-flex" style="height: 72vh">
    <v-container
      class="d-flex justify-center ga-7 flex-column flex-md-row"
    >
      <v-row align="center" justify="center">
        <v-col
          class="d-flex flex-column justify-center justify-lg-end"
          cols="12"
          lg="5"
          md="6"
          xl="4"
          xxl="3"
        >
          <t-alert
            color="quartiary"
            rounded="lg"
          >Save your tasks locally</t-alert>
          <t-button
            block
            height="150"
            rounded="lg"
            size="x-large"
            @click="setPreference('local')"
          >Local storage</t-button>
        </v-col>
        <v-col
          class="d-flex flex-column justify-center justify-lg-start"
          cols="12"
          lg="5"
          md="6"
          xl="4"
          xxl="3"
        >
          <t-alert
            color="quartiary"
            rounded="lg"
          >Access and manage your account tasks</t-alert>
          <t-button
            block
            height="150"
            rounded="lg"
            size="x-large"
            @click="redirectToLogin()"
          >Login | Register</t-button>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TButton from '@/components/core/TButton.vue'
  import { useUserStore } from '@/stores/user'
  export default defineComponent({
    components: {
      TButton,
    },
    setup () {
      return { user: useUserStore() }
    },
    methods: {
      async setPreference (preference: 'local' | 'web') {
        this.user.setPreference(preference)
        await this.$router.push('/dashboard')
      },
      async redirectToLogin () {
        await this.$router.push('/login')
      },
    },
  })
</script>
