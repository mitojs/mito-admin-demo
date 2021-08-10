import React from 'react'
import loadable from '@loadable/component'

export default {
  path: '/breadcrumbDemo',
  name: 'SDK-Demo',
  isDynamic: true,
  component: loadable(() => import(/* webpackChunkName: "breadcrumbDemo"*/ './views/index')),
}
