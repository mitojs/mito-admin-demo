import React from 'react'
import EventTables from './modules/EventTables/EventTables'
import EventTags from './modules/EventTags/EventTags'
import Replay from './modules/Replay/Replay'
import EventInfo from './modules/EventInfo/EventInfo'
import loadable from '@loadable/component'
export const eventRouterMap = {
  info: '错误详情',
  table: '错误事件列表',
  replay: '录制回放',
  tag: '标签集合',
}

export default {
  path: '/errors/:errorId',
  isDynamic: true,
  name: eventRouterMap.info,
  isHideNavLeftSelect: true,
  isShowSiderBar: true,
  component: loadable(() => import(/* webpackChunkName: "Errors Detail"*/ './views/ErrorDetail')),
  routes: [
    {
      path: '/errors/:errorId/info/:eventId',
      isShowSiderBar: true,
      name: eventRouterMap.info,
      component: EventInfo,
      isHideNavLeftSelect: true,
    },
    {
      path: '/errors/:errorId/info',
      isShowSiderBar: true,
      name: eventRouterMap.info,
      component: EventInfo,
      isHideNavLeftSelect: true,
    },
    {
      path: '/errors/:errorId/table',
      isShowSiderBar: true,
      name: eventRouterMap.table,
      component: EventTables,
      isHideNavLeftSelect: true,
    },
    {
      path: '/errors/:errorId/replay',
      isShowSiderBar: true,
      name: eventRouterMap.replay,
      component: Replay,
      isHideNavLeftSelect: true,
    },
    {
      path: '/errors/:errorId/tag',
      isDynamic: true,
      name: eventRouterMap.tag,
      isShowSiderBar: true,
      component: EventTags,
      isHideNavLeftSelect: true,
    },
    {
      path: '*',
      isDynamic: true,
      isShowSiderBar: true,
      component: EventInfo,
    },
  ],
}
