<!--
 * @Description:search
 * @Author: hyh
 * @since: 2019-08-13 20:51:32
 * @lastTime: 2019-08-13 22:37:11
 -->
<template>
  <div class="pages page-search">
    <headBar>
      <div class="search" slot="title">
        <i class="iconfont icon-xingtaiduICON_sousuo---copy"></i>
        <input type="text" class="ui-input" name="" placeholder="试试输入游戏名称/角色名/货架号">
      </div>
      <div class="search-btn" slot="right">
        <a class="ui-search" @click="search">搜索</a>
        <a class="ui-cancel" @click="cancel">取消</a>
      </div>
    </headBar>
    <div class="search-box">
      <sellList :mysellList="item" v-for="(item,index) in mysellList" :key="index" />
    </div>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import sellList from '@/components/sellList'
export default {
  name: 'search',
  data () {
    return {
      mysellList: [{
        sellNo: '12312312',
        status: '进行中',
        gameName: '魔兽世界',
        roleName: '黄河水',
        serverName: '重庆-江北区',
        income: '18.23',
        lease: '32'
      }]
    }
  },
  components: {
    headBar,
    sellList
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    search () {
      console.info('search')
    },
    cancel () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.page-search {
  .search {
    width: 450px;
    height: 60px;
    background: $line-gary;
    @include border-radius(60px);
    overflow: hidden;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 20px;
    margin-left: 80px;
    .iconfont {
      margin-right: 20px;
      flex: 0 0 auto;
    }
    .ui-input {
      background: none;
      border: 0;
      outline: 0;
      font-size: 24px;
      flex: 1 0 auto;
    }
  }
  .search-btn {
    display: flex;
    align-items: center;
    .ui-search {
      width: 106px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      @include border-radius(60px);
      overflow: hidden;
      box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
      background: $brand-red;
      font-size: 26px;
      color: $color-fff;
    }
    .ui-cancel {
      font-size: 26px;
      color: $text-dark;
      margin-left: 20px;
    }
  }
  .search-box {
    margin: 30px 20px;
  }
}
</style>
