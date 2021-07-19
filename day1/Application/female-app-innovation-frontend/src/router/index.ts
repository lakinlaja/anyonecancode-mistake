import Vue from 'vue';
import VueRouter from 'vue-router'
import VuePageStack from 'vue-page-stack';
import Home from "../views/Home.vue"


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    }

  ];
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  });

// vue-router is necessary
Vue.use(VuePageStack, { router });

export default router;