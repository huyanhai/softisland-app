<!--
 * @Description:错误页面
 * @Author: hyh
 * @since: 2019-08-10 18:49:09
 * @lastTime: 2019-08-17 21:31:29
 -->
<template>
  <div class="pages page-error">
    <div class="page-error-box" v-if="pageType==='page404'">
      <i class="iconfont icon-icon-test icon-404"></i>
      <span>
        <p class="tips">抱歉，您访问的页面不存在</p>
      </span>
      <a class="link" @click="goHome">返回首页</a>
    </div>
    <div class="page-error-box" v-else-if="pageType==='page500'">
      <i class="iconfont icon-icon-test1 icon-500"></i>
      <span>
        <p class="tips">抱歉，服务器出错了</p>
      </span>
      <a class="link">返回首页</a>
    </div>
    <div class="page-error-box" v-else>
      <i class="iconfont icon-wuwangluo"></i>
      <span>
        <p class="tips">网络不给力</p>
        <p class="ui-text">世界上最遥远的距离，莫过于网路不给力</p>
      </span>
      <a class="link" @click="reFresh">刷新</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'error',
  data () {
    return {
      pageType: String
    }
  },
  created () {
    this.$emit('footer', false)
    this.pageType = this.$route.params.errorCode || ''
  },
  methods: {
    reFresh () {
      this.$router.go(0)
    },
    goHome () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.page-error-box {
  text-align: center;
  .iconfont {
    font-size: 200px;
    color: $text-gary;
    padding: 180px 0 60px 0;
    display: block;
    &.icon-404,
    &.icon-500 {
      font-size: 300px;
      padding-top: 100px;
    }
  }
  .ui-text {
    font-size: 26px;
    color: $text-gary;
    display: block;
  }
  .tips {
    font-size: 28px;
    color: $text-dark;
    display: block;
    margin: 0;
  }
  .link {
    display: block;
    width: 180px;
    height: 60px;
    @include border-radius(60px);
    background: $brand-red;
    box-shadow: 0 4px 5px rgba($shadow-red, 0.35);
    font-size: 26px;
    line-height: 60px;
    color: $color-fff;
    text-align: center;
    margin: 70px auto 0 auto;
  }
}
</style>
