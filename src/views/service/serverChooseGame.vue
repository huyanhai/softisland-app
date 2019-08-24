<!--
 * @Description:选择游戏
 * @Author: hyh
 * @since: 2019-08-20 21:35:38
 * @lastTime: 2019-08-22 15:22:49
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-server-cgame">
    <head-bar :barTitle="barTitle">
      <div class="choose-btn" slot="right">
        <a class="ui-link" @click="save">保存</a>
      </div>
    </head-bar>
    <indexBar class="search-game" />
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import indexBar from './components/indexBar'
export default {
  name: 'serverChooseGame',
  data () {
    return {
      barTitle: '选择游戏'
    }
  },
  created () {
    this.$emit('footer', false)
  },
  components: {
    headBar,
    indexBar
  },
  methods: {
    save () { }
  }

}
</script>

<style>
</style>
<style lang="scss">
@import "../../assets/scss/index";
.page-server-cgame {
  .choose-btn {
    display: flex;
    align-items: center;
    .ui-link {
      font-size: 26px;
      color: $brand-orange;
      margin-left: 20px;
    }
  }
  .search-game {
    margin-top: 30px;
  }
}
</style>
