<!--
 * @Description:购买置顶货架
 * @Author: hyh
 * @since: 2019-08-20 21:35:38
 * @lastTime: 2019-08-28 11:33:10
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-server-buylimithuojia">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="card-box">
      <card :showHD="false">
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">货架编号</span>
              <input class="ui-input" type="text" name="" v-model="buyCount" placeholder="请输入货架号（可在我的出租账号中查阅)">
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          服务类型
        </template>
        <template slot="card-bd">
          <div class="exsearch-bd1">
            <van-radio-group v-model="cmodels">
              <van-radio :name="item.value" class="col cborder" :class="{active:cmodels===item.value}" v-for="(item,index) in accList" :key="index">{{item.name}}</van-radio>
            </van-radio-group>
          </div>
          <div class="card-hd">服务类型</div>
          <div class="exsearch-bd1">
            <van-radio-group v-model="cmodels1">
              <van-radio :name="item.value" class="col cborder" :class="{active:cmodels1===item.value}" v-for="(item,index) in accList1" :key="index">{{item.name}}</van-radio>
            </van-radio-group>
          </div>
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
    <dialogC :dialogShow="dialogShow1" @dialogHide="dialogHide">
      <template slot="__hd">
        {{ruleTitle}}
      </template>
      <template slot="__bd">
        <div class="" v-html="ruleText"></div>
      </template>
      <template slot="__ft">
        <a class="ui-link" @click="dialogHide">我知道了</a>
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
  name: 'buylimithuojia',
  data () {
    return {
      barTitle: '购买限时货架',
      zfpwd: '',
      buyCount: '',
      cmodels: '1',
      accList: [{
        name: '100次200小时',
        value: '1'
      }, {
        name: '200次400小时',
        value: '2'
      }, {
        name: '400次800小时',
        value: '3'
      }],
      cmodels1: '1',
      accList1: [{
        name: '30天',
        value: '1'
      }, {
        name: '7天',
        value: '2'
      }, {
        name: '1天',
        value: '3'
      }],
      totalShow: false,
      dialogShow: false,
      dialogShow1: false,
      ruleTitle: '',
      ruleText: ''
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
    buyRule () {
      this.ruleTitle = '货架置顶购买规则'
      this.ruleText = '1.同一个货架一天内最多可买1次。<br>2.同一租号玩账号下所有置顶货架一天内购买数之和最多为40次。<br>3.同一页面最多同时展示4个置顶货架。'
      this.dialogShow1 = true
    },
    whatRule () {
      this.ruleTitle = '什么是置顶货架'
      this.ruleText = '1. 购买置顶货架，在置顶货架生效时间内，可让您的货架排名提高到最前面。<br>2. 同一个货架同时只能购买一次置顶货架，到期后可再次购买。<br>3. 优先购买的置顶货架排名靠前（如果同时多个都购买置顶则先买的在前面）<br>4. 到期后置顶货架失效，排名恢复正常。<br>5. 只针对待租账号开放购买。<br>绝地求生游戏置顶价格为4元1分钟，8元2分钟；<br>其他种类游戏置顶价格为4元5分钟，8元10分钟'
      this.dialogShow1 = true
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
      this.dialogShow1 = e.dialogShow
    }
  }
}
</script>

<style>
</style>
<style lang="scss">
@import "../../../assets/scss/index";
.page-server-buylimithuojia {
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
        .ui-text {
          font-size: 26px;
          margin: 0;
          width: 100%;
          text-align: right;
          color: $text-gary;
        }
        .ui-link {
          font-size: 26px;
          margin: 0 0 0 20px;
          text-decoration: underline;
          color: $brand-yellow;
        }
      }
      .shop-right {
        margin: 0;
        text-align: left;
        width: 100%;
        font-size: 26px;
      }
    }
    .exsearch-bd1 {
      margin-bottom: 20px;
      .van-radio-group {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
      }
      .col {
        width: 180px;
        height: 60px;
        color: $text-dark;
        font-size: 26px;
        text-align: center;
        line-height: 60px;
        background: $line-gary;
        @include border-radius(60px);
        text-align: center;
        border-color: $line-gary;
        margin-top: 20px;
        &.active {
          color: $brand-red;
          border-color: $brand-red;
          background: none;
          .van-radio__label {
            color: $brand-red;
          }
        }
        .van-radio__icon {
          display: none;
        }
        .van-radio__label {
          text-align: center;
          margin: 0 auto;
        }
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
