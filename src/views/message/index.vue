<!--
 * @Description:
 * @Author: huyanhai
 * @since: 2019-08-10 20:51:07
 * @lastTime: 2019-08-10 21:49:27
 -->
<template>
  <div class="pages page-message">
    <head-bar :barTitle="barTitle"></head-bar>
    <div class="msg-box">
      <div class="cust-server">
        <div class="col">
          <span class="col-l">
            <i class="iconfont icon-kefu1"></i>
            <i class="message" v-if="message">2</i>
          </span>
          <span class="col-r">
            <p class="name">平台客服</p>
            <p class="text">亲爱的17369玩家，您好！很高兴为您服务！</p>
          </span>
        </div>
        <div class="col">
          <span class="col-l">
            <i class="iconfont icon-kefu1"></i>
            <i class="message" v-if="!message">2</i>
          </span>
          <span class="col-r">
            <p class="name">我的客服</p>
            <p class="text">
              <em class="num">185XXXX89</em>
              <em class="num">185XXXX89</em>
              <em class="num">185XXXX89</em>
            </p>
          </span>
        </div>
      </div>
      <div class="msg-list">
        <ul class="ui-repeart">
          <li class="repeart-item" v-for="(item,index) in myMessage" :key="index">
            <span class="col">
              <p class="title">{{item.title}}</p>
              <p class="time" :class="{'no-read':!item.isRead}">{{item.time}}</p>
            </span>
            <span class="col">
              <p class="text">{{item.text}}</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
export default {
  name: 'message',
  data () {
    return {
      barTitle: '消息通知',
      message: true,
      myMessage: [
        {
          title: '您的红包即将到期~',
          time: '2019/7/20 09:27:45',
          text: '为了回馈大家长期的信任，17369给大家送红包啦！邀请好友赢取高额奖励，还在等什么？赶快......',
          isRead: true
        }, {
          title: '您的红包即将到期~',
          time: '2019/7/20 09:27:45',
          text: '为了回馈大家长期的信任，17369给大家送红包啦！邀请好友赢取高额奖励，还在等什么？赶快......',
          isRead: true
        }, {
          title: '您的红包即将到期~',
          time: '2019/7/20 09:27:45',
          text: '为了回馈大家长期的信任，17369给大家送红包啦！邀请好友赢取高额奖励，还在等什么？赶快......',
          isRead: true
        }, {
          title: '您的红包即将到期~',
          time: '2019/7/20 09:27:45',
          text: '为了回馈大家长期的信任，17369给大家送红包啦！邀请好友赢取高额奖励，还在等什么？赶快......',
          isRead: false
        }
      ]
    }
  },
  components: {
    headBar
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.msg-box {
  margin: 30px 30px 0 30px;
  .cust-server {
    @include linder-top-bottom(#ff1e58, #ff946e);
    @include border-radius(40px);
    overflow: hidden;
    padding: 0 30px;
    margin-bottom: 30px;
    .col {
      display: flex;
      align-items: center;
      padding: 30px 0;
      border-bottom: 1px solid $line-red;
      &:last-child {
        border: 0;
      }
      .col-l {
        width: 70px;
        height: 70px;
        background: $color-fff;
        border-radius: 70px;
        flex: 0 0 auto;
        text-align: center;
        margin-right: 30px;
        position: relative;
        .message {
          position: absolute;
          height: 30px;
          line-height: 30px;
          display: block;
          border-radius: 30px;
          background: $brand-orange;
          color: $color-fff;
          font-size: 20px;
          top: -8px;
          left: 44px;
          font-style: normal;
          padding: 0 10px;
          transform: scale(0.8);
        }
        .iconfont {
          font-size: 30px;
          color: $brand-yellow;
        }
      }
      .col-r {
        flex: 1 0 auto;
        width: 50%;
        .name {
          font-size: 26px;
          color: $color-fff;
          margin-bottom: 10px;
          font-family: $pf-med;
        }
        .text {
          font-size: 24px;
          color: $color-fff;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-family: $pf-light;
          .num {
            width: 33.33%;
            font-style: normal;
            display: inline-block;
          }
        }
        p {
          margin: 0;
        }
      }
    }
  }
  .msg-list {
    @include border-radius(40px);
    @include box-shdow-gary();
    overflow: hidden;
    background: $color-fff;
    padding: 0 30px;
    .ui-repeart {
      .repeart-item {
        display: flex;
        flex-direction: column;
        padding: 30px 0 10px 0;
        border-bottom: 1px dashed $line-gary;
        .col {
          position: relative;
          margin-bottom: 20px;
          p {
            margin: 0;
          }
          .title {
            font-size: 26px;
            color: $text-dark;
            max-width: 50%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .time {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 20px;
            color: $text-lgary;
            &::after {
              background: url("./assets/images/read.png") no-repeat;
              width: 18px;
              height: 22px;
              background-size: 18px 22px;
              content: "";
              display: inline-block;
              margin-left: 10px;
            }
            &.no-read {
              &::after {
                background: url("./assets/images/no-read.png") no-repeat;
                width: 18px;
                height: 22px;
                background-size: 18px 22px;
                content: "";
                display: inline-block;
                margin-left: 10px;
              }
            }
          }
          .text {
            font-size: 24px;
            color: $text-lgary;
            line-height: 40px;
          }
        }
      }
    }
  }
}
</style>
