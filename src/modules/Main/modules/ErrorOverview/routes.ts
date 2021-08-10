import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/errorOverview',
  name: '统计概览',
  isDynamic: true,
  isInMenu: true,
  isShowSiderBar: true,
  isHideNavLeftSelect: false,
  meta: {
    icon: 'menu-errorOverview',
  },
  component: loadable(() => import(/* webpackChunkName: "ErrorOverview"*/ './ErrorOverview')),
}
