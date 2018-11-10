<template>
  <div>
    <h1 class="ma-3">All Posts</h1>
    <v-layout
      row
      wrap>

      <post-preview
        v-for="post in posts"
        :post="post"
        :key="post.id"
      />

    </v-layout>
  </div>
</template>

<script>
  export default {
    asyncData(context) {
      return context.$axios.get('v1/posts')
        .then(response => {
          console.log(response)
          return { posts: response.data.posts }
        })
        .catch(e => context.error(e))
      ;
    }
  };
</script>

<style>

</style>
