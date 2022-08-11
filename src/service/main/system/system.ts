import GHRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return GHRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return GHRequest.delete<IDataType>({
    url: url
  })
}
