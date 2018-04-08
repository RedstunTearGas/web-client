import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Legal from '@/pages/Legal';
import RawMaterials from '@/pages/RawMaterials';
import Additives from '@/pages/Additives';
import TearGasSprays from '@/pages/TearGasSprays';
import Contact from '@/pages/Contact';
import Buy from '@/pages/Buy';

// ITC
import ITC from '@/pages/ITC';


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
    {
      path: '/additives',
      name: 'Additives',
      component: Additives,
    },
    {
      path: '/tear-gas-sprays',
      name: 'TearGasSprays',
      component: TearGasSprays,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy,
    },

    {
      path: '/itc',
      name: 'ITC',
      component: ITC,
    },
  ],
});
