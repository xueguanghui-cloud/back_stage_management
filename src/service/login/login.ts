import requestService from '../index'
import { IAccount, IDataType, ILoginResult } from './type'
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // /users/id
  userMenus = '/role/' //  /role/4/menu
}
export function accountLoginRequest(account: IAccount) {
  return requestService.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return requestService.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenus(id: number) {
  return requestService.get<IDataType>({
    url: `${LoginAPI.userMenus}${id}/menu`,
    showLoading: false
  })
}
