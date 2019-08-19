<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-09 21:29:49
 * @lastTime: 2019-08-17 15:45:11
 -->
<template>
  <div class="nav-bar">
    <div class="bar-box white-bg">
      <div class="bar-left" @click="onClickLeft">
        <slot name="bar-left">
          <i class="iconfont icon-fanhui"></i>
        </slot>
      </div>
      <div class="bar-title">
        <slot name="title">{{barTitle}}</slot>
      </div>
      <div class="bar-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
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
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/index";
.nav-bar {
  height: 92px;
  .bar-box {
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 92px;
    line-height: 92px;
    box-sizing: border-box;
    background: $color-fff;

    .bar-left {
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;
    }
    .bar-title {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      text-align: center;
      font-size: 34px;
      color: $text-dark;
      font-family: $pf-reg;
      z-index: 9;
      top: 50%;
      transform: translateY(-50%);
    }
    .bar-right {
      z-index: 10;
      .color-red {
        color: $brand-yellow;
        margin-left: 20px;
      }
    }
  }
  .iconfont {
    font-size: 30px;
    color: $text-lgary;
  }
}
</style>
