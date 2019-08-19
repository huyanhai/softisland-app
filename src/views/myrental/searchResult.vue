<!--
 * @Description:筛选结果
 * @Author: hyh
 * @since: 2019-08-12 22:22:39
 * @lastTime: 2019-08-17 20:18:15
 -->
<template>
  <div class="pages page-rental">
    <head-bar :barTitle="barTitle">
      <div class="choose-btn" slot="right">
        <a class="ui-link" @click="searchAgreen">重新筛选</a>
      </div>
    </head-bar>
    <div class="tabs white-bg" v-if="mysellList.length>0">
      <a class="link" :class="{active:checked===item.value}" v-for="(item,index) in tabs" :key="index" @click="switchTab(item)">{{item.text}}</a>
    </div>
    <div class="my-all-sell">
      <div class="sell-bd">
        <div class="sell-list" v-if="mysellList">
          <rentalList :mysellList="item" v-for="(item,index) in mysellList" :key="index" />
        </div>
        <div class="no-sell" v-else>
          <i class="iconfont icon-emptydata"></i>
          <p class="text">17君按您筛选条件进行了筛选<br>但未筛选到任何内容，要不您再试试其他的条件？</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import rentalList from '@/components/rentalList'
export default {
  name: 'searchResult',
  data () {
    return {
      barTitle: '筛选结果',
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
      checked: 1
    }
  },
  components: {
    headBar,
    rentalList
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    searchAgreen () {
      this.$router.push({
        path: './myrental-search'
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
.page-rental {
  padding-bottom: 0;
  .choose-btn {
    display: flex;
    align-items: center;
    .ui-link {
      font-size: 26px;
      color: $brand-orange;
      margin-left: 20px;
    }
  }
  .tabs {
    width: 690px;
    height: 88px;
    @include border-radius(88px);
    overflow: hidden;
    margin: 30px auto 0 auto;
    display: flex;
    .link {
      width: 50%;
      text-align: center;
      font-size: 30px;
      color: $text-dark;
      line-height: 88px;
      &.active {
        background: $brand-red;
        color: $color-fff;
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
