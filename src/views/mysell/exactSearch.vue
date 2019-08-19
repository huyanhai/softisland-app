<!--
 * @Description:search
 * @Author: hyh
 * @since: 2019-08-13 20:51:32
 * @lastTime: 2019-08-16 22:15:14
 -->
<template>
  <div class="pages page-exsearch">
    <headBar :barTitle="barTitle">
      <div class="search-btn" slot="right">
        <a class="ui-clear" @click="clear">全部清除</a>
      </div>
    </headBar>
    <div class="exsearch-box">
      <div class="exsearch-hd">账号类型</div>
      <div class="exsearch-bd">
        <van-radio-group v-model="accType">
          <van-radio :name="item.value" class="col cborder" :class="{active:accType===item.value}" v-for="(item,index) in accList" :key="index">{{item.name}}</van-radio>
        </van-radio-group>
      </div>
      <div class="exsearch-hd">交易状态</div>
      <div class="exsearch-bd">
        <van-radio-group v-model="sellStadus">
          <van-radio :name="item.value" class="col cborder" :class="{active:sellStadus===item.value}" v-for="(item,index) in sellList" :key="index">{{item.name}}</van-radio>
        </van-radio-group>
      </div>
      <a class="check-sell" @click="search">确认筛选</a>
    </div>
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import sellList from '@/components/sellList'
export default {
  name: 'search',
  data () {
    return {
      barTitle: '筛选条件',
      accType: '1',
      sellStadus: '1',
      accList: [{
        name: '我发布的账号',
        value: '1'
      }, {
        name: '合租账号',
        value: '2'
      }],
      sellList: [{
        name: '已完成',
        value: '1'
      }, {
        name: '进行中',
        value: '2'
      }, {
        name: '招租中',
        value: '3'
      }]
    }
  },
  components: {
    headBar,
    sellList
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    clear () {
      this.accType = '1'
      this.sellStadus = '1'
    },
    search () {
      this.$router.push({ path: './search-list' })
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.page-exsearch {
  .search-btn {
    display: flex;
    align-items: center;
    .ui-clear {
      font-size: 26px;
      color: $brand-orange;
      margin-left: 20px;
    }
  }
  .exsearch-box {
    margin: 30px 20px;
    background: $color-fff;
    padding: 0 30px;
    box-sizing: border-box;
    @include border-radius(40px);
    overflow: hidden;
    .exsearch-hd {
      font-size: 28px;
      color: $text-dark;
      height: 100px;
      line-height: 100px;
    }
    .exsearch-bd {
      .van-radio-group {
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
        margin-right: 30px;
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
    .check-sell {
      width: 560px;
      height: 88px;
      text-align: center;
      line-height: 88px;
      @include border-radius(88px);
      font-size: 36px;
      color: $color-fff;
      background: $brand-red;
      display: block;
      margin: 60px auto 50px auto;
      box-shadow: 0 6px 16px rgba($shadow-red, 0.35);
    }
  }
}
</style>
