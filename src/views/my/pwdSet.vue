<!--
 * @Description: 修改支付密码
 * @Author: hyh
 * @since: 2019-08-24 16:53:26
 * @lastTime: 2019-08-27 14:23:53
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="set-password">
    <head-bar :barTitle="barTitle">
      <div class="choose-btn" slot="right">
        <a class="ui-link" @click="save">保存</a>
      </div>
    </head-bar>
    <div class="m-info white-bg">
      <div class="col" v-for="(item,index) in pwdList" :key="index">
        <span class="col-l">{{item.text}}</span>
        <span class="col-r">
          <input :type="item.mode ===1 ? 'password' : 'text'" v-model="item.value" class="ui-link" @focus="inputFocus(index)" placeholder="6-15字母加数字组合">
        </span>
        <i class="iconfont" :class="[item.mode ===1 ? 'icon-guanbimima' : 'icon-dakaimimaxianshi']" v-if="item.showpwd" @click="switckMode(index)"></i>
      </div>
    </div>
    <router-link to="/my/find-pwd">
      <p class="tips">
        忘记支付密码？
      </p>
    </router-link>
    <Totals :totalShow="totalShow" @totalHide="totalHide">
      <i slot="icon" class="iconfont" :class="tipsIcon"></i>
      <p slot="text">
        {{tipsText}}
      </p>
    </Totals>
  </div>
</template>

<script>
import headBar from '@/components/headBar'
import Totals from '@/components/totals'
export default {
  name: 'safeSet',
  data () {
    return {
      barTitle: '修改支付密码',
      totalShow: false,
      tipsText: '原始密码错误',
      tipsIcon: '',
      iconType: {
        faile: 'icon-shibai',
        success: 'icon-biaoqing'
      },
      pwdList: [
        {
          text: '原始密码',
          value: '',
          showpwd: false,
          mode: 1
        },
        {
          text: '新的密码',
          value: '',
          showpwd: false,
          mode: 1
        },
        {
          text: '再次输入',
          value: '',
          showpwd: false,
          mode: 1
        }
      ]
    }
  },
  components: {
    headBar,
    Totals
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    save () {
      this.tipsIcon = this.iconType['faile']
      this.totalHide()
    },
    inputFocus (idx) {
      for (let item of this.pwdList) {
        item['showpwd'] = false
      }
      this.pwdList[idx]['showpwd'] = true
    },
    switckMode (idx) {
      this.pwdList[idx]['mode'] = this.pwdList[idx]['mode'] === 1 ? 2 : 1
    },
    totalHide (ctx) {
      if (!this.totalShow) {
        this.totalShow = true
        const timer = setTimeout(() => {
          this.totalShow = false
          clearTimeout(timer)
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.set-password {
  .choose-btn {
    display: flex;
    align-items: center;
    .ui-link {
      font-size: 26px;
      color: $brand-orange;
      margin-left: 20px;
    }
  }
  .set-box {
    margin: 30px;
    border-radius: 40px;
    overflow: hidden;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    .ui-input {
      flex: 1 0 auto;
      height: 100%;
      width: 50%;
      background: none;
      border: none;
      font-size: 26px;
      color: $text-dark;
    }
    .iconfont {
      font-size: 30px;
      color: $text-lgary;
    }
    .label {
      flex: 0 0 auto;
      font-size: 26px;
      color: $text-dark;
    }
    .switch {
      flex: 1 0 auto;
      text-align: right;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }
  }
  .m-info {
    margin: 30px 30px 20px 30px;
    border-radius: 40px;
    overflow: hidden;
    padding: 0 30px;
    .col {
      display: flex;
      border-bottom: 1px dashed $line-gary;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      .col-l {
        font-size: 26px;
        color: $text-lgary;
        flex: 0 0 auto;
        width: 110px;
      }
      .col-r {
        width: 50%;
        flex: 1 0 auto;
        text-align: right;
        margin: 0 30px;
        font-size: 26px;
        color: $text-lgary;
        .ui-link {
          border: none;
          background: none;
          width: 100%;
          height: 100%;
          color: $text-dark;
        }
        .col-r {
          margin: 0;
          .iconfont {
            font-size: 30px;
          }
        }
        .ui-img {
          width: 60px;
          height: 60px;
          overflow: hidden;
          border-radius: 60px;
          margin-left: auto;
          display: inline-table;
          vertical-align: middle;
        }
      }
      .iconfont {
        color: $text-lgary;
        font-size: 30px;
      }
    }
  }
  .tips {
    font-size: 20px;
    color: $brand-orange;
    margin: 0 30px;
    text-align: right;
  }
}
</style>
