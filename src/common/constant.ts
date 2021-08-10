import { objToArr } from '@/utils'

/**
 * iconfont的icon类型
 */
export enum ICONTYPE {
  // 正方形的icon
  square = 'square',
  // 不规则的icon
  irregular = 'irregular',
  // 圆形的icon
  circle = 'circle',
  total = 'total',
}

export enum THEMECOLORS {
  blue = '#2db7f5',
  red = '#ff4d4f',
  green = 'rgb(0, 227, 150)',
  gray = '#a3a5b0',
  apexBlue = '#008FFB',
  apexGreen = '	#00E396',
}

export const ErrorOptions = [
  {
    label: '未解决',
    value: 1,
  },
  {
    label: '正在解决',
    value: 2,
  },
  {
    label: '已解决',
    value: 3,
  },
  {
    label: '忽略',
    value: 4,
  },
  {
    label: 'Reopen',
    value: 5,
  },
]

export const barColors = [
  '#33b2df',
  '#546E7A',
  '#d4526e',
  '#13d8aa',
  '#A5978B',
  '#2b908f',
  '#f9a3a4',
  '#90ee7e',
  '#f48024',
  '#69d2e7',
]

/**
 * 上报错误类型
 */
export enum ERRORTYPES {
  UNKNOWN = 'UNKNOWN',
  UNKNOWN_FUNCTION = 'UNKNOWN_FUNCTION',
  JAVASCRIPT_ERROR = 'JAVASCRIPT_ERROR',
  LOG_ERROR = 'LOG_ERROR',
  FETCH_ERROR = 'HTTP_ERROR',
  VUE_ERROR = 'VUE_ERROR',
  REACT_ERROR = 'REACT_ERROR',
  RESOURCE_ERROR = 'RESOURCE_ERROR',
  PROMISE_ERROR = 'PROMISE_ERROR',
  ROUTE_ERROR = 'ROUTE_ERROR',
}

export function getErrorTypeCN(type: string) {
  switch (type) {
    case ERRORTYPES.UNKNOWN:
      return '未知错误'
    case ERRORTYPES.UNKNOWN_FUNCTION:
      return '未知函数错误'
    case ERRORTYPES.JAVASCRIPT_ERROR:
      return 'JS错误'
    case ERRORTYPES.LOG_ERROR:
      return '手动上报'
    case ERRORTYPES.FETCH_ERROR:
      return '接口异常'
    case ERRORTYPES.VUE_ERROR:
      return 'Vue错误'
    case ERRORTYPES.REACT_ERROR:
      return 'React错误'
    case ERRORTYPES.RESOURCE_ERROR:
      return '静态资源异常'
    case ERRORTYPES.PROMISE_ERROR:
      return 'promise异常'
    case ERRORTYPES.PROMISE_ERROR:
      return 'promise异常'
    case ERRORTYPES.ROUTE_ERROR:
      return '路由异常'
    default:
      return '未知错误'
  }
}

export const platformMap = {
  1: 'vue',
  2: 'react',
  3: 'javascript',
  4: 'mini',
}

export enum EPlatform {
  vue = 1,
  react,
  javascript,
  mini,
}

export const ErrorStatus = {
  1: '未解决',
  2: '解决中',
  3: '已解决',
  4: '已忽视',
  5: '重新打开',
}

export const ErrorStatusBadgeStatus = {
  1: 'error',
  2: 'processing',
  3: 'success',
  4: 'default',
  5: 'warning',
}

export enum EnumErrorStatus {
  unsolved = 1,
  solving = 2,
  solved = 3,
  ignored = 4,
  reopen = 5,
}

export const ErrorLevel = {
  1: 'p1',
  2: 'p2',
  3: 'p3',
  4: 'p4',
}

export const ErrorLevelBadgeColor = {
  1: 'red',
  2: 'gold',
  3: 'purple',
  4: 'gray',
}

export const ProjectRoleMap = {
  1: 'project leader',
  2: 'developer',
  3: 'member',
}

export const TeamRoleMap = {
  1: 'team leader',
  2: 'developer',
  3: 'member',
}

export const ProjectRoleOptions = objToArr(ProjectRoleMap)
export const TeamRoleOptions = objToArr(TeamRoleMap)

/**
 * 用户行为栈事件类型
 */
export enum BREADCRUMBTYPES {
  ROUTE = 'Route',
  CLICK = 'UI.Click',
  CONSOLE = 'Console',
  XHR = 'Xhr',
  FETCH = 'Fetch',
  UNHANDLEDREJECTION = 'Unhandledrejection',
  VUE = 'Vue',
  REACT = 'React',
  RESOURCE = 'Resource',
  CODE_ERROR = 'Code Error',

  CUSTOMER = 'Customer',
  // wx life cycle
  APP_ON_SHOW = 'App On Show',
  APP_ON_LAUNCH = 'App On Launch',
  APP_ON_HIDE = 'App On Hide',
  PAGE_ON_SHOW = 'Page On Show',
  PAGE_ON_HIDE = 'Page On Hide',
  PAGE_ON_SHARE_APP_MESSAGE = 'Page On Share App Message',
  PAGE_ON_SHARE_TIMELINE = 'Page On Share Timeline',
  PAGE_ON_TAB_ITEM_TAP = 'Page On Tab Item Tap',

  // wx BaseEvent
  TAP = 'UI.Tap',
  TOUCHMOVE = 'UI.Touchmove',
}

/** 等级程度枚举 */
export enum Severity {
  Else = 'else',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug',
  /** 上报的错误等级 */
  Low = 'low',
  Normal = 'normal',
  High = 'high',
  Critical = 'critical',
}

const MultipleMap = {
  browser: '浏览器',
  browserVersion: '浏览器版本',
  customTag: '自定义标签',
  device: '设备',
  engine: '引擎',
  ip: 'IP',
  isp: '运营商',
  location: '地理位置',
  os: '操作系统',
  osVersion: '操作系统版本',
  trackerId: '唯一标识符',
  type: '错误类型',
  url: '页面地址',
}

export function getMultipleLabel(value: string) {
  if (MultipleMap[value]) return MultipleMap[value]
  return value
}

export const COLORS = ['magenta', 'red', 'volcano', 'orange', 'gold', 'green', 'cyan', 'lime']
export const ChartColors = ['#2E93fA', 'rgb(0, 227, 150)', 'rgb(254, 176, 25)', '#E91E63', '#FF9800']

export const UseRequestTableParams = {
  paginated: true,
  defaultPageSize: 10,
  formatResult(res: Common.pageInfo<null>) {
    return {
      list: res.list,
      total: res.totalCount,
    }
  },
}

export const ErrorTableRotateTime = 16000
