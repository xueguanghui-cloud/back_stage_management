import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '@/store/types'
import { getPageListData } from '@/service/main/system/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  getters: {},
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, totalCount: number) {
      state.userCount = totalCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.对页面发送请求
      const pageListResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      const { list, totalCount } = pageListResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}
export default systemModule
