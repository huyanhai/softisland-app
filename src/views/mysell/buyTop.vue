<!--
 * @Description:购买置顶
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-17 21:09:02
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="buy-top">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="card-box">
      <card>
        <template slot="label-name">
          确认货架信息
        </template>
        <template slot="card-hd-right">
          <span class="text-right">
            <a class="link" @click="buyRule">购买规则</a>
          </span>
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">货架ID</span>
              <input class="ui-input" disabled type="text" name="" v-model="shopId" placeholder="请选择游戏">
            </li>
            <li class="info-item">
              <span class="label">游戏名称</span>
              <input class="ui-input" disabled type="text" name="" v-model="gameName" placeholder="请选择游戏">
            </li>
            <li class="info-item">
              <span class="label">游戏区服</span>
              <input class="ui-input" disabled type="text" name="" v-model="gameServer" placeholder="请选择游戏">
            </li>
            <li class="info-item">
              <span class="label">账号角色</span>
              <input class="ui-input" disabled type="text" name="" v-model="roleName" placeholder="请选择游戏">
            </li>
            <li class="info-item">
              <span class="label">置顶剩余数</span>
              <input class="ui-input" disabled type="text" name="" v-model="surplusNo" placeholder="请选择游戏">
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          购买置顶时长
        </template>
        <template slot="card-hd-right">
          <span class="text-right">
            <a class="link" @click="whatTop">什么是置顶货架？</a>
          </span>
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item textarea-item">
              <span class="label larger-labrl">货架置顶时长</span>
              <span class="line">
                <van-slider v-model="zdLeaseyh" active-color="#1dbf60" />
              </span>
              <span class="line-text">
                <p class="ui-number">{{zdLeaseyh}}</p>小时
              </span>
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          支付结算
        </template>
        <template slot="card-hd-right">
          <span class="text-right weight-font">
            总费用：<em class="color-red">5</em>元
          </span>
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
              <input class="ui-input" type="password" v-model="zjPrices" placeholder="请输入支付密码">
            </li>
          </ul>
        </template>
      </card>
      <a class="ui-btn step4" @click="toNext">确认购买</a>
    </div>
    <dialogC :dialogShow="dialogShow" @dialogHide="dialogHide">
      <template slot="__hd">
        货架置顶购买规则
      </template>
      <template slot="__bd">
        <span v-html="tipsText"></span>
      </template>
    </dialogC>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import card from '@/components/card'
import dialogC from '@/components/dialogC'
export default {
  name: 'buyTop',
  data () {
    return {
      barTitle: '购买置顶',
      shopId: '154011547',
      gameName: '魔兽世界',
      gameServer: '重庆-江北区',
      roleName: '嘉陵江',
      surplusNo: '0分钟',
      zdLeaseyh: 3,
      zjPrices: '',
      dialogShow: false,
      tipsText: ''
    }
  },
  components: {
    headBar,
    card,
    dialogC
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    toNext () {
      this.$router.go(-1)
    },
    buyRule () {
      this.tipsText = `1.同一个货架一天内最多可买1次。<br>2.同一租号玩账号下所有置顶货架一天内购买数之和最多为40次。<br>3.同一页面最多同时展示4个置顶货架。`
      this.dialogShow = true
    },
    whatTop () {
      this.tipsText = `1. 购买置顶货架，在置顶货架生效时间内，可让您的货架排名提高到最前面。<br>2. 同一个货架同时只能购买一次置顶货架，到期后可再次购买。<br>3. 优先购买的置顶货架排名靠前（如果同时多个都购买置顶则先买的在前面）<br>4. 到期后置顶货架失效，排名恢复正常。<br>5. 只针对待租账号开放购买。绝地求生游戏置顶价格为4元1分钟，8元2分钟；<br>其他种类游戏置顶价格为4元5分钟，8元10分钟`
      this.dialogShow = true
    },
    toPay () {
      this.$router.push({ path: '/pay' })
    },

    dialogHide (e) {
      this.dialogShow = e.dialogShow
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.buy-top {
  .card-box {
    margin-top: 30px;
    .text-right {
      text-align: right;
      width: 100%;
      &.weight-font {
        font-size: 28px;
      }
      .link {
        color: $brand-yellow;
        text-decoration: underline;
      }
    }
  }
  .ui-btn {
    width: 560px;
    height: 88px;
    display: block;
    margin: 50px auto;
    text-align: center;
    line-height: 88px;
    color: $color-fff;
    font-size: 36px;
    background: $brand-red;
    box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
    @include border-radius(88px);
    &.step4 {
      width: 690px;
    }
  }
}
</style>
