<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-08 14:10:24
 * @lastTime: 2019-08-22 13:57:43
 -->
<template>
  <div id="app">
    <transition name='transitionRouter' mode='out-in'>
      <router-view v-on:footer='footer' />
    </transition>
    <foot-tabbar :activeColor="activeColor" :inactiveColor="inactiveColor" :menuInfo="menuInfo" v-if='footer_show' />
  </div>
</template>

<script>
import footTabbar from '@/components/footTabbar.vue'
export default {
  name: 'App',
  data () {
    return {
      activeColor: '#ff293f',
      inactiveColor: '#3f3f3f',
      menuInfo: [
        { text: '首页', path: '/', icon: 'shouye-copy', dot: false },
        { text: '服务', path: '/service', icon: 'fuwu', dot: false },
        { text: '消息', path: '/message', icon: 'xiaoxi', dot: true },
        { text: '我的', path: '/my', icon: 'sself', dot: false }
      ],
      footer_show: true
    }
  },
  methods: {
    footer (bool) {
      this.footer_show = bool
    }
  },
  components: {
    footTabbar
  }
}
</script>
<style lang="scss">
@import "./assets/scss/index";
// .transitionRouter-enter-active,
// .transitionRouter-leave-active {
//   transition: all 0.4s;
// }
// .transitionRouter-enter,
// .transitionRouter-leave {
//   transform: translate3d(100%, 0, 0);
// }
</style>
