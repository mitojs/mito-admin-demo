/**
 * @description：token 管理类
 */
class TokenManager {
  readonly key = 'token'

  /**
   * 获取 token
   */
  getToekn(): string {
    return localStorage.getItem(this.key)
  }

  /**
   * 设置 token
   * @param token
   */
  setToken(token: string) {
    localStorage.setItem(this.key, token)
  }

  /**
   * 清理已存在的 token
   */
  clearToken() {
    localStorage.removeItem(this.key)
  }
}

export const tokenManager = new TokenManager()
