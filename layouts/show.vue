<template>
  <v-app>

    <side-menu/>

    <v-content>
      <nuxt />
    </v-content>

    <app-footer />
  </v-app>
</template>

<script>
  import sideMenu from '~/components/shared/sideMenu'
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
