import { defineStore } from 'pinia'
import { getUser, logOut, initOIDC } from '@/utils/login'
import { getUserInfomation, getUserPermissions } from '@/api/uesr'
import { UserInfo, IPermission } from '@/types'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: '',
      nickName: '',
      permissions: [] as string[]
    }
  },
  actions: {
    updateToken(token: string) {
      this.token = token
    },
    updateUserInfo(userInfo: UserInfo) {
      this.nickName = userInfo.nickName
    },
    updateUserPermissions(permissions: string[]) {
      this.permissions = permissions
    },
    async getInfomation() {
      const userInfoRes = await getUserInfomation()
      this.updateUserInfo(userInfoRes.data)
    },
    async getPermissions() {
      const userPermissionRes = await getUserPermissions()
      this.updateUserPermissions(userPermissionRes.data.map((_: IPermission) => _.authKey))
    },
    async getUser() {
      // 从OIDC的session里面后去用户信息。里面包含token和用户信息
      initOIDC()
      const userRes = await getUser()
      if (userRes) {
        this.updateToken(userRes.access_token)
        // 获取用户的基本信息
        await this.getInfomation()
        // 获取用户的权限信息
        await this.getPermissions()
      }
    },
    async userLogout() {
      logOut()
      // try {
      //   window.MatomoTrackUtils.logoutTrack()
      // } catch (error) {
      //   console.log(error)
      // }
    }
  }
})
