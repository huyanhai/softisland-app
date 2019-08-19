<!--
 * @Description:我的财务
 * @Author: hyh
 * @since: 2019-08-12 22:22:39
 * @lastTime: 2019-08-17 21:25:11
 -->
<template>
  <div class="pages page-finance">
    <head-bar :barTitle="barTitle"></head-bar>
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
    <footTabbar :activeColor="activeColor" :inactiveColor="inactiveColor" :menuInfo="menuInfo" />
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import footTabbar from '@/components/footTabbar'
export default {
  name: 'finance',
  data () {
    return {
      barTitle: '我的财务',
      activeColor: '#ff293f',
      inactiveColor: '#3f3f3f',
      // 加载更多
      showLoad: true,
      menuInfo: [
        { text: '账单', path: '/', icon: 'fcstubiao06', dot: false },
        { text: '服务', path: '/service', icon: 'tongji', dot: false }
      ],
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
    footTabbar
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
.page-finance {
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
}
</style>
