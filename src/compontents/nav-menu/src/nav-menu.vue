<template>
  <div class="menu-container">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="logo" />
      <span class="title" v-show="!collapse">Vue3+TS</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#001529"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" class="xghicon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <!-- <el-menu-item-group> -->
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
              <!-- </el-menu-item-group> -->
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item
            :index="item.id + ''"
            @click="handleMenuItemClick(item)"
          >
            <i v-if="item.icon" class="xghicon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { userStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMaptoMenu } from '@/utils/map-menus'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // store
    const store = userStore()
    const userMenus = computed(() => store.state.login.userMenus)
    // router
    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path

    // data
    const menu = pathMaptoMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + '')

    // 事件处理
    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return { defaultValue, userMenus, handleMenuItemClick }
  }
})
</script>
<style scoped lang="scss">
.menu-container {
  height: 100%;
  background-color: #001529;
  user-select: none;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      line-height: 1.4;
    }
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  :deep(.el-submenu__title) {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
    background-color: #0a60bd;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
  .el-menu {
    border-right: none;
  }
  i.xghicon {
    display: inline-block;
    margin: 0 5px;
  }

  :deep(.el-menu .el-menu--inline) {
    background-color: #193956 !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
