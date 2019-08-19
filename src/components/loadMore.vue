<!--
 * @Description:loadMore
 * @Author: hyh
 * @since: 2019-08-17 11:52:18
 * @lastTime: 2019-08-17 16:24:05
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="load-more" v-if="showLoad">
    <i class="iconfont icon-jiazai"></i>
    <p class="text">加载更多</p>
  </div>
</template>
<script>
export default {
  name: 'loadMore',
  props: {
    showLoad: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
.load-more {
  height: 80px;
  line-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: $text-gary;
  .iconfont {
    margin-right: 10px;
  }
}
</style>
