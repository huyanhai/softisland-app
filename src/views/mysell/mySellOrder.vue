<!--
 * @Description:我的出租订单
 * @Author: hyh
 * @since: 2019-08-12 22:22:39
 * @lastTime: 2019-08-17 21:04:47
 -->
<template>
  <div class="pages page-sell-order">
    <head-bar :barTitle="barTitle">
      <span slot="right">
        <i class="iconfont icon-xingtaiduICON_sousuo---copy color-red" @click="toSearch"></i>
        <i class="iconfont icon-shaixuan color-red" @click="toExactSearch"></i>
      </span>
    </head-bar>
    <div class="acc-data-info">
      <ul class="ui-repeart">
        <li class="repeart-item">
          <span class="ui-number">320</span>
          <p class="text">恶意投诉</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">100</span>
          <p class="text">撤单次数</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">￥20</span>
          <p class="text">撤单率</p>
        </li>
      </ul>
    </div>
    <div class="my-all-sell">
      <div class="sell-hd">
        出租订单列表
        <div class="tabs">
          <a class="links" :class="{active:item.value === checked}" v-for="(item,index) in tabs" :key="index" @click="switchTab(item)">{{item.text}}</a>
        </div>
      </div>
      <div class="sell-bd">
        <div class="sell-list" v-if="mysellList">
          <sellOrderList :mysellList="item" v-for="(item,index) in mysellList" :key="index" />
        </div>
        <div class="no-sell" v-else>
          <i class="iconfont icon-emptydata"></i>
          <p class="text">您还没有发布任何账号呢<br>快去官网（www.17369.com）发布账号坐等收钱吧
          </p>
        </div>
      </div>
    </div>
    <loadMore :showLoad="showLoad" v-if="mysellList.length>0" />
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import sellOrderList from '@/components/sellOrderList'
import loadMore from '@/components/loadMore'
export default {
  name: 'mySeller',
  data () {
    return {
      barTitle: '我的出租订单',
      // 加载更多
      showLoad: true,
      mysellList: [{
        orderNo: '12312312',
        time: '2019-07-22 13:24',
        matchTime: '1',
        orderStatus: 'doing',
        orderMoney: '12.32',
        orderDeposit: '0'
      }, {
        orderNo: '12312312',
        time: '2019-07-22 13:24',
        matchTime: '1',
        orderStatus: 'isCancel',
        orderMoney: '12.32',
        orderDeposit: '0'
      }, {
        orderNo: '12312312',
        time: '2019-07-22 13:24',
        matchTime: '1',
        orderStatus: 'complainting',
        orderMoney: '12.32',
        orderDeposit: '0'
      }, {
        orderNo: '12312312',
        time: '2019-07-22 13:24',
        matchTime: '1',
        orderStatus: 'complete',
        orderMoney: '12.32',
        orderDeposit: '0'
      }],
      tabs: [
        { text: '全部', value: 1 },
        { text: '今日', value: 2 },
        { text: '本月', value: 3 }
      ],
      checked: 1
    }
  },
  components: {
    headBar,
    sellOrderList,
    loadMore
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    toSearch () {
      this.$router.push({
        path: './search'
      })
    },
    toExactSearch () {
      this.$router.push({
        path: './exact-search'
      })
    },
    switchTab (e) {
      this.checked = e.value
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-sell-order {
  padding-bottom: 0;
  .acc-data-info {
    box-sizing: border-box;
    @include border-radius(40px);
    background: rgba($color-fff, 0.95);
    padding: 15px 30px;
    margin: 30px 30px 20px 30px;
    @include box-shdow-gary();
    .ui-repeart {
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &::before {
        content: "";
        display: block;
        position: absolute;
        height: 80%;
        border-left: 1px solid $line-gary;
        left: 33.33%;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        height: 80%;
        border-right: 1px solid $line-gary;
        right: 33.33%;
      }
      .repeart-item {
        text-align: center;
        margin: 30px 0;
        .ui-number {
          font-size: 30px;
          color: $text-dark;
          font-family: $pf-bold;
          display: block;
          margin-bottom: 20px;
        }
        .text {
          font-size: 24px;
          color: $text-lgary;
          font-family: $pf-light;
          margin: 0;
        }
      }
    }
  }
  .my-all-sell {
    margin: 30px;
    .sell-hd {
      font-size: 24px;
      color: $text-dark;
      display: flex;
      justify-content: center;
      align-items: center;
      .tabs {
        flex: 1 0 auto;
        text-align: right;
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
    }
    .sell-bd {
      .no-sell {
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
      .sell-list {
        margin-top: 30px;
      }
    }
  }
}
</style>
