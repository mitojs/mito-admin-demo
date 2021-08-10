import React from 'react'
import MainContentRoutes from '@/modules/Main/routes'

const sortRoute = {
  项目列表: null,
  错误列表: null,
  收藏列表: null,
  项目错误统计: null,
  团队列表: null,
}

MainContentRoutes.forEach(item => {
  sortRoute[item.name] = item
})

const finalMenuData = Object.values(sortRoute).filter(item => item)

// 获取侧边栏的菜单数据
export function getMenuData(): RouteConfigDeclaration[] {
  const menuData = JSON.parse(JSON.stringify(finalMenuData))
  const recursion = (routes: RouteConfigDeclaration[]) => {
    return routes.filter(item => {
      if (item.routes) {
        item.routes = recursion(item.routes)
      }
      return item.isInMenu
    })
  }
  return recursion(menuData)
}

export default MainContentRoutes
