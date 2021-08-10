import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/register',
  name: '注册页面',
  isDynamic: true,
  component: loadable(() => import(/* webpackChunkName: "register"*/ './views/index')),
}
