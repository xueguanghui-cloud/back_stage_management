<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/compontents/page-content'
import { contentTableConfig } from './config/content.config'

import PageSearch from '@/compontents/page-search'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch },
  setup() {
    return { contentTableConfig, searchFormConfig }
  }
})
</script>

<style scoped></style>
