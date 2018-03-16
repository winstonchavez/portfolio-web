import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router' //Vue router
import routes from '@/routes' //Routes object

import store from '@/store' //global store App

import i18n from '@/i18n' //International languages

Vue.use(VueRouter)

const router = new VueRouter( { routes: routes, mode: 'history' } )

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store,
  i18n
})
