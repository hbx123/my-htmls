import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import ClientInfo from '@/components/ClientInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }, {
      path: '/About',
      name: 'About',
      component: About
    }, {
      path: '/ClientInfo',
      name: 'ClientInfo',
      component: ClientInfo
    }
  ]
})
