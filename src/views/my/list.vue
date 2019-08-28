<!--
 * @Description: 我的17租号
 * @Author: hyh
 * @since: 2019-08-24 13:34:51
 * @lastTime: 2019-08-26 17:09:55
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="setting-list">
    <ul class="ui-repeart">
      <li class="repeart-item" v-for="(item,index) in settingList" :key="index">
        <router-link :to="item.path">
          <span class="icon-bg"><i class="ui-icon iconfont" :class="item.icon"></i></span>
          <p class="text">{{item.text}}</p>
          <i class="ui-more iconfont icon-fanhui"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      settingList: [
        { icon: 'icon-gerenziliao', text: '个人资料设置', path: '/my/info-set' },
        { icon: 'icon-xiaoxi2', text: '消息推送设置', path: '/my/set-text?pagePath=msgPush' },
        { icon: 'icon-tongzhi', text: '站内通知设置', path: '/my/set-text?pagePath=webSit' },
        { icon: 'icon-anquan', text: '安全设置', path: '/my/safe-set' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.setting-list {
  margin: 30px;
  .ui-repeart {
    .repeart-item {
      box-sizing: border-box;
      @include border-radius(40px);
      background: rgba($color-fff, 0.95);
      padding: 0px 30px;
      box-sizing: border-box;
      margin-bottom: 20px;
      height: 120px;
      @include box-shdow-gary();
      a {
        justify-content: space-between;
        align-items: center;
        display: flex;
        height: 100%;
      }
      .icon-bg {
        width: 70px;
        height: 70px;
        line-height: 70px;
        background: $brand-yellow;
        @include border-radius(50%);
        display: block;
        text-align: center;
        color: $color-fff;
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .ui-icon {
          font-size: 36px;
        }
      }
      .text {
        color: $text-dark;
        font-size: 26px;
        flex: 1 0 auto;
        margin-left: 30px;
        line-height: 40px;
        .red {
          color: $brand-red;
          font-style: normal;
        }
      }
      .ui-more {
        font-size: 30px;
        color: $text-lgary;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
