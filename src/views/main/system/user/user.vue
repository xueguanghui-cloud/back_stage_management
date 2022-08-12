<template>
  <div class="user">
    <!-- 搜索区域 -->
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    ></page-search>
    <!-- 数据展示 -->
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @newData="handleNewData"
      @updateData="handleUpdateData"
    ></page-content>
    <!-- 新建用户 -->
    <page-modal
      pageName="users"
      :modalFormConfig="modalConfigComputed"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import PageSearch from '@/compontents/page-search'
import PageModal from '@/compontents/page-modal'
import PageContent from '@/compontents/page-content'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalFormConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { userStore } from '@/store'
export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContent, PageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleSearchClick] =
      usePageSearch()

    // pageModel 相关逻辑
    // 1. 处理密码逻辑
    const newCallback = () => {
      const passwordItem = modalFormConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const updateCallback = () => {
      const passwordItem = modalFormConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }

    // 2. 动态添加部门和角色的逻辑
    const store = userStore()
    const modalConfigComputed = computed(() => {
      const departmentItem = modalFormConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })

      const roleItem = modalFormConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalFormConfig
    })

    // 3. 调用hook获取公共的变量和函数
    const [pageModalRef, defaultInfo, handleNewData, handleUpdateData] =
      usePageModal(newCallback, updateCallback)

    return {
      pageModalRef,
      modalFormConfig,
      defaultInfo,
      modalConfigComputed,
      pageContentRef,
      contentTableConfig,
      searchFormConfig,
      handleResetClick,
      handleSearchClick,
      handleNewData,
      handleUpdateData
    }
  }
})
</script>

<style scoped lang="scss"></style>
