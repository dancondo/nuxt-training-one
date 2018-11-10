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

    <v-form
      enctype="multipart/form-data"
      @submit.prevent="submit">
      <v-card-text>

        <v-text-field
          v-model="post.title"
          label="Title"/>
        <v-card
          height="100px"
          width="200px"
          style="position: relative">
          <input
            class="image-input"
            type="file"
            @change="addFile">
          <v-img
            :src="previewImage"
            max-width="100%"
            max-height="100%"/>
        </v-card>

        <v-textarea
          v-model="post.content"
          label="Content" />


        <v-card-actions>

          <v-spacer/>

          <v-btn
            :loading="loading"
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
    props: {
      post: {
        type: Object,
        default: () => {
          return {
            id: null,
            title: null,
            content: null,
            file: null
          }
        }
      }
    },
    data() {
      return {
        loading: false,
        newFile: null
      }
    },
    computed: {
      previewImage() {
        if(this.newFile) {
          return URL.createObjectURL(this.newFile)
        };
        if (this.post.file) {
          if (this.post.file.url === null) {
            return '';
          };
          return this.post.file.url;
        }
      }
    },
    methods: {
      addFile(event) {
        this.newFile = event.target.files[0]
      },
      submit() {
        this.loading = true;
        const fd = new FormData()
        if (this.newFile) fd.append('post[file]', this.newFile, this.newFile.name);
        fd.append('post[title]', this.post.title);
        fd.append('post[content]', this.post.content);
        this.$emit('onSubmit', fd)
      }
    }
  };
</script>
<style>
  .image-input{
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9999;
  }
</style>
