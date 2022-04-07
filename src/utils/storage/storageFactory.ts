import CookieStorage from './cookieStorage'

export default class StorageFactory {
  static getStorage = (): CookieStorage => new CookieStorage()
}
