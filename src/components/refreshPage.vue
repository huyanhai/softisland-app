<!--
 * @Description:下拉刷新
 * @Author: huyanhai
 * @since: 2019-08-29 13:51:27
 * @lastTime: 2019-08-29 14:07:05
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :class="'refresh-layer '+theme" :head-height="headHeight">
    <template slot="loading">
      <i class="ui-logo"></i>
      <div class="scoll">
        <svg viewBox="25 25 50 50" class="van-loading__circular">
          <circle cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
        <p class="ui-text">正在刷新，请君稍后...</p>
      </div>
    </template>
    <template slot="loosing">
      <i class="ui-logo"></i>
      <p class="ui-text">下拉刷新</p>
    </template>
    <template slot="pulling">
      <i class="ui-logo"></i>
      <p class="ui-text">释放刷新</p>
    </template>
    <!--下拉刷新内容-->
    <slot name="refresh-box">
      下拉刷新内容
    </slot>
    <!--下拉刷新内容-->
  </van-pull-refresh>
</template>

<script>
export default {
  name: 'refresh',
  props: {
    headHeight: {
      type: Number,
      default: 20
    },
    theme: {
      type: String,
      default: 'white'
    }
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      let _this = this
      setTimeout(() => {
        _this.$toast('刷新成功')
        _this.isLoading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.refresh-layer {
  width: 100%;
  height: 100%;
  top: 0;
  position: relative;
  z-index: 11;
  &.black {
    .van-pull-refresh__track {
      .van-pull-refresh__head {
        height: 60px;
        top: -70px !important;
        .ui-logo {
          width: 1rem;
          height: 1rem;
          display: block;
          background: url("../assets/images/logo1.png") no-repeat;
          background-size: cover;
          margin: 0 auto 5px auto;
        }
        .scoll {
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            display: inline-block;
            width: 0.4rem;
            margin-right: 0.1rem;
          }
        }
        .ui-text {
          margin: 0;
          line-height: initial;
          font-size: 0.24667rem;
        }
      }
    }
  }
  &.white {
    .van-pull-refresh__track {
      overflow: hidden;
      .van-pull-refresh__head {
        color: #fff;
        top: 0 !important;
        height: 60px;
        .ui-logo {
          width: 1rem;
          height: 1rem;
          display: block;
          background: url("../assets/images/logo1.png") no-repeat;
          background-size: cover;
          margin: 0 auto 5px auto;
        }
        .scoll {
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            display: inline-block;
            width: 0.4rem;
            margin-right: 0.1rem;
            color: #fff;
          }
        }
        .ui-text {
          margin: 0;
          line-height: initial;
          font-size: 0.24667rem;
        }
      }
    }
  }
}
</style>
