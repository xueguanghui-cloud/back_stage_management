<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/compontents/page-search'

import PageContent from '@/compontents/page-content'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'
export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContent },
  setup() {
    const [pageContentRef, handleResetClick, handleSearchClick] =
      usePageSearch()

    return {
      pageContentRef,
      contentTableConfig,
      searchFormConfig,
      handleResetClick,
      handleSearchClick
    }
  }
})
</script>

<style scoped lang="scss"></style>
