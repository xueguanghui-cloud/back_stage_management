import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '@/store/types'
import { getPageListData, deletePageData } from '@/service/main/system/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
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
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, totalCount: number) {
      state.goodsCount = totalCount
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, totalCount: number) {
      state.menuCount = totalCount
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
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      // pageName -> /users
      // id -> /users/id
      const { id, pageName } = payload
      const pageUrl = `/${pageName}/${id}`
      await deletePageData(pageUrl)

      // 删除请求最新请求
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
export default systemModule
