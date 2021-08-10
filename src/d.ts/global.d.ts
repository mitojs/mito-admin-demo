declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare interface ExtendWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function
}

declare interface UtilObject {
  [key: string]: any
}

declare interface RouteConfigDeclaration {
  /**
   * 当前路由路径
   */
  path: string
  /**
   * 当前路由名称
   */
  name?: string
  /**
   * 是否严格匹配路由
   */
  exact?: boolean
  /**
   * 是否需要路由鉴权
   */
  isProtected?: boolean
  /**
   * 是否需要路由重定向
   */
  isRedirect?: boolean
  /**
   * 是否需要动态加载路由
   */
  isDynamic?: boolean
  /**
   * 动态加载路由时的提示文案
   */
  loadingFallback?: string
  /**
   * 路由组件
   */
  component: any
  /**
   * 子路由
   */
  routes?: RouteConfigDeclaration[]
  /**
   * 是否在侧边栏显示
   */
  isInMenu?: boolean
  /**
   * 是否显示siderbar布局
   */
  isShowSiderBar?: boolean
  /**
   * 是否是管理员才显示
   */
  isAdmin?: boolean

  meta?: {
    // icon
    icon: string
  }
}
