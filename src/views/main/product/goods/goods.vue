<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      ref="pageContentRef"
    >
      <template #image="scope">
        <el-image
          style="height: 60px; width: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/compontents/page-content'
import PageSearch from '@/compontents/page-search'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/usePageSearch'
export default defineComponent({
  name: 'goods',
  components: { PageSearch, PageContent },
  setup() {
    const [pageContentRef, handleResetClick, handleSearchClick] =
      usePageSearch()
    return {
      pageContentRef,
      handleResetClick,
      handleSearchClick,
      contentTableConfig,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
