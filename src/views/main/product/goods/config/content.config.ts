export const contentTableConfig = {
  title: '商品列表',
  buttonName: '添加商品',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '50' },
    { prop: 'oldPrice', label: '原价格', minWidth: '50' },
    { prop: 'newPrice', label: '最新价格', minWidth: '60' },
    { prop: 'desc', label: '商品描述', minWidth: '150' },
    { prop: 'status', label: '状态', minWidth: '80', slotName: 'status' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    {
      prop: 'inventoryCount',
      label: '库存',
      minWidth: '60'
    },
    {
      prop: 'saleCount',
      label: '销量',
      minWidth: '60'
    },
    {
      prop: 'favorCount',
      label: '收藏',
      minWidth: '60'
    },
    {
      prop: 'address',
      label: '地址',
      minWidth: '80'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '150',
      slotName: 'updateAt'
    },
    { prop: 'handle', label: '操作', minWidth: '150', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
