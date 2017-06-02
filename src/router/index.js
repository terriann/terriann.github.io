import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/homepage'
import About from '@/pages/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
