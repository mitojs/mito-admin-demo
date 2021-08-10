import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/team/:id',
  isDynamic: true,
  name: '团队详情',
  isShowSiderBar: true,
  isHideNavLeftSelect: true,
  component: loadable(() => import(/* webpackChunkName: "Team Detail"*/ './views/TeamDetail')),
}
