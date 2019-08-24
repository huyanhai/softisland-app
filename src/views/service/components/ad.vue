<!--
 * @Description: 广告
 * @Author: hyh
 * @since: 2019-08-22 22:07:26
 * @lastTime: 2019-08-23 18:14:33
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="ad white-bg">
    <ul class="ui-repeart">
      <li class="repeart-item" v-for="(item,index) in adList" :key="index" @click="toPath(item)">
        <i class="iconfont r-bg" :class="item.icon"></i>
        <p class="col-text">{{item.title}}</p>
        <p class="col-rtext">{{item.rightText}}</p>
        <i class="iconfont icon-fanhui more"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ad',
  data () {
    return {
      adList: [
        {
          icon: 'icon-laba',
          title: '喇叭服务',
          rightText: '剩余56次',
          path: '/server/laba'
        },
        {
          icon: 'icon-chuzu1',
          title: '出租货架',
          rightText: '',
          path: '/server/huojia'
        },
        {
          icon: 'icon-naozhongshijianjishitixingxianshitongzhimianxing',
          title: '限时货架',
          rightText: '',
          path: '/server/tophuojia',
          query: 'limit'
        },
        {
          icon: 'icon-zhiding',
          title: '置顶货架',
          rightText: '',
          path: '/server/tophuojia',
          query: 'top'
        },
        {
          icon: 'icon-youjian',
          title: '短信服务',
          rightText: '剩余0条',
          path: '/server/buymessage'
        }
      ]
    }
  },
  methods: {
    toPath (item) {
      this.$router.push({
        path: item.path,
        query: {
          pagePath: item.query || ''
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/index";
.ad {
  margin: 30px;
  border-radius: 40px;
  padding: 0 30px;
  .ui-repeart {
    .repeart-item {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid $line-gary;
    }
    .r-bg {
      width: 70px;
      height: 70px;
      border-radius: 70px;
      background: $brand-yellow;
      overflow: hidden;
      color: $color-fff;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .col-text {
      font-size: 24px;
      color: $text-dark;
      margin-left: 20px;
    }
    .col-rtext {
      width: 50%;
      flex: 1 0 auto;
      text-align: right;
      font-size: 24px;
      color: $text-lgary;
      padding-right: 40px;
    }
    .more {
      transform: rotate(180deg);
      color: $text-lgary;
    }
  }
}
</style>
