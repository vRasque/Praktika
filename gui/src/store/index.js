import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "" || localStorage.getItem("token"),
  },
  getters: {
    getToken(state) {
      return state.token;
    }
  },
  mutations: {
    setToken(state, token) {
      localStorage.setItem('token',token);
      state.token = token;
    },
    deleteToken(state) {
      localStorage.removeItem('token');
      state.token = "";
    },
  },
  actions: {
  },
  modules: {
  }
})
