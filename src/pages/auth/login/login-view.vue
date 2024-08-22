<template>
  <v-form
    v-model="formValidate"
    class="d-flex justify-center"
    @submit.prevent="login"
  >
    <v-col class="d-flex flex-column mb-1 mb-md-5" cols="12" md="8">
      <strong class="font-weight-black text-h4 mb-6">Access your account.</strong>
      <t-email-input
        v-model="email"
        :disabled="loading"
        :loading="loading"
      />
      <t-password-input
        v-model="password"
        :disabled="loading"
        :loading="loading"
      />
      <t-button :loading="loading" size="large" type="submit">LOGIN</t-button>
    </v-col>
  </v-form>
</template>

<script lang="ts">
  import UserService from '@/services/UserService'
  import { useTaskStore } from '@/stores/task'
  import { useUserStore } from '@/stores/user'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup () {
      return { user: useUserStore(), task: useTaskStore() }
    },
    data () {
      return {
        email: '',
        password: '',
        formValidate: null,
        loading: false,
      }
    },
    methods: {
      async login () {
        if (this.formValidate) {
          try {
            this.loading = true
            const { data } = await new UserService().login(
              this.email,
              this.password
            )
            this.user.setUser(data.data.user)
            this.user.setToken(data.data.token)
            this.task.items = []
            this.user.setPreference('web')
            this.$snackbar.show('Login completed', 'success')
            return this.$router.push('/dashboard')
          } catch (error) {
            this.$snackbar.show('an error occurred while logging in', 'error')
            console.error(error)
          } finally {
            this.loading = false
          }
        }
      },
    },
  })
</script>
