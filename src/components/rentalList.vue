<!--
 * @Description:rentalList
 * @Author: hyh
 * @since: 2019-08-13 21:16:25
 * @lastTime: 2019-08-27 17:18:50
 -->
<template>
  <div class="rental-list-c">
    <span class="col">
      <p class="col-l text">游戏名称：{{mysellList.gameName}}</p>
      <p class="col-r text al-r">{{mysellList.time}}</p>
    </span>
    <span class="col-box">
      <p class="col-list text"><em class="name">游戏账号：</em>{{mysellList.gameAcc}}</p>
      <p class="col-list text"><em class="name">角色名称：</em>{{mysellList.roleName}}</p>
      <p class="col-list text"><em class="name">游戏区服：</em>{{mysellList.gameServer}}</p>
      <p class="line"></p>
      <p class="col-list text color-red"><em class="name">当前状态：</em>{{status[mysellList.status]}}</p>
      <p class="col-list text"><em class="name">日期：</em>{{mysellList.date}}</p>
      <p class="col-list text"><em class="name">分成比例：</em>{{mysellList.ratio}}</p>
    </span>
    <a class="edit cborder active" @click="leveMsg">合租留言</a>
  </div>
</template>
<script>
export default {
  name: 'rentalList',
  props: {
    mysellList: Object
  },
  data () {
    return {
      status: {
        saleing: '出售中',
        waitSale: '待租'
      }
    }
  },
  methods: {
    leveMsg () {
      this.$router.push({ path: '/my/leave-message' })
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/index";
.rental-list-c {
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
    .text {
      margin: 0;
      width: 50%;
      &.al-r {
        text-align: right;
        color: $text-lgary;
        font-weight: normal;
      }
    }
  }
  .col-box {
    margin: 10px 0;
    overflow: hidden;
    display: block;
    clear: both;
    .line {
      border-bottom: 1px dashed $line-gary;
      margin: 20px 0;
      height: 1px;
    }
    .col-list {
      width: 100%;
      font-size: 26px;
      color: $text-dark;
      line-height: 60px;
      overflow: hidden;
      height: 60px;
      &:nth-child(1),
      &:nth-child(2) {
        width: 100%;
      }
      &.text {
        margin: 0;
      }
      .name {
        color: $text-lgary;
        font-style: normal;
      }

      &.color-red {
        color: $brand-orange;
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
    color: $brand-red;
    @include border-radius(60px);
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
      &::after {
        display: block;
      }
    }
    &::after {
      content: "";
      width: 14px;
      height: 14px;
      background: $brand-red;
      @include border-radius(8px);
      position: absolute;
      right: 0;
      top: 0;
      display: none;
    }
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
