<!--
 * @Description:操作步骤
 * @Author: hyh
 * @since: 2019-08-13 22:37:58
 * @lastTime: 2019-08-15 23:53:07
 -->
<template>
  <div class="step-box">
    <ul class="step">
      <li class="step-item" :class="{active:index===step-1,complate:index<step-1}" v-for="(item,index) in stepList" :key="index">
        <i class="label" :class="{cborder:index>step-1}">{{item.step}}</i>
        <p class="text">{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'step',
  props: {
    stepList: Array,
    step: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
.step {
  margin: 30px 20px 20px 20px;
  background: $color-fff;
  @include border-radius(40px);
  display: flex;
  box-sizing: border-box;
  padding: 30px;
  overflow: hidden;
  justify-content: space-between;
  @include box-shdow-gary();
  .step-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    &:last-child {
      .label {
        &::after {
          display: none;
        }
      }
    }
    &.active {
      .label {
        @include linder-top-bottom($brand-red, $brand-yellow);
        box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
        color: $color-fff;
        border: none;
      }
      .text {
        color: $brand-red;
      }
    }
    &.complate {
      .label {
        background: $brand-green;
        box-shadow: none;
        color: $color-fff;
      }
      .text {
        color: $text-dark;
      }
    }
    .label {
      width: 60px;
      height: 60px;
      display: block;
      text-align: center;
      line-height: 60px;
      font-size: 30px;
      color: $brand-red;
      font-style: normal;
      @include border-radius(60px);
      margin-bottom: 20px;
      position: relative;
      box-sizing: border-box;
      &::after {
        content: "";
        background: url("../assets/images/step.png") no-repeat;
        background-size: 80px 9px;
        display: block;
        width: 80px;
        height: 9px;
        position: absolute;
        top: 30px;
        left: 130%;
      }
    }
    .text {
      margin: 0;
      font-size: 24px;
      color: $text-dark;
    }
  }
}
</style>
