export const contentTableConfig = {
  title: '故事列表',
  buttonName: '添加故事',
  propList: [
    { prop: 'title', label: '故事名', minWidth: '100' },
    { prop: 'content', label: '故事内容', minWidth: '100' },
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
