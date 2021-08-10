import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/admin',
  name: '管理界面',
  isDynamic: true,
  isInMenu: true,
  isShowSiderBar: true,
  isHideNavLeftSelect: true,
  isAdmin: true,
  meta: {
    icon: 'menu-admin',
  },
  component: loadable(() => import(/* webpackChunkName: "Admin"*/ './Admin')),
}
