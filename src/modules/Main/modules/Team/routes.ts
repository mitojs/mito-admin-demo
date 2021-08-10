import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/team',
  name: '团队列表',
  isDynamic: true,
  isInMenu: true,
  isHideNavLeftSelect: true,
  isShowSiderBar: true,
  meta: {
    icon: 'menu-team',
  },
  component: loadable(() => import(/* webpackChunkName: "team"*/ './Team')),
}
