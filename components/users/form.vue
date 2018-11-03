<template>
  <v-form>

    <v-text-field
      v-model="user.email"
      label="Email"/>
    <v-text-field
      v-model="user.password"
      label="Password" />
    <v-text-field
      v-model="user.passwordConfimation"
      label="Confirm your Password" />

    <v-btn
      color="primary">
      Submit
    </v-btn>

  </v-form>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    }
  };
</script>
