<template>
  <div class="dashboard">
    <h2>dashboard</h2>
    <div ref="divRef" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import * as echarts from 'echarts'
export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    onMounted(() => {
      // 1. 初始化echarts实例
      const ghEchartInstance = echarts.init(divRef.value!, 'dark', {
        renderer: 'svg'
      })
      // 2. 编写配置文件
      const options = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 3. 设置配置，并且开始绘制
      ghEchartInstance.setOption(options)
    })
    return { divRef }
  }
})
</script>

<style scoped></style>
