<!--
 * @Description:购买货架
 * @Author: hyh
 * @since: 2019-08-20 21:35:38
 * @lastTime: 2019-08-22 23:47:18
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-server-buylaba">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="card-box">
      <card>
        <template slot="label-name">
          出租货架
        </template>
        <template slot="card-hd-right">
          <span class="text-right">
            <p class="ui-text">已拥有货架数15484</p>
          </span>
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">购买货架数</span>
              <input class="ui-input" type="text" name="" v-model="buyCount" placeholder="请输入购买的个数（单价55元/个）">
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
    <dialogC :dialogShow="dialogShow" @dialogHide="dialogHide">
      <template slot="__hd">
        可用余额不足
      </template>
      <template slot="__bd">
        <div class="dialog-bdc">当前账户可用金额不足<br>是否立即充值</div>
      </template>
      <template slot="__ft">
        <a class="ui-link dialog-ftc think" @click="dialogHide">考虑下</a>
        <a class="ui-link dialog-ftc" @click="toPay">去充值</a>
      </template>
    </dialogC>
    <Totals :totalShow="totalShow" @totalHide="totalHide">
      <i slot="icon" class="iconfont icon-shibai"></i>
      <p slot="text">输入的密码错误</p>
    </Totals>
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import card from '@/components/card'
import dialogC from '@/components/dialogC'
import Totals from '@/components/totals'
export default {
  name: 'buyhuojia',
  data () {
    return {
      barTitle: '购买货架',
      zfpwd: '',
      buyCount: '',
      totalShow: false,
      dialogShow: false
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar,
    card,
    Totals,
    dialogC
  },
  methods: {
    toPay () {
      this.$router.push({ path: '/pay' })
    },
    pay () {
      this.dialogShow = true
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
    dialogHide (e) {
      this.dialogShow = e.dialogShow
    }
  }
}
</script>

<style>
</style>
<style lang="scss" scoped>
@import "../../../assets/scss/index";
.page-server-buylaba {
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
        .ui-text {
          font-size: 24px;
          margin: 0;
          width: 100%;
          text-align: right;
          color: $text-gary;
        }
      }
      .shop-right {
        margin: 0;
        text-align: left;
        width: 100%;
        font-size: 24px;
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
      box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
    }
  }
  .dialog-bdc {
    text-align: center;
    margin: 0 auto;
  }
  .dialog-ftc {
    width: 50%;
    &.think {
      color: $text-dark;
      border-right: 1px solid $line-gary;
    }
  }
}
</style>
