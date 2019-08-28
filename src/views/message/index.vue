<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-10 20:51:07
 * @lastTime: 2019-08-27 17:13:36
 -->
<template>
  <div class="pages page-message">
    <head-bar :barTitle="barTitle" :titleHide="titleHide"></head-bar>
    <router-view @footer="footerFn" @changTitle="changTitle" v-on:header='header' />
  </div>
</template>
<script>
import headBar from '@/components/headBar'
export default {
  name: 'message',
  data () {
    return {
      barTitle: '消息通知',
      titleHide: false
    }
  },
  components: {
    headBar
  },
  created () {
    this.$emit('footer', true)
  },
  methods: {
    header (bool) {
      this.titleHide = bool
    },
    toDetail (e) {
      this.$router.push({
        path: '/message/detail'
      })
    },
    footerFn (e) {
      this.$emit('footer', e)
    },
    changTitle (e) {
      this.barTitle = e
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.msg-box {
  margin: 30px 30px 0 30px;
}
</style>
