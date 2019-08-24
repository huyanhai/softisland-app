<!--
 * @Description:手机拍照上传
 * @Author: hyh
 * @since: 2019-08-21 13:56:13
 * @lastTime: 2019-08-21 16:06:48
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="load-img">
    <input type="file" accept="image/*" capture="camera" id="img" class="img-file" @change="loadFile" />
    <a class="img-btn red-btn">上传照片</a>
  </div>
</template>

<script>
export default {
  name: 'cameraUpload',
  data () {
    return {}
  },
  methods: {
    loadFile () {
      let _this = this
      let file = document.querySelector('.img-file')
      let reader = new FileReader()
      let fileSize = Math.round(file.files[0].size / 1024 / 1024)
      reader.readAsDataURL(file.files[0])
      reader.onload = function (e) {
        // 压缩图片代码
        _this.compress(reader.result, fileSize)
      }
    },
    compress (res, fileSize) {
      let _this = this
      // res代表上传的图片，fileSize大小图片的大小

      let img = new Image()
      let maxW = 640 // 设置最大宽度
      img.onload = function () {
        let cvs = document.createElement('canvas')
        let ctx = cvs.getContext('2d')

        if (img.width > maxW) {
          img.height *= maxW / img.width
          img.width = maxW
        }

        cvs.width = img.width
        cvs.height = img.height

        ctx.clearRect(0, 0, cvs.width, cvs.height)
        ctx.drawImage(img, 0, 0, img.width, img.height)
        var compressRate = _this.getCompressRate(1, fileSize)
        var dataUrl = cvs.toDataURL('image/jpeg', compressRate)
        _this.$emit('upLoadComplate', { pic: dataUrl })
      }
      img.src = res
    },
    getCompressRate (allowMaxSize, fileSize) { // 计算压缩比率，size单位为MB
      let compressRate = 1
      if (fileSize / allowMaxSize > 4) {
        compressRate = 0.5
      } else if (fileSize / allowMaxSize > 3) {
        compressRate = 0.6
      } else if (fileSize / allowMaxSize > 2) {
        compressRate = 0.7
      } else if (fileSize > allowMaxSize) {
        compressRate = 0.8
      } else {
        compressRate = 0.9
      }
      return compressRate
    }

  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";
.load-img {
  position: relative;
  width: 560px;
  height: 88px;
  margin: 0 auto;
  .img-file {
    position: absolute;
    z-index: 10;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .img-btn {
    position: absolute;
    z-index: 11;
    width: 560px;
    height: 88px;
    line-height: 88px;
    border-radius: 88px;
    background: $brand-red;
    cursor: pointer;
    pointer-events: none;
    font-size: 36px;
    color: $color-fff;
    text-align: center;
  }
}
</style>
