<!--
 * @Description: 聊天界面
 * @Author: hyh
 * @since: 2019-08-24 10:38:36
 * @lastTime: 2019-08-28 14:31:39
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="session-msg">
    <div v-for="(item,index) in msgcontant" :key="index">
      <div class="other-box" v-if="item.type==='other'">
        <p class="time">{{item.times}}</p>
        <div class="other">
          <div class="user-img red-btn">
            <img :src="item.userImg" class="ui-img" />
          </div>
          <div class="contant">{{item.contant}}</div>
        </div>
      </div>
      <div class="me-box" v-else>
        <p class="time">{{item.times}}</p>
        <div class="me">
          <div class="contant">{{item.contant}}</div>
          <div class="user-img red-btn">
            <img :src="item.userImg" class="ui-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="input-msg">
      <i class="iconfont icon-jiahao add"></i>
      <div class="input-box">
        <input type="text" class="ui-input" v-model="inputMsg" />
        <i class="iconfont icon-biaoqing emjoy"></i>
      </div>
      <i class="iconfont icon-fasong send" @click="sendMsg"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'session',
  data () {
    return {
      barTitle: '租客：1254893545',
      inputMsg: '',
      msgcontant: [
        {
          type: 'other',
          times: '4月30日 上午12:00',
          userImg: 'https://hbimg.huabanimg.com/b99b792f7ecb610bf079ce1e33677f64d62f7b52322f6-5tXasY_fw658',
          contant: '亲~~网络波动会造成间隙性的登录异常，请尝试重新登录一下；如果反复出现此类，及时投诉/退款，投诉留言请写明具体原因/对当前状态截屏，后台客服将在十五分钟内处理，请留意处理结果。'
        },
        {
          type: 'me',
          times: '4月30日 上午12:00',
          userImg: 'https://hbimg.huabanimg.com/b99b792f7ecb610bf079ce1e33677f64d62f7b52322f6-5tXasY_fw658',
          contant: '你在说什么'
        }
      ]
    }
  },
  created () {
    setTimeout(() => {
      this.$emit('changTitle', this.barTitle)
      this.$emit('footer', false)
    }, 100)
    this.$emit('header', false)
  },
  destroyed () {
    this.$emit('changTitle', '消息通知')
    this.$emit('footer', true)
  },
  methods: {
    sendMsg () {
      if (this.inputMsg) {
        this.msgcontant.push({
          type: 'me',
          times: '4月30日 上午12:00',
          userImg: 'https://hbimg.huabanimg.com/b99b792f7ecb610bf079ce1e33677f64d62f7b52322f6-5tXasY_fw658',
          contant: this.inputMsg
        })
        this.inputMsg = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/index";
.session-msg {
  margin-top: 50px;
  .other-box {
    position: relative;
    overflow: hidden;
    padding: 0px 30px 50px 30px;
    .time {
      width: 100%;
      font-size: 22px;
      color: $text-gary;
      text-align: center;
      margin: 0;
      margin-bottom: 20px;
    }
    .other {
      display: block;
      position: relative;
      display: flex;
      max-width: 90%;
      .user-img {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        overflow: hidden;
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .ui-img {
          width: 80%;
          height: 80%;
        }
      }

      .contant {
        position: relative;
        border-radius: 40px;
        background: $color-fff;
        padding: 20px 30px;
        margin-left: 30px;
        font-size: 26px;
        color: $text-dark;
        line-height: 40px;
        @include box-shdow-gary();
        display: flex;
        align-items: center;
        &::before {
          content: "";
          width: 20px;
          height: 20px;
          position: absolute;
          background: $color-fff;
          transform: rotate(45deg);
          left: -10px;
          top: 40px;
        }
      }
    }
  }
  .me-box {
    position: relative;
    clear: both;
    overflow: hidden;
    padding: 0px 30px 50px 30px;
    .time {
      width: 100%;
      font-size: 22px;
      color: $text-gary;
      text-align: center;
      overflow: hidden;
      margin: 0;
      margin-bottom: 20px;
    }
    .me {
      display: block;
      position: relative;
      display: flex;
      max-width: 90%;
      float: right;
      .user-img {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        overflow: hidden;
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .ui-img {
          width: 80%;
          height: 80%;
        }
      }

      .contant {
        position: relative;
        border-radius: 40px;
        background: $brand-yellow;
        padding: 20px 30px;
        margin-right: 30px;
        font-size: 26px;
        color: $color-fff;
        line-height: 40px;
        @include box-shdow-gary();
        display: flex;
        align-items: center;
        &::before {
          content: "";
          width: 20px;
          height: 20px;
          position: absolute;
          background: $brand-yellow;
          transform: rotate(45deg);
          right: -10px;
          top: 40px;
        }
      }
    }
  }
  .input-msg {
    position: fixed;
    width: 100%;
    height: 98px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $color-fff;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 0 30px;
    .add {
      font-size: 40px;
      flex: 0 0 auto;
      text-align: center;
      line-height: 60px;
      margin-right: 20px;
      color: $text-dark;
    }
    .input-box {
      height: 66px;
      border-radius: 66px;
      overflow: hidden;
      position: relative;
      background: $line-gary;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      flex: 1 0 auto;
      .ui-input {
        width: 100%;
        height: 100%;
        border: 0;
        margin: 0 80px 0 20px;
        background: none;
        font-size: 26px;
        display: block;
      }
      .emjoy {
        flex: 0 0 auto;
        font-size: 40px;
        position: absolute;
        right: 20px;
        color: $text-lgary;
      }
    }
    .send {
      font-size: 40px;
      flex: 0 0 auto;
      text-align: center;
      line-height: 60px;
      margin-left: 20px;
      color: $brand-red;
    }
  }
}
</style>
