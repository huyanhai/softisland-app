<!--
 * @Description:step1
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-16 21:01:19
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div>
    <div class="game-info">
      <div class="info-hd">游戏区服基本信息</div>
      <ul class="info-bd">
        <li class="info-item" @click="goChoose">
          <span class="label">账号归属</span>
          <input class="ui-input" disabled type="text" name="" v-model="stepTwoData.ifFrom" placeholder="请选择账号归属地">
          <i class="iconfont icon-fanhui"></i>
        </li>
        <li class="info-item">
          <span class="label">游戏账号</span>
          <input class="ui-input" type="text" name="" v-model="stepTwoData.gameAcc" placeholder="请选择游戏区服">
        </li>
        <li class="info-item">
          <span class="label">游戏密码</span>
          <input class="ui-input" type="password" name="" v-model="stepTwoData.gamePwd" placeholder="请输入游戏密码">
        </li>
        <li class="info-item">
          <span class="label">游戏角色</span>
          <input class="ui-input" type="text" name="" v-model="stepTwoData.gameRorl" placeholder="请输入角色名称">
        </li>
      </ul>
      <div class="info-hd">货架宣传文案</div>
      <ul class="info-bd">
        <li class="info-item">
          <span class="label">账号标题</span>
          <input class="ui-input" type="text" name="" v-model="stepTwoData.accTitle" placeholder="账号货架标题（最多30字）">
        </li>
        <li class="info-item textarea-item">
          <span class="label">账号宣传</span>
          <textarea class="ui-input ui-textarea" type="text" name="" v-model="stepTwoData.accShow" placeholder="对账号的描述，比如：装备、英雄、皮肤、时装等....（越详细租客越感兴趣哟）"></textarea>
        </li>
      </ul>
      <div class="info-hd">上传账号截图<span class="text">（最多5张，最少1张）</span></div>
      <ul class="info-bd img-upload">
        <li class="upload" v-for="(item,index) in stepTwoData.picList" :key="index">
          <img :src="item" class="img" v-if="item" />
          <i class="loadimg-icon" @click="uploadImgfn('picList',index)" v-if="!item"></i>
          <i class="iconfont icon-shanchu" v-if="item" @click="cleanImg('picList',index)"></i>
        </li>
      </ul>
      <div class="info-hd no-margin-top">上传账号视频<span class="text">（最多3段，每段15秒以内）</span></div>
      <ul class="info-bd img-upload">
        <li class="upload" v-for="(item,index) in stepTwoData.movieList" :key="index">
          <img :src="item" class="img" v-if="item" />
          <i class="loadimg-icon" @click="uploadImgfn('movieList',index)" v-if="!item"></i>
          <i class="iconfont icon-shanchu" v-if="item" @click="cleanImg('movieList',index)"></i>
        </li>
      </ul>
      <a class="ui-btn" @click="toNext">下一步</a>
    </div>
    <van-overlay :show="show" z-index="1000" />
    <div class="layer-bg" v-if="show">
      <van-uploader :after-read="imgLoadAfter">
        <a class="load" solt="default">本地上传</a>
      </van-uploader>
      <a class="cancel" @click="cancel">取消</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'step2',
  props: {
    stepTwoData: {
      ifFrom: '',
      gameAcc: '',
      gamePwd: '',
      gameRorl: '',
      accTitle: '',
      accShow: '',
      picList: [],
      movieList: []
    }
  },
  data () {
    return {
      show: false,
      index: 0,
      arrName: ''
    }
  },
  methods: {
    toNext () {
      this.$emit('stepTwo', this.stepTwoData)
    },
    goChoose () {
      this.$router.push({
        path: '/my/choose-address'
      })
    },
    uploadImgfn (arrname, index) {
      this.show = true
      this.index = index
      this.arrName = arrname
    },
    cleanImg (arrname, index) {
      this.index = index
      this.arrName = arrname
      this.$emit('clearImg', { arrName: this.arrName, index: this.index })
    },
    cancel () {
      this.show = false
    },
    imgLoadAfter (e) {
      console.log(e)
      this.$emit('imgLoad', { arrName: this.arrName, index: this.index, content: e.content })
      this.show = false
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
    border-bottom: 1px solid $line-gary;
    margin-top: 20px;
    .text {
      font-size: 24px;
      color: $text-lgary;
    }
    &:first-child {
      margin-top: 0;
    }
    &.no-margin-top {
      margin-top: 0;
    }
  }
  .info-bd {
    .info-item {
      display: flex;
      align-items: center;
      height: 80px;
      line-height: 80px;
      border-bottom: 1px solid $line-gary;
      &.textarea-item {
        height: initial;
        align-items: baseline;
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
        border: 0;
        &.ui-textarea {
          height: 120px;
        }
      }
      .iconfont {
        flex: 0 0 auto;
        transform: rotate(180deg);
        color: $text-lgary;
      }
    }
    &.img-upload {
      padding-top: 30px;
      display: flex;
      flex-wrap: wrap;
      .upload {
        width: 150px;
        height: 150px;
        border: 1px dashed $line-gary;
        margin-bottom: 20px;
        margin-right: 30px;
        position: relative;
        .loadimg-icon {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url("../assets/images/add.png") no-repeat center center;
          background-size: 50px 50px;
          display: block;
          z-index: 100;
        }
        .iconfont {
          position: absolute;
          color: $brand-yellow;
          top: -14px;
          right: -14px;
          font-size: 30px;
          background: $color-fff;
          width: 30px;
          height: 30px;
          @include border-radius(30px);
          overflow: hidden;
          z-index: 100;
        }
        .img {
          width: 100%;
          height: 100%;
          border: 0;
        }
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
.layer-bg {
  height: 290px;
  position: fixed;
  bottom: 0;
  background: #fff;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 40px;
  .load {
    width: 560px;
    height: 88px;
    text-align: center;
    line-height: 88px;
    background: $brand-red;
    box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
    @include border-radius(88px);
    margin: 0 auto;
    font-size: 36px;
    color: $color-fff;
    display: block;
  }
  .cancel {
    width: 560px;
    height: 88px;
    text-align: center;
    line-height: 88px;
    background: #dfdfdf;
    border-radius: 88px;
    display: block;
    margin: 30px auto 0 auto;
    font-size: 36px;
    color: $text-dark;
  }
}

.tips {
  margin: 0 20px;
  font-size: 22px;
  color: $text-lgary;
  line-height: 40px;
}
</style>
