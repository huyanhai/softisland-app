<!--
 * @Description: 店铺step2
 * @Author: hyh
 * @since: 2019-08-22 14:48:54
 * @lastTime: 2019-08-23 21:41:35
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="shop-step3-c">
    <div class="card-box">
      <card>
        <template slot="label-name">
          店铺审核状态
        </template>
        <template slot="card-bd">
          <div class="shop-status">
            <div class="doing col" v-if="status==='doing'">
              <p class="text">您的店铺信息已提交审核</p>
              <p class="s-text">当前客服正在审核中</p>
              <i class="iconfont icon-shenhezhong"></i>
            </div>
            <div class="fail col" v-else>
              <p class="text">您的店铺申请被驳回</p>
              <p class="s-text">前往<a class="link">修改店铺信息</a></p>
              <i class="iconfont icon-shenhezhong"></i>
            </div>
          </div>
        </template>
      </card>
      <card>
        <template slot="label-name">
          客服审核状态
        </template>
        <template slot="card-bd">
          <ul class="message">
            <li class="message-item">
              <span class="msg-hd">
                <p class="col-left">客服回复</p>
                <p class="col-right">2019-07-08 12:45:48</p>
              </span>
              <p class="msg-bd">我写了很对信息这里展示留言内容，如果文字很多可以满行后换行，但最多可以显示50字</p>
            </li>
            <li class="message-item">
              <span class="msg-hd">
                <p class="col-left">客服回复</p>
                <p class="col-right">2019-07-08 12:45:48</p>
              </span>
              <p class="msg-bd">我写了很对信息这里展示留言内容，如果文字很多可以满行后换行，但最多可以显示50字</p>
            </li>
          </ul>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
  name: 'shopStep2',
  props: {
    dataSet: Object
  },
  data () {
    return {
      status: 'doing'
    }
  },
  components: {
    card
  },
  methods: {
    pay () {
      this.$emit('shoptwoSubmit', { data: this.dataSet })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/index";
.shop-step3-c {
  .shop-status {
    height: 200px;
    display: flex;
    align-items: center;
    position: relative;
    .col {
      padding-left: 220px;
      .iconfont {
        position: absolute;
        left: 20px;
        color: $brand-orange;
        font-size: 160px;
        top: 0;
        transform: rotate(-30deg);
      }
      .text {
        font-size: 26px;
        color: $text-dark;
        margin: 0 0 20px 0;
      }
      .s-text {
        font-size: 26px;
        color: $text-dark;
        margin: 0;
      }
      .link {
        color: $brand-orange;
        text-decoration: underline;
      }
      &.fail {
        .iconfont {
          color: $text-gary;
        }
      }
    }
  }
  .message {
    .message-item {
      padding: 0 0 30px 0;
      border-bottom: 1px dashed $line-gary;
      .msg-hd {
        height: 80px;
        line-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        .col-left {
          font-size: 26px;
          color: $text-dark;
          flex: 0 0 auto;
          margin: 0;
        }
        .col-right {
          font-size: 22px;
          color: $text-lgary;
          flex: 1 0 auto;
          text-align: right;
          margin: 0;
          width: 50%;
        }
      }
      .msg-bd {
        font-size: 22px;
        color: $text-lgary;
        line-height: 40px;
        margin: 0;
        color: $text-gary;
      }
    }
  }
}
</style>
