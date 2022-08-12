import { Module } from 'vuex'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenus
} from '../../service/login/login'

import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '../../service/login/type'
import localCache from '../../utils/cache'
import router from '@/router'
import { mapMenusToRoutes, mapMenusToPermission } from '@/utils/map-menus'

// <S, R> S -> 当前模块中state的类型;R -> 根模块中state的类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userinfo: {},
      userMenus: {},
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userinfo: any) {
      state.userinfo = userinfo
    },
    changeUserMenus(state, menus: any) {
      state.userMenus = menus

      // userMenus => routes
      const routes = mapMenusToRoutes(menus)
      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮的权限
      const permissions = mapMenusToPermission(menus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1. 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 发送初始化请求
      dispatch('getInitialDataAction', null, { root: true })

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户的菜单
      const userMenusResult = await requestUserMenus(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4. 跳转到首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction', payload)
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        // 发送初始化请求
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
