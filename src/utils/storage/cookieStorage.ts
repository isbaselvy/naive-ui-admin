import Cookies from 'js-cookie'

const options = {
  secure: import.meta.env.NODE_ENV !== 'development'
}

export default class CookieStorage {
  setItem = (key: string, value: any): string | undefined => Cookies.set(key, value, options)

  getItem = (key: string): string | undefined => Cookies.get(key)

  removeItem = (key: string): void => Cookies.remove(key, options)

  // key = index => {
  //   const allKeys = Object.keys(Cookies.getJSON())
  //   return index > -1 && index <= allKeys.length ? allKeys[index] : ''
  // }
}
