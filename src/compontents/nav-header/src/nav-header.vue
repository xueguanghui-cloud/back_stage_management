<template>
  <div class="header-container">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldClick"
    ></i>

    <div class="content">
      <gh-breadcrumb :breadcrumbs="breadcrumbs"></gh-breadcrumb>
      <div class="userInfo">
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import userInfo from './user-info.vue'
import ghBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { userStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMaptoBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: { userInfo, ghBreadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑数据56min
    const store = userStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMaptoBreadcrumbs(userMenus, currentPath)
    })
    return { isFold, handleFoldClick, breadcrumbs }
  }
})
</script>
<style scoped lang="scss">
.header-container {
  width: 100%;
  height: 48px;
  display: flex;

  i.fold-menu {
    font-size: 30px;
    line-height: 48px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    line-height: 48px;
    .userInfo {
      height: 100%;
    }
  }
}
</style>
