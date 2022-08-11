import { userStore } from '@/store'
export function usePermission(pageName: string, handleName: string) {
  const store = userStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  /*
   name = 'codexgh'
   !name => false
   !!name => true
    */
  return !!permissions.find((item) => item === verifyPermission)
}
