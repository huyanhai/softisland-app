/*
 * @Description:
 * @Author: hyh
 * @since: 2019-08-06 22:01:24
 * @lastTime: 2019-08-13 22:36:18
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/service/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('../views/pay/index.vue')
    },
    {
      path: '/pay/status',
      name: 'payStatus',
      component: () => import('../views/pay/status.vue')
    },
    {
      path: '/cashout',
      name: 'cashOut',
      component: () => import('../views/cashout/index.vue')
    },
    {
      path: '/cashout/check',
      name: 'cashOutCheck',
      component: () => import('../views/cashout/check.vue')
    },
    {
      path: '/cashout/status',
      name: 'cashOutStatus',
      component: () => import('../views/cashout/status.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('../views/my/index.vue')
    },
    {
      path: '/error/:errorCode',
      name: 'error',
      component: () => import('../views/error/index.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/message/index.vue')
    },
    {
      path: '/my/mysell',
      name: 'mysell',
      component: () => import('../views/mysell/index.vue')
    },
    {
      path: '/my/search',
      name: 'search',
      component: () => import('../views/mysell/search.vue')
    },
    {
      path: '/my/exact-search',
      name: 'exactSearch',
      component: () => import('../views/mysell/exactSearch.vue')
    },
    {
      path: '/my/search-list',
      name: 'searchList',
      component: () => import('../views/mysell/searchList.vue')
    },
    {
      path: '/my/editsell',
      name: 'editSell',
      component: () => import('../views/editsell/index.vue')
    }
  ]
})
