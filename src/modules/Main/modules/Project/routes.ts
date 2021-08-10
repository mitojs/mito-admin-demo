import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/project',
  name: '项目列表',
  isDynamic: true,
  isInMenu: true,
  isShowSiderBar: true,
  isHideNavLeftSelect: true,
  meta: {
    icon: 'menu-project',
  },
  component: loadable(() => import(/* webpackChunkName: "Project"*/ './views/Project')),
}
