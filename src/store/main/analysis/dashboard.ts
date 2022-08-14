import { Module } from 'vuex'
import { IDashboardState } from './type'
import { IRootState } from '@/store/types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsCountResult.data)
      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult.data)
      const categoryGoodsSaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult.data)
      const addressGoodsSaleResult = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsSaleResult.data)
    }
  }
}

export default dashboardModule
