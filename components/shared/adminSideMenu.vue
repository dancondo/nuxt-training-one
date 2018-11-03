<template>

  <div>
    <v-toolbar
      app
      fixed
      color="light-blue darken-2"
      dark >

      <v-toolbar-side-icon
        @click.stop="drawer = !drawer" />

    </v-toolbar>

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
          exact
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

  </div>

</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
        items: [
        { title: 'Account', link: '/admin', icon: 'person' },
        { title: 'Posts', link: '/admin/posts', icon: 'list_alt' },
        { title: 'New Post', link: '/admin/posts/new-post', icon: 'supervisor_account' }
        ]
      }
    }
  };
</script>
