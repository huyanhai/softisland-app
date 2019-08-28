<!--
 * @Description:回复评价
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-28 16:34:32
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="apply">
    <head-bar :barTitle="barTitle">
      <div class="search-btn" slot="right">
        <a class="ui-cancel" @click="save">回复</a>
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
              <span class="label">货架编号：</span>
              <input class="ui-input" type="text" name="" v-model="goodsNo" placeholder="">
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
          订单评价信息
        </template>
        <template slot="card-hd-right">
          <p class="text-right">来自159****5151的评价</p>
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item hei-in">
              <p class="con-text">租客评论了很多字很多字很多字很多字租客评论了很多都超 过一行了，所以换行显示 </p>
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          回复租客评价
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item textarea-item">
              <textarea class="ui-input ui-textarea" v-model="reason" placeholder="请输入您的回复内容" maxlength="30"></textarea>
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          游戏截图
        </template>
        <template slot="card-bd">
          <ul class="info-bd img-upload">
            <li class="upload" v-for="(item,index) in picList" :key="index">
              <img :src="item" class="img" v-if="item" />
            </li>
          </ul>
        </template>
      </card>
    </div>
    <div class="tips">
      温馨提示： 如果在账号出租中，发现租号方使用了外挂或者有违反约定的行为，您可以点击<a class="color-orange" @click="complain">投诉</a>或<a class="color-orange" @click="joinBlackList">拉入黑名单</a>
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
  name: 'reply',
  data () {
    return {
      barTitle: '回复评价',
      orderNo: '2212312',
      zkinfo: '13423433211',
      orderPay: '3元',
      orderYj: '0元',
      goodsNo: '32323212',
      beginTime: '2019-08-01 16:47:23',
      endTime: '2019-08-01 16:47:23',
      gameName: '英雄联盟',
      gameServer: '战争学院',
      gameRole: '一条会喊666的咸鱼',
      gameAcc: '1232312',
      reason: '',
      picList: ['https://hbimg.huabanimg.com/664e34357078add647fbbe15002c838c492dcd6a4ec62-Wmzm4v_fw658', 'https://hbimg.huabanimg.com/664e34357078add647fbbe15002c838c492dcd6a4ec62-Wmzm4v_fw658', 'https://hbimg.huabanimg.com/664e34357078add647fbbe15002c838c492dcd6a4ec62-Wmzm4v_fw658'],
      totalShow: false
    }
  },
  components: {
    headBar,
    card,
    Totals
  },
  created () {
    this.$emit('footer', false)
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
    },
    joinBlackList () {
      this.$router.push({
        path: '/blacklist/join-blacklist'
      })
    },
    complain () {
      this.$router.push({
        path: '/blacklist/complain'
      })
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
          font-size: 26px;
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
        color: $brand-orange;
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
          color: $brand-orange;
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
}
</style>
