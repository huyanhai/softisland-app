<!--
 * @Description:购买短信
 * @Author: hyh
 * @since: 2019-08-20 21:35:38
 * @lastTime: 2019-08-28 13:51:00
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-server-buymessage">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="card-box">
      <card>
        <template slot="label-name">
          当前可用短信数：0条
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">购买数量</span>
              <input class="ui-input" type="text" name="" v-model="orderNo" placeholder="请输入购买的个数（单价0.05元/条）">
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          支付结算
        </template>
        <template slot="card-hd-right">
          <p class="text-right">总费用：<em class="color-red">400</em>元</p>
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">余额支付</span>
              <p class="switch-text">（目前可用余额为：<em class="text">157.34元</em>）</p>
              <span class="switch">
                <a class="ui-link" @click="toPay">去充值</a>
              </span>
            </li>
            <li class="info-item no-border">
              <span class="label">支付密码</span>
              <input class="ui-input" type="password" v-model="zfpwd" placeholder="请输入支付密码">
            </li>
          </ul>
        </template>
      </card>
    </div>
    <button class="ui-btn active" @click="pay">确认购买</button>
    <Totals :totalShow="totalShow" @totalHide="totalHide">
      <i slot="icon" class="iconfont icon-shibai"></i>
      <p slot="text">输入的密码错误</p>
    </Totals>
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import card from '@/components/card'
import Totals from '@/components/totals'
export default {
  name: 'buymessage',
  data () {
    return {
      barTitle: '购买短信',
      zfpwd: '',
      orderNo: '',
      buyTimes: '',
      labaText: '',
      totalShow: false
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar,
    card,
    Totals
  },
  methods: {
    toPay () {
      this.$router.push({ path: '/pay' })
    },
    pay () {
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
    }
  }

}
</script>

<style>
</style>
<style lang="scss" scoped>
@import "../../../assets/scss/index";
.page-server-buymessage {
  .card-box {
    .card {
      margin: 30px 30px 30px 30px;
    }
    .card-hd {
      .text-right {
        margin: 0;
        text-align: right;
        width: 100%;
        font-size: 28px;
        .color-red {
          color: $brand-orange;
        }
      }
      .shop-right {
        margin: 0;
        text-align: left;
        width: 100%;
        font-size: 26px;
      }
    }
  }
  .ui-btn {
    margin: 60px 30px 30px 30px;
    height: 88px;
    border-radius: 88px;
    border: none;
    display: block;
    width: 690px;
    font-size: 36px;
    color: $color-fff;
    background: $text-gary;
    &.active {
      background: $brand-red;
      box-shadow: 0 4px 5px rgba($shadow-red, 0.35);
    }
  }
}
</style>
