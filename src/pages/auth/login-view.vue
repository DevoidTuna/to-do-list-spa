<template>
  <section class="d-flex" style="height: 82vh">
    <v-container class="ma-auto align-center d-flex justify-center ga-7 flex-column flex-md-row">
      <t-button
        :elevation="6"
        height="250"
        rounded="lg"
        size="x-large"
        type="elevated"
        width="400"
        @click="setPreference('local')"
      >Local storage</t-button>
      <t-button
        disabled
        :elevation="6"
        height="250"
        rounded="lg"
        size="x-large"
        type="elevated"
        width="400"
      >
        <div class="d-flex flex-column ga-2">
          <span>Login | Register</span>
          <span>Coming soon!</span>
        </div>
      </t-button>
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
    },
  })
</script>
