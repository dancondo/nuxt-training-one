<template>

  <div>
    <v-navigation-drawer
      v-model="drawer"
      app>

      <v-list
        dense
        class="pt-0">

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          nuxt>

          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>

      </v-list>

    </v-navigation-drawer>

    <v-toolbar
      app
      fixed >

      <v-toolbar-side-icon
        @click.stop="drawer = !drawer" />

    </v-toolbar>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
        items: [
        { title: 'Perfil', link: '/users', icon: 'person' },
        { title: 'Posts', link: '/posts', icon: 'list_alt' },
        { title: 'Admin', link: '/admin', icon: 'supervisor_account' }
        ]
      }
    }
  };
</script>
