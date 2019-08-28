<!--
 * @Description:租赁评价列表
 * @Author: hyh
 * @since: 2019-08-19 20:53:45
 * @lastTime: 2019-08-27 17:50:46
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div>
    <template v-if="dataSet.length>0">
      <div class="assess-list-c" v-for="(item,index) in dataSet" :key="index" @click="toApply">
        <span class="col">
          <p class="col-l text"><em class="name">订单号：</em>{{item.orderNo}}</p>
          <p class="col-r text"><em class="name">货架号：</em>{{item.goodsNo}}</p>
        </span>
        <span class="col-box">
          <p class="col-list text col-row"><em class="name">租客：</em>{{item.custom}}</p>
          <p class="col-list text col-row"><em class="name">评价时间：</em>{{item.time}}</p>
          <p class="col-list text col-row"><em class="name">评论星级：</em><i class="iconfont icon-xingji" v-for="(li,index) in item.start" :key="index"></i></p>
        </span>
        <a class="buy cborder">忽略不评</a>
        <a class="edit red-btn" @click="goReply">回复评价</a>
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
  name: 'assess',
  props: {
    dataSet: Array,
    showLoad: Boolean
  },
  components: {
    loadMore
  },
  methods: {
    goReply () {
      this.$router.push({
        path: '/account/reply'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index";
.assess-list-c {
  box-sizing: border-box;
  @include border-radius(40px);
  padding: 20px 30px;
  background: $color-fff;
  overflow: hidden;
  display: block;
  position: relative;
  margin-bottom: 30px;
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
  .col {
    display: flex;
    height: 60px;
    line-height: 60px;
    font-size: 26px;
    color: $text-dark;
    justify-content: space-between;
    align-items: center;
    .col-l,
    .col-r {
      .name {
        color: $text-lgary;
        font-style: normal;
      }
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
  .col-r {
    flex: 1 0 auto;
    width: 50%;
  }
  .col-r {
    text-align: right;
  }
  .col-box {
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
      align-items: center;
      .iconfont {
        font-size: 40px;
        margin-right: 4px;
        color: $brand-yellow;
        &.color-green {
          color: $brand-green;
        }
      }
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
    margin-bottom: 30px;
  }
  .text {
    font-size: 26px;
    line-height: 40px;
    color: $text-lgary;
  }
}
</style>
