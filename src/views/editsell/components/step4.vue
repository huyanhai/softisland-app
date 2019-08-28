<!--
 * @Description:step3
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-28 16:10:50
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="step4">
    <div class="game-info">
      <ul class="info-bd">
        <li class="info-item">
          <span class="label">错误赔付</span>
          <p class="switch-text">开启后需要支付6元服务费</p>
          <span class="switch">
            <van-switch v-model="stepFourData.compensation" active-color="#1dbf60" />
          </span>
        </li>
        <li class="info-item">
          <span class="label">账号保障</span>
          <p class="switch-text">开启后需要支付30元/30天</p>
          <span class="switch">
            <van-switch v-model="stepFourData.guarantee" active-color="#1dbf60" />
          </span>
        </li>
        <li class="info-item">
          <span class="label">限时货架</span>
          <p class="switch-text">购买后能增加货架租赁次数</p>
          <span class="switch">
            <van-switch v-model="stepFourData.xsshelves" active-color="#1dbf60" />
          </span>
        </li>
        <template v-if="stepFourData.xsshelves">
          <li class="info-item no-border">
            <span class="label">服务类型</span>
            <span class="right-text">
              服务费用：<p class="ui-txt">300元</p>
            </span>
          </li>
          <li class="info-item textarea-item flex-w no-border">
            <div class="exsearch-bd">
              <van-radio-group v-model="stepFourData.serverType">
                <van-radio :name="item.value" class="col cborder" :class="{active:stepFourData.serverType===item.value}" v-for="(item,index) in accList" :key="index">{{item.name}}</van-radio>
              </van-radio-group>
            </div>
          </li>
          <li class="info-item no-border">
            <span class="label">货架时间</span>
          </li>
          <li class="info-item textarea-item flex-w">
            <div class="exsearch-bd">
              <van-radio-group v-model="stepFourData.shelvesTimes">
                <van-radio :name="item.value" class="col cborder" :class="{active:stepFourData.shelvesTimes===item.value}" v-for="(item,index) in accList1" :key="index">{{item.name}}</van-radio>
              </van-radio-group>
            </div>
          </li>
        </template>
        <li class="info-item">
          <span class="label">限制要求</span>
          <p class="switch-text">租客下单租赁限制要求</p>
          <span class="switch">
            <van-switch v-model="stepFourData.demand" active-color="#1dbf60" />
          </span>
        </li>
        <template v-if="stepFourData.demand">
          <li class="info-item larger-height no-border margin-bots">
            <span class="label">租赁次数</span>
            <span class="line">
              <van-slider v-model="stepFourData.leaseTimes" active-color="#1dbf60" />
            </span>
            <span class="line-text">
              <p class="ui-number">{{stepFourData.leaseTimes}}</p>次
            </span>
            <em class="sm-tisp">设置说明：租客的租赁次数小于设定值后无法下单租赁</em>
          </li>
          <li class="info-item larger-height no-border margin-bots">
            <span class="label">逃跑次数</span>
            <span class="line">
              <van-slider v-model="stepFourData.escapeTimes" active-color="#1dbf60" />
            </span>
            <span class="line-text">
              <p class="ui-number">{{stepFourData.escapeTimes}}</p>次
            </span>
            <em class="sm-tisp">设置说明：租客的逃跑次数大于设定值后无法下单租赁</em>
          </li>
        </template>
      </ul>
    </div>
    <div class="game-info">
      <div class="info-hd">游戏限制<span class="text"> 设置游戏内的限制要求</span></div>
      <ul class="info-bd">
        <li class="info-item">
          <span class="label">排位赛</span>
          <p class="switch-text text-right">开启后允许</p>
          <span class="switch">
            <van-switch v-model="stepFourData.rank" active-color="#1dbf60" />
          </span>
        </li>
        <li class="info-item no-border">
          <span class="label">金币/战利品</span>
          <p class="switch-text text-right">开启后允许</p>
          <span class="switch">
            <van-switch v-model="stepFourData.gold" active-color="#1dbf60" />
          </span>
        </li>
      </ul>
    </div>
    <div class="game-info">
      <div class="info-hd">其他服务</div>
      <ul class="info-bd">
        <li class="info-item">
          <span class="label">预约租赁</span>
          <p class="switch-text text-right">开启后允许</p>
          <span class="switch">
            <van-switch v-model="stepFourData.orderLease" active-color="#1dbf60" />
          </span>
        </li>
        <li class="info-item no-border">
          <span class="label">自动改密</span>
          <p class="switch-text text-right">开启后允许</p>
          <span class="switch">
            <van-switch v-model="stepFourData.autoPwd" active-color="#1dbf60" />
          </span>
        </li>
      </ul>
    </div>
    <div class="game-info">
      <div class="info-hd">支付结算<span class="text-right">总费用：<em class="text">333</em>元</span></div>
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
          <input class="ui-input" type="password" v-model="stepFourData.zjPrices" placeholder="请输入支付密码">
        </li>
      </ul>
    </div>
    <a class="ui-btn step4" @click="toNext">完成发布</a>
  </div>
</template>
<script>
export default {
  name: 'step4',
  props: {
    stepFourData: {}
  },
  data () {
    return {
      accList: [{
        name: '100次 200小时',
        value: '1'
      }, {
        name: '200次 400小时',
        value: '2'
      }, {
        name: '400次800小时',
        value: '3'
      }],
      accList1: [{
        name: '30天',
        value: '1'
      }, {
        name: '7天',
        value: '2'
      }, {
        name: '1天',
        value: '3'
      }]
    }
  },
  methods: {
    toNext () {
      this.$emit('stepFour', this.stepFourData)
    },
    showTimer1 () {
      this.timer1 = true
    },
    showTimer2 () {
      this.timer2 = true
    },
    close () {
      this.timer1 = false
      this.timer2 = false
    },
    toPay () {
      this.$router.push({ path: '/pay' })
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/scss/index";
.step4 {
  .game-info {
    background: $color-fff;
    @include border-radius(40px);
    margin: 30px;
    @include box-shdow-gary();
    box-sizing: border-box;
    padding: 0 30px;
    overflow: hidden;
    .info-hd {
      font-size: 28px;
      color: $text-dark;
      height: 100px;
      line-height: 100px;
      border-bottom: 1px dashed $line-gary;
      margin-top: 20px;
      overflow: hidden;
      clear: both;
      font-weight: bold;
      .text-right {
        float: right;
        text-align: right;
        font-weight: normal;
        font-weight: bold;
        .text {
          color: $brand-orange;
          font-style: normal;
          font-size: 28px;
          font-weight: normal;
        }
      }
      .text {
        font-size: 26px;
        color: $text-lgary;
        font-weight: normal;
      }
      &:first-child {
        margin-top: 0;
      }
      &.no-margin-top {
        margin-top: 0;
      }
    }
    .info-bd {
      .info-item {
        display: flex;
        align-items: center;
        height: 100px;
        line-height: 100px;
        border-bottom: 1px dashed $line-gary;
        position: relative;
        .sm-tisp {
          position: absolute;
          left: 0;
          bottom: -20px;
          font-size: 20px;
          color: $brand-orange;
          line-height: initial;
          font-style: normal;
        }
        &.margin-bots {
          margin-bottom: 20px;
        }
        &.no-border {
          border-bottom: 0;
        }
        &.larger-height {
          height: 100px;
          line-height: 100px;
        }
        &.textarea-item {
          height: initial;
          align-items: baseline;
        }
        &.flex-w {
          justify-content: space-between;
          padding-bottom: 20px;
        }
        .switch-text {
          font-size: 26px;
          color: $text-gary;
          flex: 1 0 auto;
          margin: 0;
          .text {
            color: $brand-orange;
            font-style: normal;
          }
          &.text-right {
            text-align: right;
            margin-right: 20px;
          }
        }
        .switch {
          height: 100px;
          line-height: 100px;
          display: flex;
          align-items: center;
          .ui-link {
            font-size: 26px;
            color: $brand-orange;
            text-decoration: underline;
          }
        }
        .right-text {
          flex: 1 0 auto;
          text-align: right;
          font-size: 26px;
          color: $text-dark;
          width: 50%;
          .ui-txt {
            margin: 0;
            display: inline;
            color: $brand-orange;
          }
        }
        .label {
          font-size: 26px;
          color: $text-lgary;
          width: 150px;
          flex: 0 0 auto;
          margin-right: 10px;
        }
        .line {
          flex: 1 0 auto;
          height: 100px;
          display: flex;
          align-items: center;
          .van-slider {
            width: 100%;
          }
          .times {
            width: 170px;
            height: 60px;
            line-height: 60px;
            background: $line-gary;
            @include border-radius(60px);
            font-size: 26px;
            color: $text-lgary;
            text-align: center;
            margin: 0;
            .iconfont {
              display: inline;
              vertical-align: top;
            }
          }
          .jg {
            font-size: 26px;
            color: $text-lgary;
            margin: 0 20px;
            font-style: normal;
          }
        }
        .line-text {
          flex: 0 0 auto;
          width: 130px;
          height: 60px;
          background: $line-gary;
          @include border-radius(60px);
          font-size: 26px;
          color: $text-lgary;
          text-align: center;
          line-height: 60px;
          margin-left: 20px;
          .ui-number {
            margin: 0;
            font-size: 28px;
            color: $text-dark;
            display: inline;
            margin-right: 5px;
          }
        }
        .ui-input {
          flex: 1 0 auto;
          font-size: 26px;
          color: $text-dark;
          background: none;
          border: 0;
          &.ui-textarea {
            height: 120px;
          }
        }
        .iconfont {
          flex: 0 0 auto;
          transform: rotate(180deg);
          color: $text-lgary;
        }
      }
      &.img-upload {
        padding-top: 30px;
        display: flex;
        flex-wrap: wrap;
        .upload {
          width: 150px;
          height: 150px;
          border: 1px solid #e4e4e4;
          margin-bottom: 20px;
          margin-right: 30px;
          position: relative;
          .loadimg-icon {
            position: absolute;
            width: 100%;
            height: 100%;
            background: url("../assets/images/add.png") no-repeat center center;
            background-size: 50px 50px;
            display: block;
            z-index: 100;
          }
          .iconfont {
            position: absolute;
            color: $brand-orange;
            top: -14px;
            right: -14px;
            font-size: 30px;
            background: $color-fff;
            width: 30px;
            height: 30px;
            @include border-radius(30px);
            overflow: hidden;
            z-index: 100;
          }
          .img {
            width: 100%;
            height: 100%;
            border: 0;
          }
        }
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
    box-shadow: 0 4px 5px rgba($shadow-red, 0.35);
    @include border-radius(88px);
    &.step4 {
      width: 690px;
    }
  }
  .timer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .exsearch-bd {
    width: 100%;
    .tisp {
      text-align: center;
      font-size: 20px;
      color: $brand-orange;
      margin-top: 30px;
    }
    .van-radio-group {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
    }
    .col {
      width: 190px;
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
</style>
