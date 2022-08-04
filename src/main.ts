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

registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')

requestService.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独的请求config')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应response')
      return res
    }
  }
})

// requestService.request({
//   url: '/home/multidata',
//   method: 'GET'
// })
