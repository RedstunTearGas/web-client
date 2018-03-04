// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import VueAnalytics from 'vue-analytics';
import VueImg from 'v-img';
import VueI18n from 'vue-i18n';

import messages from '@/i18n';
import NavLink from '@/atoms/NavLink';
import Navigation from '@/shared/Navigation';
import Footer from '@/shared/Footer';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.component('nav-link', NavLink);
Vue.component('top-navigation', Navigation);
Vue.component('bottom-footer', Footer);

Vue.use(VueAnalytics, {
  id: 'UA-110928879-1',
  router,
});
Vue.use(VueImg);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: process.env.WEBSITE_LOCALE, // set locale
  messages, // set locale messages
  fallbackLocale: 'en',
});

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
