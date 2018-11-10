export const state = () => ({
});

export const getters = {
};

export const mutations = {
};

export const actions = {
  authenticateUser({ commit }, authData) {
    if(authData.user.passwordConfimation) {
      this.$axios.post('/users/', { ...authData })
        .catch(error => this.error = error + '')
    }
    this.$auth.login({data: { ...authData }})
      .catch(error => this.error = error + '')
  }
};
