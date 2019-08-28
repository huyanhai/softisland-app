<!--
 * @Description:订单详情
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-28 11:30:13
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="buy-top">
    <head-bar :barTitle="barTitle">
      <div class="search-btn" slot="right">
        <a class="ui-cancel" @click="complaint">投诉</a>
      </div>
    </head-bar>
    <div class="card-box">
      <card>
        <template slot="label-name">
          订单详情
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">订单编号</span>
              <input class="ui-input" type="text" disabled name="" v-model="orderNo" placeholder="">
            </li>
            <li class="info-item">
              <span class="label">租客信息</span>
              <input class="ui-input" type="text" disabled name="" v-model="tenantInfo" placeholder="">
              <a class="pro-ab-link" @click="joinBlack">拉入黑名单</a>
            </li>
            <li class="info-item">
              <span class="label">订单租金</span>
              <input class="ui-input" type="text" disabled name="" v-model="orderPay" placeholder="">
            </li>
            <li class="info-item">
              <span class="label">开始时间</span>
              <input class="ui-input" type="text" disabled name="" v-model="beginTime" placeholder="">
            </li>
            <li class="info-item">
              <span class="label">结束时间</span>
              <input class="ui-input" type="text" disabled name="" v-model="endTime" placeholder="">
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          账号信息
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">游戏货架</span>
              <input class="ui-input" type="text" disabled name="" v-model="gameGoods" placeholder="">
            </li>
            <li class="info-item">
              <span class="label">游戏名称</span>
              <input class="ui-input" type="text" disabled name="" v-model="gameName" placeholder="">
            </li>
            <li class="info-item">
              <span class="label">游戏区服</span>
              <input class="ui-input" type="text" disabled name="" v-model="gameServer" placeholder="">
            </li>
            <li class="info-item">
              <span class="label">角色名称</span>
              <input class="ui-input" type="text" disabled name="" v-model="roleName" placeholder="">
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          游戏截图
        </template>
        <template slot="card-bd">
          <ul class="game-pic">
            <li class="pic-item" v-for="(item,index) in gamePic" :key="index" @click="showImg(item)">
              <img class="ui-img" :src="item.src" />
            </li>
          </ul>
        </template>
      </card>
    </div>
    <div class="tips">
      温馨提示：<br> 如果账号在出租中，发现租号方使用了外挂或者有违反约定的行为，您可以点击投诉
    </div>
    <div class="pic-show" v-if="showLayer">
      <img class="ui-img" :src="showingPic" />
    </div>
    <van-overlay :show="showLayer" z-index="1000" @click="hide" />
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import card from '@/components/card'
export default {
  name: 'orderDetail',
  data () {
    return {
      barTitle: '订单详情',
      orderNo: '154011547',
      tenantInfo: '14536722322',
      orderPay: '14.24元',
      beginTime: '2019-07-05 13:00:02',
      endTime: '2019-07-05 13:00:02',
      gameGoods: '65448441',
      gameName: '魔兽争霸',
      gameServer: ' QQ手游-醉生梦死',
      roleName: '樱桃小丸子',
      gamePic: [
        { src: 'https://hbimg.huabanimg.com/475cad753abe338f7585d3beb38b8f8bb8fe392a12652-tMg10B_fw658' },
        { src: 'https://hbimg.huabanimg.com/475cad753abe338f7585d3beb38b8f8bb8fe392a12652-tMg10B_fw658' },
        { src: 'https://hbimg.huabanimg.com/475cad753abe338f7585d3beb38b8f8bb8fe392a12652-tMg10B_fw658' }
      ],
      showingPic: '',
      showLayer: false
    }
  },
  components: {
    headBar,
    card
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    complaint () {
      this.$router.push({ path: '/blacklist/complain' })
    },
    joinBlack () {
      this.$router.push({ path: '/blacklist/join-blacklist' })
    },
    showImg (e) {
      this.showingPic = e.src
      this.showLayer = true
    },
    hide () {
      this.showingPic = ''
      this.showLayer = false
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.buy-top {
  .search-btn {
    display: flex;
    align-items: center;
    .ui-cancel {
      font-size: 26px;
      color: $brand-orange;
      margin-left: 20px;
    }
  }
  .card-box {
    margin-top: 30px;
    .text-right {
      text-align: right;
      width: 100%;
      &.weight-font {
        font-size: 28px;
      }
      .link {
        color: $brand-yellow;
        text-decoration: underline;
      }
    }
    .game-pic {
      display: flex;
      margin: 20px 0 0px 0;
      overflow: hidden;
      .pic-item {
        width: 130px;
        height: 130px;
        overflow: hidden;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        .ui-img {
          width: 200%;
        }
      }
    }
  }
  .pic-show {
    position: fixed;
    width: 560px;
    height: 400px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    overflow: hidden;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    @include border-radius(8px);
    .ui-img {
      width: 200%;
    }
  }
  .tips {
    margin: 40px 30px;
    font-size: 22px;
    color: $text-lgary;
    line-height: 40px;
  }
}
</style>
