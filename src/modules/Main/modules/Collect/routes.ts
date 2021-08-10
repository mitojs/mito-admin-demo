import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/collect',
  name: '收藏列表',
  isDynamic: true,
  isInMenu: true,
  isShowSiderBar: true,
  meta: {
    icon: 'menu-collect',
  },
  component: loadable(() => import(/* webpackChunkName: "collect"*/ './views/index')),
}
