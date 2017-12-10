import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Legal from '@/pages/Legal';
import RawMaterials from '@/pages/RawMaterials';

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
    {
      path: '/raw-materials',
      name: 'RawMaterials',
      component: RawMaterials,
    },
  ],
});
