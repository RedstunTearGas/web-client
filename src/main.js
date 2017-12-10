// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import NavLink from '@/atoms/NavLink';
import Navigation from '@/shared/Navigation';
import Footer from '@/shared/Footer';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.component('nav-link', NavLink);
Vue.component('top-navigation', Navigation);
Vue.component('bottom-footer', Footer);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
