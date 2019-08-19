/*
 * @Description:
 * @Author: hyh
 * @since: 2019-08-06 22:01:24
 * @lastTime: 2019-08-17 21:11:10
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
      path: '/my/buy-top',
      name: 'buyTop',
      component: () => import('../views/mysell/buyTop.vue')
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
    },
    {
      path: '/my/choose-game',
      name: 'chooseGame',
      component: () => import('../views/editsell/chooseGame.vue')
    },
    {
      path: '/my/choose-address',
      name: 'chooseAddress',
      component: () => import('../views/editsell/chooseAddress.vue')
    },
    {
      path: '/my/leave-message',
      name: 'leaveMessage',
      component: () => import('../views/together/leaveMessage.vue')
    },
    {
      path: '/my/black-list',
      name: 'blacklist',
      component: () => import('../views/blacklist/index.vue')
    },
    {
      path: '/my/complain',
      name: 'complain',
      component: () => import('../views/blacklist/complain.vue')
    },
    {
      path: '/my/order-detail',
      name: 'orderDetail',
      component: () => import('../views/mysell/orderDetail.vue')
    },
    {
      path: '/my/mysell-order',
      name: 'mySellOrder',
      component: () => import('../views/mysell/mySellOrder.vue')
    },
    {
      path: '/my/myrental',
      name: 'myrental',
      component: () => import('../views/myrental/index.vue')
    },
    {
      path: '/my/myrental-search',
      name: 'myrentalSearch',
      component: () => import('../views/myrental/search.vue')
    },
    {
      path: '/my/myrental-searchresult',
      name: 'searchResult',
      component: () => import('../views/myrental/searchResult.vue')
    },
    {
      path: '/my/finance',
      name: 'finance',
      component: () => import('../views/finance/index.vue')
    }
  ]
})
