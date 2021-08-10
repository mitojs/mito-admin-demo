import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/project/create',
  isDynamic: true,
  name: '创建项目',
  isShowSiderBar: true,
  isHideNavLeftSelect: true,
  component: loadable(() => import(/* webpackChunkName: "Errors Detail"*/ './views/index')),
}
