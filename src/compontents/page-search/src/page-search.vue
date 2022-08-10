<template>
  <div class="page-search">
    <gh-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header-title">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="warning" icon="refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button type="primary" icon="search" @click="handleSearchClick"
            >查询</el-button
          >
        </div>
      </template>
    </gh-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import GhForm, { IForm } from '@/base-ui/form'
export default defineComponent({
  components: { GhForm },
  props: {
    searchFormConfig: {
      type: Object as PropType<IForm>,
      required: true
    }
  },
  emits: ['resetBtnClick', 'searchBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是有配置文件中的field来决定的
    // 1. 优化一:formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2.优化二: 当用户点击重置
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[key] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    // 3. 优化三：当用户点击查询
    const handleSearchClick = () => {
      console.log()
      emit('searchBtnClick', formData.value)
    }
    return { formData, handleResetClick, handleSearchClick }
  }
})
</script>

<style scoped lang="scss">
.page-search {
  .header-title {
    color: #090101;
  }
  .handle-btns {
    text-align: right;
    margin: 0 50px 10px 0;
  }
}
</style>
