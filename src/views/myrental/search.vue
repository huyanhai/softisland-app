<!--
 * @Description:筛选条件
 * @Author: hyh
 * @since: 2019-08-12 22:22:39
 * @lastTime: 2019-08-17 19:55:33
 -->
<template>
  <div class="pages page-rental-search">
    <head-bar :barTitle="barTitle">
      <div class="choose-btn" slot="right">
        <a class="ui-link" @click="confirm">确认</a>
      </div>
    </head-bar>
    <indexBar class="rental-search" />
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import indexBar from './components/indexBar'
export default {
  name: 'search',
  data () {
    return {
      barTitle: '筛选条件'
    }
  },
  components: {
    headBar,
    indexBar
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    confirm () {
      this.$router.push({
        path: './myrental-searchresult'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-rental-search {
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
  .rental-search {
    margin-top: 30px;
  }
}
</style>
