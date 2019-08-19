<!--
 * @Description:合租留言
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-17 16:24:36
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="buy-top">
    <head-bar :barTitle="barTitle">
      <div class="search-btn" slot="right">
        <a class="ui-cancel" @click="save">保存</a>
      </div>
    </head-bar>
    <div class="card-box">
      <card>
        <template slot="label-name">
          账号概况
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item">
              <span class="label">游戏账号</span>
              <input class="ui-input" type="text" name="" v-model="shopId" placeholder="请选择游戏">
            </li>
            <li class="info-item">
              <span class="label">游戏区服</span>
              <input class="ui-input" type="text" name="" v-model="gameServer" placeholder="请选择游戏">
            </li>
            <li class="info-item">
              <span class="label">角色名称</span>
              <input class="ui-input" type="text" name="" v-model="roleName" placeholder="请选择游戏">
            </li>
            <li class="info-item">
              <span class="label">分成比例</span>
              <input class="ui-input" type="text" name="" v-model="surplusNo" placeholder="请选择游戏">
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          货架宣传文案
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item textarea-item">
              <textarea class="ui-input ui-textarea" placeholder="请输入您想留言的信息（50字以内)"></textarea>
            </li>
          </ul>
        </template>
      </card>
      <card>
        <template slot="label-name">
          历史交流记录
        </template>
        <template slot="card-bd">
          <ul class="message">
            <li class="message-item">
              <span class="msg-hd">
                <p class="col-left">我的留言</p>
                <p class="col-right">2019-07-08 12:45:48</p>
              </span>
              <p class="msg-bd">我写了很对信息这里展示留言内容，如果文字很多可以满行后换行，但最多可以显示50字</p>
            </li>
            <li class="message-item">
              <span class="msg-hd">
                <p class="col-left">对方留言</p>
                <p class="col-right">2019-07-08 12:45:48</p>
              </span>
              <p class="msg-bd">我写了很对信息这里展示留言内容，如果文字很多可以满行后换行，但最多可以显示50字</p>
            </li>
          </ul>
        </template>
      </card>
      <loadMore :showLoad="showLoad" />
    </div>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import card from '@/components/card'
import loadMore from '@/components/loadMore'
export default {
  name: 'leaveMessage',
  data () {
    return {
      barTitle: '合租留言',
      shopId: '154011547',
      gameServer: '重庆-江北区',
      roleName: '嘉陵江',
      surplusNo: '70%',
      zdLeaseyh: 3,
      zjPrices: '',
      showLoad: true
    }
  },
  components: {
    headBar,
    card,
    loadMore
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    save () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.buy-top {
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
      &.weight-font {
        font-size: 28px;
      }
      .link {
        color: $brand-yellow;
        text-decoration: underline;
      }
    }
    .message {
      .message-item {
        padding: 0 0 30px 0;
        border-bottom: 1px solid $line-gary;
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
}
</style>
