/*
 * @Description:
 * @Author: huyanhai
 * @since: 2019-08-06 22:01:24
 * @lastTime: 2019-08-09 11:37:37
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from '../services/axios'
import './assets/iconfont/iconfont.css'
import 'normalize.css'
import 'amfe-flexible'

Vue.prototype.$ajax = axios
Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
