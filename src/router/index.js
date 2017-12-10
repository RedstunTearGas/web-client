import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Legal from '@/pages/Legal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/legal',
      name: 'Legal',
      component: Legal,
    },
  ],
});
