<!--
 * @Description:
 * @Author: hyh
 * @since: 2019-08-10 18:21:37
 * @lastTime: 2019-08-24 13:38:16
 -->
<template>
  <div class="pages page-my">
    <head-bar :barTitle="barTitle"></head-bar>
    <router-view @footer="footerFn" @changTitle="changTitle" />
  </div>
</template>
<script>
import headBar from '@/components/headBar'
export default {
  name: 'my',
  data () {
    return {
      barTitle: '我的17租号'
    }
  },
  components: {
    headBar
  },
  created () {
    this.$emit('footer', true)
  },
  methods: {
    footerFn (e) {
      this.$emit('footer', e)
    },
    changTitle (e) {
      this.barTitle = e
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
</style>
