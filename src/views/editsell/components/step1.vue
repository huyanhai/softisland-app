<!--
 * @Description:step1
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-28 14:52:59
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div>
    <div class="game-info">
      <div class="info-hd">游戏区服基本信息</div>
      <ul class="info-bd">
        <li class="info-item" @click="goChoose">
          <span class="label">游戏名称</span>
          <input class="ui-input" disabled type="text" name="" v-model="stepOneData.gameName" placeholder="请选择游戏">
          <i class="iconfont icon-fanhui"></i>
        </li>
        <li class="info-item">
          <span class="label">游戏大区</span>
          <input class="ui-input" disabled type="text" name="" v-model="stepOneData.gameRegin" placeholder="请选择游戏区服">
          <i class="iconfont icon-fanhui"></i>
        </li>
        <li class="info-item">
          <span class="label">服务器</span>
          <input class="ui-input" disabled type="text" name="" v-model="stepOneData.gameServer" placeholder="请选择游戏服务器">
          <i class="iconfont icon-fanhui"></i>
        </li>
      </ul>
      <a class="ui-btn" @click="toNext">下一步</a>
    </div>
    <div class="tips">
      温馨提示：<br>
      1、跑跑卡丁车、NBA2KOL等此类游戏删除道具无需二级密码。<br>
      2、考虑到风险问题，请在上架时建议设置押金。<br>
      3、如果发生道具被删除，造成的损失由出租方自己承担责任。<br>
      4、黎明杀机、侠盗猎车手、H1Z1等Steam平台的游戏请直接选择对应游戏。<br>
      5、助手中不支持"启动游戏"功能。
    </div>
  </div>
</template>
<script>
export default {
  name: 'step1',
  props: {
    stepOneData: {
      gameName: '',
      gameRegin: '',
      gameServer: ''
    }
  },
  methods: {
    toNext () {
      this.$emit('stepOne', this.stepOneData)
    },
    goChoose () {
      this.$router.push({
        path: '/my/choose-game'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/index";
.game-info {
  background: $color-fff;
  @include border-radius(40px);
  margin: 30px 20px 50px 20px;
  @include box-shdow-gary();
  box-sizing: border-box;
  padding: 0 30px;
  overflow: hidden;
  .info-hd {
    font-size: 28px;
    color: $text-dark;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px dashed $line-gary;
    font-weight: bold;
  }
  .info-bd {
    .info-item {
      display: flex;
      align-items: center;
      height: 80px;
      line-height: 80px;
      border-bottom: 1px dashed $line-gary;
      &:last-child {
        border-bottom: 1px dashed $line-gary !important;
      }
      .label {
        font-size: 26px;
        color: $text-lgary;
        width: 130px;
        flex: 0 0 auto;
        margin-right: 20px;
      }
      .ui-input {
        flex: 1 0 auto;
        font-size: 26px;
        color: $text-dark;
        background: none;
        border: none;
      }
      .iconfont {
        flex: 0 0 auto;
        transform: rotate(180deg);
        color: $text-lgary;
      }
    }
  }
  .ui-btn {
    width: 560px;
    height: 88px;
    display: block;
    margin: 50px auto;
    text-align: center;
    line-height: 88px;
    color: $color-fff;
    font-size: 36px;
    background: $brand-red;
    box-shadow: 0 4px 5px rgba($shadow-red, 0.35);
    @include border-radius(88px);
  }
}
.tips {
  margin: 0 20px;
  font-size: 22px;
  color: $text-lgary;
  line-height: 40px;
}
</style>
