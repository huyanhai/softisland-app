<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-09 15:14:44
 * @lastTime: 2019-08-09 16:46:09
 -->
<template>
  <div class="com-total van-c-r" v-if="totalShow">
    <slot name="icon">
      <i class="iconfont icon-shiwu"></i>
    </slot>
    <slot name="text">
      提示信息
    </slot>
  </div>
</template>
<script>
export default {
  name: 'total',
  props: {
    totalShow: false
  }
}
</script>
<style lang="scss">
@import "../assets/scss/index";
.com-total {
  min-width: 100px;
  min-height: 100px;
  background-color: rgba(50, 50, 51, 0.88);
  position: fixed;
  z-index: 100000;
  box-sizing: border-box;
  padding: 40px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: $color-fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  &.van-c-r {
    @include border-radius(4px);
  }
  i {
    font-size: 60px;
    margin-bottom: 20px;
  }
  p {
    margin: 5px 0 0 0;
    white-space: nowrap;
  }
}
</style>
