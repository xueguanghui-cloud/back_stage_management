import EncryptionDecryption from './EncryptionDecryption'
class LocalCache {
  // 存储
  setCache(key: string, value: any, isEncryption = false): void {
    if (isEncryption) {
      window.localStorage.setItem(
        key,
        EncryptionDecryption.encryption(JSON.stringify(value))
      )
    } else {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  // 获取
  getCache(key: string, isDecryption = false): any {
    const value = window.localStorage.getItem(key)
    if (value) {
      if (isDecryption) {
        return JSON.parse(EncryptionDecryption.decryption(value))
      } else {
        return JSON.parse(value)
      }
    }
  }
  // 删除
  deleteCache(key: string): void {
    window.localStorage.removeItem(key)
  }
  // 清空
  clearCache(): void {
    window.localStorage.clear()
  }
}
export default new LocalCache()
