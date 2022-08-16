import { IForm } from '@/base-ui/form'
export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品类别',
      placeholder: '请输入商品类别'
    }
  ],
  colLayout: { span: 24 }
}
