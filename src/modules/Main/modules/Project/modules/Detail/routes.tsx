import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/project/:id',
  isDynamic: true,
  name: '项目详情',
  isShowSiderBar: true,
  isHideNavLeftSelect: true,
  component: loadable(() => import(/* webpackChunkName: "Project Detail"*/ './ProjectDetail')),
}
