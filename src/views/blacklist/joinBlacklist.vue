<!--
 * @Description:黑名单
 * @Author: hyh
 * @since: 2019-08-14 21:52:28
 * @lastTime: 2019-08-27 15:47:14
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="block-list">
    <head-bar :barTitle="barTitle">
      <div class="search-btn" slot="right">
        <a class="ui-cancel" @click="save">完成</a>
      </div>
    </head-bar>
    <div class="card-box">
      <card>
        <template slot="label-name">
          加入黑名单
        </template>
        <template slot="card-bd">
          <div class="exsearch-bd">
            <van-radio-group v-model="blackListType">
              <van-radio :name="item.value" class="col cborder" :class="{active:blackListType===item.value}" v-for="(item,index) in accList" :key="index">{{item.name}}</van-radio>
            </van-radio-group>
          </div>
        </template>
      </card>
      <card :showHD="showHD">
        <template slot="label-name">
          货架宣传文案
        </template>
        <template slot="card-bd">
          <ul class="info-bd">
            <li class="info-item textarea-item">
              <textarea class="ui-input ui-textarea" v-model="reason" placeholder="请填写拉黑理由（30字以内)" maxlength="30"></textarea>
            </li>
          </ul>
        </template>
      </card>
      <div class="input-check">已输入{{reason.length}}/最多30字</div>
      <div class="tips">
        温馨提示：<br> 1.普通拉黑，拉黑时间为7天<br> 2.永久拉黑，永久不能再租用自己的账号
      </div>
    </div>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import card from '@/components/card'
import loadMore from '@/components/loadMore'
export default {
  name: 'blackList',
  data () {
    return {
      barTitle: '加入黑名单',
      blackListType: '1',
      showHD: false,
      reason: '',
      accList: [{
        name: '普通拉黑',
        value: '1'
      }, {
        name: '永久拉黑',
        value: '2'
      }]
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
.block-list {
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
      &.weight-font {
        font-size: 28px;
      }
      .link {
        color: $brand-yellow;
        text-decoration: underline;
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
