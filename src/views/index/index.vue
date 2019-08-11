<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-08 14:16:02
 * @lastTime: 2019-08-10 20:46:30
 -->
<template>
  <div class="pages page-index">
    <div class="ui-pagebg"></div>
    <user-info />
    <div class="acc-data-info">
      <ul class="ui-repeart">
        <li class="repeart-item">
          <span class="ui-number">320</span>
          <p class="text">在架商品数（件）</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">100</span>
          <p class="text">出租中账号(个）</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">20</span>
          <p class="text">今日租客（户）</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">5100.00</span>
          <p class="text">今日收入(元）</p>
        </li>
      </ul>
    </div>
    <div class="equity-list">
      <ul class="ui-repeart">
        <li class="repeart-item">
          <span class="icon-bg">
            <i class="iconfont ui-icon icon-shanghuliebiao"></i>
          </span>
          <p class="text" v-if="accInfo.isMerchant">商户剩余时长：<em class="red">15</em> 天</p>
          <p class="text" v-else>成为商户立享无限上架等特权</p>
          <a class="link cborder">立即开通</a>
        </li>
        <li class="repeart-item">
          <span class="icon-bg">
            <i class="iconfont ui-icon icon-tousu"></i>
          </span>
          <p class="text" v-if="accInfo.isComplaint">您存在账号投诉<em class="red">(27条)</em></p>
          <p class="text" v-else>您的账号尚未存在投诉情况</p>
          <a class="link cborder">前往查看</a>
        </li>
        <li class="repeart-item">
          <span class="icon-bg">
            <i class="iconfont ui-icon icon-naozhongshijianjishitixingxianshitongzhimianxing"></i>
          </span>
          <p class="text" v-if="accInfo.isRank">限时货架（货架：12312312)<br>剩余时长：<em class="red">15</em> 天</p>
          <p class="text" v-else>开通限时货架排名立即靠前</p>
          <a class="link cborder">立即开通</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import userInfo from '@/components/userInfo.vue'
export default {
  name: 'Index',
  data () {
    return {
      accInfo: {
        isMerchant: true,
        isComplaint: false,
        isRank: true
      }
    }
  },
  components: {
    userInfo
  },
  created () {
    this.$emit('footer', true)
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-index {
  overflow: hidden;
  .ui-pagebg {
    height: 300px;
    width: 100%;
    @include linder-top-bottom(#fa0049, #ff6f61);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    &:before {
      background-image: url("./assets/images/index_texture.png");
      background-size: 95px 56px;
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
      z-index: 1;
    }
  }
  .acc-data-info {
    box-sizing: border-box;
    @include border-radius(40px);
    background: rgba($color-fff, 0.95);
    padding: 15px 30px;
    margin: 0 30px 20px 30px;
    .ui-repeart {
      overflow: hidden;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        border-bottom: 1px solid $line-gary;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        height: calc(100% - 30px);
        border-right: 1px solid $line-gary;
        left: 50%;
        transform: translateX(-50%);
        top: 15px;
      }
      .repeart-item {
        float: left;
        width: 50%;
        text-align: center;
        margin: 30px 0 30px 0;
        .ui-number {
          font-size: 30px;
          color: $text-dark;
          font-family: $pf-bold;
          display: block;
          margin-bottom: 20px;
        }
        .text {
          font-size: 24px;
          color: $text-lgary;
          font-family: $pf-light;
          margin: 0;
        }
      }
    }
  }
  .equity-list {
    margin: 0 30px;
    .ui-repeart {
      display: flex;
      flex-direction: column;
      .repeart-item {
        box-sizing: border-box;
        @include border-radius(40px);
        background: rgba($color-fff, 0.95);
        padding: 0px 30px;
        justify-content: space-between;
        align-items: center;
        display: flex;
        box-sizing: border-box;
        margin-bottom: 20px;
        height: 120px;
        .icon-bg {
          width: 70px;
          height: 70px;
          line-height: 70px;
          background: $brand-yellow;
          @include border-radius(50%);
          display: block;
          text-align: center;
          color: $color-fff;
          flex: 0 0 auto;
          .ui-icon {
            font-size: 36px;
          }
        }
        .text {
          color: $text-dark;
          font-size: 24px;
          flex: 1 0 auto;
          margin-left: 30px;
          font-family: $pf-reg;
          line-height: 40px;
          .red {
            color: $brand-red;
            font-style: normal;
          }
        }
        .link {
          display: block;
          width: 150px;
          height: 50px;
          @include border-radius(50px);
          font-size: 24px;
          color: $brand-red;
          text-align: center;
          line-height: 50px;
          flex: 0 0 auto;
        }
      }
    }
  }
}
</style>
