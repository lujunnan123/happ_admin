<template>
  <div>
    <TypeNav></TypeNav>
    <h1>销售情况</h1>
    <h3 v-show="false">{{ chartinfo }}</h3>
    <div ref="chart" style="width:50%;height:376px" class="chart"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('getdata')
  },
  updated() {
    this.getEchartData()
    
  },
  computed: {
  ...mapGetters(['chartinfo'])
  },
  methods: {
    getEchartData() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          legend: {},
          tooltip: {},
          dataset: {
            source: 
            this.chartinfo           
          },
          xAxis: { type: 'category' },
          yAxis: {},

          series: [{ type: 'bar' }]
        }
        myChart.setOption(option)
        window.addEventListener("resize", function () {
          myChart.resize()
        })
      }
      this.$on('hook:destroyed', () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      })
    },
  },
  watch: {},
  created() {
  }
}
</script>
<style lang="css" scoped>
.chart {
  float: left;
  margin-top: 50px;
  margin-left: 50px;
}
</style>