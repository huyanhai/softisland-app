<!--
 * @Description: 消息中心
 * @Author: hyh
 * @since: 2019-08-10 20:51:07
 * @lastTime: 2019-08-28 14:29:48
 -->
<template>
  <div class="msg-box">
    <div class="cust-server">
      <router-link to="/message/session">
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
      </router-link>
      <router-link to="/message/msg-list">
        <div class="col">
          <span class="col-l">
            <i class="iconfont icon-kefu"></i>
            <i class="message" v-if="!message">2</i>
          </span>
          <span class="col-r">
            <p class="name">我的客户</p>
            <p class="text">
              <em class="num">185XXXX89</em>
              <em class="num">185XXXX89</em>
              <em class="num">185XXXX89</em>
            </p>
          </span>
        </div>
      </router-link>
    </div>
    <div class="msg-list" v-if="myMessage.length>0">
      <ul class="ui-repeart">
        <li class="repeart-item" v-for="(item,index) in myMessage" :key="index" @click="toDetail(item)">
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
    <div class="no-data" v-else>
      <i class="iconfont icon-emptydata"></i>
      <p class="text">暂无消息</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'message',
  data () {
    return {
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
  created () {
    this.$emit('header', true)
  },
  methods: {
    toDetail (e) {
      this.$router.push({
        path: '/message/detail'
      })
    }
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
    a {
      .col {
        display: flex;
        align-items: center;
        padding: 30px 0;
        border-bottom: 1px solid $line-red !important;

        .col-l {
          width: 70px;
          height: 70px;
          background: $color-fff;
          border-radius: 70px;
          flex: 0 0 auto;
          text-align: center;
          margin-right: 30px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
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
            font-size: 36px;
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
          }
          .text {
            font-size: 26px;
            color: $color-fff;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

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
      &:last-child {
        .col {
          border-bottom: 0 !important;
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
            font-size: 26px;
            color: $text-lgary;
            line-height: 40px;
          }
        }
      }
    }
  }
  .no-data {
    text-align: center;
    margin-top: 100px;
    .iconfont {
      font-size: 200px;
      color: $text-lgary;
      display: block;
      margin-bottom: 20px;
    }
    .text {
      font-size: 26px;
      line-height: 40px;
      color: $text-lgary;
      display: block;
    }
  }
}
</style>
