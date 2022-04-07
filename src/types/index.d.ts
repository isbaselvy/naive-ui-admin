export interface UserInfo {
  accountStatus: number
  accountType: number
  authStatus: number
  avatar: string
  companyCode: string
  companyName: string
  companySysNo: string
  isOpenWithholdService: boolean
  lastLoginDate: Date
  loginName: string
  mobileNumber: string
  needChangePassword: boolean
  nickName: string
  roleType: string
  sellerAuthStatus: number
  sysno: string
  [propName: string]: any
}

export interface IPermission {
  authKey: string
  name: string
  sysno: string
  type: number
  typeDesc: string
  [propName: string]: any
}

export interface APIResponse<T = any> {
  code: number
  success: boolean
  data: T
  msg: string
  [propName: string]: any
}
