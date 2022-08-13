<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      @newData="handleNewData"
      @updateData="handleUpdateData"
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
    <page-modal
      pageName="role"
      ref="pageModalRef"
      :otherInfo="otherInfo"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfig"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          show-checkbox
          node-key="id"
          :data="menus"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import PageContent from '@/compontents/page-content'
import PageSearch from '@/compontents/page-search'
import PageModal from '@/compontents/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalFormConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/usePageModal'
import { menuMapLeafKeys } from '@/utils/map-menus'
import { userStore } from '@/store'
import { ElTree } from 'element-plus'
export default defineComponent({
  name: 'role',
  components: { PageModal, PageContent, PageSearch },
  setup() {
    // 1. 处理pageModal的hook
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const updateCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        console.log({ ...elTreeRef.value })
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef, defaultInfo, handleNewData, handleUpdateData] =
      usePageModal(undefined, updateCallback)

    const store = userStore()
    const menus = computed(() => {
      return store.state.entireMenu
    })

    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      menus,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleUpdateData,
      otherInfo,
      contentTableConfig,
      searchFormConfig,
      modalFormConfig,
      elTreeRef,
      handleCheckChange
    }
  }
})
</script>

<style scoped lang="scss">
.menu-tree {
  margin-left: 40px;
}
</style>
