<!--
 * @Description: 图片上传弹层
 * @Author: hyh
 * @since: 2019-08-24 13:22:19
 * @lastTime: 2019-08-24 14:06:13
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="upload-img-c">
    <van-overlay :show="show" z-index="1000" />
    <div class="layer-bg" v-if="show">
      <cameraUpload @upLoadComplate="upLoadComplate" />
      <van-uploader :after-read="imgLoadAfter">
        <a class="load" solt="default">本地上传</a>
      </van-uploader>
      <a class="cancel" @click="cancel">取消</a>
    </div>
  </div>
</template>

<script>
import cameraUpload from '@/components/cameraUpload'
export default {
  name: 'loadImg',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  components: {
    cameraUpload
  },
  methods: {
    upLoadComplate (e) {
      this.$emit('uploadComplate', { pic: e.pic })
    },
    imgLoadAfter (e) {
      this.$emit('uploadComplate', { pic: e.content })
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
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
</style>
