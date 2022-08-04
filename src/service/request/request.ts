import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { GHRequestInterceptors, GHRequestConfig } from './type'

class GHRequest {
  instance: AxiosInstance
  interceptors?: GHRequestInterceptors
  showLoading: boolean

  constructor(config: GHRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? false
    // 从config中取出的拦截器时对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例都有拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('请求成功：所有实例都有的拦截器')
        return config
      },
      (err) => {
        console.log('请求失败：所有实例都有的拦截器')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('响应成功：所有实例都有的拦截器')
        const code = res.data.returnCode
        if (code === '-1001') {
          console.log('请求失败，错误信息')
        } else {
          return res.data
        }
      },
      (err) => {
        console.log('响应失败：所有实例都有的拦截器')
        // 举例: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404 错误')
        }
        return err
      }
    )
  }

  request(config: GHRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default GHRequest
