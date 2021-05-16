import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Regist from '../views/Regist.vue';
import Auth from '../views/Auth.vue';
import Edu from '../views/Edu.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/edu',
    name: 'edu',
    component: Edu
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
