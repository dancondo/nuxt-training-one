<template>
  <v-flex
    md4
    xs12
  >
    <v-card class="ma-3">
      <v-img
        :src="post.file.url ? post.file.url : ''"
        loading
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
          :to="postRoute"
          flat
          color="orange"
        >
          See more
        </v-btn>
        <v-btn
          v-if="$auth.loggedIn && $auth.user.admin"
          :nuxt="true"
          :to="'/admin/posts/' + post.id + '/edit'"
          flat
          color="orange">
          Edit
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
    },
    computed: {
      postRoute() {
        if(this.$auth.loggedIn && this.$auth.user.admin) {
          return '/admin/posts/' + this.post.id;
        }
        return '/posts/' + this.post.id;
      }
    }
  };
</script>
