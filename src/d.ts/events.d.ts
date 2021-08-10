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
  export interface IEventUa {
    ip: string
    location: string
    isp: string
    os: string
    osVersion: string
    browser: string
    browserVersion: string
    device: string
    engine: string
    ua: string
  }
  export interface IEventErrorInfo extends ReportDataType {
    level: string
  }

  export interface IEventCache extends IEventUa, IEventErrorInfo {
    sdkVersion: string
    sdkName?: string
    trackerId: string
    apikey: string
    breadcrumb: any
    customTag?: string
    stack: any
    record: any
    projectId: number
    teamId: number
    id?: number
  }

  export interface IEventSls extends IEventCache {
    userId?: string
    date?: string
    url: string
    cookies?: string
  }
}

declare namespace NEventsTable {
  export interface Request {
    errorId: number
    pageSize: number
    pageNum: number
    slsQuery: string
  }
  export type Response = Common.pageInfo<Events.IEventErrorInfo>
}

declare namespace NRecordEvents {
  interface Response {
    eventId: number
    recordEvents: any[]
  }
}

declare namespace NErrorOssUrls {
  interface Response {
    ossUrls: string[]
  }
}
