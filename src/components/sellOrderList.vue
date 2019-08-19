<!--
 * @Description:sellOrderList
 * @Author: hyh
 * @since: 2019-08-13 21:16:25
 * @lastTime: 2019-08-17 21:35:15
 -->
<template>
  <div class="sell-order-c" @click="goOrderDetail">
    <span class="col">
      <p class="col-l text">订单号：{{mysellList.orderNo}}</p>
      <p class="col-r text al-r">日期：{{mysellList.time}}</p>
    </span>
    <span class="col-box">
      <p class="col-list text"><em class="name">订购时长：</em>{{mysellList.matchTime}}小时</p>
      <p class="col-list text" :class="mysellList.orderStatus"><em class="name">订单状态：</em>{{stutas[mysellList.orderStatus]}}</p>
      <p class="col-list text"><em class="name">订单租金：</em>{{mysellList.orderMoney}}元</p>
      <p class="col-list text"><em class="name">订单押金：</em>{{mysellList.orderDeposit}}元</p>
    </span>
  </div>
</template>
<script>
export default {
  name: 'sellOrderList',
  props: {
    mysellList: Object
  },
  data () {
    return {
      stutas: {
        doing: '进行中',
        isCancel: '已撤单',
        complainting: '投诉中',
        complete: '已完成'
      }
    }
  },
  methods: {
    goOrderDetail () {
      this.$router.push({ path: '/my/order-detail' })
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/index";
.sell-order-c {
  box-sizing: border-box;
  @include border-radius(40px);
  padding: 0 20px;
  background: $color-fff;
  overflow: hidden;
  display: block;
  position: relative;
  margin-bottom: 30px;
  .col {
    display: flex;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid $line-gary;
    font-size: 24px;
    color: $text-dark;
    justify-content: space-between;
    align-items: center;
    .text {
      margin: 0;
      width: 50%;
      &.al-r {
        text-align: right;
      }
    }
  }
  .col-box {
    margin: 10px 0;
    overflow: hidden;
    display: block;
    .col-list {
      width: 50%;
      float: left;
      font-size: 24px;
      color: $text-dark;
      line-height: 60px;
      &:nth-child(1),
      &:nth-child(2) {
        width: 50%;
      }
      &.text {
        margin: 0;
      }
      .name {
        color: $text-lgary;
        font-style: normal;
      }
      &.isCancel {
        color: $text-gary;
      }
      &.complainting {
        color: $brand-orange;
      }
      &.complete {
        color: $brand-green;
      }
    }
  }
  .buy,
  .edit {
    width: 180px;
    height: 60px;
    position: absolute;
    right: 30px;
    bottom: 110px;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
    color: $color-fff;
    background: $brand-red;
    @include border-radius(60px);
    display: flex;
    align-items: center;
    justify-content: center;
    .zd {
      line-height: initial;
      margin: 0;
      line-height: 26px;
      .sm-txt {
        font-size: 20px;
        display: block;
        font-style: normal;
      }
    }
  }
  .edit {
    bottom: 30px;
  }
}
</style>
