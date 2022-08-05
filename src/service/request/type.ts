import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface GHRequestInterceptors extends AxiosRequestConfig {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface GHRequestConfig extends GHRequestInterceptors {
  interceptors?: GHRequestInterceptors
  showLoading?: boolean
}