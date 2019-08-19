<!--
 * @Description:图片上传组件
 * @Author: hyh
 * @since: 2019-08-15 22:05:42
 * @lastTime: 2019-08-17 11:56:22
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="load-box">
    <van-overlay :show="show" />
    <div class="layer-bg">
      <van-uploader>
        <van-button icon="photo" type="primary">上传图片</van-button>
      </van-uploader>
      <a class="cancel"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'upload',
  props: {
    show: Boolean
  },
  methods: {
    loaded (e) {
      console.log(e)
      this.$emit('uploadComplate', e)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
.load-box {
  .layer-bg {
    height: 290px;
    position: fixed;
    bottom: 0;
    background: #fff;
  }
  .cancel {
    width: 560px;
    height: 88px;
    text-align: center;
    line-height: 88px;
    background: #dfdfdf;
    border-radius: 88px;
  }
}
</style>
