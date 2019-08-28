<!--
 * @Description:消息通知
 * @Author: hyh
 * @since: 2019-08-10 20:51:07
 * @lastTime: 2019-08-27 17:15:06
 -->
<template>
  <div class="pages page-message-datail">
    <div class="msg-box">
      <img class="detail-ad" src="../../assets/images/msg-detail-ad.png" />
      <div class="detail white-bg">
        天上不会掉下林妹妹，但是可能会掉下免费“午餐”~

        不信？那是你没有参与租号玩免单活动！

        目前享受到免单的用户已经达到2753人了！

        只要你在租号玩任意下单租号，

        就有机会赢得免单福利！

        可以说喜从天降，猝不及防~

        距活动结束还有4天，

        现在开始天天下单，免单奖励勾勾手指就能拥有~

        已经获得免单奖励的用户，不要忘记使用红包哟！
        距活动结束还有4天，

        现在开始天天下单，免单奖励勾勾手指就能拥有~

        已经获得免单奖励的用户，不要忘记使用红包哟！

        距活动结束还有4天，

      </div>
    </div>
    <a class="link">我已知晓，删除吧</a>
  </div>
</template>
<script>
export default {
  name: 'message',
  data () {
    return {}
  },
  created () {
    this.$emit('footer', false)
    this.$emit('header', false)
  },
  destroyed () {
    this.$emit('footer', true)
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-message-datail {
  .msg-box {
    margin: 30px 30px 0 30px;
    .detail-ad {
      width: 100%;
      display: block;
      margin-bottom: 30px;
    }
    .detail {
      border-radius: 40px;
      overflow: hidden;
      box-sizing: border-box;
      padding: 30px;
      font-size: 26px;
      line-height: 50px;
      color: $text-dark;
    }
  }
  .link {
    position: fixed;
    display: block;
    width: 100%;
    height: 100px;
    line-height: 100px;
    color: $color-fff;
    font-size: 36px;
    background: $brand-red;
    bottom: 0;
    left: 0;
    text-align: center;
  }
}
</style>
