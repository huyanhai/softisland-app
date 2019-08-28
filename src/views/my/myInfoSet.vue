<!--
 * @Description: 个人资料设置
 * @Author: hyh
 * @since: 2019-08-24 13:19:54
 * @lastTime: 2019-08-24 17:02:09
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="info-set">
    <uploadImg :show="show" @uploadComplate="uploadComplate" @cancel="cancel" />
    <div class="m-info white-bg">
      <div class="col" @click="changUserImg">
        <span class="col-l">个人头像</span>
        <span class="col-r">
          <img :src="userImg" class="ui-img" />
        </span>
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="col" @click="topSetText('nickName')">
        <span class="col-l">我的昵称</span>
        <span class="col-r">{{nickName || '未设置'}}</span>
        <i class="iconfont icon-fanhui"></i>
      </div>
    </div>
    <div class="m-info white-bg">
      <div class="col" @click="changBirthday">
        <span class="col-l">生日</span>
        <span class="col-r">
          {{birthday || '未选择'}}
        </span>
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="col" @click="changGender">
        <span class="col-l">性别</span>
        <span class="col-r">{{gender || '未选择'}}</span>
        <i class="iconfont icon-fanhui"></i>
      </div>
    </div>
    <div class="m-info white-bg">
      <div class="col" @click="topSetText('qqNumber')">
        <span class="col-l">QQ</span>
        <span class="col-r">
          {{qqNumber|| '未设置'}}
        </span>
        <i class="iconfont icon-fanhui"></i>
      </div>
    </div>
    <van-datetime-picker v-if="showBirthday" title="设置生日" v-model="timer" type="date" @confirm="confirmTime" @cancel="cancelTime" class="timepicker" />
    <van-picker :columns="columns" v-if="showGender" @cancel="cancelTime" @confirm="confirmGender" class="timepicker" show-toolbar title="选择性别" />
    <van-overlay :show="showLyer" z-index='1000' />
  </div>

</template>

<script>
import uploadImg from '@/components/uploadImg'
export default {
  name: 'userInfoSet',
  data () {
    return {
      barTitle: '个人资料设置',
      show: false,
      userImg: 'https://hbimg.huabanimg.com/b99b792f7ecb610bf079ce1e33677f64d62f7b52322f6-5tXasY_fw658',
      nickName: '',
      birthday: '',
      gender: '',
      qqNumber: '',
      timer: new Date(),
      showLyer: false,
      showBirthday: false,
      showGender: false,
      columns: ['男', '女']
    }
  },
  components: {
    uploadImg
  },
  created () {
    setTimeout(() => {
      this.$emit('changTitle', this.barTitle)
      this.$emit('footer', false)
    }, 100)
  },
  destroyed () {
    this.$emit('changTitle', '消息通知')
    this.$emit('footer', true)
  },
  methods: {
    changUserImg () {
      this.show = true
    },
    uploadComplate (e) {
      console.log(e)
      this.userImg = e.pic
      this.show = false
    },
    cancel () {
      this.show = false
    },
    confirmTime (e) {
      let time = new Date(e)
      this.birthday = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
      this.showLyer = false
      this.showBirthday = false
    },
    confirmGender (e) {
      this.gender = e
      this.showGender = false
      this.showLyer = false
    },
    cancelTime () {
      this.showLyer = false
      this.showBirthday = false
      this.showGender = false
    },
    changBirthday () {
      this.showBirthday = true
      this.showLyer = true
    },
    changGender () {
      this.showGender = true
      this.showLyer = true
    },
    topSetText (e) {
      this.$router.push({
        path: '/my/set-text',
        query: {
          pagePath: e || ''
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
.info-set {
  .m-info {
    margin: 30px;
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
        color: $text-dark;
        flex: 0 0 auto;
      }
      .col-r {
        width: 50%;
        flex: 1 0 auto;
        text-align: right;
        margin: 0 30px;
        font-size: 26px;
        color: $text-lgary;
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
        transform: rotate(180deg);
      }
    }
  }
  .timepicker {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10001;
  }
}
</style>
