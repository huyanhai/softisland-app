<!--
 * @Description:我的财务
 * @Author: hyh
 * @since: 2019-08-12 22:22:39
 * @lastTime: 2019-08-23 22:15:17
 -->
<template>
  <div class="pages page-finance-server">
    <div class="my-in-out white-bg">
      <div class="col">
        <i class="iconfont icon-shouru"></i>
        <p class="text">总收入(元)</p>
        <p class="number">0</p>
      </div>
      <div class="col">
        <i class="iconfont icon-shouru"></i>
        <p class="text">总收入(元)</p>
        <p class="number">0</p>
      </div>
    </div>
    <div class="acc-data-info white-bg">
      <ul class="ui-repeart">
        <li class="repeart-item">
          <span class="ui-number">320</span>
          <p class="text">总充值(元)</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">20</span>
          <p class="text">总提现(元)</p>
        </li>
      </ul>
    </div>
    <div class="datas">
      <p class="text">近6个月收入与消费趋势</p>
      <lineCharts :options="options" :styles="styles" v-if="lineData" />
      <div class="no-data" v-else>
        <i class="iconfont icon-emptydata"></i>
        <p class="text">暂无数据</p>
      </div>
    </div>
  </div>
</template>

<script>
import lineCharts from '@/components/lineCharts'
export default {
  name: 'finance',
  data () {
    return {
      menuInfo: [
        { text: '账单', path: '/my/finance-order', icon: 'fcstubiao06', dot: false },
        { text: '服务', path: '/my/finance-server', icon: 'tongji', dot: false }
      ],
      lineData: true,
      options: {
        title: false,
        xAxis: {
          categories: ['2月', '3月', '4月', '5月', '6月', '7月'],
          dashStyle: 'shortdot',
          legend: false

        },
        yAxis: {
          dashStyle: 'shortdot',
          title: null
        },
        series: [{
          name: '收入',
          data: [100, 300, 400, 100, 600, 200],
          color: '#ff293f',
          marker: {
            symbol: 'circle', // 圆点显示
            radius: 4,
            lineWidth: 2,
            lineColor: '#ff293f',
            fillColor: '#fff'
          }
        }, {
          name: '支出',
          data: [400, 200, 100, 300, 200, 400],
          color: '#1ebf61',
          marker: {
            symbol: 'circle', // 圆点显示
            radius: 4,
            lineWidth: 2,
            lineColor: '#1ebf61',
            fillColor: '#fff'
          }
        }],
        credits: {
          enabled: false // 不显示LOGO
        }
      },
      styles: {
        width: '100%',
        height: '100%'
      }
    }
  },
  components: {
    lineCharts
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
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-finance-server {
  .acc-data-info {
    box-sizing: border-box;
    @include border-radius(40px);
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
        left: 50%;
      }
      .repeart-item {
        text-align: center;
        margin: 30px 0;
        width: 50%;
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
  .my-in-out {
    margin: 30px 30px 0px 30px;
    @include border-radius(40px);
    padding: 0 30px;
    .col {
      display: flex;
      height: 110px;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      color: $text-dark;
      border-bottom: 1px solid $line-gary;
      &:last-child {
        border-bottom: none;
      }
      .iconfont {
        font-size: 40px;
        margin-right: 20px;
        color: $brand-yellow;
      }
      .text {
        flex: 1 0 auto;
      }
    }
  }
  .datas {
    margin-top: 40px;
    text-align: center;
    .text {
      font-size: 26px;
      color: $text-dark;
    }
    .no-data {
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
  }
}
</style>
