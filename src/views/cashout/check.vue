<!--
 * @Description:
 * @Author: huyanhai
 * @since: 2019-08-09 21:32:07
 * @lastTime: 2019-08-10 17:26:40
 -->
<template>
  <div class="pages page-pay">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="pay-box">
      <div class="m-pay-choose">
        <div class="choose-hd">提现账号确认</div>
        <div class="choose-bd">
          <ul class="ui-repeart">
            <li class="repeart-item">
              <i class="iconfont icon-zhifubao"></i>
              <p class="text">支付宝账号：</p>
              <p class="info">61298321@QQ.COM</p>
            </li>
            <li class="repeart-item">
              <i class="iconfont icon-zhifubao"></i>
              <p class="text">姓名：</p>
              <p class="info">邓歆</p>
            </li>
            <li class="repeart-item">
              <i class="iconfont icon-zhifubao"></i>
              <p class="text">当前可提现金额：</p>
              <p class="info"><em class="color">0.00</em>元</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-pay">
        <div class="pay-hd">提现模式</div>
        <div class="pay-bd">
          <tab-nav :tabTitle="tabTitle">
            <payMoney :payText="payText" :payMoneyMode="payMoneyMode" :tispText="'请输入提现金额（20元起提）'" :payMoney="payMoney" :canCashMoney="canCashMoney" @onPayBtn="onPay" slot="tab0" />
            <template slot="tab1">
              <p class="no-data">暂无内容</p>
            </template>
          </tab-nav>
        </div>
      </div>
    </div>
    <p class="tips">温馨提示：<br>
      1、普通提现：手续费3%，48小时内提现到账<br>
      2、快速提现：手续费5%，2小时内提现到账<br>
      3、快速提现时间：周一至周五9:00-16:00<br>
      4、为了您的资金安全,普通用户每月申请提现次数限制为4次<br>
      5、为了您的资金安全,商户每月申请提现次数限制为6次
    </p>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import payMoney from '@/components/payMoney'
import tabNav from '@/components/tabNav'
export default {
  name: 'pay',
  data () {
    return {
      barTitle: '账户提现',
      payMode: '1',
      icon: {
        active: require('./assets/images/check.png'),
        inactive: ''
      },
      payText: '提现',
      tabTitle: ['普通提现', '快速提现'],
      payMoneyMode: 'cashout',
      // 可提现金额
      canCashMoney: 30,
      // 最少提现金额
      payMoney: 20
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar,
    payMoney,
    tabNav
  },
  methods: {
    onPay (e) {
      console.log(e)
      if (e) {
        this.$router.push({ path: './status' })
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
  .m-pay-choose {
    margin: 0 30px;
    .choose-hd {
      height: 90px;
      line-height: 90px;
      font-size: 28px;
      color: $text-dark;
      border-bottom: 1px solid $line-gary;
    }
    .choose-bd {
      margin: 40px 0px;
      .ui-repeart {
        .repeart-item {
          display: flex;
          align-items: center;
          height: 60px;
          line-height: 60px;
          p {
            margin: 0 0 0 5px;
          }
          .iconfont {
            font-size: 26px;
            color: $brand-yellow;
          }
          .text {
            font-size: 24px;
            color: $text-lgary;
          }
          .info {
            font-size: 24px;
            color: $text-dark;
            .color {
              color: $brand-orange;
              font-size: 26px;
              font-style: normal;
              font-size: 28px;
            }
          }
        }
      }
    }
  }
  .m-pay {
    .pay-hd {
      height: 90px;
      line-height: 90px;
      font-size: 28px;
      color: $text-dark;
      margin: 0 30px;
      border-bottom: 1px solid $line-gary;
    }
    .pay-bd {
      .tab-nav-hd {
        .tab {
          margin: 0 30px;
        }
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
