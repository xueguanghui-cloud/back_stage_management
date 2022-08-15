<template>
  <div class="departmen">
    <!-- 搜索区域 -->
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    ></page-search>
    <!-- 展示区域 -->
    <page-content
      pageName="department"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newData="handleNewData"
      @updateData="handleUpdateData"
    ></page-content>
    <!-- 新建用户 -->
    <page-modal
      ref="pageModalRef"
      pageName="department"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfig"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/compontents/page-search'
import PageContent from '@/compontents/page-content'
import PageModal from '@/compontents/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  name: 'departmen',
  setup() {
    // 1. 查询重置
    const [pageContentRef, handleResetClick, handleSearchClick] =
      usePageSearch()

    // 3. 调用hook获取公共的变量和函数
    const [pageModalRef, defaultInfo, handleNewData, handleUpdateData] =
      usePageModal()
    return {
      pageContentRef,
      handleResetClick,
      handleSearchClick,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleUpdateData,
      searchFormConfig,
      contentTableConfig,
      modalFormConfig
    }
  }
})
</script>

<style scoped></style>
