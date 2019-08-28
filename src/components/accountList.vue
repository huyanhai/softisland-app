<!--
 * @Description:accountList
 * @Author: hyh
 * @since: 2019-08-19 20:53:45
 * @lastTime: 2019-08-27 17:29:51
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div>
    <template v-if="dataSet.length>0">
      <div class="account-list-c" v-for="(item,index) in dataSet" :key="index" @click="toApply">
        <span class="col">
          <p class="col-l text">货架号：{{item.no}}</p>
          <p class="col-r text">{{item.time}}</p>
        </span>
        <span class="col-box">
          <p class="col-list text col-row"><em class="name">游戏名称：</em>{{item.gameName}}</p>
          <p class="col-list text col-row"><em class="name">游戏账号：</em>{{item.gameAcc}}</p>
          <p class="col-list text col-row"><em class="name">游戏区服：</em>{{item.gameServer}}</p>
          <p class="line"></p>
          <p class="col-list text col-row"><em class="name">补偿金额：</em>{{item.status}}</p>
          <i class="iconfont icon-shenhezhong color-red" v-if="item.status==='审核中'"></i>
          <i class="iconfont icon-yichuli color-green" v-if="item.status==='已处理'"></i>
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
  name: 'accountList',
  props: {
    dataSet: Array,
    showLoad: Boolean
  },
  components: {
    loadMore
  },
  methods: {
    toApply () {
      this.$router.push({
        path: '/account/apply',
        name: 'apply',
        params: {
          type: 'detail'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index";
.account-list-c {
  box-sizing: border-box;
  @include border-radius(40px);
  padding: 0 30px;
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
    font-size: 28px;
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
    width: 70%;
    font-weight: normal;
    color: $text-lgary;
    font-size: 26px;
  }
  .col-r {
    text-align: right;
  }
  .col-box {
    margin: 10px 0;
    overflow: hidden;
    display: block;
    position: relative;
    .iconfont {
      position: absolute;
      font-size: 160px;
      right: 40px;
      bottom: 100px;
      transform: rotate(-30deg);
      &.color-green {
        color: $text-dark;
      }
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
