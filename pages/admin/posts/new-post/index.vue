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
      <post-form @onSubmit="savePost($event)"/>

    </v-flex>
  </v-layout>
</template>
<script>
  import postForm from '~/components/posts/form'
  export default {
    components: {
      postForm
    },
    methods: {
      savePost(postData) {
        this.$axios.$post('/v1/posts/', postData)
          .then(response => {
            this.$router.push('/admin/posts/' + response.id)
          })
      }
    }
  };
</script>
