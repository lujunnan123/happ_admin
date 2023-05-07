<template>
    <div>
      <TypeNav></TypeNav>
      <h1>这是图表2</h1>
      <div ref="chart1" style="width:50%;height:376px" class="chart"></div>
    </div>
  </template>
  
<script>

export default {
    data() {
        return {
            
        }
    },
    mounted() {
    this.getEchartData1()

    },
    methods: {
    getEchartData1() {
        const chart1 = this.$refs.chart1
        if (chart1) {
        const myChart = this.$echarts.init(chart1)
        const option = {
            title: {
            text: 'Stacked Line'
            },
            tooltip: {
            trigger: 'axis'
            },
            legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
            },
            toolbox: {
            feature: {
                saveAsImage: {}
            }
            },
            xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
            },
            yAxis: {
            type: 'value'
            },
            series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330]
            }
            ]

        }
        myChart.setOption(option)
        window.addEventListener("resize", function() {
            myChart.resize()
        })
        }
        this.$on('hook:destroyed',()=>{
        window.removeEventListener("resize", function() {
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
    .chart{        
        float: left;
        margin-top: 50px;
        margin-left: 50px;
    }
</style>