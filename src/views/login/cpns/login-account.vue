<template>
  <div class="login-account">
    <el-form
      label-width="60px"
      :rules="accountRules"
      :model="account"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

import { accountRules } from '../config/account-config'
import localCache from '../../../utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password', true) ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1. 判断是否需要记住密码
          if (isKeepPassword) {
            // 需要记住密码，进行本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password, true)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 2.开始进行登录密码
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      accountRules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="scss">
.login-account {
  ::v-deep {
    .el-form-item:last-child {
      margin-top: 30px;
    }
  }
}
</style>
