<!--
 * @Description: 设置信息
 * @Author: hyh
 * @since: 2019-08-24 16:53:26
 * @lastTime: 2019-08-24 22:01:43
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="set-text">
    <head-bar :barTitle="barTitle">
      <div class="choose-btn" slot="right" v-if="type==='qqNumber' || type==='nickName'">
        <a class="ui-link" @click="save">保存</a>
      </div>
    </head-bar>
    <div class="set-box white-bg" v-if="type==='qqNumber' || type==='nickName'">
      <input type="text" class="ui-input" v-model="inputVal" />
      <i class="iconfont icon-shanchu" @click="clean"></i>
    </div>
    <div class="set-box white-bg" v-if="type==='aliPay'">
      <span class="label">已绑定支付宝</span>
      <input type="text" class="ui-input" v-model="inputVal" placeholder="请输入已绑定的支付宝账号" />
      <i class="iconfont icon-shanchu" @click="clean"></i>
    </div>
    <div class="set-box white-bg" v-if="type==='msgPush'">
      <span class="label">限时货架</span>
      <span class="switch">
        <van-switch v-model="pushMsg" active-color="#1dbf60" class="ui-switch" />
      </span>
    </div>
    <div class="card-box" v-if="type==='webSit'">
      <card>
        <template slot="label-name">
          短信通知
        </template>
        <template slot="card-hd-right">
          <span class="text-right">
            短信剩余0条，
            <a class="ui-link" @click="buy">去购买</a>
          </span>
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">租赁通知</span>
              <span class="switch">
                <van-switch v-model="pushMsg" active-color="#1dbf60" class="ui-switch" />
              </span>
            </li>
            <li class="info-item">
              <span class="label">投诉通知</span>
              <span class="switch">
                <van-switch v-model="pushMsg" active-color="#1dbf60" class="ui-switch" />
              </span>
            </li>
            <li class="info-item">
              <span class="label">被下架通知</span>
              <span class="switch">
                <van-switch v-model="pushMsg" active-color="#1dbf60" class="ui-switch" />
              </span>
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          站内信通知
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">租赁通知</span>
              <span class="switch">
                <van-switch v-model="pushMsg" active-color="#1dbf60" class="ui-switch" />
              </span>
            </li>
            <li class="info-item">
              <span class="label">投诉通知</span>
              <span class="switch">
                <van-switch v-model="pushMsg" active-color="#1dbf60" class="ui-switch" />
              </span>
            </li>
            <li class="info-item">
              <span class="label">活动消息通知</span>
              <span class="switch">
                <van-switch v-model="pushMsg" active-color="#1dbf60" class="ui-switch" />
              </span>
            </li>
            <li class="info-item">
              <span class="label">被租赁通知</span>
              <span class="switch">
                <van-switch v-model="pushMsg" active-color="#1dbf60" class="ui-switch" />
              </span>
            </li>
            <li class="info-item">
              <span class="label">被下架通知</span>
              <span class="switch">
                <van-switch v-model="pushMsg" active-color="#1dbf60" class="ui-switch" />
              </span>
            </li>
          </ul>
        </template>
      </card>
    </div>
    <p class="tips" v-if="type==='qqNumber'">QQ号能让商户或招募的号主及时线下与您联系</p>
    <p class="tips" v-if="type==='msgPush'">开启后，订单变动及站内通知等信息，在锁屏状态下仍可接收！</p>
    <p class="tips" v-if="type==='aliPay'">请注意支付宝姓名需与实名认证的姓名一致，否则无法成功提现！</p>
    <a class="ui-link active">重新绑定</a>
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import card from '@/components/card'
export default {
  name: 'setText',
  data () {
    return {
      barTitle: 'QQ号设置',
      pageType: {
        nickName: '昵称设置',
        qqNumber: 'QQ号设置',
        msgPush: '消息推送设置',
        webSit: '站内通知设置',
        aliPay: '绑定支付宝'
      },
      inputVal: '',
      // 页面类型
      type: '',
      pushMsg: false
    }
  },
  components: {
    headBar,
    card
  },
  created () {
    this.$emit('footer', false)
    this.type = this.$route.query.pagePath
    this.barTitle = this.pageType[this.type]
  },
  methods: {
    save () { },
    clean () {
      this.inputVal = ''
    },
    buy () {
      this.$router.push({
        path: '/pay'
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
      margin-right: 20px;
    }
    .switch {
      flex: 1 0 auto;
      text-align: right;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }
  }
  .card-box {
    margin-top: 30px;
    .info-item {
      height: 100px !important;
      .label {
        width: 180px !important;
      }
    }
    .text-right {
      text-align: right;
      width: 100%;
      color: $text-lgary;
      .ui-link {
        color: $brand-orange;
        text-decoration: underline;
      }
    }
    .switch {
      display: flex;
      text-align: right;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      width: 100%;
    }
  }
  .tips {
    font-size: 20px;
    color: $brand-yellow;
    margin: 0 30px;
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
