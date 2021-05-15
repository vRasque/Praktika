import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Regist from '../views/Regist.vue';

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
