<template>
  <div>
    <h1 class="ma-3">All Posts</h1>
    <v-layout
      row
      wrap>

      <post-preview
        v-for="n in posts"
        :id="n"
        :key="n"/>

    </v-layout>
  </div>
</template>

<script>
  import postPreview from '~/components/posts/preview'
  export default {
    components: {
      postPreview
    },
    computed: {
      posts() {
        return this.$store.getters['posts/getPost']
      }
    }
  };
</script>
