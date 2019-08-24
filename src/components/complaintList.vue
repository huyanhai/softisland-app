<!--
 * @Description:投诉申述列表
 * @Author: hyh
 * @since: 2019-08-19 20:53:45
 * @lastTime: 2019-08-21 21:17:05
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div>
    <template v-if="dataSet.length>0">
      <div class="complain-list-c" v-for="(item,index) in dataSet" :key="index" @click="toComplaint(item)">
        <span class="col">
          <p class="col-l text">订单号：{{item.orderNo}}</p>
          <p class="col-r text">货架号：{{item.goodsNo}}</p>
        </span>
        <span class="col-box">
          <p class="col-list text col-row"><em class="name">投诉来源：</em>{{item.source}}</p>
          <p class="col-list text col-row"><em class="name">投诉时间：</em>{{item.time}}</p>
          <p class="col-list text col-row"><em class="name">投诉类型：</em>{{item.type}}</p>
          <p class="col-list text col-row"><em class="name">投诉处理：</em>{{item.handle}}</p>
        </span>
        <a class="edit red-btn" @click="toComplaint(item)" v-if="item.status === 'isComplate'">我要申述</a>
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
  name: 'complaintList',
  props: {
    dataSet: Array,
    showLoad: Boolean
  },
  components: {
    loadMore
  },
  methods: {
    toComplaint (item) {
      let status = item.status
      let type = ''
      if (status === 'isComplate') {
        type = 'edit'
      } else {
        type = 'detail'
      }
      this.$router.push({
        path: '/account/complaint',
        name: 'complaint',
        params: {
          type: type
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index";
.complain-list-c {
  box-sizing: border-box;
  @include border-radius(40px);
  padding: 0 20px;
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
  .col {
    display: flex;
    height: 60px;
    line-height: 60px;
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
      font-size: 24px;
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
    margin-bottom: 30px;
  }
  .text {
    font-size: 24px;
    line-height: 40px;
    color: $text-lgary;
  }
}
</style>
