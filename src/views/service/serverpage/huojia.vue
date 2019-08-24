<!--
 * @Description:出租货架
 * @Author: hyh
 * @since: 2019-08-20 21:35:38
 * @lastTime: 2019-08-23 10:36:58
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-server-huojia">
    <head-bar :barTitle="barTitle">
      <div class="search-btn" slot="right">
        <a class="ui-cancel" @click="buyLaba">购买</a>
      </div>
    </head-bar>
    <div class="acc-data-info">
      <ul class="ui-repeart">
        <li class="repeart-item">
          <span class="ui-number">320</span>
          <p class="text">货架总量</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">100</span>
          <p class="text">已用货架</p>
        </li>
        <li class="repeart-item">
          <span class="ui-number">20</span>
          <p class="text">可用货架</p>
        </li>
      </ul>
    </div>
    <p class="ui-title">我的所有货架</p>
    <huojiaList :dataSet="dataSet" :showLoad="showLoad" />
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import huojiaList from '@/components/huojiaList'
export default {
  name: 'laba',
  data () {
    return {
      barTitle: '出租货架',
      dataSet: [
        {
          number: '12321322',
          payTime: '2019-07-22 13:24',
          buyCount: '541255',
          payMoney: '200'
        },
        {
          number: '12321322',
          payTime: '2019-07-22 13:24',
          buyCount: '541255',
          payMoney: '200'
        }
      ],
      showLoad: true
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar,
    huojiaList
  },
  methods: {
    buyLaba () {
      this.$router.push({
        path: '/server/buyhuojia'
      })
    }
  }

}
</script>

<style>
</style>
<style lang="scss" scoped>
@import "../../../assets/scss/index";
.page-server-huojia {
  .search-btn {
    display: flex;
    align-items: center;
    .ui-cancel {
      font-size: 26px;
      color: $brand-yellow;
      margin-left: 20px;
    }
  }
  .acc-data-info {
    box-sizing: border-box;
    @include border-radius(40px);
    background: rgba($color-fff, 0.95);
    padding: 15px 30px;
    margin: 30px 30px 0 30px;
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
        width: 30%;
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
  .ui-title {
    margin: 0 30px;
    font-size: 24px;
    color: $text-dark;
    margin-top: 40px;
  }
}
</style>
