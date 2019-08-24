<!--
 * @Description:我的财务
 * @Author: hyh
 * @since: 2019-08-12 22:22:39
 * @lastTime: 2019-08-23 22:13:54
 -->
<template>
  <div class="pages page-finance">
    <div class="acc-data-info">
      <ul class="ui-repeart">
        <li class="repeart-item">
          <span class="ui-number">320</span>
          <p class="text">总资产(元)</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">100</span>
          <p class="text">可用余额(元)</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">￥20</span>
          <p class="text">冻结余额(元)</p>
        </li>
      </ul>
    </div>
    <tabMenu :tabs="tabs" class="tabs" :class="isTop?'isFixed':''" />
    <financeList :dataSet="financeList" class="finacce-list" :showLoad="showLoad" />
    <div class="layers" v-if="isTop"></div>
  </div>
</template>

<script>
import tabMenu from '@/components/tabMenu'
import financeList from '@/components/financeList'
export default {
  name: 'finance',
  data () {
    return {
      // 加载更多
      showLoad: true,
      financeList: [
        {
          desc: '开启错误赔付（增加冻结资金）-发布账号',
          payType: '开通商户',
          time: '2019-07-19 10:42:02',
          totalMoney: '3562.00',
          price: '3.00'
        },
        {
          desc: '开启错误赔付（增加冻结资金）-发布账号',
          payType: '开通商户',
          time: '2019-07-19 10:42:02',
          totalMoney: '3562.00',
          price: '-3.00'
        },
        {
          desc: '开启错误赔付（增加冻结资金）-发布账号',
          payType: '开通商户',
          time: '2019-07-19 10:42:02',
          totalMoney: '3562.00',
          price: '-3.00'
        },
        {
          desc: '开启错误赔付（增加冻结资金）-发布账号',
          payType: '开通商户',
          time: '2019-07-19 10:42:02',
          totalMoney: '3562.00',
          price: '-3.00'
        },
        {
          desc: '开启错误赔付（增加冻结资金）-发布账号',
          payType: '开通商户',
          time: '2019-07-19 10:42:02',
          totalMoney: '3562.00',
          price: '-3.00'
        }
      ],
      tabs: [
        { text: '全部', value: 1 },
        { text: '收入', value: 2 },
        { text: '支出', value: 3 },
        { text: '充值', value: 4 },
        { text: '提现', value: 5 }
      ],
      checked: 1,
      isTop: false
    }
  },
  components: {
    tabMenu,
    financeList
  },
  created () {
    this.$emit('footer', false)
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
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
      console.log(e)
    },
    handleScroll () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 110) {
        this.isTop = true
      } else {
        this.isTop = false
      }
    },
    // 底部切换
    footSwitch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-finance {
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
  .tabs {
    margin-bottom: 30px;
    &.isFixed {
      position: fixed;
      z-index: 100;
      top: 120px;
      margin: 0 30px;
    }
  }
  .finacce-list {
    margin: 0 30px 20px 30px;
  }
  .layers {
    position: fixed;
    width: 100%;
    height: 170px;
    background: $line-gary;
    top: 0;
  }
}
</style>
