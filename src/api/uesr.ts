import request from '@/utils/request'
import { AxiosPromise } from 'axios'

// 查询用户基本信息
export const getUserInfomation = (): AxiosPromise => {
  return request({
    url: '/api/jwell/mall/profile/userInfomation',
    method: 'get',
    headers: {
      ignoreMsg: false
    }
  })
}

// 查询用户权限
export const getUserPermissions = (): AxiosPromise => {
  return request({
    url: '/api/jwell/mall/permission/userPermission',
    method: 'get',
    headers: {
      ignoreMsg: false
    }
  })
}
