<template>
  <div class="page-content">
    <gh-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
      v-model:page="pageInfo"
    >
      <!-- header的插槽 -->
      <template #headerHandler>
        <el-button
          type="primary"
          v-if="isCreate && contentTableConfig.buttonName"
          @click="handleNewData"
          icon="circlePlus"
          >{{ contentTableConfig.buttonName }}</el-button
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
      <template #handler="scoped">
        <el-button
          type="primary"
          size="small"
          icon="editPen"
          v-if="isUpdate"
          @click="handleUpdateClick(scoped.row)"
          >编辑</el-button
        >
        <el-button
          type="danger"
          size="small"
          icon="delete"
          v-if="isDelete"
          @click="handleDeleteClick(scoped.row)"
          >删除</el-button
        >
      </template>
      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropsSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
      <!-- footer的插槽 -->
      <template #footer> </template>
    </gh-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import GhTable from '@/base-ui/table'
import { useStore } from 'vuex'
import { usePermission } from '@/hooks/usePermission'
import { ElMessageBox } from 'element-plus'
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
  emits: ['newData', 'updateData'],
  setup(props, { emit }) {
    const store = useStore()

    // 1. 获取操作权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => {
      getPageData()
    })
    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      let newQueryInfo = {}
      for (const key in queryInfo) {
        if (queryInfo[key] !== '') {
          newQueryInfo[key] = queryInfo[key]
        }
      }
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...newQueryInfo
        }
      })
    }
    getPageData()

    // 3.从vuex中获取数据 1：32
    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )

    // 4. 获取其他的动态插槽名称
    const otherPropsSlots = props.contentTableConfig?.propList.filter(
      (item) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    // 5. 新建、删除和编辑
    const handleNewData = () => {
      emit('newData')
    }
    const handleDeleteClick = (item: any) => {
      ElMessageBox.confirm('您确认删除这条数据吗？', '', {
        showClose: false,
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        store.dispatch('system/deletePageDataAction', {
          id: item.id,
          pageName: props.pageName
        })
      })
    }
    const handleUpdateClick = (item: any) => {
      emit('updateData', item)
    }

    const selectionChange = (value: any) => {
      console.log(value)
    }

    return {
      isCreate,
      isUpdate,
      isDelete,
      pageInfo,
      dataList,
      dataCount,
      otherPropsSlots,
      selectionChange,
      handleNewData,
      getPageData,
      handleDeleteClick,
      handleUpdateClick
    }
  }
})
// 十一：35分
</script>

<style scoped lang="scss">
.page-content {
  border-top: 20px solid #f5f5f5;
  padding: 18px;
}
</style>
