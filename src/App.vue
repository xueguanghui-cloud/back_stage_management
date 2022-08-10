<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String
    }
  },
  setup() {
    return { zhCn }
  }
})
</script>

<style lang="scss">
.app {
  height: 100%;
  /*里面的代码可以根据自己需求去进行更改*/
  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(77, 76, 76, 0.3);
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
  }
}
</style>
