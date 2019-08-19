<!--
 * @Description:card
 * @Author: hyh
 * @since: 2019-08-17 10:13:28
 * @lastTime: 2019-08-17 15:23:59
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="card white-bg">
    <div class="card-hd" v-if="showHD">
      <div class="label">
        <slot name="label-name">模块名称</slot>
      </div>
      <div class="text">
        <slot name="card-hd-right"></slot>
      </div>
    </div>
    <div class="card-bd" :class="{showhd:!showHD}">
      <slot name="card-bd"></slot>
    </div>
    <div class="card-ft">
      <slot name="card-ft"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    showHD: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
.card {
  @include border-radius(40px);
  box-sizing: border-box;
  padding: 0 30px;
  overflow: hidden;
  margin: 0 20px 20px 20px;
  .card-hd {
    font-size: 28px;
    color: $text-dark;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid $line-gary;
    overflow: hidden;
    clear: both;
    display: flex;
    .label {
      flex: 0 0 auto;
    }
    .text {
      flex: 1 0 auto;
      text-align: left;
      width: 50%;
      display: flex;
      font-size: 24px;
    }
  }
  .showhd {
    margin: 20px 0;
    .info-item {
      border-bottom: 0 !important;
    }
  }
  .info-bd {
    .info-item {
      display: flex;
      align-items: center;
      height: 80px;
      line-height: 80px;
      border-bottom: 1px solid $line-gary;
      position: relative;
      .pro-ab-link {
        position: absolute;
        right: 0;
        color: $brand-yellow;
        font-size: 24px;
      }
      &.textarea-item {
        align-items: baseline;
        height: 140px;
        align-items: center;
        .ui-textarea {
          height: 80%;
        }
      }
      .switch-text {
        font-size: 26px;
        color: $text-gary;
        flex: 1 0 auto;
        margin: 0;
        .text {
          color: $brand-yellow;
          font-style: normal;
        }
        &.text-right {
          text-align: right;
          margin-right: 20px;
        }
      }
      .switch {
        height: 100px;
        line-height: 100px;
        display: flex;
        align-items: center;
        .ui-link {
          font-size: 24px;
          color: $brand-yellow;
          text-decoration: underline;
        }
      }
      .label {
        font-size: 26px;
        color: $text-lgary;
        width: 130px;
        flex: 0 0 auto;
        margin-right: 20px;
        &.larger-labrl {
          width: 180px;
        }
      }
      .ui-input {
        flex: 1 0 auto;
        font-size: 26px;
        color: $text-dark;
        background: none;
        border: none;
      }
      .iconfont {
        flex: 0 0 auto;
        transform: rotate(180deg);
        color: $text-lgary;
      }
      .line {
        flex: 1 0 auto;
        height: 100px;
        display: flex;
        align-items: center;
        .van-slider {
          width: 100%;
        }
        .times {
          width: 170px;
          height: 60px;
          line-height: 60px;
          background: $line-gary;
          @include border-radius(60px);
          font-size: 26px;
          color: $text-lgary;
          text-align: center;
          margin: 0;
          .iconfont {
            display: inline;
            vertical-align: top;
          }
        }
      }
      .line-text {
        flex: 0 0 auto;
        width: 130px;
        height: 60px;
        background: $line-gary;
        @include border-radius(60px);
        font-size: 24px;
        color: $text-lgary;
        text-align: center;
        line-height: 60px;
        margin-left: 20px;
        .ui-number {
          margin: 0;
          font-size: 28px;
          color: $text-dark;
          display: inline;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
