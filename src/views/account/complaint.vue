<!--
 * @Description:回复评价
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-21 21:43:29
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="complaint">
    <head-bar :barTitle="barTitle">
      <div class="search-btn" slot="right">
        <a class="ui-cancel" @click="save" v-if="pageType==='edit'">申述</a>
      </div>
    </head-bar>
    <div class="card-box">
      <card>
        <template slot="label-name">
          订单信息
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item col-5 no-border">
              <span class="label">订单号：</span>
              <input class="ui-input" type="text" name="" v-model="orderNo" placeholder="">
            </li>
            <li class="info-item col-5 no-border">
              <span class="label">租客：</span>
              <input class="ui-input" type="text" name="" v-model="zkinfo" placeholder="">
            </li>
            <li class="info-item col-5 no-border">
              <span class="label">订单租金：</span>
              <input class="ui-input" type="text" name="" v-model="orderPay" placeholder="">
            </li>
            <li class="info-item col-5 no-border">
              <span class="label">订单押金：</span>
              <input class="ui-input" type="text" name="" v-model="orderYj" placeholder="">
            </li>
            <li class="info-item no-border">
              <span class="label">订单状态：</span>
              <input class="ui-input" type="text" name="" v-model="status" placeholder="">
            </li>
            <li class="info-item no-border">
              <span class="label">开始时间：</span>
              <input class="ui-input" type="text" name="" v-model="beginTime" placeholder="">
            </li>
            <li class="info-item no-border">
              <span class="label">结束时间：</span>
              <input class="ui-input" type="text" name="" v-model="endTime" placeholder="">
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
            <li class="info-item no-border">
              <span class="label">游戏名称</span>
              <input class="ui-input" type="text" name="" v-model="gameName" placeholder="信息将根据确认申请的货架号自动带出">
            </li>
            <li class="info-item no-border">
              <span class="label">游戏区服</span>
              <input class="ui-input" type="text" name="" v-model="gameServer" placeholder="信息将根据确认申请的货架号自动带出">
            </li>
            <li class="info-item no-border">
              <span class="label">角色名称</span>
              <input class="ui-input" type="text" name="" v-model="gameRole" placeholder="信息将根据确认申请的货架号自动带出">
            </li>
            <li class="info-item no-border">
              <span class="label">游戏账号</span>
              <input class="ui-input" type="text" name="" v-model="gameAcc" placeholder="信息将根据确认申请的货架号自动带出">
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          租客投诉内容
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item no-border">
              <span class="label">投诉类型</span>
              <input class="ui-input" type="text" name="" v-model="tsType" placeholder="信息将根据确认申请的货架号自动带出">
            </li>
            <li class="info-item no-border">
              <span class="label">投诉留言</span>
              <input class="ui-input" type="text" name="" v-model="tsMsg" placeholder="信息将根据确认申请的货架号自动带出">
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          租客仲裁结果
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item hei-in">
              <p class="con-text">尊敬的租客您好，租用时长未满15分钟，同意退单，返还全部租金，同时给您增加一次撤单记录，当达到一定撤单率，系统将限制租客租用任何帐号，请保持自己的租号信誉。谢谢您对平台的支持！ 租方收回租金 1.3 元，支付租金 0元。</p>
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          我要申述
        </template>
        <template slot="card-bd">
          <div class="exsearch-bd1">
            <van-radio-group v-model="cmodels" v-if="pageType==='edit'">
              <van-radio :name="item.value" class="col cborder" :class="{active:cmodels===item.value}" v-for="(item,index) in accList" :key="index">{{item.name}}</van-radio>
            </van-radio-group>
          </div>
          <ul class="info-bd">
            <li class="info-item textarea-item">
              <textarea class="ui-input ui-textarea" v-model="reason" placeholder="请填写投诉理由（30字以内）" maxlength="30"></textarea>
            </li>
          </ul>
        </template>
      </card>
    </div>
    <Totals :totalShow="totalShow" @totalHide="totalHide">
      <i slot="icon" class="iconfont icon-shibai"></i>
      <p slot="text">回复失败<br>请描述回复内容</p>
    </Totals>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import card from '@/components/card'
import Totals from '@/components/totals'
export default {
  name: 'complaint',
  data () {
    return {
      barTitle: '投诉申述',
      orderNo: '2212312',
      zkinfo: '13423433211',
      orderPay: '3元',
      orderYj: '0元',
      status: '已撤单',
      beginTime: '2019-08-01 16:47:23',
      endTime: '2019-08-01 16:47:23',
      gameName: '英雄联盟',
      gameServer: '战争学院',
      gameRole: '一条会喊666的咸鱼',
      gameAcc: '1232312',
      tsType: '账号密码错误',
      tsMsg: '账号密码错误',
      reason: '',
      totalShow: false,
      pageType: '',
      cmodels: '1',
      accList: [{
        name: '租方开挂',
        value: '1'
      }, {
        name: '租方打排位',
        value: '2'
      }, {
        name: '账号被封',
        value: '3'
      }, {
        name: '租客违规',
        value: '4'
      }]
    }
  },
  components: {
    headBar,
    card,
    Totals
  },
  created () {
    this.$emit('footer', false)
    this.pageType = this.$route.params.type
    if (this.pageType !== 'edit') {
      this.barTitle = '申述查看'
    } else {
      this.barTitle = '投诉申述'
    }
    console.log(this.pageType)
  },
  methods: {
    save () {
      if (!this.reason) {
        this.totalHide()
      }
      // this.$router.go(-1)
    },
    totalHide (ctx) {
      if (!this.totalShow) {
        this.totalShow = true
        const timer = setTimeout(() => {
          this.totalShow = false
          clearTimeout(timer)
        }, 3000)
      }
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.complaint {
  .search-btn {
    display: flex;
    align-items: center;
    .ui-cancel {
      font-size: 26px;
      color: $brand-yellow;
      margin-left: 20px;
    }
  }
  .card-box {
    margin-top: 30px;
    .text-right {
      text-align: right;
      width: 100%;
      margin: 0;
      &.weight-font {
        font-size: 28px;
      }
      .link {
        color: $brand-yellow;
        text-decoration: underline;
      }
    }
    .info-bd {
      .info-item {
        float: left;
        width: 100%;
        .con-text {
          margin: 20px 0;
          font-size: 24px;
          color: $text-lgary;
          line-height: 50px;
        }
        .label {
          width: initial;
        }
        &.col-5 {
          width: 50%;
        }
      }
      .ui-link {
        width: 150px;
        height: 50px;
        @include border-radius(50px);
        font-size: 24px;
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
        font-size: 24px;
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
      .upload {
        width: 150px;
        height: 150px;
        border: 1px dashed $line-gary;
        margin-bottom: 60px;
        margin-right: 30px;
        position: relative;
        .name {
          position: absolute;
          width: 100%;
          bottom: -40px;
          font-size: 24px;
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
  .exsearch-bd1 {
    .van-radio-group {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
    }
    .col {
      width: 150px;
      height: 60px;
      color: $text-dark;
      font-size: 24px;
      text-align: center;
      line-height: 60px;
      background: $line-gary;
      @include border-radius(60px);
      text-align: center;
      border-color: $line-gary;
      margin-top: 20px;
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
  .tips {
    margin: 40px 30px;
    font-size: 22px;
    color: $text-lgary;
    line-height: 40px;
  }
}
</style>
