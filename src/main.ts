import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
import './service/axios_demo'
// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementPlus)

registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')
console.log(process.env.VUE_APP_BASE_URL, process.env.VUE_APP_BASE_NAME)
