/*
 * @Description:stroe
 * @Author: hyh
 * @since: 2019-08-14 22:19:35
 * @lastTime: 2019-08-14 22:37:29
 * @如果有bug，那肯定不是我的锅
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
