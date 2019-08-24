<!--
 * @Description:lineCharts
 * @Author: hyh
 * @since: 2019-08-19 22:20:49
 * @lastTime: 2019-08-19 22:54:53
 * @如果有bug，那肯定不是我的锅
 -->
<template>
  <div class="highcharts-container white-bg"></div>
</template>

<script>
import Highcharts from 'highcharts/highstock'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsDrilldown from 'highcharts/modules/drilldown'
import Highcharts3D from 'highcharts/highcharts-3d'
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts)
Highcharts3D(Highcharts)

export default {
  props: ['options', 'styles'],
  name: 'lineCharts',
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      console.log(this.$el)
      this.$el.style.width = (this.styles.width || 800) + 'px'
      this.$el.style.height = (this.styles.height || 400) + 'px'
      this.chart = new Highcharts.Chart(this.$el, this.options)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";
.highcharts-container {
  width: 690px;
  height: 430px;
  margin: 0 auto;
  padding: 20px 0;
  box-sizing: border-box;
  @include border-radius(40px);
}
</style>
