<!--
 * @Description:店铺
 * @Author: hyh
 * @since: 2019-08-21 23:38:45
 * @lastTime: 2019-08-23 21:17:12
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="server-shop-c">
    <steps :stepList="stepList" :step="tostep" />
    <shopStep1 :dataSet="shop" @shoponeSubmit="shoponeSubmit" v-if="tostep===1" />
    <shopStep2 :dataSet="shop" @uploadComplate="uploadComplate" @uploadClean="uploadClean" @shoptwoSubmit="shoptwoSubmit" v-if="tostep===2" />
    <shopStep3 :dataSet="shop" @uploadComplate="uploadComplate" @uploadClean="uploadClean" v-if="tostep===3" />
    <registered v-if="isregister" />
  </div>
</template>

<script>
import steps from '@/components/step'
import shopStep1 from './shopStep1'
import shopStep2 from './shopStep2'
import shopStep3 from './shopStep3'
import registered from './registered'
export default {
  name: '',
  data () {
    return {
      tostep: 1,
      stepList: [
        {
          step: 1,
          text: '开店须知',
          active: true
        }, {
          step: 2,
          text: '申请店铺',
          active: false
        }, {
          step: 3,
          text: '店铺审核',
          active: false
        }
      ],
      // 店铺数据
      shop: {
        picList: [undefined, undefined, undefined]
      },
      isregister: false
    }
  },
  components: {
    steps,
    shopStep1,
    shopStep2,
    shopStep3,
    registered
  },
  methods: {
    shoponeSubmit () {
      this.tostep = 2
    },
    shoptwoSubmit () {
      this.tostep = 3
      this.$emit('dataSubmit', { data: this.shop })
    },
    uploadComplate (e) {
      let index = e.index
      let pic = e.pic
      this.shop.picList[index] = pic
      this.shop = Object.assign({}, this.shop)
    },
    uploadClean (e) {
      let index = e.index
      this.shop.picList[index] = undefined
      this.shop = Object.assign({}, this.shop)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/index";
.server-shop-c {
}
</style>
