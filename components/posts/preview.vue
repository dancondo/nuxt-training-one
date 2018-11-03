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
          <span class="grey--text">Number 10</span><br>
          <span>Whitehaven Beach</span><br>
          <span>Whitsunday Island, Whitsunday Islands</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn
          :nuxt="true"
          :to="'posts/' + id"
          flat
          color="orange"
        >
          See
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        default: 0
      }
    }
  };
</script>
