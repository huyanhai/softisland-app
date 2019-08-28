<!--
 * @Description:dialog弹窗
 * @Author: hyh
 * @since: 2019-08-17 10:58:09
 * @lastTime: 2019-08-28 14:51:02
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="dialog-c" v-if="dialogShow">
    <div class="dialog-box white-bg">
      <div class="dialog-hd">
        <slot name="__hd">弹窗标题</slot>
      </div>
      <div class="dialog-bd">
        <slot name="__bd">
          弹窗文字
        </slot>
      </div>
      <div class="dialog_ft">
        <slot name="__ft">
          <a class="ui-link" @click="dialogHide">我知道了</a>
        </slot>
      </div>
    </div>
    <van-overlay :show="dialogShow" z-index="1000" @click="dialogHide" />
  </div>
</template>
<script>
export default {
  name: 'dialogC',
  props: {
    dialogShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    dialogHide () {
      this.$emit('dialogHide', { 'dialogShow': false })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
.dialog-c {
  .dialog-box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @include border-radius(8px);
    width: 560px;
    z-index: 1001;
    box-shadow: none !important;
    .dialog-hd {
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 30px;
      color: $text-dark;
      font-weight: bold;
      margin-top: 20px;
    }
    .dialog-bd {
      padding: 0px 30px 20px 30px;
      font-size: 26px;
      color: $text-lgary;
      line-height: 44px;
    }
    .dialog_ft {
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 28px;
      color: $brand-red;
      border-top: 1px solid $line-gary;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
