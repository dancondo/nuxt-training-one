<template>
  <v-app>

    <side-menu/>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <app-footer />
  </v-app>
</template>

<script>
  import sideMenu from '~/components/shared/adminSideMenu'
  import appFooter from '~/components/shared/appFooter'
  export default {
    components: {
      sideMenu,
      appFooter
    },
    data() {
      return {
      }
    }
  };
</script>
