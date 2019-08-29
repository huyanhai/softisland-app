<!--
 * @Description:选择游戏
 * @Author: hyh
 * @since: 2019-08-14 22:06:35
 * @lastTime: 2019-08-28 17:54:22
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-choose-game">
    <headBar :barTitle="barTitle">
      <div class="choose-btn" slot="right">
        <a class="ui-link" @click="nextStep">下一步</a>
      </div>
    </headBar>
    <chooseLabel />
    <indexBar />
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import chooseLabel from './components/chooseLabel'
import indexBar from './components/indexBar'
export default {
  name: 'chooseGame',
  data () {
    return {
      barTitle: '筛选条件'
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar,
    chooseLabel,
    indexBar
  },
  methods: {
    nextStep () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-choose-game {
  overflow: hidden;
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
}
</style>
