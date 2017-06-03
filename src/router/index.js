import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/homepage'
import About from '@/pages/about'
import Portfolio from '@/pages/portfolio'
import Contact from '@/pages/contact'

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
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
