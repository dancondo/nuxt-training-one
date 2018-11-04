<template>
  <v-card>
    <v-toolbar
      dark
      color="blue"
      flat
      card>
      <v-toolbar-title>
        {{ post.id ? 'Edit Post' : 'New Post' }}
      </v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-form>

        <v-text-field
          v-model="post.title"
          label="Title"/>
        <v-textarea
          v-model="post.contetn"
          label="Content" />

      </v-form>

      <v-card-actions>

        <v-spacer/>

        <v-btn
          dark
          color="pink">
          Submit
        </v-btn>

      </v-card-actions>

    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
        post: {
          id: null,
          title: null,
          content: null,
        }
      }
    },
    methods: {
    }
  };
</script>
