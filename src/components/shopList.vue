<!--
 * @Description: 店铺列表数据
 * @Author: hyh
 * @since: 2019-08-22 21:44:14
 * @lastTime: 2019-08-22 22:04:40
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="shop-list-c">
    <div class="__hd">
      <slot name="__hd">
        <span class="col col-1">日期</span>
        <span class="col col-3">店铺访客数</span>
        <span class="col col-3">商品浏览量</span>
        <span class="col col-3">订单成交数</span>
      </slot>
    </div>
    <div class="__bd">
      <slot name="__bd">内容</slot>
    </div>
    <div class="__ft">
      <slot name="__ft">
        <loadMore v-if="showMore" />
      </slot>
    </div>
  </div>
</template>

<script>
import loadMore from './loadMore'
export default {
  name: 'shopList',
  props: {
    showMore: {
      type: Boolean,
      default: true
    }
  },
  components: {
    loadMore
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";
.shop-list-c {
  .__hd {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    .col {
      width: 20%;
      font-size: 26px;
      color: $text-lgary;
      text-align: center;
      &:first-child {
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }
      &.col-4 {
        width: 40%;
      }
      &.col-3 {
        width: 30%;
      }
    }
  }
  .__bd {
    .ui-repeart {
      display: block !important;
      margin: 0;
      .repeart-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        flex-direction: row;
        width: 100%;
        margin: 0;
        border-bottom: 1px dashed $line-gary;
        .col {
          width: 20%;
          font-size: 26px;
          color: $text-lgary;
          text-align: center;
          &:first-child {
            text-align: left;
          }
          &:last-child {
            text-align: right;
          }
          &.col-4 {
            width: 40%;
          }
          &.col-3 {
            width: 30%;
          }
        }
      }
    }
  }
}
</style>
