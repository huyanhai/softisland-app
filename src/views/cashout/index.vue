<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-09 21:32:07
 * @lastTime: 2019-08-22 14:04:23
 -->
<template>
  <div class="pages page-pay">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="pay-box">
      <div class="pay-input-info">
        <ul class="ui-repeart">
          <li class="repeart-item">
            <span class="text">支付宝账号：</span>
            <input type="text" name="" v-model="submitData.accountNo" class="ui-input" placeholder="请输入支付宝账号">
            <i class="iconfont icon-shanchu" @click="clearData('accountNo')"></i>
          </li>
          <li class="repeart-item">
            <span class="text">支付宝实名：</span>
            <input type="text" v-model="submitData.name" name="" class="ui-input" placeholder="请输入支付宝的实名信息">
          </li>
          <li class="repeart-item">
            <span class="text">手机号：</span>
            <input type="number" v-model="submitData.phontNumber" name="" class="ui-input" placeholder="请输入手机号">
          </li>
          <li class="repeart-item">
            <span class="text">手机验证码：</span>
            <input type="number" v-model="submitData.veriCode" name="" class="ui-input" placeholder="请输入验证码">
            <a class="ui-text" id="sendVeriCode" @click="sendVeriCode" v-if="!btnDisable">发送验证码</a>
            <p class="ui-text" v-else @click="veriCodeSended">剩余{{countDownNumber}}s</p>
          </li>
          <li class="repeart-item">
            <span class="text">支付密码：</span>
            <input type="password" v-model="submitData.payPsd" name="" class="ui-input" placeholder="请输入支付密码">
          </li>
          <a class="submitData" @click="submitDatafn">提现</a>
        </ul>
      </div>
    </div>
    <p class="tips">温馨提示：<br>
      1、为了您的账户安全，每个账户仅限绑定一个支付宝<br>
      2、若需解绑支付宝请登录www.17369.com官网处理
    </p>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import { Toast } from 'vant'
export default {
  name: 'pay',
  data () {
    return {
      barTitle: '账户提现',
      btnDisable: false,
      countDownNumber: 120,
      submitData: {
        accountNo: '',
        name: '',
        phontNumber: '',
        veriCode: '',
        payPsd: ''
      }
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar
  },
  methods: {
    sendVeriCode () {
      if (!this.btnDisable) {
        this.countDown()
      }
    },
    // 验证码倒计时
    countDown () {
      this.btnDisable = true
      this.countDownNumber--
      const timer = setInterval(() => {
        if (this.countDownNumber > 0) {
          this.btnDisable = true
          this.countDownNumber--
        } else {
          this.btnDisable = false
          this.countDownNumber = 120
          clearInterval(timer)
        }
      }, 1000)
    },
    // 验证码已发送
    veriCodeSended () {
      Toast('验证码已发送')
    },
    clearData (e) {
      this.submitData[e] = ''
    },
    submitDatafn () {
      for (let item in this.submitData) {
        if (!this.submitData[item]) {
          Toast('请完善数据')
        } else {
          this.$router.push({ path: './cashout/check' })
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.pay-box {
  margin: 30px;
  background: $color-fff;
  @include border-radius(40px);
  overflow: hidden;
  @include box-shdow-gary();
  .pay-input-info {
    margin: 0 30px;
    .ui-repeart {
      .repeart-item {
        display: flex;
        align-items: center;
        height: 98px;
        line-height: 98px;
        overflow: hidden;
        border-bottom: 1px solid $line-gary;
        position: relative;
        .text {
          font-size: 24px;
          color: $text-lgary;
          flex: 0 0 auto;
        }
        .ui-input {
          flex: 1 0 auto;
          width: 50%;
          font-size: 24px;
          color: $text-dark;
          border: none;
          &::-webkit-input-placeholder {
            color: $text-gary;
          }
        }
        .iconfont {
          font-size: 30px;
          color: $text-gary;
        }
        .ui-text {
          color: $brand-red;
          position: absolute;
          right: 0;
          font-size: 24px;
          margin: 0;
        }
      }
      .submitData {
        height: 88px;
        margin: 60px 30px;
        display: block;
        text-align: center;
        line-height: 88px;
        color: $color-fff;
        font-size: 36px;
        @include border-radius(88px);
        background: $brand-red;
        box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
      }
    }
  }
}
.tips {
  margin: 50px 30px 0 30px;
  font-size: 22px;
  color: $text-lgary;
  display: block;
  line-height: 46px;
}
</style>
