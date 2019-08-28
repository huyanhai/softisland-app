<!--
 * @Description:喇叭服务列表
 * @Author: hyh
 * @since: 2019-08-19 20:53:45
 * @lastTime: 2019-08-27 18:14:37
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="laba-list-c">
    <template v-if="dataSet.length>0">
      <div class="assess-list-c white-bg" v-for="(item,index) in dataSet" :key="index">
        <span class="col">
          <p class="col-l text">货架号：{{item.goodsNo}}</p>
          <p class="col-r text">{{item.time}}</p>
        </span>
        <span class="col-box">
          <p class="col-list text col-row"><em class="name">购买次数：</em>{{item.buyTimes}}次</p>
          <p class="col-list text col-row"><em class="name">剩余次数：</em>{{item.hasTimes}}次</p>
          <p class="col-list text col-row"><em class="name">喇叭内容：</em><em class="con">{{item.labaText}}</em></p>
        </span>
        <a class="buy cborder">删除喇叭</a>
        <a class="edit red-btn">喇叭续费</a>
      </div>
      <loadMore :showLoad="showLoad" />
    </template>
    <div class="no-data" v-else>
      <i class="iconfont icon-emptydata"></i>
      <p class="text">您还没有购买过喇叭服务<br>购买喇叭后可以增加您店铺的浏览量</p>
    </div>
  </div>
</template>

<script>
import loadMore from './loadMore'
export default {
  name: 'labaList',
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

<style lang="scss" scoped>
@import "../assets/scss/index";
.laba-list-c {
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
      font-size: 26px;
      color: $text-dark;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px dashed $line-gary;
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
    bottom: 120px;
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
    bottom: 40px;
  }

  .col-r {
    flex: 1 0 auto;
    width: 50%;
  }
  .col-r {
    text-align: right;
  }
  .col-box {
    margin: 10px 0;
    overflow: hidden;
    display: block;
    position: relative;

    .col-list {
      width: 100%;
      font-size: 26px;
      color: $text-dark;
      line-height: 60px;
      height: 60px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: baseline;
      .iconfont {
        font-size: 40px;
        margin-right: 4px;
        color: $brand-yellow;
        &.color-green {
          color: $brand-green;
        }
      }
      &.col-row {
        width: 60%;
        display: flex;
        overflow: initial;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: initial;
        max-height: 80px;
        .name {
          width: 120px;
          flex: 0 0 auto;
        }
        .con {
          flex: 1 0 auto;
          width: 50%;
          font-style: normal;
          overflow: hidden;
          word-wrap: break-word;
          white-space: normal;
          line-height: 40px;
        }
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
