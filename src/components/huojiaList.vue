<!--
 * @Description:出租货架列表
 * @Author: hyh
 * @since: 2019-08-19 20:53:45
 * @lastTime: 2019-08-23 16:47:31
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="huojia-list-c">
    <template v-if="dataSet.length>0">
      <div class="assess-list-c white-bg" v-for="(item,index) in dataSet" :key="index">
        <span class="col-box">
          <p class="col-list text clo-w4"><em class="name">编号：</em>{{item.number}}</p>
          <p class="col-list text clo-w6"><em class="name">购买数量：</em>{{item.buyCount}}</p>
          <p class="col-list text clo-w4"><em class="name">支付金额：</em>{{item.payMoney}}</p>
          <p class="col-list text clo-w6"><em class="name">购买日期：</em>{{item.payTime}}</p>
        </span>
      </div>
      <loadMore :showLoad="showLoad" />
    </template>
    <div class="no-data" v-else>
      <i class="iconfont icon-emptydata"></i>
      <p class="text">您还没有购买过出租货架<br>17君已默认为您免费送上了3个货架<br>购买出租货架，可以增加您发布账号的个数</p>
    </div>
  </div>
</template>

<script>
import loadMore from './loadMore'
export default {
  name: 'huojiaList',
  props: {
    dataSet: Array,
    showLoad: Boolean
  },
  components: {
    loadMore
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";
.huojia-list-c {
  box-sizing: border-box;
  @include border-radius(40px);
  overflow: hidden;
  display: block;
  position: relative;
  margin-bottom: 30px;
  .assess-list-c {
    margin: 30px;
    padding: 30px;
    border-radius: 40px;
    position: relative;
    .col {
      display: flex;
      height: 60px;
      line-height: 60px;
      font-size: 24px;
      color: $text-dark;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $line-gary;
      .col-r {
        color: $text-lgary;
      }
      .text {
        margin: 0;
        width: 50%;
        flex: 1 0 auto;
        &.al-r {
          text-align: right;
        }
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
  .buy {
    color: $brand-red;
  }
  .edit {
    bottom: 30px;
  }
  .col-box {
    margin: 10px 0;
    overflow: hidden;
    display: block;
    position: relative;
    clear: both;
    .col-list {
      width: 100%;
      font-size: 24px;
      color: $text-dark;
      line-height: 60px;
      height: 60px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      margin: 0;
      &.clo-w6 {
        width: 60%;
        float: left;
      }
      &.clo-w4 {
        width: 40%;
        float: left;
      }
      .name {
        color: $text-lgary;
        font-style: normal;
      }
    }

    .line {
      border-bottom: 1px solid $line-gary;
      margin: 20px 0;
      height: 1px;
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
    display: block;
    margin-bottom: 20px;
  }
  .text {
    font-size: 24px;
    line-height: 40px;
    color: $text-lgary;
    display: block;
  }
}
</style>
