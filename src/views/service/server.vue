<!--
 * @Description:增值服务
 * @Author: hyh
 * @since: 2019-08-20 21:35:38
 * @lastTime: 2019-08-28 11:33:01
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-add-server">
    <head-bar :barTitle="barTitle"></head-bar>
    <tabMenu :tabs="tabs" @switchTab="switchTab" />
    <template v-if="tabPage===1">
      <merchant @dataSubmit="merchantSubmit" />
    </template>
    <template v-if="tabPage===2">
      <shop @dataSubmit="shopSubmit" />
    </template>
    <template v-if="tabPage===3">
      <ad />
    </template>
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import tabMenu from '@/components/tabMenu'
import merchant from './components/merchant'
import shop from './components/shop'
import ad from './components/ad'
export default {
  name: 'addserver',
  data () {
    return {
      barTitle: '增值服务',
      tabs: [
        { text: '商户', value: 1 },
        { text: '店铺', value: 2 },
        { text: '广告服务', value: 3 }
      ],
      tabPage: 1
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar,
    tabMenu,
    merchant,
    shop,
    ad
  },
  methods: {
    switchTab (e) {
      this.tabPage = e.value
    },
    merchantSubmit (e) {
      console.log('商户提交的数据')
      console.log(e)
    },
    shopSubmit (e) {
      console.log('店铺提交的数据')
      console.log(e)
    }
  }

}
</script>

<style>
</style>
<style lang="scss">
@import "../../assets/scss/index";
.page-add-server {
  padding-bottom: 0 !important;
  .tabs {
    margin-top: 30px !important;
    margin-bottom: 30px !important;
    &.isFixed {
      position: fixed;
      z-index: 100;
      top: 120px;
      margin: 0 30px;
    }
  }
  .user-info {
    margin: 0 30px 30px 30px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    padding: 30px;
    .user-portrait {
      width: 110px;
      height: 110px;
      @include border-radius(50%);
      background: $brand-orange;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 4px rgba($shadow-red, 0.35);
      flex: 0 0 auto;
      display: flex;
      .ui-img {
        width: 80%;
        height: 80%;
      }
    }
    .col-r {
      flex: 1 0 auto;
      display: flex;
      width: 50%;
      margin-left: 20px;
      flex-direction: column;
      .b-text {
        font-size: 28px;
        color: $text-dark;
      }
      .text {
        margin: 0;
        font-size: 26px;
        color: $text-dark;
        margin-top: 20px;
      }
    }
  }
  .card-box {
    .card {
      margin: 0px 30px 30px 30px;
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
  .exsearch-bd {
    margin: 0 40px 20px 40px;
    .van-radio-group {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
    }
    .col {
      width: 260px;
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
      display: flex;
      justify-content: center;
      align-items: center;
      &.active {
        color: $brand-red;
        border-color: $brand-red;
        background: none;
        .van-radio__label {
          color: $brand-red;
        }
      }
      .van-radio__icon {
        // display: none;
        height: 16px;
        font-size: 26px;
        line-height: 16px;
        display: flex;
        .iconfont {
          font-size: 16px;
        }
      }
      .van-radio__label {
        text-align: center;
      }
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
  .tips {
    margin: 40px 30px;
    font-size: 22px;
    color: $text-lgary;
    line-height: 40px;
  }
}
</style>
