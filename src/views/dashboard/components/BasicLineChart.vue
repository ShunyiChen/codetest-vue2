<template>
  <div :id="postTitle" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>

import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

export default {
    name:'BasicLineChart',
    props: ['postTitle'],
    data() {
        return {
             
        }
    },
    mounted() {
        this.drawECharts()
    },
    methods: {
        drawECharts() {
            echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
            let chartDom = document.getElementById(this.postTitle);

            let myChart = echarts.init(chartDom);
            let option;
            option = {
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: "line",
                },
            ],
            };
            option && myChart.setOption(option);
        }
    }
 
}
</script>

<style scoped>
</style>