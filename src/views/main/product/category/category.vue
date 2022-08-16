<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="category"
      @newData="handleNewData"
      @updateData="handleUpdateData"
      :contentTableConfig="contentTableConfig"
    ></page-content>

    <page-modal
      ref="pageModalRef"
      pageName="category"
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
  name: 'category',
  components: { PageContent, PageSearch, PageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleSearchClick] =
      usePageSearch()

    // 调用hook获取公共的变量和函数
    const [pageModalRef, defaultInfo, handleNewData, handleUpdateData] =
      usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      modalFormConfig,
      pageContentRef,
      handleResetClick,
      handleSearchClick,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleUpdateData
    }
  }
})
</script>

<style scoped></style>
