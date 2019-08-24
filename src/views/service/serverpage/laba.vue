<!--
 * @Description:喇叭服务
 * @Author: hyh
 * @since: 2019-08-20 21:35:38
 * @lastTime: 2019-08-22 23:22:09
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-server-laba">
    <head-bar :barTitle="barTitle">
      <div class="search-btn" slot="right">
        <a class="ui-cancel" @click="buyLaba">购买</a>
      </div>
    </head-bar>
    <labaList :dataSet="dataSet" :showLoad="showLoad" />
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import labaList from '@/components/labaList'
export default {
  name: 'laba',
  data () {
    return {
      barTitle: '喇叭服务',
      dataSet: [
        {
          goodsNo: '12321322',
          time: '2019-07-22 13:24',
          buyTimes: '541255',
          hasTimes: '1455656',
          labaText: 'safawefasdfasdfasdfasfasfefsafaeswfdsaf'
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
    labaList
  },
  methods: {
    buyLaba () {
      this.$router.push({
        path: '/server/buylaba'
      })
    }
  }

}
</script>

<style>
</style>
<style lang="scss" scoped>
@import "../../../assets/scss/index";
.page-server-laba {
  .search-btn {
    display: flex;
    align-items: center;
    .ui-cancel {
      font-size: 26px;
      color: $brand-yellow;
      margin-left: 20px;
    }
  }
}
</style>
