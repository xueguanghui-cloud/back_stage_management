class EncryptionDecryption {
  encryption(key: string): string {
    return encodeURIComponent(key)
  }
  decryption(key: string): string {
    return decodeURIComponent(key)
  }
}

export default new EncryptionDecryption()
