import GHRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return GHRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

//删除 url: /users/id
export function deletePageData(url: string) {
  return GHRequest.delete<IDataType>({
    url: url
  })
}

// 创建
export function createPageData(url: string, newData: any) {
  return GHRequest.post<IDataType>({
    url: url,
    data: newData
  })
}
// 编辑
export function updataPageData(url: string, updateData: any) {
  return GHRequest.patch<IDataType>({
    url: url,
    data: updateData
  })
}
