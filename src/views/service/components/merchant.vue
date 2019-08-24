<!--
 * @Description:商户
 * @Author: hyh
 * @since: 2019-08-21 23:38:45
 * @lastTime: 2019-08-22 14:56:46
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div>
    <div class="user-info white-bg">
      <div class="user-portrait">
        <img class="ui-img" :src="merchant.portrait" />
      </div>
      <div class="col-r">
        <b class="b-text">恭喜您，您已成为商户！</b>
        <p class="text">最近一次购买时长为：180天</p>
        <p class="text">商户服务到期时间为：2020-09-23 17:42:11 </p>
      </div>
    </div>
    <div class="card-box">
      <card>
        <template slot="label-name">
          开通时长
        </template>
        <template slot="card-bd">
          <div class="exsearch-bd">
            <van-radio-group v-model="merchant.smodels">
              <van-radio :name="item.value" class="col cborder" :class="{active:merchant.smodels===item.value}" v-for="(item,index) in accList" :key="index"><i slot="icon" slot-scope="props" class="iconfont icon-shichang" :class="props.checked ? 'red' : ''"></i>{{item.name}}</van-radio>
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
              <input class="ui-input" type="password" v-model="merchant.zfpwd" placeholder="请输入支付密码">
            </li>
          </ul>
        </template>
      </card>
    </div>
    <button class="ui-btn active" @click="pay">确认开通</button>
    <div class="tips">
      温馨提示： <br>1、商户可以无限上架账号 <br>2、商户可以无限租赁账号（合租）<br> 3、商户可以使自己上架的账号排名更靠前 <br>4、商户可以开
    </div>
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
import card from '@/components/card'
import dialogC from '@/components/dialogC'
import Totals from '@/components/totals'
export default {
  name: '',
  data () {
    return {
      accList: [{
        name: '30天（150元）',
        value: '1'
      }, {
        name: '90天（400元）',
        value: '2'
      }, {
        name: '30天（150元）',
        value: '3'
      }, {
        name: '30天（150元）',
        value: '4'
      }],
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      },
      dialogShow: false,
      totalShow: false,
      // 商户数据
      merchant: { portrait: 'https://hbimg.huabanimg.com/b99b792f7ecb610bf079ce1e33677f64d62f7b52322f6-5tXasY_fw658', smodels: '1', zfpwd: '' }
    }
  },
  components: {
    card,
    dialogC,
    Totals
  },
  methods: {
    pay () {
      if (!this.merchant.zfpwd) {
        this.totalHide()
      } else {
        this.dialogShow = true
      }
      this.$emit('dataSubmit', { data: this.merchant })
    },
    toPay () {
      this.$router.push({ path: '/pay' })
    },
    dialogHide (e) {
      this.dialogShow = e.dialogShow
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
