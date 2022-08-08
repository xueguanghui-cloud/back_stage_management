<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
        <el-breadcrumb-item :to="{ path: breadcrumb.path }">{{
          breadcrumb.name
        }}</el-breadcrumb-item></template
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../types'
export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>
<style scoped></style>
