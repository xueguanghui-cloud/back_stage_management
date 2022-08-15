import { IForm } from '@/base-ui/form'
export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'parentId',
      type: 'input',
      label: 'parentId',
      placeholder: '请输入parentId'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
