<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <gh-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </gh-card>
      </el-col>
      <el-col :span="10">
        <gh-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </gh-card>
      </el-col>
      <el-col :span="7">
        <gh-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </gh-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <gh-card title="分类商品的销量"
          ><base-echarts :options="options">
            <line-echart
              v-bind="categoryGoodsSale"
            ></line-echart> </base-echarts
        ></gh-card>
      </el-col>
      <el-col :span="12">
        <gh-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </gh-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { userStore } from '@/store'
import GhCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/compontents/page-echarts'
export default defineComponent({
  name: 'dashboard',
  components: {
    GhCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = userStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardDataAction')
    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item) => {
        return { name: item.address, value: item.count }
      })
    })
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="scss">
.content-row {
  margin-top: 20px;
}
</style>
