import { IRootState, IStoreType } from './types'
import { createStore, Store, useStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'codexgh',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
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
