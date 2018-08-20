import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/Homepage'
import addAccount from '@/components/AddAccount.vue'
import addOrder from '@/components/AddOrder'
import Login from '@/components/Login'
import account from '@/components/Account'

// import BootstrapVue from 'bootstrap-vue'
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
    },
    {
      path: '/add-order',
      name: 'createOrder',
      component: addOrder
    },
    {
      path: '/account/login',
      name: 'login',
      component: Login
    },
    {
      path: '/account',
      name: 'account',
      component: account
    }
  ]
})
