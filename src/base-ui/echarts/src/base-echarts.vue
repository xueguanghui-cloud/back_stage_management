<template>
  <div class="base-echarts">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { EChartsOption } from 'echarts'
import useEcharts from '../hooks/useEcharts'
import { onMounted, ref, defineProps, withDefaults, watchEffect } from 'vue'
// 使用withDefaults来设置props默认值，使用defineProps定义props
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  {
    width: '100%',
    height: '400px'
  }
)

const echartDivRef = ref()
onMounted(() => {
  const { setOptions } = useEcharts(echartDivRef.value)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>
<style scoped></style>
