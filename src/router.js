import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

import Web from './views/Web.vue';
import Seo from './views/Seo.vue';
import Mobile from './views/Mobile.vue';
import Ppc from './views/Ppc.vue';
import Smm from './views/Smm.vue';
import Dc from './views/Dc.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
      {
        path: "/",
        name: "main",
        component: Main
      },
      {
        path: '/web',
        component: Web
      },
      {
          path: '/seo',
          component: Seo
      },
      {
          path: '/mobile',
          component: Mobile
      },
      {
          path: '/ppc',
          component: Ppc
      },
      {
          path: '/smm',
          component: Smm
      },
      {
          path: '/dc',
          component: Dc
      },
      {
          path: '/about',
          component: About
      },
      {
          path: '/contact',
          component: Contact
      }
  ]
});
