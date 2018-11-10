<template>
  <div>
    <nuxt-child />
  </div>
</template>
<script>
  export default {
    middleware: 'user'
  };
</script>
