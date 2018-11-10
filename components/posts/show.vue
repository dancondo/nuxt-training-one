<template>
  <v-card>
    <v-layout
      row
      wrap>
      <v-flex
        xs12
        sm4
        order-sm2>
        <v-img
          v-if="post.file.url"
          :src="post.file.url"
          width="100%"
          position="top"/>
      </v-flex>
      <v-flex
        xs12
        sm8>
        <v-card-text>
          <h5 class="display-1 mb-3">
            {{ post.title }}
          </h5>
          <p
            class="title font-weight-light text-xs-justify"
            style="white-space: pre-line;">
            {{ post.content }}
          </p>
        </v-card-text>
      </v-flex>
      <v-flex
        xs12
        order-xs3
        class="grey lighten-4">
        <v-card-actions>
          <v-btn
            v-if="$auth.loggedIn && $auth.user.admin"
            :nuxt="true"
            :to="'/admin/posts/' + post.id + '/edit'"
            flat
            color="light-blue">
            Edit
          </v-btn>
          <v-btn
            v-if="$auth.loggedIn && $auth.user.admin"
            :nuxt="true"
            flat
            @click="remove()">
            Delete
          </v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
  export default{
    props: {
      post: {
        type: Object,
        default: () => {
          return {
            title: null,
            content: null,
            createdAt: null,
            file: null,
            author: null
          }
        }
      }
    },
    methods: {
      remove() {
        if (confirm('Are you sure?')) {
          this.$axios.$delete('v1/posts/' + this.$route.params.postId)
            .then(response =>{
              this.$router.push('/admin/posts');
            })
            .catch(error => {
              this.error(error)
            })
        }
      }
    }
  };

</script>
