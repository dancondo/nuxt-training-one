<template>
  <v-flex
    md4
    xs12
  >
    <v-card class="ma-3">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        height="200"
      />

      <v-card-title>
        <div>
          <span class="grey--text">{{ post.title }}</span><br>
          <span>{{ post.content }}</span><br>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn
          :nuxt="true"
          :to="'posts/' + post.id"
          flat
          color="orange"
        >
          See more
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        default: null
      }
    }
  };
</script>
