<!--
 * @Description:我的合租
 * @Author: hyh
 * @since: 2019-08-12 22:22:39
 * @lastTime: 2019-08-19 20:50:17
 -->
<template>
  <div class="pages page-rental">
    <head-bar :barTitle="barTitle">
      <span slot="right">
        <i class="iconfont icon-shaixuan color-red" @click="toExactSearch"></i>
      </span>
    </head-bar>
    <tabMenu :tabs="tabs" />
    <div class="my-all-sell">
      <div class="sell-bd">
        <div class="sell-list" v-if="mysellList">
          <rentalList :mysellList="item" v-for="(item,index) in mysellList" :key="index" />
        </div>
        <div class="no-sell" v-else>
          <i class="iconfont icon-emptydata"></i>
          <p class="text" v-html="tispText"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import rentalList from '@/components/rentalList'
import tabMenu from '@/components/tabMenu'
export default {
  name: 'myRental',
  data () {
    return {
      barTitle: '我的合租',
      // 加载更多
      mysellList: [{
        gameName: '魔兽世界',
        time: '2019-07-22 13:24',
        gameAcc: '29812387@qq.com',
        roleName: '小鸡炖蘑菇',
        gameServer: '全区',
        status: 'saleing',
        date: '2019-07-22',
        ratio: '80%'
      }, {
        gameName: '魔兽世界',
        time: '2019-07-22 13:24',
        gameAcc: '29812387@qq.com',
        roleName: '小鸡炖蘑菇',
        gameServer: '全区',
        status: 'waitSale',
        date: '2019-07-22',
        ratio: '80%'
      }],
      tabs: [
        { text: '我自己的账号', value: 1 },
        { text: '我招募的账号', value: 2 }
      ],
      tispText: '您还没有发布任何账号呢<br>快去官网（www.17369.com）发布账号坐等收钱吧'

    }
  },
  components: {
    headBar,
    rentalList,
    tabMenu
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    toExactSearch () {
      this.$router.push({
        path: './myrental-search'
      })
    },
    switchTab (e) {
      if (e.value === 2) {
        this.tispText = `您还没有招募任何账号呢<br>快去官网（www.17369.com）发布账号坐等收钱吧`
      } else {
        this.tispText = `您还没有发布任何账号呢<br>快去官网（www.17369.com）发布账号坐等收钱吧`
      }
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-rental {
  padding-bottom: 0;

  .my-all-sell {
    margin: 30px;
    .sell-hd {
      font-size: 26px;
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
          font-size: 26px;
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
