<template>
  <div class="goods">
    <!-- 搜索区域 -->
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    ></page-search>
    <!-- 数据展示 -->
    <page-content
      pageName="goods"
      ref="pageContentRef"
      @newData="handleNewData"
      @updateData="handleUpdateData"
      :contentTableConfig="contentTableConfig"
    >
      <template #image="scope">
        <el-image
          preview-teleported
          style="height: 60px; width: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
    </page-content>
    <!-- 新增 -->
    <page-modal
      pageName="goods"
      :modalFormConfig="modalFormConfig"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/compontents/page-content'
import PageSearch from '@/compontents/page-search'
import PageModal from '@/compontents/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalFormConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
export default defineComponent({
  name: 'goods',
  components: { PageSearch, PageContent, PageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleSearchClick] =
      usePageSearch()

    // 2. 调用hook获取公共的变量和函数
    const [pageModalRef, defaultInfo, handleNewData, handleUpdateData] =
      usePageModal()
    return {
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleUpdateData,
      pageContentRef,
      handleResetClick,
      handleSearchClick,
      contentTableConfig,
      searchFormConfig,
      modalFormConfig
    }
  }
})
</script>

<style scoped></style>
