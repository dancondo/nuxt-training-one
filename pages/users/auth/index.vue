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

      <user-form
        @logUser="startSession($event)"/>

    </v-flex>
  </v-layout>
</template>
<script>
  import userForm from '~/components/users/form'
  export default {
    components: {
      userForm
    },
    methods: {
      startSession(user) {
        this.$store.dispatch('users/authenticateUser', { user: user })
      }
    }
  };
</script>
