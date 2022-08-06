import { IRootState } from './login/types'
import { createStore, Store, useStore } from 'vuex'
import { IStoreType } from './types'

import login from './login/login'
const store = createStore<IRootState>({
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function userStore(): Store<IStoreType> {
  return useStore()
}
export default store
