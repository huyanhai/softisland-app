<!--
 * @Description: 我的黑名单
 * @Author: hyh
 * @since: 2019-08-23 22:23:31
 * @lastTime: 2019-08-23 23:01:20
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="pages page-black-list">
    <div class="search-box white-bg">
      <div class="search ">
        <i class="iconfont icon-xingtaiduICON_sousuo---copy"></i>
        <input type="text" class="ui-input" name="" placeholder="试试输入游戏名称/角色名/货架号">
        <a class="link">搜索</a>
      </div>
    </div>
    <blackLists :dataSet="dataSet" :showLoad="showLoad" />
  </div>
</template>

<script>
import blackLists from '@/components/blackLists'
export default {
  name: 'blackList',
  data () {
    return {
      dataSet: [
        {
          accNo: '154452',
          orderNo: '25584421',
          blackType: '普通拉黑',
          blackTime: '2019-08-08 12:12:33',
          reson: '拉黑时填写的理由，此处文案最大可能会有30个字，所以如果单行显示不完，可以进行换行。'
        },
        {
          accNo: '154452',
          orderNo: '25584421',
          blackType: '普通拉黑',
          blackTime: '2019-08-08 12:12:33',
          reson: '拉黑时填写的理由，此处文案最大可能会有30个字，所以如果单行显示不完，可以进行换行。'
        }
      ],
      showLoad: true
    }
  },
  components: {
    blackLists
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.page-black-list {
  padding-bottom: 0 !important;
  .search-box {
    margin: 30px 30px 0 30px;
    border-radius: 40px;
    overflow: hidden;
    padding: 30px;
    position: relative;
    .search {
      position: relative;
      height: 60px;
      display: flex;
      align-items: center;
      background: $line-gary;
      width: 100%;
      border-radius: 60px;
      overflow: hidden;
      .iconfont {
        margin-right: 20px;
        flex: 0 0 auto;
        font-size: 30px;
        margin-left: 30px;
        color: $text-gary;
      }
      .ui-input {
        background: none;
        border: 0;
        outline: 0;
        font-size: 24px;
        flex: 1 0 auto;
        font-size: 26px;
      }
      .link {
        font-size: 26px;
        color: $brand-orange;
        margin-right: 30px;
      }
    }
  }
}
</style>
