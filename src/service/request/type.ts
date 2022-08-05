import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface GHRequestInterceptors<T = AxiosResponse>
  extends AxiosRequestConfig {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface GHRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: GHRequestInterceptors<T>
  showLoading?: boolean
}
