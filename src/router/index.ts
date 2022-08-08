import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import store from '@/store'
import { IStoreType } from '@/store/types'
const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [] -> 根据userMenus来决定
  },
  {
    path: '/:pathMetch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
    const usermenus = (store.state as IStoreType).login.userMenus
    // userMenus => routes
    const routes = mapMenusToRoutes(usermenus)

    // 将routes => router.main.children
    routes.forEach((route) => {
      router.addRoute('main', route)
    })
  }
})

export default router
