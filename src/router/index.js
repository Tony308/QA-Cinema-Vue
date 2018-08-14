import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/Homepage'
// import navigation from '../components/Navigation'

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
    }
  ]
})
