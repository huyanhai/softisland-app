<!--
 * @Description:账号事务
 * @Author: hyh
 * @since: 2019-08-20 21:35:38
 * @lastTime: 2019-08-27 17:25:32
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-account">
    <head-bar :barTitle="barTitle"></head-bar>
    <tabMenu :tabs="tabs" :class="isTop?'isFixed':''" @switchTab="switchTab" />
    <div class="my-all-sell">
      <template v-if="tabPage===1">
        <div class="sell-hd">
          <p class="text">理赔列表</p>
          <div class="tabs">
            <a class="links" :class="{active:item.value === checked}" v-for="(item,index) in tabs1" :key="index" @click="switchTab1(item)">{{item.text}}</a>
          </div>
        </div>
        <div class="sell-bd">
          <div class="sell-list">
            <accountList :dataSet="accountList" :showLoad="showLoad" />
          </div>
        </div>
      </template>
      <template v-if="tabPage===2">
        <assessList :dataSet="assessList" :showLoad="showLoad" />
      </template>
      <template v-if="tabPage===3">
        <complaintList :dataSet="complaintList" :showLoad="showLoad" />
        <footTabbar @footSwitch="footSwitch" :activeColor="activeColor" :inactiveColor="inactiveColor" :menuInfo="menuInfo" />
      </template>
    </div>
    <a class="link" @click="goApply" v-if="tabPage===1">申请理赔</a>

    <div class="layers" v-if="isTop"></div>
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import tabMenu from '@/components/tabMenu'
import accountList from '@/components/accountList'
import assessList from '@/components/assessList'
import complaintList from '@/components/complaintList'
import footTabbar from '@/components/footTabbar'
export default {
  name: 'account',
  data () {
    return {
      barTitle: '账号事务',
      activeColor: '#ff293f',
      inactiveColor: '#3f3f3f',
      tabs: [
        { text: '保障理赔', value: 1 },
        { text: '租赁评价', value: 2 },
        { text: '投诉申述', value: 3 }
      ],
      tabs1: [
        { text: '全部', value: 1 },
        { text: '审核中', value: 2 },
        { text: '被拒绝', value: 3 },
        { text: '已获赔', value: 4 }
      ],
      showLoad: true,
      accountList: [
        {
          no: '121312321',
          time: '2019-07-19 10:42:02',
          gameName: '英雄联盟',
          gameAcc: '322423112',
          gameServer: '艾欧里亚',
          status: '审核中'
        },
        {
          no: '121312321',
          time: '2019-07-19 10:42:02',
          gameName: '英雄联盟',
          gameAcc: '322423112',
          gameServer: '艾欧里亚',
          status: '已处理'
        },
        {
          no: '121312321',
          time: '2019-07-19 10:42:02',
          gameName: '英雄联盟',
          gameAcc: '322423112',
          gameServer: '艾欧里亚',
          status: '已处理'
        },
        {
          no: '121312321',
          time: '2019-07-19 10:42:02',
          gameName: '英雄联盟',
          gameAcc: '322423112',
          gameServer: '艾欧里亚',
          status: '已处理'
        }
      ],
      assessList: [
        {
          orderNo: '121312321',
          goodsNo: '121312321',
          time: '2019-07-19 10:42:02',
          custom: '13432422322',
          start: 4
        }
      ],
      complaintList: [
        {
          orderNo: '121312321',
          goodsNo: '121312321',
          time: '2019-07-19 10:42:02',
          source: '租客投诉',
          type: '不想玩了',
          handle: '15分钟内全额退回并撤单',
          status: 'isComplate'
        },
        {
          orderNo: '121312321',
          goodsNo: '121312321',
          time: '2019-07-19 10:42:02',
          source: '租客投诉',
          type: '不想玩了',
          handle: '15分钟内全额退回并撤单',
          status: 'noComplate'
        }
      ],
      menuInfo: [
        { text: '可申述订单', path: '', icon: 'shensuzhong', dot: false },
        { text: '已申述订单', path: '', icon: 'gongshishensu', dot: false }
      ],
      isTop: false,
      checked: 1,
      tabPage: 1
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar,
    tabMenu,
    accountList,
    assessList,
    complaintList,
    footTabbar
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 80) {
        this.isTop = true
      } else {
        this.isTop = false
      }
    },
    switchTab (e) {
      console.log(e)
      this.tabPage = e.value
    },
    switchTab1 (e) {
      this.checked = e.value
    },
    goApply () {
      this.$router.push({
        path: '/account/apply',
        name: 'apply',
        params: {
          type: 'edit'
        }
      })
    },
    // 底部切换
    footSwitch (e) {
      console.log(e)
    }
  }

}
</script>

<style>
</style>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-account {
  .acc-data-info {
    box-sizing: border-box;
    @include border-radius(40px);
    background: rgba($color-fff, 0.95);
    padding: 15px 30px;
    margin: 30px;
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
        border-left: 1px dashed $line-gary;
        left: 33.33%;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        height: 80%;
        border-right: 1px dashed $line-gary;
        right: 33.33%;
      }
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
  .tabs {
    margin-bottom: 30px;
    &.isFixed {
      position: fixed;
      z-index: 100;
      top: 120px;
      margin: 0 30px;
    }
  }
  .my-all-sell {
    margin: 30px;
    .sell-hd {
      font-size: 26px;
      color: $text-dark;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        margin: 0;
        flex: 0 0 auto;
        font-weight: bold;
        font-size: 28px;
      }
      .tabs {
        flex: 1 0 auto;
        text-align: right;
        margin-bottom: 0 !important;
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
  .layers {
    position: fixed;
    width: 100%;
    height: 170px;
    background: $line-gary;
    top: 0;
  }
  .link {
    height: 98px;
    line-height: 98px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    font-size: 36px;
    color: $color-fff;
    background: $brand-red;
  }
}
</style>
