import { IRootState } from './login/types'
import { createStore, Store, storeKey } from 'vuex'

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
export default store
