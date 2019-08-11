<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-08 23:15:53
 * @lastTime: 2019-08-10 20:42:53
 -->
<template>
  <div class="portrait">
    <div class="user-portrait">
      <img class="ui-img" :src="portrait" />
    </div>
    <div class="user-info">
      <div class="user-id">187598998898</div>
      <div class="m-col">
        <div class="ui-col col-l">
          <span class="reputation">个人信誉:<img class="ui-img" :src="reputation['masonryV1']" /></span>
        </div>
        <div class="ui-col col-r">
          <span class="grade">号主等级:<i class="ui-icon crown"><em class="leve">LV1</em></i></span>
        </div>
      </div>
    </div>
    <div class="user-data">
      <div class="m-col col-left">
        <div class="money">
          <span class="number">0</span>
          <p class="text">可用余额</p>
        </div>
        <div class="option" @click="toCashOut">
          提现
        </div>
      </div>
      <div class="m-col col-right">
        <div class="money">
          <span class="number">0</span>
          <p class="text">冻结金额</p>
        </div>
        <div class="option" @click="toPay">
          充值
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userInfo',
  data () {
    return {
      portrait:
        'https://hbimg.huabanimg.com/b99b792f7ecb610bf079ce1e33677f64d62f7b52322f6-5tXasY_fw658',
      // 信誉等级
      reputation: {
        masonryV1: require('../assets/images/zukedengjizuan.png'),
        masonryV2: require('../assets/images/zukedengjizuan1.png'),
        masonryV3: require('../assets/images/zukedengjizuan2.png'),
        masonryV4: require('../assets/images/zukedengjizuan3.png'),
        masonryV5: require('../assets/images/zukedengjizuan4.png'),
        goldcrownV1: require('../assets/images/zukedengjijinguan.png'),
        goldcrownV2: require('../assets/images/zukedengjijinguan1.png'),
        goldcrownV3: require('../assets/images/zukedengjijinguan2.png'),
        goldcrownV4: require('../assets/images/zukedengjijinguan3.png'),
        goldcrownV5: require('../assets/images/zukedengjijinguan4.png'),
        startV1: require('../assets/images/zukedengjixing.png'),
        startV2: require('../assets/images/zukedengjixing1.png'),
        startV3: require('../assets/images/zukedengjixing2.png'),
        startV4: require('../assets/images/zukedengjixing3.png'),
        startV5: require('../assets/images/zukedengjixing4.png'),
        crownV1: require('../assets/images/zukedengjiguan.png'),
        crownV2: require('../assets/images/zukedengjiguan1.png'),
        crownV3: require('../assets/images/zukedengjiguan2.png'),
        crownV4: require('../assets/images/zukedengjiguan3.png'),
        crownV5: require('../assets/images/zukedengjiguan4.png')
      },
      // 号主等级
      grade: {
        v1: ''
      }
    }
  },
  methods: {
    toCashOut () {
      this.$router.push({ path: './cashout' })
    },
    toPay () {
      this.$router.push({ path: './pay' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index";
.portrait {
  height: 425px;
  @include border-radius(40px);
  background: rgba($color-fff, 0.95);
  position: relative;
  margin: 230px 30px 30px 30px;
  z-index: 10;
  .user-portrait {
    width: 150px;
    height: 150px;
    @include border-radius(50%);
    background: $brand-orange;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -85px;
    box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
    left: 50%;
    margin-left: -75px;
    .ui-img {
      width: 80%;
      height: 80%;
    }
  }
  .user-info {
    padding: 30px 100px;
    border-bottom: 1px dashed $line-gary;
    margin: 0 30px;
    .user-id {
      text-align: center;
      color: $text-dark;
      font-size: 30px;
      margin-bottom: 30px;
      padding-top: 60px;
      font-family: $pf-med;
    }
    .m-col {
      display: flex;
      .ui-col {
        width: 50%;
        font-size: 24px;
        color: $text-lgary;
        .reputation,
        .grade {
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: $pf-light;
          height: 30px;
          overflow: hidden;
          .ui-img {
            margin-left: 10px;
          }
        }
        .reputation {
          .ui-img {
            width: 34px;
          }
        }
        .grade {
          .ui-icon {
            width: 70px;
            height: 70px;
            display: block;
            position: relative;
            .leve {
              position: absolute;
              font-size: 10px;
              left: 25px;
              font-style: normal;
              top: 21px;
              color: $color-fff;
              font-weight: bold;
              transform: scale(0.6);
            }
          }
          .masonry {
            background: url("../assets/images/dianpudengjizuan.png") no-repeat;
            background-size: 70px 70px;
          }
          .goldcrown {
            background: url("../assets/images/haozhudengjijinguan.png")
              no-repeat;
            background-size: 70px 70px;
          }
          .start {
            background: url("../assets/images/haozhudengjixing.png") no-repeat;
            background-size: 70px 70px;
          }
          .crown {
            background: url("../assets/images/haozhudengjiguan.png") no-repeat;
            background-size: 70px 70px;
          }
        }
      }
    }
  }
  .user-data {
    display: flex;
    margin: 20px 30px 0 30px;
    .m-col {
      width: 50%;
      justify-items: center;
      display: flex;
      flex-direction: column;
      text-align: center;
      .money {
        color: $brand-red;
        font-family: $pf-light;
        margin-bottom: 16px;
        .number {
          font-family: $pf-med;
          font-size: 40px;
          margin-bottom: 10px;
          display: block;
          &::before {
            content: "￥";
            font-size: 24px;
          }
        }
        .text {
          margin: 0;
          font-size: 24px;
          color: $text-lgary;
        }
      }
      .option {
        background: $brand-red;
        width: 180px;
        height: 60px;
        box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
        @include border-radius(60px);
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 26px;
        margin: 0 auto;
      }
    }
  }
}
</style>
