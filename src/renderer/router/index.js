import Vue from 'vue'
import Router from 'vue-router'

const Index = require('@/components/Index').default

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: Index
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
