import React from 'react'
import BaseLayout from '@/layout/BaseLayout'
import MainContentRoutes from '@/modules/Main/routes'
// import register from '@/modules/Register/routes'
import login from '@/modules/Login/routes'
import breadcrumbDemo from '@/modules/breadcrumb-demo/routes'

export const routesConfig: RouteConfigDeclaration[] = [
  // register,
  // login,
  breadcrumbDemo,
  {
    path: '/',
    component: BaseLayout,
    routes: MainContentRoutes,
  },
]
