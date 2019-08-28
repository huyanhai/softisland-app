<!--
 * @Description:我的财务
 * @Author: hyh
 * @since: 2019-08-12 22:22:39
 * @lastTime: 2019-08-26 15:49:33
 -->
<template>
  <div class="pages page-myblack-list">
    <head-bar :barTitle="barTitle"></head-bar>
    <router-view />
    <footTabbar @footSwitch="footSwitch" :activeColor="activeColor" :inactiveColor="inactiveColor" :menuInfo="menuInfo" />
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import footTabbar from '@/components/footTabbar'
export default {
  name: 'finance',
  data () {
    return {
      barTitle: '黑名单',
      activeColor: '#ff293f',
      inactiveColor: '#3f3f3f',
      menuInfo: [
        { text: '我的拉黑', path: '/blacklist/list', icon: 'icon_lahei', dot: false },
        { text: '拉黑公示', path: '/blacklist/all-list', icon: 'gongshi', dot: false }
      ]
    }
  },
  components: {
    headBar,
    footTabbar
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    // 底部切换
    footSwitch (e) {
      console.log(e)
    }
  }
}
</script>
