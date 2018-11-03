<template>
  <v-app>

    <side-menu/>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  import sideMenu from '~/components/shared/sideMenu'
  export default {
    components: {
      sideMenu
    },
    data() {
      return {
      }
    }
  };
</script>
