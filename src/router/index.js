import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Cinema from '@/views/Cinema'
import Me from '@/views/Me'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path : '/me',
      component : Me
    },
    {
      path : '/cinema',
      component : Cinema
    }
  ]
})
