// 编写好规则
export const accountRules = {
  name: [
    {
      required: true,
      message: '请输入账号！',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码！',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ]
}

export const phoneRules = {
  cellPhoneNumber: [
    {
      required: true,
      message: '请输入手机号！',
      trigger: 'blur'
    },
    {
      pattern: /^1[34578]\d{9}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ],
  verificationCode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
}
