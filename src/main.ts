import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
import requestService from './service'
// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementPlus)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')

// requestService.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独的请求config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应response')
//       return res
//     }
//   }
// })

// requestService
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET'
//   })
//   .then((res) => {
//     console.log(res)
//   })

requestService
  .get<DataType>({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res)
  })
