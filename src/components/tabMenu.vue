<!--
 * @Description:tabMenu
 * @Author: hyh
 * @since: 2019-08-19 20:43:22
 * @lastTime: 2019-08-28 16:25:00
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="tabs white-bg">
    <a class="link" :class="{active:checked===item.value}" v-for="(item,index) in tabs" :key="index" @click="switchTab(item)">{{item.text}}</a>
  </div>
</template>

<script>
export default {
  name: 'tabMenu',
  props: {
    tabs: Array
  },
  data () {
    return {
      checked: 1
    }
  },
  methods: {
    switchTab (item) {
      this.checked = item.value
      this.$emit('switchTab', item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index";
.tabs {
  width: 690px;
  height: 88px;
  @include border-radius(88px);
  overflow: hidden;
  margin: 45px auto 0 auto;
  display: flex;
  .link {
    width: 50%;
    text-align: center;
    font-size: 30px;
    color: $text-dark;
    line-height: 88px;
    height: 87px;
    overflow: hidden;
    background: #fff;
    border-bottom: #fff;
    box-sizing: border-box;
    display: block;
    &.active {
      background: $brand-red;
      color: $color-fff;
      @include border-radius(88px);
    }
  }
}
</style>
