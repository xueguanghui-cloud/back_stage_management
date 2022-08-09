<template>
  <div class="page-search">
    <gh-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header-title">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="warning" icon="refresh">重置</el-button>
          <el-button type="primary" icon="search">查询</el-button>
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
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
