<template>
  <div>
    <post-show
      :post="post"/>
  </div>
</template>
<script>
  export default {
    asyncData(context) {
      console.log(context)
      return context.$axios.$get('/v1/posts/' + context.params.postId)
        .then(response => {
          return { post: response.post }
        })
      ;
    },
    head: {
      title: 'A Blog Post'
    }
  };
</script>
