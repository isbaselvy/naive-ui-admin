import Axios, { AxiosRequestConfig } from 'axios'
import { message } from 'ant-design-vue'
import { useUserStore } from '@/store/user'
import { login } from '@/utils/login'

const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 60000,
  baseURL: import.meta.env.VUE_APP_BASE_API as string
})

axios.interceptors.request.use((req: AxiosRequestConfig) => {
  if (req.method === 'get') {
    const url = req.url || ''
    const t = new Date().getTime()
    req.url = `${url}${url.indexOf('?') >= 0 ? '&' : '?'}t=${t}`
  }
  const { token } = useUserStore()
  if (token && req.headers) {
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
})

axios.interceptors.response.use(
  res => {
    const headers = res.config.headers
    const { code, success, msg } = res.data
    switch (code) {
      case 0:
        break
      case 200:
        if (!success && !headers?.ignoreMsg) {
          message.error(msg)
        }
        break
      case 401:
        if (!headers?.ignoreLogin) {
          message.error('尚未登录请重新登录', 3, () => {
            login()
          })
        }
        break
      case 403:
        if (!headers?.ignoreLogin) {
          message.error('没有权限查看')
        }
        break
      case 423:
        window.location.href = `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/Account/Logout`
        break
      case 500:
        if (!headers?.ignoreMsg) {
          message.error(msg || '系统异常')
        }
        break
      case 600:
        if (!headers?.ignoreMsg) {
          message.error(msg || '业务异常')
        }
        break
      default:
        if (!headers?.ignoreMsg) {
          message.error(msg || '未定义的异常')
        }
        break
    }
    return res.data
  },
  error => {
    const { response } = error
    if (response) {
      switch (response.status) {
        case 400:
          message.error('请求无效')
          break
        case 401:
          message.error('尚未登录请重新登录', 3, () => {
            login()
          })
          break
        case 403:
          message.error('当前没有权限查看')
          break
        case 404:
          message.error('请求未找到')
          break
        case 500:
          message.error('系统异常')
          break
        case 504:
          message.error('请求超时，请稍后再试')
          break
        default:
          message.error('系统异常')
          break
      }
    }
    return Promise.reject(error)
  }
)

export default axios
