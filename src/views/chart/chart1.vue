<template>
  <div>
    <TypeNav></TypeNav>
    <!-- <h1>销售情况</h1> -->
    <h3 v-show="false">{{ chartinfo }}</h3>
    <div ref="chart" style="width:80%;height:376px" class="chart"></div>
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
  ...mapGetters(['chartinfo']), 
  },
  methods: {
    getEchartData() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          title:{
            text:'各类商品销售状况',
          },
          tooltip: {},
          dataset: {
            source: 
            this.chartinfo           
          },
          xAxis: { 
            type: 'category',
            axisTick: {
              alignWithLabel: true
            }
         },
          yAxis: {},
          series: [{ 
            type: 'bar' ,
            itemStyle:{
               color: '#91cc75',
            }
          }]
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