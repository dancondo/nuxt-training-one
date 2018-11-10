export const state = () => ({
});

export const getters = {
};

export const mutations = {
};

export const actions = {
  authenticateUser({ commit }, authData) {
    if(authData.passwordConfimation) {
      this.$auth.signUp(authData)
        .catch(error => this.error = error + '')
    } else {
      console.log(authData)
      this.$auth.login({data: { ...authData }})
        .catch(error => this.error = error + '')
    }
  }
};
