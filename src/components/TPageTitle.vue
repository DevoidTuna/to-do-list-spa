<template>
  <v-row class="page-title">
    <v-col cols="12">
      <v-row align="center">
        <v-btn
          class="no-print mr-1"
          color="transparent"
          elevation="0"
          icon="mdi-arrow-left"
          @click="$router.back()"
        />
        <h3 v-if="isMobile">{{ title }}</h3>
        <h2 v-else>{{ title }}</h2>
        <v-spacer class="no-print" />
        <div class="d-flex mx-5" style="gap: 0.6rem">
          <v-btn
            v-if="onAdd !== undefined"
            color="primary"
            icon="mdi-plus"
            @click="onAdd()"
          />
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true,
      },
      onAdd: {
        type: Function,
        required: false,
      },
    },
    computed: {
      isMobile (): boolean {
        return this.$vuetify.display.smAndDown
      },
    },
  })
</script>
