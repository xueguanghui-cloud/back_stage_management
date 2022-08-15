export const contentTableConfig = {
  title: '部门列表',
  buttonName: '添加部门',
  propList: [
    { prop: 'name', label: '部门名称', minWidth: '100' },
    { prop: 'leader', label: '领导', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { prop: 'handle', label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true
}
