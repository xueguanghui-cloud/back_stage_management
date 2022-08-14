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
  roseData: IDataType[]
}>()
const options = computed(() => {
  return {
    // legend: {
    //   top: 'bottom'
    // },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        type: 'pie',
        radius: [10, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 2
        },
        data: props.roseData
      }
    ]
  }
})
</script>
<style scoped></style>
