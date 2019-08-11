<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-08 14:12:05
 * @lastTime: 2019-08-10 17:17:50
 -->
<template>
  <div class="pages page-login">
    <div class="logo">
      <img class="ui-img" src="../../assets/images/logo.png" />
    </div>
    <div class="form">
      <ul class="ui-repeart">
        <li class="repeart-item">
          <span class="col">
            <i class="iconfont icon-shoujihao"></i>
            手机号
          </span>
          <span class="col">
            <input type="number" class="ui-input input-text" v-model="submitData.phoneNumber">
          </span>
        </li>
        <li class="repeart-item">
          <span class="col">
            <i class="iconfont icon-mima"></i>
            验证码
          </span>
          <span class="col">
            <input type="number" class="ui-input input-text" v-model="submitData.veriCode">
            <a class="link" id="sendVeriCode" @click="sendVeriCode" v-if="!btnDisable">发送验证码</a>
            <p class="text" v-else @click="veriCodeSended">剩余{{countDownNumber}}s</p>
          </span>
        </li>
        <li class="repeart-item">
          <a class="submit" @click="submitLogin">登录</a>
        </li>
      </ul>
    </div>
    <Totals :totalShow="totalShow" @totalHide="totalHide">
      <i slot="icon" class="iconfont icon-shibai"></i>
      <p slot="text" v-html="totalText"></p>
    </Totals>
  </div>
</template>
<script>
import { Toast } from 'vant'
import Totals from '@/components/totals'
export default {
  name: 'Login',
  data () {
    return {
      countDownNumber: 120,
      btnDisable: false,
      submitData: {
        phoneNumber: Number,
        veriCode: Number
      },
      totalText: '您和网络君失联了',
      totalShow: false
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    Totals
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
    // 登录事件
    submitLogin () {
      this.checkWeb()
      if (this.submitData.phoneNumber !== '13645633455') {
        this.totalHide('手机号未注册<br><p>请访问www.17369.com进行注册</p>')
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
    },
    checkWeb () {
      if (!navigator.onLine) {
        this.totalHide('您和网络君失联了')
        return false
      }
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.page-login {
  background: url("./assets/images/login_bg.png") no-repeat center top
    $color-fff;
  height: 100%;
  background-size: contain;
  overflow: hidden;
  padding-bottom: 0;
  .logo {
    width: 362px;
    height: 109px;
    margin: 179px auto 0 auto;
    .ui-img {
      width: 100%;
    }
  }
  .form {
    margin: 0 90px;
    padding-top: 220px;
    .ui-repeart {
      .repeart-item {
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        .col {
          font-size: 24px;
          color: $text-gary;
          position: relative;
          .link {
            position: absolute;
            right: 0;
            top: 34px;
            font-size: 24px;
            color: $brand-red;
          }
          .text {
            position: absolute;
            right: 0;
            top: 34px;
            font-size: 24px;
            margin: 0;
            color: $brand-red;
          }
          .iconfont {
            margin-right: 5px;
          }
          .ui-input {
            width: 100%;
            color: $text-dark;
            font-size: 26px;
            border: 0;
            border-bottom: 1px solid $line-gary;
            outline: 0;
            height: 50px;
            line-height: 50px;
            margin-top: 20px;
          }
        }
        .submit {
          height: 88px;
          line-height: 88px;
          @include border-radius(88px);
          background: $brand-red;
          box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
          text-align: center;
          color: #fff;
          font-size: 36px;
        }
      }
    }
  }
}
</style>
