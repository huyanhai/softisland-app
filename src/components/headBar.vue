<!--
 * @Description:
 * @Author: huyanhai
 * @since: 2019-08-09 21:29:49
 * @lastTime: 2019-08-10 17:32:38
 -->
<template>
  <van-nav-bar class="nav-bar" :title="barTitle" :left-text="leftText" :right-text="rightText" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
    <i class="iconfont icon-fanhui" slot="left"></i>
  </van-nav-bar>
</template>
<script>
export default {
  name: 'headBar',
  props: {
    barTitle: String,
    leftText: null,
    rightText: null
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {

    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/index";
.nav-bar {
  .iconfont {
    font-size: 30px;
    color: $text-lgary;
  }
  .van-nav-bar__title {
    font-weight: normal;
    font-family: $pf-reg;
  }
}
</style>
