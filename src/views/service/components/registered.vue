<!--
 * @Description:registered
 * @Author: hyh
 * @since: 2019-08-21 23:38:45
 * @lastTime: 2019-08-26 17:11:17
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="shop-registered">
    <div class="shop-info white-bg">
      <div class="user-portrait">
        <img class="ui-img" src="https://hbimg.huabanimg.com/b99b792f7ecb610bf079ce1e33677f64d62f7b52322f6-5tXasY_fw658" />
      </div>
      <div class="col-r">
        <b class="b-text"><input type="ui-input" v-model="userName" /><i class="iconfont icon-bianji color-red"></i></b>
        <p class="text">店铺等级：<em class="icons"><img class="imgs" :src="dianpu['jijinguan']" /><b class="leve">LV5</b></em></p>
        <p class="text">主营栏目：<em class="ui-text">英雄联盟等4项</em></p>
      </div>
    </div>
    <div class="card-box">
      <card>
        <template slot="label-name">
          历史店铺经营情况
        </template>
        <template slot="card-hd-right">
          <p class="card-bd-r">已经营天数：56 天</p>
        </template>
        <template slot="card-bd">
          <ul class="ui-repeart">
            <li class="repeart-item">
              <span class="ui-number">320</span>
              <p class="text">今日访客量</p>
            </li>
            <li class="repeart-item">
              <span class="ui-number">100</span>
              <p class="text">商品浏览量</p>
            </li>
            <li class="repeart-item">
              <span class="ui-number">￥20</span>
              <p class="text">成交订单数</p>
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          历史店铺经营情况
        </template>
        <template slot="card-hd-right">
          <div class="tabs">
            <a class="links" :class="{active:item.value === checked}" v-for="(item,index) in tabs" :key="index" @click="switchTab(item)">{{item.text}}</a>
          </div>
        </template>
        <template slot="card-bd">
          <shopList :showMore="showMore">
            <template slot="__bd">
              <ul class="ui-repeart">
                <li class="repeart-item" v-for="(item,index) in shopList" :key="index">
                  <span class="col col-1">{{item.time}}</span>
                  <span class="col col-3">{{item.visitor}}</span>
                  <span class="col col-3">{{item.view}}</span>
                  <span class="col col-3">{{item.order}}</span>
                </li>
              </ul>
            </template>
          </shopList>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import shopList from '@/components/shopList'
export default {
  name: 'registered',
  data () {
    return {
      userName: '店铺名称很长哟',
      // 店铺等级
      dianpu: {
        jiguan: require('../../../assets/images/dianpudengjiguan.png'),
        jijinguan: require('../../../assets/images/dianpudengjijinguan.png'),
        jixing: require('../../../assets/images/dianpudengjixing.png'),
        jizuan: require('../../../assets/images/dianpudengjizuan.png')
      },
      tabs: [
        { text: '近7天', value: 1 },
        { text: '近30天', value: 2 },
        { text: '近180天', value: 3 }
      ],
      shopList: [
        {
          time: '昨天',
          visitor: '13233',
          view: '1225411',
          order: 221
        },
        {
          time: '昨天',
          visitor: '13233',
          view: '1225411',
          order: 221
        },
        {
          time: '昨天',
          visitor: '13233',
          view: '1225411',
          order: 221
        },
        {
          time: '昨天',
          visitor: '13233',
          view: '1225411',
          order: 221
        },
        {
          time: '昨天',
          visitor: '13233',
          view: '1225411',
          order: 221
        }
      ],
      checked: 1,
      showMore: true
    }
  },
  components: {
    card,
    shopList
  },
  methods: {
    switchTab (e) {
      this.checked = e.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/index";
.shop-registered {
  .shop-info {
    margin: 0 30px 30px 30px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    padding: 30px;
    .user-portrait {
      width: 110px;
      height: 110px;
      @include border-radius(50%);
      background: $brand-orange;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 4px rgba($shadow-red, 0.35);
      flex: 0 0 auto;
      display: flex;
      .ui-img {
        width: 80%;
        height: 80%;
      }
    }
    .col-r {
      flex: 1 0 auto;
      display: flex;
      width: 50%;
      margin-left: 20px;
      flex-direction: column;
      .b-text {
        font-size: 28px;
        color: $text-dark;
        .iconfont {
          font-size: 26px;
        }
      }
      .text {
        margin: 0;
        font-size: 26px;
        color: $text-lgary;
        margin-top: 20px;
        position: relative;
        display: flex;
        align-items: center;
        .icons {
          position: relative;
          width: 80px;
          display: inline-block;
          height: 24px;
          .imgs {
            width: 80px;
            position: absolute;
            top: 50%;
            transform: translateY(-56%);
            z-index: 9;
          }
          .leve {
            position: absolute;
            z-index: 10;
            font-size: 20px;
            color: $color-fff;
            font-style: normal;
            right: 6px;
            top: -3px;
            transform: scale(0.8);
          }
        }
        .ui-text {
          font-style: normal;
          color: $text-dark;
        }
      }
    }
  }
  .card-bd-r {
    width: 100%;
    margin: 0;
    text-align: right;
    color: $text-lgary;
  }
  .tabs {
    flex: 1 0 auto;
    text-align: right;
    margin: 0 !important;
    .links {
      margin-left: 20px;
      position: relative;
      color: $text-gary;
      &.active {
        color: $text-dark;
        &::before {
          display: block;
        }
      }
      &::before {
        width: 20px;
        height: 2px;
        content: "";
        background: $brand-red;
        position: absolute;
        bottom: -8px;
        left: 50%;
        margin-left: -10px;
        display: none;
      }
    }
  }
  .ui-repeart {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    // &::before {
    //   content: "";
    //   display: block;
    //   position: absolute;
    //   height: 80%;
    //   border-left: 1px dashed $line-gary;
    //   left: 33.33%;
    // }
    // &::after {
    //   content: "";
    //   display: block;
    //   position: absolute;
    //   height: 80%;
    //   border-right: 1px dashed $line-gary;
    //   right: 33.33%;
    // }
    .repeart-item {
      text-align: center;
      margin: 30px 0;
      .ui-number {
        font-size: 30px;
        color: $text-dark;
        display: block;
        margin-bottom: 20px;
      }
      .text {
        font-size: 26px;
        color: $text-lgary;
        margin: 0;
      }
    }
  }
}
</style>
