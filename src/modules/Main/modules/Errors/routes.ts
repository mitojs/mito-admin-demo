import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/errors',
  name: '错误列表',
  isDynamic: true,
  isInMenu: true,
  isShowSiderBar: true,
  meta: {
    icon: 'menu-error',
  },
  component: loadable(() => import(/* webpackChunkName: "Errors"*/ './Errors')),
}
