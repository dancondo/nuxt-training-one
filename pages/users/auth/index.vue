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
  import axios from 'axios'
  export default {
    components: {
      userForm
    },
    methods: {
      startSession(user) {
        console.log(user)
        axios.post('http://localhost:8080/users/sign_in', user)
          .then(response => console.log(response))
      }
    }
  };
</script>
