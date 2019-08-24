<!--
 * @Description: 我的客户
 * @Author: hyh
 * @since: 2019-08-24 09:49:55
 * @lastTime: 2019-08-24 10:52:44
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="msg-list">
    <msgListc :dataSet="msgList" />
  </div>
</template>

<script>
import msgListc from '@/components/msgList'
export default {
  name: 'msgList',
  data () {
    return {
      barTitle: '我的客户',
      msgList: [
        {
          type: '租客',
          phone: '1254856214',
          time: '今天08:04',
          text: '在不在'
        },
        {
          type: '商户',
          phone: '1254856214',
          time: '今天08:04',
          text: '在不在不在在不在在不在在不在在不在在不在在不在在不在在不在在不在在不在在不在在'
        }
      ]
    }
  },
  components: {
    msgListc
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
  }
}
</script>
<style lang="scss" scoped>
.msg-list {
  margin: 30px 0 0 0;
}
</style>
