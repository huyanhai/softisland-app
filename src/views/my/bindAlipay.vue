<!--
 * @Description: 绑定支付宝
 * @Author: hyh
 * @since: 2019-08-24 16:53:26
 * @lastTime: 2019-08-26 16:34:45
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="set-password">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="m-info white-bg">
      <div class="col">
        <span class="col-l">支付宝账号</span>
        <span class="col-r">
          <input type="text" v-model="aliAcc" class="ui-input" placeholder="请输入支付宝账号">
        </span>
      </div>
    </div>
    <p class="tips">为了您的账户安全，每个账户仅限绑定一个支付宝</p>
    <div class="m-info white-bg">
      <div class="col" @click="toChangeAlipay">
        <span class="col-l">支付宝姓名</span>
        <span class="col-r">
          未实名
        </span>
        <i class="iconfont icon-fanhui back"></i>
      </div>
      <div class="col">
        <span class="col-l">已绑定手机号</span>
        <span class="col-r">
          <input type="tel" v-model="phoneNo" disabled class="ui-input" placeholder="请输入注册时的手机号码">
        </span>
      </div>
      <div class="col">
        <span class="col-l">验证码</span>
        <span class="col-r">
          <input type="tel" v-model="veriCode" class="ui-input" placeholder="请输入验证码">
        </span>
        <span class="r-text" @click="sendVeriCode" v-if="!btnDisable">发送验证码</span>
        <p class="r-text" v-else @click="veriCodeSended">剩余{{countDownNumber}}s</p>
      </div>
      <div class="col">
        <span class="col-l">支付密码</span>
        <span class="col-r">
          <input :type="typeMode ===1 ? 'password' : 'text'" v-model="payPwd" class="ui-input" @input="inputFocus" placeholder="请输入17租号的支付密码">
        </span>
        <i class="iconfont" :class="[typeMode===1 ? 'icon-guanbimima' : 'icon-dakaimimaxianshi']" v-if="showpwd" @click="switckMode"></i>
      </div>
    </div>
    <a class="ui-link" :class="{active:active}" @click="bindFn">确认绑定</a>
    <p class="tips ui-text">
      温馨提示：<br>
      由于绑定支付宝必须与平台认证的实名信息一致，所以若您还没有<br>
      进行实名认证，请先实名认证后再进行支付宝绑定操作。
    </p>
    <Totals :totalShow="totalShow" @totalHide="totalHide">
      <i slot="icon" class="iconfont" :class="tipsIcon"></i>
      <p slot="text">
        {{tipsText}}
      </p>
    </Totals>
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import Totals from '@/components/totals'
import { Toast } from 'vant'
export default {
  name: 'bindAlipay',
  data () {
    return {
      barTitle: '绑定支付宝',
      totalShow: false,
      tipsText: '原始密码错误',
      tipsIcon: '',
      iconType: {
        faile: 'icon-shibai',
        success: 'icon-biaoqing'
      },
      aliAcc: '',
      aliName: '',
      phoneNo: '12342322344',
      veriCode: '',
      payPwd: '',
      newPwd: '',
      countDownNumber: 120,
      btnDisable: false,
      typeMode: 1,
      showpwd: false,
      active: false

    }
  },
  components: {
    headBar,
    Totals
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    inputFocus (idx) {
      if (this.payPwd) {
        this.showpwd = true
      } else {
        this.showpwd = false
        this.typeMode = 1
      }
    },
    switckMode (idx) {
      this.typeMode = this.typeMode === 1 ? 2 : 1
    },
    totalHide (ctx) {
      if (!this.totalShow) {
        this.totalShow = true
        const timer = setTimeout(() => {
          this.totalShow = false
          clearTimeout(timer)
        }, 3000)
      }
    },
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
    bindFn () {
      if (this.active) {
        this.tipsIcon = this.iconType['faile']
        this.totalHide()
      }
    },
    toChangeAlipay () {
      this.$router.push({
        path: '/my/set-text',
        query: {
          pagePath: 'aliPay'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.set-password {
  .choose-btn {
    display: flex;
    align-items: center;
    .ui-link {
      font-size: 26px;
      color: $brand-orange;
      margin-left: 20px;
    }
  }
  .set-box {
    margin: 30px;
    border-radius: 40px;
    overflow: hidden;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    .ui-input {
      flex: 1 0 auto;
      height: 100%;
      width: 50%;
      background: none;
      border: none;
      font-size: 26px;
      color: $text-dark;
    }
    .iconfont {
      font-size: 30px;
      color: $text-lgary;
    }
    .label {
      flex: 0 0 auto;
      font-size: 26px;
      color: $text-dark;
    }
    .switch {
      flex: 1 0 auto;
      text-align: right;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }
  }
  .m-info {
    margin: 30px;
    border-radius: 40px;
    overflow: hidden;
    padding: 0 30px;
    .col {
      display: flex;
      border-bottom: 1px dashed $line-gary;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      .col-l {
        font-size: 26px;
        color: $text-lgary;
        flex: 0 0 auto;
        width: 180px;
        .ui-input {
          color: $text-dark;
        }
      }
      .col-r {
        flex: 1 0 auto;
        text-align: left;
        margin: 0 20px;
        font-size: 26px;
        color: $text-lgary;
        width: 30%;
        .ui-link {
          border: none;
          background: none;
          width: 100%;
          height: 100%;
        }
        .ui-input {
          border: none;
          background: none;
          width: 100%;
          height: 100%;
          color: $text-dark;
        }
        .col-r {
          margin: 0;
          text-align: left;
        }
        .ui-img {
          width: 60px;
          height: 60px;
          overflow: hidden;
          border-radius: 60px;
          margin-left: auto;
          display: inline-table;
          vertical-align: middle;
        }
      }
      .iconfont {
        color: $text-lgary;
      }
      .back {
        transform: rotate(180deg);
      }
      .r-text {
        font-size: 26px;
        color: $brand-orange;
        flex: 0 0 auto;
      }
    }
  }
  .tips {
    font-size: 20px;
    color: $brand-orange;
    margin: 0 30px;
    text-align: left;
    padding-bottom: 10px;
    &.ui-text {
      color: $text-lgary;
      line-height: 40px;
    }
  }
  .ui-link {
    height: 88px;
    line-height: 88px;
    text-align: center;
    margin: 60px 30px;
    background: $text-gary;
    color: $color-fff;
    font-size: 36px;
    display: block;
    border-radius: 88px;
    &.active {
      background: $brand-red;
      box-shadow: 0 4px 5px rgba($shadow-red, 0.35);
    }
  }
}
</style>
