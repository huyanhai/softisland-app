<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-09 21:32:07
 * @lastTime: 2019-08-26 09:45:25
 -->
<template>
  <div class="pages page-pay">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="pay-box">
      <div class="m-pay-choose">
        <div class="choose-hd">选择充值方式</div>
        <div class="choose-bd">
          <van-radio-group v-model="payMode">
            <van-radio name="1" class="col ali-pay">
              <!-- <img class="check" slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.inactive"> -->
              <i class="check" :class="[props.checked ? 'cborder' : '']" slot="icon" slot-scope="props"></i>
            </van-radio>
            <van-radio name="2" class="col wechart_pay">
              <!-- <img class="check" slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.inactive"> -->
              <i class="check" :class="[props.checked ? 'cborder' : '']" slot="icon" slot-scope="props"></i>
            </van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="m-pay">
        <div class="pay-hd">充值金额</div>
        <div class="pay-bd">
          <payMoney :payText="payText" :payMoney="payMoney" @onPayBtn="onPay" />
        </div>
      </div>
    </div>
    <p class="tips">充值金额将存入您的账户中，可用于日常消费或提现</p>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import payMoney from '@/components/payMoney'
export default {
  name: 'pay',
  data () {
    return {
      barTitle: '账户充值',
      payMode: '1',
      icon: {
        active: require('./assets/images/check.png'),
        inactive: ''
      },
      payText: '充值',
      payMoney: 2
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar,
    payMoney
  },
  methods: {
    onPay (e) {
      console.log(e)
      if (e) {
        this.$router.push({ path: './pay/status' })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
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
      margin: 40px 20px 70px 20px;
      .van-radio-group {
        display: flex;
        justify-content: space-between;
      }
      .col {
        width: 280px;
        height: 120px;
        background: $color-f4f4f4;
        @include border-radius(40px);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        &.ali-pay {
          &::before {
            background: url("./assets/images/ali_pay.png") no-repeat;
            background-size: 157px 55px;
            width: 157px;
            height: 55px;
            content: "";
            display: block;
          }
        }
        &.wechart_pay {
          &::before {
            background: url("./assets/images/wechart_pay.png") no-repeat;
            background-size: 190px 55px;
            width: 190px;
            height: 55px;
            content: "";
            display: block;
          }
        }
        .check {
          position: absolute;
          // right: 15px;
          // bottom: 15px;
          // width: 22px;
          // height: 22px;
          &.cborder {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            top: 0;
            left: 0;
            @include border-radius(20px);
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
    }
  }
}
.tips {
  margin: 30px;
  font-size: 22px;
  color: $text-lgary;
  text-align: center;
  display: block;
}
</style>
