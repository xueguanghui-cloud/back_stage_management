<template>
  <el-form label-width="80px" :rules="phoneRules" :model="phoneInfo">
    <el-form-item label="手机号" prop="cellPhoneNumber">
      <el-input v-model="phoneInfo.cellPhoneNumber" />
    </el-form-item>
    <el-form-item label="验证码" prop="verificationCode">
      <div class="get-code">
        <el-input v-model="phoneInfo.verificationCode" />
        <el-button type="primary" class="get-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { phoneRules } from '../config/account-config'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    // 1. 定义变量
    const store = useStore()
    const phoneInfo = reactive({
      cellPhoneNumber: '',
      verificationCode: ''
    })

    // 2.定义方法
    const loginAction = () => {
      store.dispatch('login/phoneLoginAction', { ...phoneInfo })
    }

    return {
      phoneInfo,
      loginAction,
      phoneRules
    }
  }
})
</script>

<style scoped lang="scss">
:deep(.el-form-item:last-child) {
  margin-top: 30px;
}

.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
}
</style>
