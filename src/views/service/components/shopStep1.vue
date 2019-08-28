<!--
 * @Description: 店铺step1
 * @Author: hyh
 * @since: 2019-08-22 14:48:54
 * @lastTime: 2019-08-22 20:55:24
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="shop-step1-c">
    <div class="card-box">
      <card class="cards">
        <template slot="label-name">
          开店须知
        </template>
        <template slot="card-bd">
          <div class="card-boxs">
            <p class="kdxz">1、普通用户可以升级成为商户用户；</p>
            <p class="kdxz">2、成为商户在有效期内可以无限制发布账号，发布账号≥10的商户可以直接申请开通店铺，店铺审核通过后如果在架账号数量＜10的的系统会自动关闭店铺；</p>
            <p class="kdxz">3、不得将本人在17369.com的账号提供给他人作开店使用，否则由此导致相关争议、诉讼及因店铺经营中的违法违规行为导致一切人身、财产权益损害，均由本人自行承担全部民事、行政及刑事责任；</p>
            <p class="kdxz">4、不得将本人账号提供给他人作开店使用，否则由此导致相关争议、诉讼及因店铺经营中的违法违规行为导致一切人身、财产权益损害，均由本人自行承担全部民事、行政及刑事责任；</p>
            <p class="kdxz">5、一张身份证只能开一个店铺；</p>
            <p class="kdxz">6、17369暂时不提供注销店铺的服务，用户一旦成功开店就无法再用身份证另开一家租号玩店铺；</p>
          </div>
        </template>
      </card>
    </div>
    <button class="ui-btn active" @click="submit">{{btnText}}</button>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
  name: 'shopStep1',
  props: {
    dataSet: Object
  },
  data () {
    return {
      btnText: '我已阅读，下一步'
    }
  },
  components: {
    card
  },
  methods: {
    submit () {
      this.$emit('shoponeSubmit', { next: true })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/index";
.shop-step1-c {
  .cards {
    padding-bottom: 20px;
    .card-boxs {
      max-height: 500px;
      overflow-y: scroll;
    }
  }
  .kdxz {
    font-size: 26px;
    color: $text-dark;
    line-height: 36px;
    margin: 20px 0 0px 0;
  }
}
</style>
