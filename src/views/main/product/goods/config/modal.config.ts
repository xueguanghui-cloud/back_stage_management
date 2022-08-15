import { IForm } from '@/base-ui/form'
export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价格',
      placeholder: '请输入原价格'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '最新价格',
      placeholder: '请输入最新价格'
    },
    {
      field: 'desc',
      type: 'input',
      label: '商品描述',
      placeholder: '请输入商品描述'
    },
    {
      field: 'imgUrl',
      type: 'input',
      label: '商品图片地址',
      placeholder: '请输入商品图片地址:http://imgurl.jpg'
    },
    {
      field: 'inventoryCount',
      type: 'input',
      label: '库存数量',
      placeholder: '请输入库存数量'
    },
    {
      field: 'saleCount',
      type: 'input',
      label: '销售数量',
      placeholder: '请输入销售数量'
    },
    {
      field: 'favorCount',
      type: 'input',
      label: '收藏数量',
      placeholder: '请输入收藏数量'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入地址'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
