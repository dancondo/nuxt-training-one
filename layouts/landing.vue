<template>
  <v-app>
    <v-toolbar class="white">
      <v-toolbar-title>
        Nuxt Blog
      </v-toolbar-title>

      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn
          v-for="item in navigationLinks"
          :key="item"
          :to="item.link"
          nuxt
          flat>
          {{ item.name }}
        </v-btn>

      </v-toolbar-items>

    </v-toolbar>
    <nuxt />
    <app-footer
      footer-color="blue darken-4" />
  </v-app>
</template>

<script>
  import appFooter from '~/components/shared/appFooter'
  export default {
    components: {
      appFooter
    },
    data() {
      return {
        navigationLinks: [
          { name: 'Home', link: '/' },
          { name: 'About', link: '/about' }
        ]
      }
    }
  };
</script>
