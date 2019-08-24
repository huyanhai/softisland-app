<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-08 22:26:05
 * @lastTime: 2019-08-24 13:18:00
 -->
<template>
  <van-tabbar v-model="active" class="footer-tab-bar" :active-color="activeColor" :inactive-color="inactiveColor" safe-area-inset-bottom>
    <van-tabbar-item :dot="item.dot" :to="item.path" v-for="(item,index) in menuInfo" :key="index" @click="footSwitch">
      <i class="iconfont ui-icon" :class="'icon-'+item.icon" slot="icon"></i>
      <span class="ui-text">{{item.text}}</span>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: 'footTabbar',
  props: {
    activeColor: '',
    inactiveColor: '',
    menuInfo: {
      type: Array
    }
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    footSwitch () {
      this.$emit('footSwitch', { active: this.active })
    }
  },
  watch: {
    '$route': function (to, from) {
      switch (this.$route.path) {
        case '/':
          this.active = 0
          break
        case '/service':
          this.active = 1
          break
        case '/message':
          this.active = 2
          break
        case '/my':
          this.active = 3
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/index";
.footer-tab-bar {
  .ui-icon {
    font-size: 40px;
  }
  .ui-text {
    color: $text-dark;
    font-size: 20px;
  }
}
</style>
