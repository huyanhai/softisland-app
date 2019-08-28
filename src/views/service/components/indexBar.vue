<!--
 * @Description:indexBar
 * @Author: hyh
 * @since: 2019-08-14 22:39:03
 * @lastTime: 2019-08-22 15:20:38
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="index-bar">
    <div class="bar-hd">选择游戏</div>
    <div class="bar-ft">
      <template v-if="!serchText">
        <van-index-bar :index-list="indexList">
          <div v-for="(item,index) in gameList" :key="index">
            <van-index-anchor :index="item.title" />
            <van-cell :title="li" v-for="(li,index) in item.list" :key="index" @click="chooseGame(li)"></van-cell>
          </div>
        </van-index-bar>
      </template>
      <template v-else>
        <div class="best-choose">
          <div class="best-hd">
            <p class="text">最佳匹配</p>
            <a class="link">确定</a>
          </div>
          <ul class="best-bd">
            <li class="item">
              AVA战地之王
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'indexBar',
  data () {
    return {
      indexList: ['A', 'B', 'D', 'F'],
      gameList: [
        {
          title: 'A',
          list: ['Apex英雄', 'Artifact', '奥拉星', 'AVA战地之王', '暗黑破坏神3']
        },
        {
          title: 'B',
          list: ['Apex英雄', 'Artifact', '奥拉星', 'AVA战地之王', '暗黑破坏神3']
        },
        {
          title: 'D',
          list: ['Apex英雄', 'Artifact', '奥拉星', 'AVA战地之王', '暗黑破坏神3']
        }
      ],
      serchText: ''
    }
  },
  methods: {
    chooseGame (e) {
      // 设置store
      // this.$store.commit('CHOOSE_GAME', e)
      console.log(e)
    },
    cancel () {
      this.serchText = ''
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/scss/index";
.index-bar {
  margin: 0 30px 20px 30px;
  background: $color-fff;
  @include border-radius(40px);
  @include box-shdow-gary();
  box-sizing: border-box;
  padding: 0 30px;
  .bar-hd {
    font-size: 26px;
    color: $text-dark;
    height: 80px;
    line-height: 80px;
  }
  .bar-bd {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $line-gary;
    @include border-radius(60px);
    width: 100%;
    margin-bottom: 30px;
    .iconfont {
      color: $text-gary;
      font-size: 30px;
      margin: 0 20px 0 20px;
    }
    .input {
      background: none;
      border: 0;
      outline: 0;
      flex: 1 0 auto;
      height: 100%;
      font-size: 26px;
      width: 50%;
    }
    .search {
      font-size: 26px;
      color: $text-dark;
      margin-right: 20px;
    }
  }
  .bar-ft {
    height: 800px;
    overflow-y: scroll;
    .van-index-bar {
      .van-index-anchor {
        background: $line-gary;
        color: $text-lgary;
      }
      .van-index-bar__sidebar {
        right: 40px;
        .van-index-bar__index {
          color: #3087fe;
        }
      }
    }
    .best-choose {
      .best-hd {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px dashed $line-gary;
        .text {
          font-size: 26px;
          color: $text-gary;
        }
        .link {
          width: 106px;
          height: 60px;
          background: $brand-red;
          @include border-radius(60px);
          font-size: 26px;
          color: $color-fff;
          text-align: center;
          line-height: 60px;
          box-shadow: 0 0px 6px rgba($shadow-red, 0.35);
        }
      }
      .best-bd {
        .item {
          height: 80px;
          line-height: 80px;
          font-size: 26px;
          color: $text-dark;
          border-bottom: 1px dashed $line-gary;
        }
      }
    }
  }
}
</style>
