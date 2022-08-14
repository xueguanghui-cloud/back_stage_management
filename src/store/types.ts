import { ILoginState } from './login/types'
import { ISystemState } from './main/system/type'
import { IDashboardState } from './main/analysis/type'
export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
