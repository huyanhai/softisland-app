<!--
 * @Description:
 * @Author: huyanhai
 * @since: 2019-08-10 15:20:42
 * @lastTime: 2019-08-10 16:17:26
 -->
<template>
  <div class="tab-nav">
    <div class="tab-nav-hd">
      <span class="tab" @click="tabChange(index)" :class="{active:index===showIndex}" v-for="(item,index) in tabTitle" :key="index">{{item}}</span>
    </div>
    <div class="tab-nav-bd">
      <div class="tab-item" v-for="(item,index) in tabTitle" :key="index">
        <slot :name="'tab'+index" v-if="index === showIndex" class="item"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tanNav',
  props: {
    tabTitle: Array
  },
  data () {
    return {
      showIndex: 0
    }
  },
  methods: {
    tabChange (e) {
      this.showIndex = e
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
.tab-nav {
  .tab-nav-hd {
    height: 80px;
    line-height: 80px;
    .tab {
      font-size: 24px;
      color: $text-gary;
      float: left;
      width: 120px;
      display: block;
      position: relative;
      &.active {
        &::before {
          position: absolute;
          width: 25px;
          height: 3px;
          background: $brand-orange;
          content: "";
          bottom: 10px;
          left: 34px;
        }
      }
    }
  }
  .tab-nav-bd {
    margin-top: 30px;
    .tab-item {
      .no-data {
        min-height: 100px;
        text-align: center;
        font-size: 24px;
        color: $text-lgary;
      }
    }
  }
}
</style>
