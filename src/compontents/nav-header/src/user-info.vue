<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      />
      {{ userName }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <el-icon class="el-icon--right"> <Avatar /> </el-icon>
          用户管理</el-dropdown-item
        >
        <el-dropdown-item
          ><el-icon class="el-icon--right"> <House /> </el-icon
          >部门管理</el-dropdown-item
        >
        <el-dropdown-item divided @click="handleExitClick"
          ><el-icon class="el-icon--right"> <CircleCloseFilled /> </el-icon
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { userStore } from '@/store'
import { computed, defineComponent } from 'vue'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const store = userStore()
    const userName = computed(() => store.state.login.userinfo.name)

    // 退出登录
    const router = useRouter()
    const handleExitClick = () => {
      console.log('让推出')

      LocalCache.deleteCache('token')
      router.push('/main')
    }
    return { userName, handleExitClick }
  }
})
</script>
<style scoped lang="scss">
.el-dropdown {
  height: 100%;
  display: flex;
  align-items: center;
  .el-dropdown-link {
    display: flex;
    align-items: center;
    .el-avatar--small {
      margin-right: 5px;
    }
  }
}
</style>
