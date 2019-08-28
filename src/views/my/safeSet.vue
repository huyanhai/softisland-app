<!--
 * @Description: 安全设置
 * @Author: hyh
 * @since: 2019-08-24 16:53:26
 * @lastTime: 2019-08-27 14:22:59
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="set-text">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="set-box white-bg">
      <span class="label">支付验证</span>
      <span class="switch">
        <van-switch v-model="pushMsg" active-color="#1dbf60" class="ui-switch" />
      </span>
    </div>
    <p class="tips">开启支付验证后，在进行支付时需要输入支付密码</p>
    <div class="m-info white-bg">
      <div class="col" @click="toPwd">
        <span class="col-l">修改支付密码</span>
        <span class="col-r"></span>
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="col" @click="tofindPwd">
        <span class="col-l">找回支付密码</span>
        <span class="col-r"></span>
        <i class="iconfont icon-fanhui"></i>
      </div>
    </div>
    <div class="m-info white-bg">
      <div class="col" @click="toAuth">
        <span class="col-l">实名认证</span>
        <span class="col-r">
          <span class="col-r">
            未认证
          </span>
        </span>
        <i class="iconfont icon-fanhui"></i>
      </div>
    </div>
    <div class="m-info white-bg">
      <div class="col">
        <span class="col-l">绑定手机号</span>
        <span class="col-r">
          <span class="col-r">
            未绑定
          </span>
        </span>
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="col" @click="tobindAlipay">
        <span class="col-l">绑定支付宝</span>
        <span class="col-r">
          <span class="col-r">
            未绑定
          </span>
        </span>
        <i class="iconfont icon-fanhui"></i>
      </div>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/headBar'
export default {
  name: 'safeSet',
  data () {
    return {
      barTitle: '安全设置',
      inputVal: '',
      pushMsg: false
    }
  },
  components: {
    headBar
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    toPwd () {
      this.$router.push({
        path: '/my/pws-set'
      })
    },
    tofindPwd () {
      this.$router.push({
        path: '/my/find-pwd'
      })
    },
    toAuth () {
      this.$router.push({
        path: '/my/auth'
      })
    },
    tobindAlipay () {
      this.$router.push({
        path: '/my/bind-alipay'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.set-text {
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
      color: $text-lgary;
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
      }
      .col-r {
        width: 50%;
        flex: 1 0 auto;
        text-align: right;
        margin: 0 30px;
        font-size: 26px;
        color: $text-lgary;
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
    color: $brand-orange;
    margin: -10px 30px 0 30px;
    padding-bottom: 10px;
  }
}
</style>
