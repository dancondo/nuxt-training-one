<template>
  <div>
    <h1>Users</h1>
    <v-btn @click="signOut()">Sign Out</v-btn>
  </div>
</template>
<script>
  export default {
    methods: {
      signOut() {
        this.$auth.logout()
      }
    }
  };
</script>
