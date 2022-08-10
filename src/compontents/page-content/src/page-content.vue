<template>
  <div class="page-content">
    <gh-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
    >
      <!-- header的插槽 -->
      <template #headerHandler>
        <el-button type="primary" @click="handleNewUser" icon="circlePlus"
          >新建用户</el-button
        >
      </template>
      <!-- 列中的插槽 -->
      <template #status="scoped">
        <el-button
          size="small"
          :type="scoped.row.enable ? 'success' : 'danger'"
          :disabled="!scoped.row.enable"
          >{{ scoped.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scoped">
        <strong>{{ $filters.formatTime(scoped.row.createAt) }}</strong>
      </template>
      <template #updateAt="scoped">
        <strong>{{ $filters.formatTime(scoped.row.updateAt) }}</strong>
      </template>
      <template #handler>
        <el-button type="primary" size="small" icon="editPen">编辑</el-button>
        <el-button type="danger" size="small" icon="delete">删除</el-button>
      </template>
      <!-- footer的插槽 -->
      <template #footer> </template>
    </gh-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import GhTable from '@/base-ui/table'
import { useStore } from 'vuex'
export default defineComponent({
  components: { GhTable },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // 网络请求
    const store = useStore()

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      let newQueryInfo = {}
      for (const key in queryInfo) {
        if (queryInfo[key] !== '') {
          newQueryInfo[key] = queryInfo[key]
        }
      }

      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...newQueryInfo
        }
      })
    }
    getPageData()

    // 从vuex中获取数据 1：32
    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )
    const selectionChange = (value: any) => {
      console.log(value)
    }
    const handleNewUser = () => {
      console.log('new User')
    }
    return { dataList, dataCount, selectionChange, handleNewUser, getPageData }
  }
})
</script>

<style scoped lang="scss">
.page-content {
  border-top: 20px solid #f5f5f5;
  padding: 18px;
}
</style>
