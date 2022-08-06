<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse">menu</nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="foldChange">header</nav-header>
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/compontents/nav-menu/nav-menu.vue'
import NavHeader from '@/compontents/nav-header'
export default defineComponent({
  components: { NavMenu, NavHeader },
  setup() {
    const isCollapse = ref(false)
    const foldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return { isCollapse, foldChange }
  }
})
</script>
<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .main-container,
  .page {
    height: 100%;
  }
  .page-content {
    height: calc(100% - 48px);
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
  }
  .el-hader,
  .el-footer {
    display: flex;
    color: #333;
    text-align: center;
    align-items: center;
  }
  .el-header {
    height: 48px !important;
  }
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s ease;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
