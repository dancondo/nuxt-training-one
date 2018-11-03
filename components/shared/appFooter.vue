<template>
  <v-footer
    :color="footerColor"
    dark
    class="pa-3">

    <v-spacer/>

    <div>&copy; {{ new Date().getFullYear() }}</div>

  </v-footer>
</template>
<script>
  export default {
    props: {
      footerColor: {
        type: String,
        default: 'light-blue darken-2'
      }
    }
  };
</script>
