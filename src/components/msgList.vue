<!--
 * @Description: 我的消息列表
 * @Author: hyh
 * @since: 2019-08-24 10:01:32
 * @lastTime: 2019-08-24 10:45:56
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="msg-lsit-c">
    <ul class="list ui-repeart" v-if="dataSet.length>0">
      <li class="repeart-item white-bg" v-for="(item,index) in dataSet" :key="index" @click="toSession(item)">
        <span class="col-l">
          <img class="ui-img" src="https://hbimg.huabanimg.com/b99b792f7ecb610bf079ce1e33677f64d62f7b52322f6-5tXasY_fw658" />
        </span>
        <span class="col-r">
          <span class="__hd">
            <p class="icon" v-if="item.type==='租客'">{{item.type}}</p>
            <p class="icon shop" v-else>{{item.type}}</p>
            <p class="number">{{item.phone}}</p>
            <p class="time">
              {{item.time}}
              <i class="iconfont icon-youkeduantubiao_lajitong"></i>
            </p>
          </span>
          <span class="__bd">
            {{item.text}}
          </span>
        </span>
      </li>
    </ul>
    <div class="no-data" v-else>
      <i class="iconfont icon-emptydata"></i>
      <p class="text">您目前没有任何消息</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataSet: Array
  },
  name: 'msgListc',
  methods: {
    toSession (e) {
      this.$router.push({
        path: '/message/session'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index";
.msg-lsit-c {
  .list {
    .repeart-item {
      border-radius: 40px;
      overflow: hidden;
      margin: 0 30px 30px 30px;
      box-sizing: border-box;
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .col-l {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        background: $brand-orange;
        .ui-img {
          width: 80%;
          height: 80%;
        }
      }
      .col-r {
        width: 50%;
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        .__hd {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          .icon {
            width: 90px;
            height: 40px;
            border-radius: 40px;
            background: $brand-orange;
            overflow: hidden;
            color: $color-fff;
            font-size: 24px;
            flex: 0 0 auto;
            text-align: center;
            line-height: 40px;
            &.shop {
              background: $brand-yellow;
            }
          }
          p {
            margin: 0;
          }
          .number {
            flex: 1 0 auto;
            font-size: 26px;
            color: $text-lgary;
            margin-left: 20px;
          }
          .time {
            flex: 0 0 auto;
            font-size: 26px;
            color: $text-lgary;
            margin-left: 20px;
            .iconfont {
              font-size: 30px;
              color: $brand-orange;
            }
          }
        }
        .__bd {
          font-size: 24px;
          color: $text-dark;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
      font-size: 24px;
      line-height: 40px;
      color: $text-lgary;
      display: block;
    }
  }
}
</style>
