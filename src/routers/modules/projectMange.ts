import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routers: RouteRecordRaw[] = [
  {
    path: '/projectManage',
    name: 'projectManage',
    redirect: '/projectManage/customerManangeList',
    component: Layout,
    meta: {
      title: '工程管理',
      icon: '',
      isMenu: true,
      permission: ''
    },
    children: [
      {
        path: 'customerManangeList',
        name: 'customerManangeList',
        component: () => import('@/views/customerManage/index.vue'),
        meta: {
          title: '客商管理',
          icon: '',
          isMenu: true,
          permission: ''
        }
      },
      {
        path: 'customerManangeDetail',
        name: 'customerManangeDetail',
        component: () => import('@/views/customerManage/index.vue'),
        meta: {
          title: '客商管理详情',
          icon: '',
          isMenu: false,
          permission: ''
        }
      },

      {
        path: 'contractManageList',
        name: 'contractManageList',
        component: () => import('@/views/contractManage/index.vue'),
        meta: {
          title: '合同管理',
          icon: '',
          isMenu: true,
          permission: ''
        }
      }
    ]
  }
]

export default routers
