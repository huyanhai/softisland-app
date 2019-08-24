<!--
 * @Description: 所有黑名单
 * @Author: hyh
 * @since: 2019-08-23 23:02:22
 * @lastTime: 2019-08-24 22:07:15
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-all-black-lsit">
    <div class="list-hd">
      <img src="../../assets/images/blacklist.png" class="list-ad" />
    </div>
    <div class="list-bd white-bg">
      <div class="__hd">
        <span class="col">拉黑账号</span>
        <span class="col">被拉黑次数</span>
        <span class="col">操作</span>
      </div>
      <div class="__bd" v-if="dataSet.length>0">
        <div class="item" v-for="(item,index) in dataSet" :key="index">
          <span class="col">{{item.account}}</span>
          <span class="col">{{item.times}}</span>
          <span class="col text" v-if="item.black">已被我拉黑</span>
          <a class="col link" v-else @click="joinBlackList">拉黑此用户</a>
        </div>
      </div>
      <div class="__bd" v-else>
        <div class="no-data">
          <i class="iconfont icon-emptydata"></i>
          <p class="text">本月没有任何玩家被拉黑</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'allList',
  data () {
    return {
      dataSet: [
        {
          account: '1546564235',
          times: '152',
          black: false
        },
        {
          account: '1546564235',
          times: '152',
          black: true
        },
        {
          account: '1546564235',
          times: '152',
          black: false
        },
        {
          account: '1546564235',
          times: '152',
          black: true
        },
        {
          account: '1546564235',
          times: '152',
          black: false
        },
        {
          account: '1546564235',
          times: '152',
          black: true
        },
        {
          account: '1546564235',
          times: '152',
          black: false
        },
        {
          account: '1546564235',
          times: '152',
          black: true
        },
        {
          account: '1546564235',
          times: '152',
          black: false
        },
        {
          account: '1546564235',
          times: '152',
          black: true
        },
        {
          account: '1546564235',
          times: '152',
          black: false
        },
        {
          account: '1546564235',
          times: '152',
          black: true
        },
        {
          account: '1546564235',
          times: '152',
          black: false
        },
        {
          account: '1546564235',
          times: '152',
          black: true
        },
        {
          account: '1546564235',
          times: '152',
          black: false
        },
        {
          account: '1546564235',
          times: '152',
          black: true
        },
        {
          account: '1546564235',
          times: '152',
          black: false
        },
        {
          account: '1546564235',
          times: '152',
          black: true
        },
        {
          account: '1546564235',
          times: '152',
          black: false
        },
        {
          account: '1546564235',
          times: '152',
          black: true
        }
      ]
    }
  },
  methods: {
    joinBlackList () {
      this.$router.push({
        path: '/blacklist/join-blacklist'
      })
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.page-all-black-lsit {
  padding-bottom: 0 !important;
  .list-hd {
    margin: 30px;
    .list-ad {
      width: 100%;
      border-radius: 40px;
      overflow: hidden;
      @include box-shdow-gary();
      display: block;
    }
  }
  .list-bd {
    margin: 0 30px;
    border-radius: 40px;
    overflow: hidden;
    padding: 0 30px;
    .__hd {
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
      border-bottom: 1px solid $line-gary;
      .col {
        font-size: 24px;
        color: $text-lgary;
        text-align: center;
        &:first-child {
          text-align: left;
        }
        &:last-child {
          text-align: right;
        }
      }
    }
    .__bd {
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 700px;
      overflow-y: scroll;
      margin: 20px 0;
      -webkit-overflow-scrolling: touch;
      .no-data {
        text-align: center;
        margin-top: 40px;
        .iconfont {
          font-size: 200px;
          color: $text-lgary;
          display: block;
          margin-bottom: 20px;
        }
        .text {
          font-size: 24px;
          line-height: 40px;
          color: $text-lgary;
          display: block;
        }
      }
      .item {
        display: flex;
        align-items: center;
        height: 50px;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        flex: 0 0 auto;
        .col {
          font-size: 24px;
          color: $text-dark;
          text-align: center;
          &.link {
            color: $brand-orange;
            text-decoration: underline;
          }
          &.text {
            color: $text-lgary;
          }
          &:first-child {
            text-align: left;
          }
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
