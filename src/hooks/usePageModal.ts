import { ref } from 'vue'
import PageModal from '@/compontents/page-modal'

type CallbackFn = () => void

export function usePageModal(newCb?: CallbackFn, updateCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const handleNewData = () => {
    if (pageModalRef.value) {
      defaultInfo.value = {}
      pageModalRef.value.centerDialogVisible = true
    }
    newCb && newCb()
  }
  const handleUpdateData = (value: any) => {
    defaultInfo.value = { ...value }

    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    updateCb && updateCb()
  }
  return [pageModalRef, defaultInfo, handleNewData, handleUpdateData]
}
