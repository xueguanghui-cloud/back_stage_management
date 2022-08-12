import { IRootState, IStoreType } from './types'
import { createStore, Store, useStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'

import { getPageListData } from '@/service/main/system/system'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'codexgh',
      age: 18,
      entireDepartment: [],
      entireRole: []
    }
  },
  getters: {},
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1, 请求部门角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })

      const { list: roleList } = roleResult.data

      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function userStore(): Store<IStoreType> {
  return useStore()
}
export default store
