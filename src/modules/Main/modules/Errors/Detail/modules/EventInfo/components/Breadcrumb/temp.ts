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
  RESOURCE = 'Resource',
  CODE_ERROR = 'Code Error',
  CUSTOMER = 'Customer',
}

export enum BREADCRUMBCATEGORYS {
  HTTP = 'http',
  USER = 'user',
  DEBUG = 'debug',
  EXCEPTION = 'exception',
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

type RowType = {
  type: BREADCRUMBTYPES
  category: BREADCRUMBCATEGORYS
  level: Severity
  time: number
  data: Events.ReportDataType
}
declare namespace Events {
  /**
   * 上报错误类型
   */
  export enum ERRORTYPES {
    UNKNOWN = 'UNKNOWN',
    UNKNOWN_FUNCTION = 'UNKNOWN_FUNCTION',
    JAVASCRIPT_ERROR = 'JAVASCRIPT_ERROR',
    BUSINESS_ERROR = 'BUSINESS_ERROR',
    LOG_ERROR = 'LOG_ERROR',
    FETCH_ERROR = 'HTTP_ERROR',
    VUE_ERROR = 'VUE_ERROR',
    RESOURCE_ERROR = 'RESOURCE_ERROR',
    PROMISE_ERROR = 'PROMISE_ERROR',
  }
  export interface ReportDataType {
    type?: ERRORTYPES
    message?: string
    url: string
    name?: string
    stack?: any
    time?: number
    errorId?: number
    level: string
    // ajax
    elapsedTime?: number
    request?: {
      httpType?: string
      traceId?: string
      method: string
      url: string
      data: any
    }
    response?: {
      status: number
      data: string
    }
    // vue
    componentName?: string
    propsData?: any
    // logError 手动报错 MITO.log
    customTag?: string
  }
}
