<template>
  <div class="list">
    <page-content
      pageName="story"
      :contentTableConfig="contentTableConfig"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/compontents/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'list',
  components: { PageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
