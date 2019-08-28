<!--
 * @Description:申请理赔
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-27 17:37:12
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="apply">
    <head-bar :barTitle="barTitle">
      <div class="search-btn" slot="right" v-if="pageType==='edit'">
        <a class="ui-cancel" @click="save">提交</a>
      </div>
    </head-bar>
    <div class="card-box">
      <card>
        <template slot="label-name">
          理赔货架
        </template>
        <template slot="card-hd-right" v-if="pageType==='edit'">
          <p class="text-right">货架号可在我出租的账号中查询</p>
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">货架号</span>
              <input class="ui-input" type="text" name="" v-model="goodsNo" placeholder="请输入货架编号">
              <a class="ui-link cborder" v-if="pageType==='edit'">确认</a>
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          账号信息
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">游戏名称</span>
              <input class="ui-input" type="text" name="" v-model="gameName" placeholder="信息将根据确认申请的货架号自动带出">
            </li>
            <li class="info-item">
              <span class="label">游戏区服</span>
              <input class="ui-input" type="text" name="" v-model="gameServer" placeholder="信息将根据确认申请的货架号自动带出">
            </li>
            <li class="info-item">
              <span class="label">角色名称</span>
              <input class="ui-input" type="text" name="" v-model="gameRole" placeholder="信息将根据确认申请的货架号自动带出">
            </li>
            <li class="info-item">
              <span class="label">游戏账号</span>
              <input class="ui-input" type="text" name="" v-model="gameAcc" placeholder="信息将根据确认申请的货架号自动带出">
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          上传截图
        </template>
        <template slot="card-bd">
          <ul class="info-bd img-upload">
            <li class="upload" v-for="(item,index) in picList" :key="index">
              <img :src="item" class="img" v-if="item" />
              <i class="loadimg-icon" @click="uploadImgfn(index)" v-if="!item"></i>
              <i class="iconfont icon-shanchu" v-if="item" @click="cleanImg(index)"></i>
              <em class="name">图片名字</em>
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          客服回复
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item no-border">
              <span class="label">理赔结果</span>
              <input class="ui-input" type="text" name="" v-model="gameName" placeholder="不符合赔付标准，赔付不通过">
            </li>
            <li class="info-item">
              <span class="label">赔付金额</span>
              <em class="ui-input"><em class="color-red">0</em>元</em>
            </li>
          </ul>
        </template>
      </card>
    </div>
    <Totals :totalShow="totalShow" @totalHide="totalHide">
      <i slot="icon" class="iconfont icon-shibai"></i>
      <p slot="text">货架没有购买保障<br>理赔服务或到期</p>
    </Totals>
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
import headBar from '@/components/headBar'
import card from '@/components/card'
import Totals from '@/components/totals'
import cameraUpload from '@/components/cameraUpload'
export default {
  name: 'apply',
  data () {
    return {
      barTitle: '申请理赔',
      goodsNo: '',
      gameName: '',
      gameServer: '',
      gameRole: '',
      gameAcc: '',
      picList: [undefined, undefined, undefined],
      show: false,
      index: 0,
      totalShow: false,
      pageType: ''
    }
  },
  components: {
    headBar,
    card,
    Totals,
    cameraUpload
  },
  created () {
    this.$emit('footer', false)
    this.pageType = this.$route.params.type
    if (this.pageType !== 'edit') {
      this.barTitle = '理赔详情'
    } else {
      this.barTitle = '申请理赔'
    }
    console.log(this.pageType)
  },
  methods: {
    save () {
      this.totalHide()
      // this.$router.go(-1)
    },
    uploadImgfn (index) {
      this.show = true
      this.index = index
    },
    cleanImg (index) {
      this.picList[index] = ''
      this.picList = Object.assign({}, this.picList)
    },
    imgLoadAfter (e) {
      console.log(e)
      this.picList[this.index] = e.content
      this.show = false
    },
    cancel () {
      this.show = false
    },
    totalHide (ctx) {
      if (!this.totalShow) {
        this.totalShow = true
        const timer = setTimeout(() => {
          this.totalShow = false
          clearTimeout(timer)
        }, 3000)
      }
    },
    upLoadComplate (e) {
      console.log(e)
      this.picList[this.index] = e.pic
      this.show = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.apply {
  .search-btn {
    display: flex;
    align-items: center;
    .ui-cancel {
      font-size: 26px;
      color: $brand-orange;
      margin-left: 20px;
    }
  }
  .card-box {
    margin-top: 30px;
    .text-right {
      text-align: right;
      width: 100%;
      margin: 0;
      color: $brand-orange;
      &.weight-font {
        font-size: 28px;
      }
      .link {
        color: $brand-yellow;
        text-decoration: underline;
      }
    }
    .info-bd {
      .ui-link {
        width: 150px;
        height: 50px;
        @include border-radius(50px);
        font-size: 26px;
        color: $brand-red;
        text-align: center;
        line-height: 50px;
      }
      .ui-input {
        font-style: normal;
      }
    }
    .exsearch-bd {
      margin: 10px 0 30px 0;
      .tisp {
        text-align: center;
        font-size: 20px;
        color: $brand-yellow;
        margin-top: 30px;
      }
      .van-radio-group {
        flex-wrap: wrap;
        display: flex;
      }
      .col {
        width: 190px;
        height: 60px;
        color: $text-dark;
        font-size: 26px;
        text-align: center;
        line-height: 60px;
        background: $line-gary;
        @include border-radius(60px);
        text-align: center;
        border-color: $line-gary;
        margin-top: 20px;
        margin-right: 20px;
        &.active {
          color: $brand-red;
          border-color: $brand-red;
          background: none;
          .van-radio__label {
            color: $brand-red;
          }
        }
        .van-radio__icon {
          display: none;
        }
        .van-radio__label {
          text-align: center;
          margin: 0 auto;
        }
      }
    }
    .img-upload {
      padding-top: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 30px;
      .upload {
        width: 150px;
        height: 150px;
        border: 1px solid #e4e4e4;
        margin-bottom: 60px;
        margin-right: 30px;
        position: relative;
        &:last-child {
          margin-right: 0;
        }
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
          background: url("./assets/images/add.png") no-repeat center center;
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
  .input-check {
    height: 50px;
    line-height: 50px;
    text-align: right;
    font-size: 22px;
    color: $text-lgary;
    margin: 0 20px;
  }
  .tips {
    margin: 40px 30px;
    font-size: 22px;
    color: $text-lgary;
    line-height: 40px;
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
}
</style>
