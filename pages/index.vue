<template>
  <div>
    <banner />
    <v-container>
      <v-layout
        row
        wrap
      >
        <post-preview
          v-for="post in posts"
          :post="post"
          :key="post.id"
        />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import banner from '~/components/landing/banner'
import postPreview from '~/components/posts/preview.vue'
export default {
  layout: 'landing',
  components: {
    banner,
    postPreview
  },
  asyncData(context) {
    return context.$axios.get('v1/posts/home')
      .then(response => {
        return { posts: response.data.posts }
      })
      .catch(e => context.error(e))
  }
};
</script>
