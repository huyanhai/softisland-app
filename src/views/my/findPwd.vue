<!--
 * @Description: 找回支付密码
 * @Author: hyh
 * @since: 2019-08-24 16:53:26
 * @lastTime: 2019-08-24 20:07:11
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="set-password">
    <head-bar :barTitle="barTitle">
      <div class="choose-btn" slot="right">
        <a class="ui-link" @click="save">保存</a>
      </div>
    </head-bar>
    <div class="m-info white-bg">
      <div class="col">
        <span class="col-l">手机号码</span>
        <span class="col-r">
          <input type="tel" v-model="phoneNo" class="ui-link" placeholder="请输入注册时的手机号码">
        </span>
      </div>
      <div class="col">
        <span class="col-l">验证码</span>
        <span class="col-r">
          <input type="tel" v-model="veriCode" class="ui-link" placeholder="请输入验证码">
        </span>
        <span class="r-text" @click="sendVeriCode" v-if="!btnDisable">发送验证码</span>
        <p class="r-text" v-else @click="veriCodeSended">剩余{{countDownNumber}}s</p>
      </div>
      <div class="col">
        <span class="col-l">新的密码</span>
        <span class="col-r">
          <input type="tel" v-model="newPwd" class="ui-link" placeholder="6-15字母加数字组合">
        </span>
      </div>
    </div>
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
  name: 'findPwd',
  data () {
    return {
      barTitle: '找回支付密码',
      totalShow: false,
      tipsText: '手机号码错误',
      tipsIcon: '',
      iconType: {
        faile: 'icon-shibai',
        success: 'icon-biaoqing'
      },
      phoneNo: '',
      veriCode: '',
      newPwd: '',
      countDownNumber: 120,
      btnDisable: false
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
    save () {
      this.tipsIcon = this.iconType['faile']
      this.totalHide()
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
      font-size: 24px;
      color: $text-dark;
    }
    .iconfont {
      font-size: 30px;
      color: $text-lgary;
    }
    .label {
      flex: 0 0 auto;
      font-size: 24px;
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
      border-bottom: 1px solid $line-gary;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      .col-l {
        font-size: 26px;
        color: $text-dark;
        flex: 0 0 auto;
        width: 120px;
      }
      .col-r {
        width: 50%;
        flex: 1 0 auto;
        text-align: right;
        margin: 0 30px;
        font-size: 26px;
        color: $text-lgary;
        .ui-link {
          border: none;
          background: none;
          width: 100%;
          height: 100%;
        }
        .col-r {
          margin: 0;
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
      .r-text {
        font-size: 24px;
        color: $brand-orange;
      }
      .iconfont {
        color: $text-lgary;
      }
    }
  }
  .tips {
    font-size: 20px;
    color: $brand-orange;
    margin: 0 30px;
    text-align: right;
  }
}
</style>
