import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
import './assets/css/index.scss'
import { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他
registerApp(app)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
