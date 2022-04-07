import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/store/user'
import projectRouters from './modules/projectMange'
import { login } from '@/utils/login'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/projectManage'
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401.vue')
  },
  {
    path: '/403',
    component: () => import('@/views/errorPage/403.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404.vue')
  },
  {
    path: '/500',
    component: () => import('@/views/errorPage/500.vue')
  },
  {
    path: '/authCallback',
    component: () => import('@/views/authCallback.vue')
  },
  ...projectRouters,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    component: () => import('@/views/errorPage/500.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const whiteList = ['/login', '/401', '/404', '/authCallback']
// router.beforeEach(async (to, form, next) => {
//   const userStore = useUserStore()
//   if (whiteList.indexOf(to.path) >= 0) {
//     next()
//   } else {
//     if (!userStore.token) {
//       await userStore.getUser()
//     }
//     if (userStore.token) {
//       if (to.meta.permission && !userStore.permissions.includes(to.meta.permission as string)) {
//         next('/403')
//       } else {
//         next()
//       }
//     } else {
//       login(to)
//     }
//   }
// })
router.afterEach(to => {
  document.title = `${import.meta.env.VUE_APP_NAME}-${to.meta.title as string}`
})
export default router
