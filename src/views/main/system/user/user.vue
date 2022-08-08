<template>
  <div class="user">
    <gh-form v-bind="searchFormConfig"></gh-form>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GhForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: { GhForm },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped lang="scss">
.user {
  padding: 10px;
}
</style>
