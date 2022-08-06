<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <i class="el-icon-s-custom"></i>
      {{ userName }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item :icon="Close">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { userStore } from '@/store'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const store = userStore()
    const userName = computed(() => store.state.login.userinfo.name)
    return { userName }
  }
})
</script>
<style scoped lang="scss">
.el-dropdown {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
