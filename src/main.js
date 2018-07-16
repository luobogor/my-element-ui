import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/theme-chalk/index.scss';
import { install } from './index';

Vue.config.productionTip = false;
install(Vue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
