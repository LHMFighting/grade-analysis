import Vue from 'vue'
import Router from 'vue-router'

const index = require('@/components/index').default
const functionComponent = require('@/components/function').default
const excel = require('@/components/excel').default
const statics = require('@/components/statics').default
const quality = require('@/components/quality').default
const graph = require('@/components/graph').default


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/function',
      name: 'function',
      component: functionComponent
    },
    {
      path: '/excel',
      name: 'excel',
      component: excel
    },
    {
      path: '/statics',
      name: 'statics',
      component: statics
    },
    {
      path: '/quality',
      name: 'quality',
      component: quality
    },
    {
      path: '/graph',
      name: 'graph',
      component: graph
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
