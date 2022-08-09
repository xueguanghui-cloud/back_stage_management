<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <div class="content">
      <gh-table
        :propList="propList"
        :listData="userList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        @selectionChange="selectionChange"
      >
        <template #status="scoped">
          <el-button
            size="small"
            :type="scoped.row.enable ? 'success' : 'dander'"
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
      </gh-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/compontents/page-search'
import { useStore } from 'vuex'
import GhTable from '@/base-ui/table'
export default defineComponent({
  name: 'user',
  components: { PageSearch, GhTable },
  setup() {
    const store = useStore()

    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '电话号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      { prop: 'handle', label: '操作', minWidth: '100', slotName: 'handle' }
    ]

    const showIndexColumn = true
    const showSelectColumn = true

    const selectionChange = (value: any) => {
      console.log(value)
    }
    return {
      searchFormConfig,
      userList,
      propList,
      showIndexColumn,
      showSelectColumn,
      selectionChange
    }
  }
})
</script>

<style scoped lang="scss">
.user {
  .content {
    border-top: 20px solid #f5f5f5;
    padding: 18px;
  }
}
</style>
