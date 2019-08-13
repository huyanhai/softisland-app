<!--
 * @Description:search
 * @Author: hyh
 * @since: 2019-08-13 20:51:32
 * @lastTime: 2019-08-13 22:37:15
 -->
<template>
  <div class="pages page-search-again">
    <headBar :barTitle="barTitle">
      <div class="search-btn" slot="right">
        <a class="ui-clear" @click="searchAgain">重新筛选</a>
      </div>
    </headBar>
    <div class="agsearch-box">
      <template v-if="mysellList">
        <sellList :mysellList="item" v-for="(item,index) in mysellList" :key="index" />
      </template>
      <template v-else>
        <div class="no-data">
          <i class="iconfont icon-emptydata"></i>
          <p class="ui-text">17君按您筛选条件进行了筛选<br>但未筛选到任何内容，要不您再试试其他的条件？</p>
        </div>
      </template>
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
      barTitle: '筛选的账号',
      mysellList: [{
        sellNo: '12312312',
        status: '进行中',
        gameName: '魔兽世界',
        roleName: '黄河水',
        serverName: '重庆-江北区',
        income: '18.23',
        lease: '32'
      }, {
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
    searchAgain () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.page-search-again {
  .search-btn {
    display: flex;
    align-items: center;
    .ui-clear {
      font-size: 26px;
      color: $brand-orange;
      margin-left: 20px;
    }
  }
  .agsearch-box {
    margin: 30px 20px;
    .no-data {
      text-align: center;
      margin-top: 190px;
      .iconfont {
        font-size: 200px;
        color: $text-gary;
      }
      .ui-text {
        font-size: 24px;
        color: $text-gary;
        line-height: 40px;
      }
    }
  }
}
</style>
