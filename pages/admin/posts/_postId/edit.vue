<template>
  <v-layout
    row
    wrap
    align-center
    justify-center
    fill-height>
    <v-flex
      xs12
      sm6>
      <post-form
        :post="post"
        @onSubmit="savePost($event)"/>

    </v-flex>
  </v-layout>
</template>
<script>
  import postForm from '~/components/posts/form'
  export default {
    components: {
      postForm
    },
    data() {
      return {
        post: {}
      }
    },
    created() {
      this.$axios.$get('v1/posts/' + this.$route.params.postId)
        .then(data => {
          this.post = data.post
        })
      ;
    },
    methods: {
      savePost(postData) {
        this.$axios.$put('/v1/posts/' + this.$route.params.postId, postData)
          .then(response => {
            this.$router.push('/admin/posts/' + response.id)
          })
      }
    },
  };
</script>
