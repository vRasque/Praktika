import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '' || localStorage.getItem("token"),
    username: '',
    eduResults: []
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getUserName(state) {
      return state.username;
    },
    getEduResults(state) {
      return state.eduResults;
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
    setUserName(state, res) {
      state.eduResults = res;
    },
    setEduResults(state, res) {
      state.eduResults = res;
    }
  },
  actions: {
    eduAction ({state,commit}) {
      fetch('http://localhost:3000/edu', {
        headers: {
          'Content-Type': 'application/json',
          'token': state.token
        },
        method: 'POST'
      })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        commit('setEduResults', json)
      });
    },
    getUserName ({state,commit}) {
      fetch('http://localhost:3000/userinfo', {
        headers: {
          'Content-Type': 'application/json',
          'token': state.token
        },
        method: 'POST'
      })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        commit('setUserName', json.username);
      });
    }
  }
})
