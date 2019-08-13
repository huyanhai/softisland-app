<!--
 * @Description:sellList
 * @Author: hyh
 * @since: 2019-08-13 21:16:25
 * @lastTime: 2019-08-13 21:41:05
 -->
<template>
  <div class="repeart-item">
    <span class="col">
      <p class="col-l text">货架号：{{mysellList.sellNo}}</p>
      <p class="col-r text">状态：{{mysellList.status}}</p>
    </span>
    <span class="col-box">
      <p class="col-list text"><em class="name">游戏：</em>{{mysellList.gameName}}</p>
      <p class="col-list text"><em class="name">角色名：</em>{{mysellList.roleName}}</p>
      <p class="col-list text"><em class="name">区服：</em>{{mysellList.serverName}}</p>
      <p class="col-list text"><em class="name">累计出租收入：</em>{{mysellList.income}}元</p>
      <p class="col-list text"><em class="name">累计出租次数：</em>{{mysellList.lease}}次</p>
    </span>
    <a class="buy cborder" @click="buy">{{buyText}}</a>
    <a class="edit cborder" @click="edit">编辑货架</a>
  </div>
</template>
<script>
export default {
  name: 'sellList',
  props: {
    mysellList: Object
  },
  data () {
    return {
      buyText: '购买置顶',
      countDownNumber: 150,
      btnDisable: false
    }
  },
  methods: {
    buy (item, index) {
      console.log(item, index)
      if (!this.btnDisable) {
        this.countDown()
      }
    },
    countDown () {
      this.countDownNumber--
      this.btnDisable = true
      const timer = setInterval(() => {
        if (this.countDownNumber > 0) {
          this.btnDisable = true
          this.buyText = `置顶时长剩${this.countDownNumber}分钟`
          this.countDownNumber--
        } else {
          this.countDownNumber = 150
          clearInterval(timer)
        }
      }, 1000)
    },
    edit () { }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
.repeart-item {
  box-sizing: border-box;
  @include border-radius(40px);
  @include box-shdow-gary();
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
    }
  }
  .col-box {
    margin: 10px 0;
    overflow: hidden;
    display: block;
    .col-list {
      width: 100%;
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
    }
  }
  .buy,
  .edit {
    width: 250px;
    height: 60px;
    display: block;
    position: absolute;
    right: 30px;
    bottom: 110px;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
    color: $brand-red;
    @include border-radius(60px);
  }
  .edit {
    bottom: 30px;
  }
}
</style>
