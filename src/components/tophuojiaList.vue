<!--
 * @Description:置顶货架列表
 * @Author: hyh
 * @since: 2019-08-19 20:53:45
 * @lastTime: 2019-08-27 18:21:00
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="huojia-list-c">
    <template v-if="dataSet.length>0">
      <div class="assess-list-c white-bg" v-for="(item,index) in dataSet" :key="index">
        <span class="col">
          <p class="col-l text">货架号：{{item.goodsNo}}</p>
          <p class="col-r text">{{item.time}}</p>
        </span>
        <span class="col-box">
          <p class="col-list text"><em class="name">购买类型：</em>{{item.buyType}}</p>
          <p class="col-list text"><em class="name">购买时间：</em>{{item.buyTimes}}</p>
          <p class="col-list text"><em class="name">到期时间：</em>{{item.expire}}</p>
          <i class="iconfont icon-fuwuzhong ui-icon-zt color-red" v-if="item.orderType==='doing'"></i>
          <i class="iconfont icon-daoqi ui-icon-zt" v-if="item.orderType==='done'"></i>
        </span>
        <span class="col-ft">
          <a class="link red-btn">删除喇叭</a>
          <a class="link cborder">我要续费</a>
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
    padding: 20px 30px 0 30px;
    border-radius: 40px;
    position: relative;
    .col {
      display: flex;
      height: 60px;
      line-height: 60px;
      font-size: 26px;
      color: $text-dark;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px dashed $line-gary;
      .col-r {
        color: $text-lgary;
        text-align: right;
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
    .col-ft {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 120px;
      border-top: 1px dashed $line-gary;
      .link {
        box-sizing: border-box;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: $color-fff;
        font-size: 26px;
        width: 180px;
        border-radius: 60px;
        margin: 0 20px;
        &.cborder {
          color: $brand-red;
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
    font-size: 26px;
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
    .ui-icon-zt {
      position: absolute;
      font-size: 160px;
      right: 30px;
      bottom: -10px;
      transform: rotate(-30deg);
      color: $text-gary;
      &.color-red {
        color: $brand-orange;
      }
    }
    .col-list {
      width: 100%;
      font-size: 26px;
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
      border-bottom: 1px dashed $line-gary;
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
    font-size: 26px;
    line-height: 40px;
    color: $text-lgary;
    display: block;
  }
}
</style>
