<template>
  <div>
    <h1>Post {{ post.id }} - {{ post.title }}</h1>
  </div>
</template>
<script>
  export default {
    asyncData(context, callback) {
      callback(null, {
        post: {
          id: context.params.id,
          title: 'Bowling'
        }
      })
    },
    head: {
      title: 'A Blog Post'
    }
  };
</script>
