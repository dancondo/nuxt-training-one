<template>
  <v-card>
    <v-toolbar
      dark
      color="blue"
      flat
      card>
      <v-toolbar-title>
        {{ signUp ? 'Sign Up' : 'Sign In' }}
      </v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-form>

        <v-text-field
          v-model="user.email"
          label="Email"/>
        <v-text-field
          v-model="user.password"
          label="Password" />
        <v-text-field
          v-if="signUp"
          v-model="user.passwordConfimation"
          label="Confirm your Password" />

      </v-form>

      <v-card-actions>

        <v-btn
          dark
          color="pink"
          @click="submitForm">
          Submit
        </v-btn>
        <v-spacer/>
        <p>
          {{ signUp ? "Already have an acount?" : "Don't have an acount?" }}
          <a
            class="font-weight-bold"
            @click="changeForm">
            {{ signUp ? 'Login' : 'Sign Up' }}
          </a>
        </p>

      </v-card-actions>

    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        signUp: false,
        user: {
          email: null,
          password: null,
          passwordConfimation: null
        }
      }
    },
    methods: {
      changeForm() {
        this.user = {
          email: null,
          password: null,
          passwordConfimation: null
        }
        this.signUp = !this.signUp
      },
      submitForm() {
        console.log(this.user)
        this.$emit('logUser', this.user)
      }
    }
  };
</script>
