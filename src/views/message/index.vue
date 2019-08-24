<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-10 20:51:07
 * @lastTime: 2019-08-24 10:50:55
 -->
<template>
  <div class="pages page-message">
    <head-bar :barTitle="barTitle"></head-bar>
    <router-view @footer="footerFn" @changTitle="changTitle" />
  </div>
</template>
<script>
import headBar from '@/components/headBar'
export default {
  name: 'message',
  data () {
    return {
      barTitle: '消息通知'
    }
  },
  components: {
    headBar
  },
  created () {
    this.$emit('footer', true)
  },
  methods: {
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
