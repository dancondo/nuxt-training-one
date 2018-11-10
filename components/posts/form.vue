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

    <v-form @submit.prevent="submit">
      <v-card-text>

        <v-text-field
          v-model="post.title"
          label="Title"/>
        <v-textarea
          v-model="post.content"
          label="Content" />


        <v-card-actions>

          <v-spacer/>

          <v-btn
            type="submit"
            dark
            color="pink">
            Submit
          </v-btn>

        </v-card-actions>

      </v-card-text>
    </v-form>
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
      submit() {
        this.$emit('onSubmit', this.post)
      }
    }
  };
</script>
