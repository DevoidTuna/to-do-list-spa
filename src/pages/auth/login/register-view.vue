<template>
  <v-form
    v-model="formValidate"
    class="d-flex justify-center"
    @submit.prevent="register"
  >
    <v-col class="d-flex flex-column mb-1 mb-md-5" cols="12" md="8">
      <strong class="font-weight-black text-h4 mb-6">Create new account.</strong>
      <t-text-input
        v-model="newUser.name"
        :disabled="loading"
        label="Name"
        :loading="loading"
        min="2"
        prepend-inner-icon="mdi-alphabetical-variant"
        :rules="name"
      />
      <t-email-input
        v-model="newUser.email"
        :disabled="loading"
        :loading="loading"
      />
      <t-password-input
        v-model="newUser.password"
        :disabled="loading"
        :loading="loading"
      />
      <t-password-input
        v-model="newUser.password_confirmation"
        :disabled="loading"
        label="Confirm your password"
        :loading="loading"
        :rules="confirmPassRule"
      />
      <t-button
        :loading="loading"
        size="large"
        type="submit"
      >REGISTER</t-button>
    </v-col>
  </v-form>
</template>

<script lang="ts">
  import UserService from '@/services/UserService'
  import { useTaskStore } from '@/stores/task'
  import { useUserStore } from '@/stores/user'
  import { ValidationRule } from '@/types/vuetify/ValidationRule'
  import { defineComponent } from 'vue'
  import { NavigationFailure } from 'vue-router'

  export default defineComponent({
    setup () {
      return { user: useUserStore(), task: useTaskStore() }
    },
    data () {
      return {
        newUser: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
        formValidate: null,
        loading: false,
      }
    },
    computed: {
      confirmPassRule (): ValidationRule[] {
        return [
          (v: string) => v === this.newUser.password || "The password doesn't match",
        ] as ValidationRule[]
      },
      name (): ValidationRule[] {
        return [
          (v: string) => !!v || 'Name is required',
        ] as ValidationRule[]
      },
    },
    methods: {
      async register (): Promise<void | NavigationFailure> {
        if (this.formValidate) {
          try {
            this.loading = true
            const { data } = await new UserService().register(this.newUser)
            this.user.setUser(data.data.user)
            this.user.setToken(data.data.token)
            this.user.setPreference('web')
            this.task.items = []
            this.$snackbar.show('Account created successfully', 'success')
            return this.$router.push('/dashboard')
          } catch (error) {
            this.$snackbar.show('an error occurred while registering', 'error')
            console.error(error)
          } finally {
            this.loading = false
          }
        }
      },
    },
  })
</script>
