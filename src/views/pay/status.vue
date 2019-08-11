<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-10 10:22:30
 * @lastTime: 2019-08-10 16:42:18
 -->
<template>
  <div class="pages page-pay-status">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="pay-status-box">
      <i class="iconfont icon-chenggong"></i>
      <h6 class="tips">充值完成</h6>
      <p class="text">账户余额可用于日常消费或提现</p>
    </div>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
export default {
  name: 'payStatus',
  data () {
    return {
      barTitle: '账户充值'
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.pay-status-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  .iconfont {
    color: $brand-green;
    font-size: 150px;
    margin-top: 130px;
  }
  .tips {
    margin: 0;
    margin: 20px 0 30px 0;
    font-size: 28px;
    color: $text-dark;
    font-family: $pf-reg;
    font-weight: normal;
  }
  .text {
    font-size: 24px;
    color: $text-lgary;
    margin: 0;
    text-align: center;
  }
}
</style>
