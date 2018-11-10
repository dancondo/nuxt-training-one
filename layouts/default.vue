<template>
  <v-app>

    <side-menu
      :items="items"/>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
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
        items: [
          { title: 'Account', link: this.$auth.loggedIn ?  '/users' : '/users/auth', icon: 'person' },
          { title: 'Posts', link: '/posts', icon: 'list_alt' },
        ]
      }
    }
  };
</script>
