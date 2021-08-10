import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/login',
  name: '登录页面',
  isDynamic: true,
  component: loadable(() => import(/* webpackChunkName: "login"*/ './views/index')),
}
