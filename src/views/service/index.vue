<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-08 23:15:10
 * @lastTime: 2019-08-26 11:30:43
 -->
<template>
  <div class="pages page-service">
    <div class="ui-pagebg"></div>
    <user-info />
    <div class="m-service white-bg">
      <ul class="ui-repeart">
        <li class="repeart-item" v-for="(item,index) in serverList" :key="index" @click="toPages(item)">
          <i class="ui-icon iconfont" :class="'icon-'+item.icon"></i>
          <p class="ui-text">{{item.text}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import userInfo from '@/components/userInfo.vue'
export default {
  name: 'Service',
  data () {
    return {
      serverList: [
        { text: '我的出租账号', icon: 'icon_account', path: '/my/mysell' },
        { text: '我的出租订单', icon: 'chuzu', path: '/my/mysell-order' },
        { text: '我的合租', icon: 'hezu', path: '/my/myrental' },
        { text: '我的财务', icon: 'caiwu', path: '/finance' },
        { text: '账号事务', icon: 'shiwu', path: '/account' },
        { text: '增值服务', icon: 'zengzhi', path: '/server/add-server' },
        { text: '黑名单', icon: 'heimingdan', path: '/blacklist' }
      ]
    }
  },
  components: {
    userInfo
  },
  created () {
    this.$emit('footer', true)
  },
  methods: {
    toPages (e) {
      this.$router.push({ path: e.path })
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.page-service {
  overflow: hidden;
  .ui-pagebg {
    height: 300px;
    width: 100%;
    @include linder-top-bottom(#fa0049, #ff6f61);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    &:before {
      background-image: url("./assets/images/index_texture.png");
      background-size: 95px 56px;
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
      z-index: 1;
    }
  }
  .m-service {
    box-sizing: border-box;
    @include border-radius(40px);
    background: rgba($color-fff, 0.95);
    margin: 0px 30px;
    overflow: hidden;
    padding: 30px 0 0 0;
    .ui-repeart {
      display: flex;
      flex-wrap: wrap;
      .repeart-item {
        width: 33.33%;
        text-align: center;
        margin-bottom: 30px;
        .ui-icon {
          color: $brand-yellow;
          font-size: 50px;
          margin-bottom: 30px;
        }
        .ui-text {
          font-size: 26px;
          color: $text-dark;
        }
      }
    }
  }
}
</style>
