<template>
  <div class="pie-echart">
    <base-echarts :options="options"></base-echarts>
  </div>
</template>

<script lang="ts" setup>
import BaseEcharts from '@/base-ui/echarts'
import { IDataType } from '../types'
import { computed, defineProps } from 'vue'
const props = defineProps<{
  title?: string
  xLabels: string[]
  values: any[]
}>()
const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {},
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '分类销量',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.values
      }
    ]
  }
})
</script>
<style scoped></style>
