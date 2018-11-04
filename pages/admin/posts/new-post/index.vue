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
      <post-form/>

    </v-flex>
  </v-layout>
</template>
<script>
  import postForm from '~/components/posts/form'
  export default {
    components: {
      postForm
    }
  };
</script>
