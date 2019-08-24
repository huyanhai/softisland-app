<!--
 * @Description:financeList
 * @Author: hyh
 * @since: 2019-08-19 20:53:45
 * @lastTime: 2019-08-19 22:05:17
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
          <p class="col-list text clo-w6"><em class="name">发生日期：</em>{{item.time}}</p>
          <p class="col-list text clo-w4"><em class="name">总资产：</em>{{item.totalMoney}}元</p>
        </span>
        <span :class="['price',item.price > 0 ? 'price-add' : '']">{{item.price}}</span>
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
      font-size: 24px;
      color: $text-dark;
      line-height: 60px;
      &.col-row {
        width: 100%;
      }
      &.clo-w6 {
        width: 60%;
      }
      &.clo-w4 {
        width: 40%;
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
    bottom: 80px;
    font-size: 30px;
    color: $text-dark;
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
    font-size: 24px;
    line-height: 40px;
    color: $text-lgary;
  }
}
</style>
