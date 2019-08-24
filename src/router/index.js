/*
 * @Description:
 * @Author: hyh
 * @since: 2019-08-06 22:01:24
 * @lastTime: 2019-08-24 21:13:41
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index'
Vue.use(Router)

export default new Router({
  mode: 'hash',
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
      component: () => import('../views/my/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/my/list.vue')
        },
        {
          path: 'info-set',
          component: () => import('../views/my/myInfoSet.vue')
        }
      ]
    },
    {
      path: '/my/set-text',
      name: 'setText',
      component: () => import('../views/my/setText.vue')
    },
    {
      path: '/my/safe-set',
      name: 'safeSet',
      component: () => import('../views/my/safeSet.vue')
    },
    {
      path: '/my/pws-set',
      name: 'pwdSet',
      component: () => import('../views/my/pwdSet.vue')
    },
    {
      path: '/my/find-pwd',
      name: 'findPwd',
      component: () => import('../views/my/findPwd.vue')
    },
    {
      path: '/my/auth',
      name: 'auth',
      component: () => import('../views/my/auth.vue')
    },
    {
      path: '/my/bind-alipay',
      name: 'bindAlipay',
      component: () => import('../views/my/bindAlipay.vue')
    },
    {
      path: '/error/:errorCode',
      name: 'error',
      component: () => import('../views/error/index.vue')
    },
    {
      path: '/message',
      component: () => import('../views/message/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/message/home.vue')
        },
        {
          path: 'detail',
          component: () => import('../views/message/detail.vue')
        },
        {
          path: 'msg-list',
          component: () => import('../views/message/msgList.vue')
        },
        {
          path: 'session',
          component: () => import('../views/message/session.vue')
        }
      ]
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
      path: '/blacklist',
      component: () => import('../views/blacklist/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/blacklist/blacklist.vue')
        },
        {
          path: 'list',
          component: () => import('../views/blacklist/blacklist.vue')
        },
        {
          path: 'all-list',
          component: () => import('../views/blacklist/allList.vue')
        }
      ]
    },

    {
      path: '/blacklist/join-blacklist',
      name: 'joinBlacklist',
      component: () => import('../views/blacklist/joinBlacklist.vue')
    },
    {
      path: '/blacklist/complain',
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
      path: '/finance',
      component: () => import('../views/finance/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/finance/order.vue')
        },
        {
          path: 'order',
          component: () => import('../views/finance/order.vue')
        },
        {
          path: 'server',
          component: () => import('../views/finance/server.vue')
        }
      ]
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/account/index.vue')
    },
    {
      path: '/account/apply',
      name: 'apply',
      component: () => import('../views/account/apply.vue')
    },
    {
      path: '/account/reply',
      name: 'reply',
      component: () => import('../views/account/reply.vue')
    },
    {
      path: '/account/complaint',
      name: 'complaint',
      component: () => import('../views/account/complaint.vue')
    },
    {
      path: '/server/add-server',
      name: 'addserver',
      component: () => import('../views/service/server.vue')
    },
    {
      path: '/server/server-cgame',
      name: 'serverChooseGame',
      component: () => import('../views/service/serverChooseGame.vue')
    },
    {
      path: '/server/laba',
      name: 'laba',
      component: () => import('../views/service/serverpage/laba.vue')
    },
    {
      path: '/server/buylaba',
      name: 'buylaba',
      component: () => import('../views/service/serverpage/buylaba.vue')
    },
    {
      path: '/server/huojia',
      name: 'huojia',
      component: () => import('../views/service/serverpage/huojia.vue')
    },
    {
      path: '/server/buyhuojia',
      name: 'buyhuojia',
      component: () => import('../views/service/serverpage/buyhuojia.vue')
    },
    {
      path: '/server/tophuojia',
      name: 'tophuojia',
      component: () => import('../views/service/serverpage/tophuojia.vue')
    },
    {
      path: '/server/buytophuojia',
      name: 'buytophuojia',
      component: () => import('../views/service/serverpage/buytophuojia.vue')
    },
    {
      path: '/server/buylimithuojia',
      name: 'buylimithuojia',
      component: () => import('../views/service/serverpage/buylimithuojia.vue')
    },
    {
      path: '/server/buymessage',
      name: 'buymessage',
      component: () => import('../views/service/serverpage/buymessage.vue')
    }
  ]
})
