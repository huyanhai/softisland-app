<!--
 * @Description:已选区服
 * @Author: hyh
 * @since: 2019-08-14 22:12:56
 * @lastTime: 2019-08-15 20:50:39
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="choose-label">
    已选游戏区服：{{chooseGame.choose_game||'未选择'}}/未选择/未选择
  </div>
</template>
<script>
export default {
  name: 'chooseLabel',
  computed: {
    chooseGame () {
      console.log('11')
      return this.$store.state.chooseGame
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/index";
.choose-label {
  width: 690px;
  height: 110px;
  line-height: 110px;
  text-align: center;
  font-size: 26px;
  color: $color-fff;
  @include border-radius(40px);
  margin: 30px 20px 50px 20px;
  @include linder-top-bottom($brand-red, $brand-orange);
}
</style>
