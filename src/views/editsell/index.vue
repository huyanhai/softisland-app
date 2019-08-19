<!--
 * @Description:search
 * @Author: hyh
 * @since: 2019-08-13 20:51:32
 * @lastTime: 2019-08-17 12:24:21
 -->
<template>
  <div class="pages page-edit-sell">
    <headBar :barTitle="barTitle"></headBar>
    <steps :stepList="stepList" :step="tostep" />
    <step1 @stepOne="stepOne" :stepOneData="stepOneData" v-if="tostep===1" />
    <step2 @stepTwo="stepTwo" @imgLoad="imgLoad" @clearImg="clearImg" :stepTwoData="stepTwoData" v-if="tostep===2" />
    <step3 @stepThree="stepThree" :stepThreeData="stepThreeData" v-if="tostep===3" />
    <step4 @stepFour="stepFour" :stepFourData="stepFourData" v-if="tostep===4" />
  </div>
</template>
<script>
import headBar from '@/components/headBar'
import steps from '@/components/step'
import step1 from './components/step1'
import step2 from './components/step2'
import step3 from './components/step3'
import step4 from './components/step4'
export default {
  name: 'editSell',
  data () {
    return {
      barTitle: '编辑货架',
      stepList: [
        {
          step: 1,
          text: '游戏区服',
          active: true
        }, {
          step: 2,
          text: '账号信息',
          active: false
        }, {
          step: 3,
          text: '出租信息',
          active: false
        }, {
          step: 4,
          text: '增值保障',
          active: false
        }
      ],
      stepOneData: {
        gameName: this.$store.state.chooseGame.choose_game || '',
        gameRegin: this.$store.state.chooseGame.choose_regin || '',
        gameServer: this.$store.state.chooseGame.choose_server || ''
      },
      stepTwoData: {
        ifFrom: '',
        gameAcc: '',
        gamePwd: '',
        gameRorl: '',
        accTitle: '',
        accShow: '',
        picList: [undefined, undefined, undefined, undefined, undefined],
        movieList: [undefined, undefined, undefined]
      },
      stepThreeData: {
        zjPrices: '123',
        yjtotalPrices: '',
        rzDiscount: '',
        bzDiscount: '',
        byDiscount: '',
        tenDiscount: '',
        zzDiscount: '',
        zdLease: 0,
        zcLease: 0,
        zdLeaseyh: 0,
        zcLeaseyh: 0,
        startTime: '00:00',
        endTime: '00:00',
        models: '1'
      },
      stepFourData: {
        compensation: false,
        guarantee: false,
        xsshelves: false,
        serverType: 1,
        shelvesTimes: 1,
        demand: false,
        leaseTimes: 10,
        escapeTimes: 3,
        rank: false,
        gold: false,
        orderLease: false,
        autoPwd: false
      },
      // 页面所有的数据
      pagesData: {},
      tostep: 1
    }
  },
  components: {
    headBar,
    steps,
    step1,
    step2,
    step3,
    step4
  },
  created () {
    this.$emit('footer', false)
  },
  methods: {
    searchAgain () {
      this.$router.go(-1)
    },
    stepOne (e) {
      this.stepOneData = Object.assign(this.stepOneData, e)
      this.pagesData = Object.assign(this.pagesData, this.stepOneData)
      this.tostep = 2
    },
    stepTwo (e) {
      this.stepTwoData = Object.assign(this.stepTwoData, e)
      this.pagesData = Object.assign(this.pagesData, this.stepTwoData)
      this.tostep = 3
    },
    stepThree (e) {
      this.stepThreeData = Object.assign(this.stepThreeData, e)
      this.pagesData = Object.assign(this.pagesData, this.stepThreeData)
      console.log(this.stepThreeData)
      this.tostep = 4
    },
    stepFour (e) {
      this.stepFourData = Object.assign(this.stepFourData, e)
      this.pagesData = Object.assign(this.pagesData, this.stepFourData)
      console.log(this.pagesData)
    },
    imgLoad (e) {
      let index = e.index
      let content = e.content
      let arrName = e.arrName
      this.stepTwoData[arrName][index] = content
      console.log(this.stepTwoData)
    },
    clearImg (e) {
      let index = e.index
      let arrName = e.arrName
      this.stepTwoData[arrName][index] = undefined
      this.stepTwoData = Object.assign({}, this.stepTwoData)
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/index";
.page-edit-sell {
  padding-bottom: 0 !important;
}
</style>
