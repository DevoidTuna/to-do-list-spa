<template>
  <section class="d-flex" style="height: 70vh; min-height: 100%;">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="5" md="8">
        <v-card elevation="24" min-width="100%" rounded="lg">
          <v-tabs v-model="activeTab" class="elevation-3">
            <v-tab
              v-for="(tab, index) in tabs"
              :key="index"
              block
              :value="index"
            >
              <v-icon color="primary" :icon="tab.icon" start />
              <span class="text-grey-darken-1">{{ tab.title }}</span>
            </v-tab>
          </v-tabs>
          <v-window v-model="activeTab">
            <v-window-item
              v-for="(tab, index) in tabs"
              :key="index"
              :value="index"
            >
              <v-card-text>
                <keep-alive>
                  <component :is="tab.component" />
                </keep-alive>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import RegisterView from './login/register-view.vue'
  import LoginView from './login/login-view.vue'

  export default defineComponent({
    data () {
      return {
        activeTab: 0,
      }
    },
    computed: {
      tabs () {
        return [
          {
            title: 'Login',
            icon: 'mdi-login',
            component: LoginView,
          },
          {
            title: 'register',
            icon: 'mdi-account-plus',
            component: RegisterView,
          },
        ]
      },
    },
  })
</script>
