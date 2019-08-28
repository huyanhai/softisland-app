<!--
 * @Description:sellList
 * @Author: hyh
 * @since: 2019-08-13 21:16:25
 * @lastTime: 2019-08-28 16:43:19
 -->
<template>
  <div class="sell-list-c">
    <span class="col __bold">
      <p class="col-l text">货架号：{{mysellList.sellNo}}</p>
      <p class="col-r text al-r">状态：{{mysellList.status}}</p>
    </span>
    <span class="col-box">
      <p class="col-list text"><em class="name">游戏：</em>{{mysellList.gameName}}</p>
      <p class="col-list text align-r"><em class="name">角色名：</em>{{mysellList.roleName}}</p>
      <p class="col-list text"><em class="name">区服：</em>{{mysellList.serverName}}</p>
      <p class="col-list text"><em class="name">累计出租收入：</em>{{mysellList.income}}元</p>
      <p class="col-list text"><em class="name">累计出租次数：</em>{{mysellList.lease}}次</p>
    </span>
    <a class="buy red-btn" @click="buy" v-html="buyText"></a>
    <a class="edit red-btn" @click="edit">编辑货架</a>
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
      this.$router.push({ path: './buy-top' })
    },
    countDown () {
      this.countDownNumber--
      this.btnDisable = true
      const timer = setInterval(() => {
        if (this.countDownNumber > 0) {
          this.btnDisable = true
          this.buyText = `<p class="zd">置顶时长<em class="sm-txt">剩${this.countDownNumber}分钟</em></p>`
          this.countDownNumber--
        } else {
          this.countDownNumber = 150
          clearInterval(timer)
        }
      }, 1000)
    },
    edit () {
      this.$router.push({ path: '/my/editsell' })
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/index";
.sell-list-c {
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
    .text {
      margin: 0;
      width: 50%;
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
      width: 100%;
      float: left;
      font-size: 26px;
      color: $text-dark;
      line-height: 60px;
      &:nth-child(1),
      &:nth-child(2) {
        width: 50%;
      }
      &.align-r {
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
    background: $brand-red;
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
  .edit {
    bottom: 30px;
  }
}
</style>
