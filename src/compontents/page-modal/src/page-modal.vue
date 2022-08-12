<template>
  <div class="page-modal">
    <el-dialog
      v-model="centerDialogVisible"
      title="新建用户"
      width="30%"
      destroy-on-close
      center
    >
      <div>
        <gh-form v-bind="modalFormConfig" v-model="modalFormData"></gh-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import GhForm from '@/base-ui/form'
import { useStore } from 'vuex'
export default defineComponent({
  components: { GhForm },
  props: {
    modalFormConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const centerDialogVisible = ref(false)
    const modalFormData = ref({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalFormConfig.formItems) {
          modalFormData.value[item.field] = newValue[item.field]
        }
      }
    )

    // 确认按钮的逻辑
    const store = useStore()
    const handleConfirmClick = () => {
      centerDialogVisible.value = false
      // 区分编辑逻辑和新建逻辑
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('system/updatePageDataAction', {
          pageName: props.pageName,
          updateData: { ...modalFormData.value },
          id: props.defaultInfo.id
        })
      } else {
        // 创建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...modalFormData.value }
        })
      }
    }

    return { centerDialogVisible, modalFormData, handleConfirmClick }
  }
})
</script>
<style scoped></style>
