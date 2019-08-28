<!--
 * @Description: 店铺step2
 * @Author: hyh
 * @since: 2019-08-22 14:48:54
 * @lastTime: 2019-08-27 15:22:02
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="shop-step2-c">
    <div class="card-box">
      <card>
        <template slot="label-name">
          开通时长
        </template>
        <template slot="card-hd-right">
          <p class="shop-right">（必须维护）</p>
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">店铺名称</span>
              <input class="ui-input" type="text" name="" v-model="dataSet.shopName" placeholder="输入店铺名称（10个汉字以内）">
            </li>
            <li class="info-item" @click="toCGame">
              <span class="label">主营栏目</span>
              <input class="ui-input" disabled type="text" name="" v-model="dataSet.shopType" placeholder="请选择您主营的游戏类别">
              <i class="iconfont icon-fanhui"></i>
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          上传图片
        </template>
        <template slot="card-hd-right">
          <p class="shop-right">（必须维护）</p>
        </template>
        <template slot="card-bd">
          <ul class="info-bd img-upload">
            <li class="upload" v-for="(item,index) in dataSet.picList" :key="index">
              <img :src="item" class="img" v-if="item" />
              <i class="loadimg-icon" @click="uploadImgfn(index)" v-if="!item"></i>
              <i class="iconfont icon-shanchu" v-if="item" @click="cleanImg(index)"></i>
              <em class="name">图片名字</em>
            </li>
          </ul>
        </template>
      </card>
    </div>
    <button class="ui-btn active" @click="pay">提交审核</button>
    <p class="tips">查看<a class="color-red" @click="seeTerm">《店铺审核条件》</a> </p>
    <van-overlay :show="show" z-index="1000" />
    <div class="layer-bg" v-if="show">
      <cameraUpload @upLoadComplate="upLoadComplate" />
      <van-uploader :after-read="imgLoadAfter">
        <a class="load" solt="default">本地上传</a>
      </van-uploader>
      <a class="cancel" @click="cancel">取消</a>
    </div>
    <dialogC :dialogShow="dialogShow" @dialogHide="dialogHide">
      <template slot="__hd">
        商户开设店铺审核规则
      </template>
      <template slot="__bd">
        <div class="text">1.申请开通店铺的商户信息和身份证信息必须保持一致。<br>
          2.店铺LOGO不能含有价格、联系方式、特价、一直玩、等暗含诱导性、引导性、与事实不符词汇及色情、暴力、政治等敏感性词汇/图片。<br>
          3.店铺名称不能含有价格、联系方式、特价、一直玩等暗含诱导性、引导性、与事实不符词汇及色情、暴力、政治等敏感性词汇。<br>
          4.店铺简介中不能含有价格、联系方式、特价、一直玩等暗含诱导性、引导性、与事实不符词汇及色情、暴力、政治等敏感性词汇。<br>
          5.身份证正反面和手持身份证照片必须证件清晰且光线明亮。<br>
          6.跳转链接不能跳转到违规货架/账号信息（违规货架/账号信息具体参考审核方面）。如有出现将会按违规进行删除处理。<br>
          7.店铺开通审核时间：从提交申请之日起3个工作日内完成。<br>
          8.店铺基本信息审核时间：从提交申请之日起24小时内完成。</div>
      </template>
      <template slot="__ft">
        <a class="ui-link" @click="dialogHide">我知道了</a>
      </template>
    </dialogC>
  </div>
</template>

<script>
import card from '@/components/card'
import dialogC from '@/components/dialogC'
import cameraUpload from '@/components/cameraUpload'
export default {
  name: 'shopStep2',
  props: {
    dataSet: Object
  },
  data () {
    return {
      show: false,
      index: 0,
      dialogShow: false
    }
  },
  components: {
    card,
    cameraUpload,
    dialogC
  },
  methods: {
    pay () {
      this.$emit('shoptwoSubmit', { data: this.dataSet })
    },
    upLoadComplate (e) {
      this.picList[this.index] = e.pic
      this.$emit('uploadComplate', { pic: e.pic, index: this.index })
      this.show = false
    },
    uploadImgfn (index) {
      this.show = true
      this.index = index
    },
    cleanImg (index) {
      this.$emit('uploadClean', { index: this.index })
    },
    imgLoadAfter (e) {
      this.$emit('uploadComplate', { pic: e.content, index: this.index })
      this.show = false
    },
    cancel () {
      this.show = false
    },
    dialogHide (e) {
      this.dialogShow = e.dialogShow
    },
    seeTerm () {
      this.dialogShow = true
    },
    toCGame () {
      this.$router.push({
        path: '/server/server-cgame'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/index";
.shop-step2-c {
  .img-upload {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    .upload {
      width: 150px;
      height: 150px;
      border: 1px solid #e4e4e4;
      margin-bottom: 60px;
      margin-right: 30px;
      position: relative;
      box-sizing: border-box;
      .name {
        position: absolute;
        width: 100%;
        bottom: -40px;
        font-size: 26px;
        text-align: center;
        font-style: normal;
        color: $text-dark;
      }
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
  .layer-bg {
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
    padding-bottom: 40px;
    overflow: hidden;
    .load-img {
      margin-bottom: 30px;
    }
    .load {
      width: 560px;
      height: 88px;
      text-align: center;
      line-height: 88px;
      background: $brand-red;
      box-shadow: 0 4px 5px rgba($shadow-red, 0.35);
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
    text-align: center;
    .color-red {
      color: $brand-orange;
    }
  }
}
</style>
