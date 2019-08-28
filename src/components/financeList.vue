<!--
 * @Description:financeList
 * @Author: hyh
 * @since: 2019-08-19 20:53:45
 * @lastTime: 2019-08-27 18:05:33
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div>
    <template v-if="dataSet.length>0">
      <div class="finance-list-c" v-for="(item,index) in dataSet" :key="index">
        <span class="col">
          <p class="col-l text">货架号：{{item.desc}}</p>
        </span>
        <span class="col-box">
          <p class="col-list text col-row"><em class="name">交易类型：</em>{{item.payType}}</p>
          <p class="col-list text col-row"><em class="name">订单编号：</em>{{item.roleName}}</p>
          <p class="col-list text col-row"><em class="name">发生日期：</em>{{item.time}}</p>
          <p class="col-list text col-row"><em class="name">总资产：</em><em class="bold">{{item.totalMoney}}元</em></p>
        </span>
        <span :class="['price',item.price > 0 ? 'price-add' : '']">{{item.price > 0 ? '+'+item.price : item.price}}</span>
      </div>
      <loadMore :showLoad="showLoad" />
    </template>
    <div class="no-data" v-else>
      <i class="iconfont icon-emptydata"></i>
      <p class="text">暂无数据</p>
    </div>
  </div>
</template>

<script>
import loadMore from './loadMore'
export default {
  name: 'financeList',
  props: {
    dataSet: Array,
    showLoad: Boolean
  },
  components: {
    loadMore
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index";
.finance-list-c {
  box-sizing: border-box;
  @include border-radius(40px);
  padding: 20px 30px;
  background: $color-fff;
  overflow: hidden;
  display: block;
  position: relative;
  margin-bottom: 30px;
  .col {
    display: flex;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px dashed $line-gary;
    font-size: 26px;
    color: $text-dark;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    .text {
      margin: 0;
      width: 50%;
      flex: 1 0 auto;
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
      font-size: 26px;
      color: $text-dark;
      line-height: 60px;
      .bold {
        font-weight: bold;
        font-style: normal;
        font-size: 28px;
      }
      &.col-row {
        width: 100%;
      }
      &.clo-w7 {
        width: 65%;
      }
      &.clo-w6 {
        width: 60%;
      }
      &.clo-w4 {
        width: 40%;
        text-align: right;
      }
      &.clo-w3 {
        width: 35%;
        text-align: right;
      }
      &.text {
        margin: 0;
      }
      .name {
        color: $text-lgary;
        font-style: normal;
      }
    }
  }
  .price {
    position: absolute;
    right: 20px;
    bottom: 40px;
    font-size: 32px;
    color: $text-dark;
    font-weight: bold;
    &.price-add {
      color: $brand-orange;
    }
  }
}
.no-data {
  text-align: center;
  margin-top: 40px;
  .iconfont {
    font-size: 200px;
    color: $text-lgary;
    margin-bottom: 30px;
  }
  .text {
    font-size: 26px;
    line-height: 40px;
    color: $text-lgary;
  }
}
</style>
