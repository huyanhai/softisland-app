<!--
 * @Description: 实名认证
 * @Author: hyh
 * @since: 2019-08-24 16:53:26
 * @lastTime: 2019-08-24 21:08:54
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="set-auth">
    <head-bar :barTitle="barTitle"></head-bar>
    <van-notice-bar color="#ff5a32" background="#ffca97">
      请确认是您本人，验证后不可修改且只能提交一次
    </van-notice-bar>
    <div class="m-info white-bg">
      <div class="col">
        <span class="col-l">身份证号</span>
        <span class="col-r">
          <input type="number" @input="valChange" v-model="IDNo" class="ui-input" placeholder="请输入身份证号">
        </span>
      </div>
      <div class="col">
        <span class="col-l">真实姓名</span>
        <span class="col-r">
          <input type="text" v-model="truthName" @input="valChange" class="ui-input" placeholder="请输入真实姓名">
        </span>
      </div>
    </div>
    <p class="tips">注：该姓名需和绑定的支付宝姓名一致，否则无法成功提现！</p>
    <a class="ui-link" :class="{active:active}" @click="auth">申请认证</a>
    <p class="tips ui-text">
      温馨提示：<br>
      1、按照国家政策要求，游戏玩家需要先进行实名认证，再进行游
      戏相关交易；<br>
      2、为了您顺畅的租号体验，请您尽快填写下方的身份信息，平台
      会对您填写的信息严格保密。<br>
      3、未满18岁的用户，禁止发布账号、下单操作。<br>
      4、身份证信息只能提交一次，不能修改，请谨慎填写。

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
export default {
  name: 'auth',
  data () {
    return {
      barTitle: '实名认证',
      IDNo: '',
      truthName: '',
      active: false,
      totalShow: false,
      tipsText: '身份证号码不合法',
      tipsIcon: '',
      iconType: {
        faile: 'icon-shibai',
        success: 'icon-biaoqing'
      }
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
    valChange () {
      if (this.IDNo && this.truthName) {
        this.active = true
      } else {
        this.active = false
      }
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
    auth () {
      if (this.active) {
        this.tipsIcon = this.iconType['faile']
        this.totalHide()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.set-auth {
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
      }
      .col-r {
        width: 50%;
        flex: 1 0 auto;
        text-align: right;
        margin: 0 30px;
        font-size: 26px;
        color: $text-lgary;
        .ui-input {
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
      .iconfont {
        color: $text-lgary;
        transform: rotate(180deg);
      }
    }
  }
  .tips {
    font-size: 20px;
    color: $brand-yellow;
    margin: 0 30px;
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
      box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
    }
  }
}
</style>
