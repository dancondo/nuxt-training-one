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
    props: {
      items: {
        type: Array,
        default: null
      }
    },
    data() {
      return {
        drawer: null,
      }
    }
  };
</script>
