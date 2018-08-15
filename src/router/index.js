import Vue from 'vue'
import Router from 'vue-router'

import homepage from '@/components/Homepage'
import addAccount from '@/components/AddAccount.vue'

// import BootstrapVue from 'bootstrap-vue'
//
// Vue.use(BootstrapVue)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/add-account',
      name: 'createAccount',
      component: addAccount
    }
  ]
})
