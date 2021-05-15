import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Импорт компонентов
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// Инициализация компонентов
Vue.component('tmpheader', Header);
Vue.component('tmpfooter', Footer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
