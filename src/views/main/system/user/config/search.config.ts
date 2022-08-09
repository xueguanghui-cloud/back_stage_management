import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  formItems: [
    { field: 'id', type: 'input', label: 'id', placeholder: '请输入id' },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '运动',
      placeholder: '请输入您喜欢的运动',
      options: [
        { title: '篮球', value: 'baseketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      field: 'createTime',
      type: 'datapicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px',
  itemStyle: { padding: '10px 30px' },
  colLayout: { xl: 6, lg: 8, md: 12, sm: 24, xs: 24 },
  itemLayout: undefined
}
