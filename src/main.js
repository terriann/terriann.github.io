// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router' // This is a reference to the router/index.js me thinks

Vue.config.productionTip = false

// VueX
import Vuex from 'Vuex'
Vue.use(Vuex)
import DataStore from './store.js'
const store = new Vuex.Store(DataStore)

// Global - may want to move this to app
require('../node_modules/bootstrap/dist/css/bootstrap.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
