import { useUserStore } from '@/store/user'
import storageFactory from './storage/storageFactory'
import Cookies from 'js-cookie'
import { useRoute, RouteLocationNormalized } from 'vue-router'
import { message } from 'ant-design-vue'
const route = useRoute()

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Oidc: any
  }
}

const config = {
  authority: import.meta.env.VUE_APP_OIDC_AUTHORITY,
  client_id: import.meta.env.VUE_APP_OIDC_CLIENT_ID,
  redirect_uri: import.meta.env.VUE_APP_OIDC_CALLBACK,
  post_logout_redirect_uri: import.meta.env.VUE_APP_LOGOUT_PATH,

  // if we choose to use popup window instead for logins
  // popup_redirect_uri: window.location.origin + "/popup.html",
  // popupWindowFeatures: "menubar=yes,location=yes,toolbar=yes,width=1200,height=800,left=100,top=100;resizable=yes",

  // these two will be done dynamically from the buttons clicked, but are
  // needed if you want to use the silent_renew
  response_type: import.meta.env.VUE_APP_OIDC_RESPONSE_TYPE,
  // scope: "openid profile email api1 api2.read_only",
  scope: import.meta.env.VUE_APP_OIDC_SCOPE,

  // this will toggle if profile endpoint is used
  loadUserInfo: true,
  automaticSilentRenew: false,
  // silent_redirect_uri: import.meta.env.VUE_APP_CUSTOMER_URL + '/automaticSilentRenew',

  // silent renew will get a new access_token via an iframe
  // just prior to the old access_token expiring (60 seconds prior)
  // silent_redirect_uri: window.location.origin + "/silent.html",
  // automaticSilentRenew: true,

  // will revoke (reference) access tokens at logout time
  revokeAccessTokenOnSignout: true,

  // this will allow all the OIDC protocol claims to be visible in the window. normally a client app
  // wouldn't care about them or want them taking up space
  filterProtocolClaims: false,

  userStore: new window.Oidc.WebStorageStateStore({ store: window.localStorage }),

  stateStore: new window.Oidc.WebStorageStateStore({ store: storageFactory.getStorage() }),

  metadata: {
    metadataUrl: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/well-known/openid-configuration`,
    issuer: import.meta.env.VUE_APP_OIDC_AUTHORITY,
    jwks_uri: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/.well-known/openid-configuration/jwks`,
    authorization_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/authorize`,
    token_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/token`,
    userinfo_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/userinfo`,
    end_session_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/endsession`,
    check_session_iframe: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/checksession`,
    revocation_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/revocation`,
    introspection_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/introspect`,
    device_authorization_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/deviceauthorization`
  },

  clockSkew: 60 * 60 * 24 * 30 // 客户端时间与服务器时间偏差
}

const userMgr = new window.Oidc.UserManager(config)
userMgr.clearStaleState()
// fixme: cookie存在、localStorage存在且失效，页面刷新需要进入sso重新登录
const userInfoStorage = window.localStorage.getItem(`oidc.user:${import.meta.env.VUE_APP_OIDC_AUTHORITY}:${import.meta.env.VUE_APP_OIDC_CLIENT_ID}`)
if (Cookies.get('userKey') && userInfoStorage && JSON.parse(userInfoStorage).profile) {
  if (JSON.parse(userInfoStorage).profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/userLoginId'] !== Cookies.get('userKey')) {
    userMgr.removeUser()
  }
}

const OIDC: any = {}
OIDC.userMgr = null

// 直接进行初始化。手动初始化。主要是为了解决signinRedirectCallback回调之后才能初始化
export const initOIDC = (): void => {
  const userStore = useUserStore()
  const userMgr = new window.Oidc.UserManager(config)
  userMgr.events.addSilentRenewError(function (err: Error) {
    console.log('Silent renew error: ' + err.message)
  })
  userMgr.events.addUserLoaded(function (user: any) {
    // console.log('New User Loaded：', arguments)
    console.log('Acess_token: ', user.access_token)
    userStore.updateToken(user.access_token)
  })
  userMgr.events.addAccessTokenExpired(function () {
    message.destroy()
    message.info({
      content: '登录已过期',
      onClose: () => {
        window.location.reload()
      }
    })
  })
  userMgr.events.addUserSignedOut(function () {
    OIDC.userMgr.clearStaleState()
    OIDC.userMgr.removeUser()
    if (OIDC.isSelf) {
      window.location.href = import.meta.env.VUE_APP_WEBSITEURI as string
    } else {
      // message.destroy()
      // message.info({
      //   content: '系统已在其他终端退出登录,若非本人操作请检查账号密码',
      //   onClose: () => {
      //     window.location.href = import.meta.env.VUE_APP_WEBSITEURI as string
      //   }
      // })
    }
  })
  userMgr.events.addSilentRenewError(function () {
    console.error('Silent Renew Error：')
  })
  OIDC.userMgr = userMgr
}

export function login(curRoute?: RouteLocationNormalized): void {
  if (!curRoute) {
    curRoute = route
  }
  Cookies.set('redirectUrl', curRoute.fullPath)
  OIDC.userMgr.signinRedirect()
}

export function getUser(): Promise<any> {
  return new Promise(resolve => {
    OIDC.userMgr.getUser().then((res: any) => {
      if (res) {
        const profile: any = {}
        if (res.profile) {
          const claimsUrl = import.meta.env.VUE_APP_CLAMIMS_URL as string
          Object.keys(res.profile).forEach(key => {
            if (key.startsWith(claimsUrl)) {
              profile[key.substr(claimsUrl.length)] = res.profile[key]
            } else {
              profile[key] = res.profile[key]
            }
          })
          if (profile.avatar && (!profile.avatar.startsWith('http') || !profile.avatar.startsWith('ftp'))) {
            profile.avatar = `http://${profile.avatar}`
          }
          res.profile = profile
        }
      }
      resolve(res)
    })
  })
}

export function logOut(): void {
  Cookies.remove('redirectUrl')
  OIDC.isSelf = true
  OIDC.userMgr.signoutRedirect()
}
