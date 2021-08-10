import axios from 'axios'
import { Modal, message } from 'antd'
import Cookie from 'js-cookie'
import { createHashHistory } from 'history'
import config from '@/config'
export const BASE_URL = config.end

const addBearerToken = header => {
  const token = Cookie.get('bearerToken', { domain: config.cookieDomain })
  if (token) {
    Object.assign(header, {
      Authorization: `Bearer ${token}`,
    })
  }
}

const request = axios.create({
  // baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
})

request.interceptors.request.use(config => {
  const { method } = config
  if (method === 'get') {
    config.params = config.data
    config.data = {}
  }
  addBearerToken(config.headers)
  return config
})

request.interceptors.response.use(
  res => {
    const { data } = res
    if (data.success) {
      return data.data
    }
    message.error(data.message)
    const error = new Error(data.message)
    throw error
  },
  error => {
    switch (error.response.status) {
      case 400:
        message.error(error.response.data.message)
        break
      case 401:
        createHashHistory().push('/login')
        break
      case 404:
        Modal.error({
          content: '接口地址不存在',
          title: '404',
        })
        break
      case 500:
        Modal.error({
          content: '服务器错误，请联系管理员',
          title: '服务器错误',
        })
        break
      default:
        Modal.error({
          content: '未知错误',
          title: '未知错误',
        })
    }
    throw error
  },
)

request.defaults.withCredentials = true

export default request
