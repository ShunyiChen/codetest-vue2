<template>

    <el-row :gutter="19" >
      <el-col :span="6" style="width:440px;height:252px;padding:0;margin-left:1px;">
          <BasicLineChart postTitle="c1"></BasicLineChart>
      </el-col>
      <el-col :span="6" style="width:440px;height:252px;padding:0;">
          <SmoothedLineChart></SmoothedLineChart>
      </el-col>
      <el-col :span="6" style="width:440px;height:252px;padding:0;">
          <StackedHorizontalBar postTitle="c2"></StackedHorizontalBar>
      </el-col>
      <el-col :span="6" style="width:440px;height:252px;padding:0;">
          <BubbleChart postTitle="c3"></BubbleChart>
      </el-col>
    </el-row>
    
</template>

<script>
import BasicLineChart from "./components/BasicLineChart.vue";
import SmoothedLineChart from "./components/SmoothedLineChart.vue";
import StackedHorizontalBar from "./components/StackedHorizontalBar.vue";
import BubbleChart from "./components/BubbleChart.vue";
export default {
  name: 'Dashboard',
  components: {
    BasicLineChart,
    SmoothedLineChart,
    StackedHorizontalBar,
    BubbleChart
  },
  beforeDestroy() {
    console.log('马上要销毁Dashboard')
  },
  mounted() {
    console.log('Dashboard挂载了')
  }
}
</script>

<style>

</style>