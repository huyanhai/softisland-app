<!--
 * @Description:我的出租账号
 * @Author: hyh
 * @since: 2019-08-12 22:22:39
 * @lastTime: 2019-08-17 11:26:26
 -->
<template>
  <div class="pages page-sell">
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
          <p class="text">账号数量</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">100</span>
          <p class="text">正在出租中</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">￥20</span>
          <p class="text">本月收入</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">￥320</span>
          <p class="text">累计收入</p>
        </li>
      </ul>
    </div>
    <div class="my-all-sell">
      <div class="sell-hd">
        我的所有货架
      </div>
      <div class="sell-bd">
        <div class="sell-list" v-if="mysellList">
          <sellList :mysellList="item" v-for="(item,index) in mysellList" :key="index" />
        </div>
        <div class="no-sell" v-else>
          <i class="iconfont icon-emptydata"></i>
          <p class="text">您还没有发布任何账号呢<br>快去官网（www.17369.com）发布账号坐等收钱吧
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import sellList from '@/components/sellList'
export default {
  name: 'mySeller',
  data () {
    return {
      barTitle: '我的出租账号',
      mysellList: [{
        sellNo: '12312312',
        status: '进行中',
        gameName: '魔兽世界',
        roleName: '黄河水',
        serverName: '重庆-江北区',
        income: '18.23',
        lease: '32'
      }, {
        sellNo: '12312312',
        status: '进行中',
        gameName: '魔兽世界',
        roleName: '黄河水',
        serverName: '重庆-江北区',
        income: '18.23',
        lease: '32'
      }, {
        sellNo: '12312312',
        status: '进行中',
        gameName: '魔兽世界',
        roleName: '黄河水',
        serverName: '重庆-江北区',
        income: '18.23',
        lease: '32'
      }]
    }
  },
  components: {
    headBar,
    sellList
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
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-sell {
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
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        border-bottom: 1px solid $line-gary;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        height: calc(100% - 30px);
        border-right: 1px solid $line-gary;
        left: 50%;
        transform: translateX(-50%);
        top: 15px;
      }
      .repeart-item {
        float: left;
        width: 50%;
        text-align: center;
        margin: 30px 0 30px 0;
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
