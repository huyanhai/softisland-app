<!--
 * @Description:search
 * @Author: hyh
 * @since: 2019-08-13 20:51:32
 * @lastTime: 2019-08-13 23:22:59
 -->
<template>
  <div class="pages page-edit-sell">
    <headBar :barTitle="barTitle"></headBar>
    <steps :stepList="stepList" />
    <div class="game-info">
      <div class="info-hd">游戏区服基本信息</div>
      <ul class="info-bd">
        <li class="info-item">
          <span class="label">游戏名称</span>
          <input class="ui-input" type="text" name="" placeholder="请选择游戏">
          <i class="iconfont icon-fanhui"></i>
        </li>
        <li class="info-item">
          <span class="label">游戏大区</span>
          <input class="ui-input" type="text" name="" placeholder="请选择游戏">
          <i class="iconfont icon-fanhui"></i>
        </li>
        <li class="info-item">
          <span class="label">服务器</span>
          <input class="ui-input" type="text" name="" placeholder="请选择游戏">
          <i class="iconfont icon-fanhui"></i>
        </li>
      </ul>
      <a class="ui-btn">下一步</a>
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
import headBar from '@/components/headBar'
import steps from '@/components/step'
export default {
  name: 'editSell',
  data () {
    return {
      barTitle: '编辑货架',
      stepList: [
        {
          step: 1,
          text: '游戏区服',
          active: true
        }, {
          step: 2,
          text: '账号信息',
          active: false
        }, {
          step: 3,
          text: '出租信息',
          active: false
        }, {
          step: 4,
          text: '增值保障',
          active: false
        }
      ]
    }
  },
  components: {
    headBar,
    steps
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    searchAgain () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.page-edit-sell {
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
      border-bottom: 1px solid $line-gary;
    }
    .info-bd {
      .info-item {
        display: flex;
        align-items: center;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid $line-gary;
        .label {
          font-size: 26px;
          color: $text-lgary;
          width: 130px;
          flex: 0 0 auto;
          text-align: right;
          margin-right: 20px;
        }
        .ui-input {
          flex: 1 0 auto;
          font-size: 26px;
          color: $text-dark;
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
      box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
      @include border-radius(88px);
    }
  }
  .tips {
    margin: 0 20px;
    font-size: 22px;
    color: $text-lgary;
    line-height: 40px;
  }
}
</style>
