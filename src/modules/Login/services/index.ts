import request from '@/services/request'

/**
 * 登录
 * @param params
 */
export const loginAccount = (params: Login.Request) => {
  return request.post<null, Login.Response>('/user/login', params)
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => request.get<null, AUserInfo.Response>('/user/info')
