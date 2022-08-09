import GHRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return GHRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
