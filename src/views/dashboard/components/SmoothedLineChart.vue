<template>
  <div id="SmoothedLineChart" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
export default {
    name:'SmoothedLineChart',
    data() {
        return {}
    },
    mounted() {
        this.drawCharts()
    },
    methods: {
        drawCharts() {
            echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
            var chartDom = document.getElementById('SmoothedLineChart');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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

            option && myChart.setOption(option);
        }
    }
}
</script>

<style scoped>

</style>