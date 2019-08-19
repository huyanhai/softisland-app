<!--
 * @Description:step3
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-16 22:42:18
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="step3">
    <div class="game-info">
      <div class="info-hd">租金押金价格</div>
      <ul class="info-bd">
        <li class="info-item">
          <span class="label">租金单价</span>
          <input class="ui-input" type="text" name="" v-model="stepThreeData.zjPrices" placeholder="请设置租金（元/小时）">
        </li>
        <li class="info-item">
          <span class="label">押金总价</span>
          <input class="ui-input" type="text" name="" v-model="stepThreeData.yjtotalPrices" placeholder="请设置押金（元）">
        </li>
      </ul>
    </div>
    <div class="game-info">
      <div class="info-hd">套餐优惠价格</div>
      <ul class="info-bd">
        <li class="info-item">
          <span class="label">日租优惠</span>
          <input class="ui-input" type="text" name="" v-model="stepThreeData.rzDiscount" placeholder="建议租金单价*14，任意天">
        </li>
        <li class="info-item">
          <span class="label">包早优惠</span>
          <input class="ui-input" type="text" name="" v-model="stepThreeData.bzDiscount" placeholder="建议租金单价*3，包早时段07至12点">
        </li>
        <li class="info-item">
          <span class="label">包夜优惠</span>
          <input class="ui-input" type="text" name="" v-model="stepThreeData.byDiscount" placeholder="建议租金单价*5，包夜时段22点至07点">
        </li>
        <li class="info-item">
          <span class="label">10小时优惠</span>
          <input class="ui-input" type="text" name="" v-model="stepThreeData.tenDiscount" placeholder="建议租金单价*9，任意时段">
        </li>
        <li class="info-item">
          <span class="label">周租优惠</span>
          <input class="ui-input" type="text" name="" v-model="stepThreeData.zzDiscount" placeholder="建议租金单价*70，连续7天">
        </li>
      </ul>
    </div>
    <div class="game-info">
      <div class="info-hd">租赁时长范围</div>
      <ul class="info-bd">
        <li class="info-item no-border larger-height">
          <span class="label">最短租赁时间</span>
          <span class="line">
            <van-slider v-model="stepThreeData.zdLease" active-color="#1dbf60" />
          </span>
          <span class="line-text">
            <p class="ui-number">{{stepThreeData.zdLease}}</p>小时
          </span>
        </li>
        <li class="info-item larger-height">
          <span class="label">最长租赁时间</span>
          <span class="line">
            <van-slider v-model="stepThreeData.zcLease" active-color="#1dbf60" />
          </span>
          <span class="line-text">
            <p class="ui-number">{{stepThreeData.zcLease}}</p>小时
          </span>
        </li>
      </ul>
      <div class="info-hd">账号可租时段</div>
      <ul class="info-bd">
        <li class="info-item larger-height">
          <span class="label">时段设置</span>
          <span class="line">
            <p class="times start" @click="showTimer1">
              <i class="iconfont icon-dingwei"></i>
              {{stepThreeData.startTime}}
            </p>
            <em class="jg">至</em>
            <p class="times end" @click="showTimer2">
              <i class="iconfont icon-dingwei"></i>
              {{stepThreeData.endTime}}
            </p>
          </span>
        </li>
      </ul>
      <div class="info-hd">优惠活动</div>
      <ul class="info-bd">
        <li class="info-item no-border larger-height">
          <span class="label">最短租赁时间</span>
          <span class="line">
            <van-slider v-model="stepThreeData.zdLeaseyh" active-color="#1dbf60" />
          </span>
          <span class="line-text">
            <p class="ui-number">{{stepThreeData.zdLeaseyh}}</p>小时
          </span>
        </li>
        <li class="info-item no-border larger-height">
          <span class="label">最长租赁时间</span>
          <span class="line">
            <van-slider v-model="stepThreeData.zcLeaseyh" active-color="#1dbf60" />
          </span>
          <span class="line-text">
            <p class="ui-number">{{stepThreeData.zcLeaseyh}}</p>小时
          </span>
        </li>
      </ul>
      <div class="exsearch-bd">
        <p class="tisp">请注意：此优惠活动只针对于时租模式</p>
        <van-radio-group v-model="stepThreeData.models">
          <van-radio :name="item.value" class="col cborder" :class="{active:stepThreeData.models===item.value}" v-for="(item,index) in accList" :key="index">{{item.name}}</van-radio>
        </van-radio-group>
      </div>
      <a class="ui-btn" @click="toNext">下一步</a>
    </div>
    <van-datetime-picker class="timer" v-model="stepThreeData.startTime" type="time" :min-hour="0" :max-hour="24" v-if="timer1" @confirm="close" @cancel="close" />
    <van-datetime-picker class="timer" v-model="stepThreeData.endTime" type="time" :min-hour="0" :max-hour="24" v-if="timer2" @confirm="close" @cancel="close" />
  </div>
</template>
<script>
export default {
  name: 'step3',
  props: {
    stepThreeData: Object
  },
  data () {
    return {
      timer1: false,
      timer2: false,
      accList: [{
        name: '租5送5',
        value: '1'
      }, {
        name: '租5送4',
        value: '2'
      }, {
        name: '租4送3',
        value: '3'
      }, {
        name: '租3送2',
        value: '4'
      }, {
        name: '租3送1',
        value: '5'
      }, {
        name: '租2送1',
        value: '6'
      }]
    }
  },
  methods: {
    toNext () {
      this.$emit('stepThree', this.stepThreeData)
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
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/scss/index";
.step3 {
  .game-info {
    background: $color-fff;
    @include border-radius(40px);
    margin: 30px 20px 20px 20px;
    @include box-shdow-gary();
    box-sizing: border-box;
    padding: 0 30px;
    overflow: hidden;
    .info-hd {
      font-size: 28px;
      color: $text-dark;
      height: 100px;
      line-height: 100px;
      border-bottom: 1px solid $line-gary;
      margin-top: 20px;
      .text {
        font-size: 24px;
        color: $text-lgary;
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
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid $line-gary;
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
        .label {
          font-size: 26px;
          color: $text-lgary;
          width: 180px;
          flex: 0 0 auto;
          margin-right: 20px;
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
          font-size: 24px;
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
          border: 1px dashed $line-gary;
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
            color: $brand-yellow;
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
    }
  }
  .timer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .exsearch-bd {
    .tisp {
      text-align: center;
      font-size: 20px;
      color: $brand-yellow;
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
      font-size: 24px;
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
