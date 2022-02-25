import * as VueRouter from 'vue-router'
import Home from '../pages/home/index.vue'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { 
      path: '/home', 
      component: Home,
      children: [
        { path: '/home', component: () => import('../pages/index/index.vue') },
        { path: '/home/findhouse', component: () => import('../pages/find-house/index.vue') },
        { path: '/home/news', component: () => import('../pages/news/index.vue') },
        { path: '/home/mine', component: () => import('../pages/mine/index.vue') },
      ]
    },
    { path: '/citylist', component: () => import('../pages/city-list/index.vue') },
    { path: '/map', component: () => import('../pages/map/index.vue') },
  ]
})

export default router