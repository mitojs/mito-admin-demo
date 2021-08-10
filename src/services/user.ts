import request from '@/services/request'

export const logout = () => request.get<null, string>('/user/logout')
