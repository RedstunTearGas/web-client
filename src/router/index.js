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

// Product pages
import ITC_450ML from '@/pages/productPages/450ml-ITC';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      meta: {
        title: process.env.WEBSITE_LOCALE === 'fr' ? 'Redstun - Matières Premières' : 'Redstun - Raw Materials',
      },
    },
    {
      path: '/additives',
      name: 'Additives',
      component: Additives,
      meta: {
        title: process.env.WEBSITE_LOCALE === 'fr' ? 'Redstun - Additifs pour canon à eau' : 'Redstun - Additives for Police water-cannons',
      },
    },
    {
      path: '/tear-gas-sprays',
      name: 'TearGasSprays',
      component: TearGasSprays,
      meta: {
        title: process.env.WEBSITE_LOCALE === 'fr' ? 'Redstun - Bombes lacrymogènes de défense' : 'Redstun - Defense spray - Tear Gas',
      },
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
      meta: {
        title: process.env.WEBSITE_LOCALE === 'fr' ? 'Redstun - Où acheter' : 'Redstun - Where to buy',
      },
    },
    {
      path: '/itc',
      name: 'ITC',
      component: ITC,
    },
    {
      path: '/itc-450ml-iberverin-gel',
      name: 'ITC 405ML Iberverin Gel',
      component: ITC_450ML,
    },
  ],
});
