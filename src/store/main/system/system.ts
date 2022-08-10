import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '@/store/types'
import { getPageListData } from '@/service/main/system/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list
    },
    changeUsersCount(state, totalCount: number) {
      state.usersCount = totalCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, totalCount: number) {
      state.roleCount = totalCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.获取url
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 2.对页面发送请求
      const pageListResult = await getPageListData(pageUrl, payload.queryInfo)

      // 3.将数据存错到state中
      const { list, totalCount } = pageListResult.data

      const changePageName =
        (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    }
  }
}
export default systemModule
