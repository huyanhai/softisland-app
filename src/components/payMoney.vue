<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-09 22:35:46
 * @lastTime: 2019-08-26 14:36:35
 -->
<template>
  <div class="m-pay-money">
    <div class="pay-input">
      <input class="ui-input" v-model="payNumber" type="number" name="" id="" :placeholder="tispText">
    </div>
    <a class="pay-btn" @click="paySubmit">{{payText}}</a>
    <Totals :totalShow="totalShow" @totalHide="totalHide">
      <i slot="icon" class="iconfont icon-shibai"></i>
      <p slot="text" v-html="totalText"></p>
    </Totals>
  </div>
</template>
<script>
import Totals from '@/components/totals'
import { Dialog } from 'vant'
export default {
  name: 'payMoney',
  props: {
    payText: {
      type: String,
      default: '充值'
    },
    tispText: {
      default: '请输入充值金额（2元起充）'
    },
    payMoneyMode: String,
    payMoney: Number,
    // 可提现金额
    canCashMoney: Number
  },
  data () {
    return {
      payNumber: '',
      totalShow: false,
      totalText: ''
    }
  },
  components: {
    Totals
  },
  methods: {
    paySubmit () {
      let str
      if (this.payNumber) {
        str = String(this.payNumber)
      }
      if (this.canCashMoney < this.payMoney && this.payMoneyMode === 'cashout') {
        this.totalHide(`您的可提现金额不足`)
      } else if (this.payNumber < this.payMoney) {
        this.totalHide(`每次${this.payText}金额需超过${this.payMoney}元`)
      } else if (str.match(/(\w)\1\1/g)) {
        Dialog.confirm({
          title: '您输入的内容不合法',
          message: '请勿检查是否输入敏感词外部链接信息或者连续3个数字以上的连续数据'
        }).then(() => {
          console.log('点击了确定按钮')
        }).catch(() => {
          console.log('点击了取消按钮')
        })
        return false
      } else {
        this.$emit('onPayBtn', { 'payNumber': this.payNumber })
      }
    },
    // 弹窗
    totalHide (ctx) {
      if (!this.totalShow) {
        this.totalText = ctx
        this.totalShow = true
        const timer = setTimeout(() => {
          this.totalShow = false
          clearTimeout(timer)
        }, 3000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
.van-toast__text {
  font-size: 12px;
}
.m-pay-money {
  padding: 30px 60px 40px 60px;
  background: linear-gradient(to bottom, #ff1e58 0%, #ff9670 80%);
  @include border-radius(40px);
  overflow: hidden;
  .pay-input {
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid $line-red;
    position: relative;
    margin-bottom: 50px;
    &::before {
      content: "￥";
      font-size: 30px;
      color: $color-fff;
      position: absolute;
      left: 0;
      top: 3px;
    }
    .ui-input {
      background: none;
      border: 0;
      font-size: 30px;
      color: $color-fff;
      line-height: 80px;
      padding-left: 40px;
      width: 100%;
      display: block;
      &::-webkit-input-placeholder {
        color: $line-red;
      }
    }
  }
  .pay-btn {
    height: 88px;
    display: block;
    @include border-radius(88px);
    background: $brand-red;
    line-height: 88px;
    font-size: 36px;
    text-align: center;
    color: $color-fff;
    box-shadow: 0 4px 5px rgba($shadow-red, 0.35);
  }
}
</style>
