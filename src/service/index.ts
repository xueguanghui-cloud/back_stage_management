import GHRequest from './request/request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const GhRequest = new GHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (error) => {
      // console.log('请求失败的拦截')
      return error
    },
    responseInterceptor: (response) => {
      // console.log('响应成功的拦截')
      return response
    },
    responseInterceptorCatch: (error) => {
      // console.log('响应失败的拦截')
      return error
    }
  }
})

export default GhRequest
