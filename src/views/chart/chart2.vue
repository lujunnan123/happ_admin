<template>
    <div>
        <TypeNav></TypeNav>
        <!-- <h1>用户注册</h1> -->
        <div ref="chart1" style="width:50%;height:376px" class="chart"></div>
        <span v-show="false">{{ chartinfo2 }}</span>
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
        this.getEchartData1()
    },
    methods: {
        getEchartData1() {
            const chart1 = this.$refs.chart1
            if (chart1) {
                const myChart = this.$echarts.init(chart1)
                const option = {
                    title:{
                        text:'鲜花日销售折线图'
                    },
                    xAxis: {
                        type: 'category',
                        setdata: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            smooth: true
                        }
                    ]
                };
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
    computed:{
        ...mapGetters(['chartinfo2'])
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