<template>
  <v-parallax
    :src="background"
  >
    <v-layout
      column
      align-center
      justify-center
      class="white--text"
    >

      <h1 class="display-3 font-weight-medium text-xs-center">The Nuxt Blog</h1>
      <h5 class="headline text-xs-center">Showing the next posts you need to read</h5>
      <v-btn
        nuxt
        to="/posts"
        color="pink"
        dark
        large
      >
        Explore
      </v-btn>

    </v-layout>

  </v-parallax>
</template>

<script>
  export default {
    data() {
      return {
        background: require('~/assets/banner.jpg')
      }
    }
  };
</script>

<style>
  .banner {
    height: 70vh;
    background-size: cover;
  }
</style>
