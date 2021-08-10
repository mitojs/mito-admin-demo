// import { EnumErrorStatus, ERRORTYPES } from '@/common/constant'

interface IErrorBase {
  errorId: number
  name: string
  type: string
  message: string
  eventSum: number
  trackerSum: number
  level: number
  status: number
  userName: string
  userId: number
  teamId: number
  projectId: number
  url: string
  createdAt: Date
  updatedAt: Date
  platform: number
  projectName: string
  isCollect: boolean
  remark: string
  ossUrls: string
}

declare namespace ErrorsStatistics {
  export interface Request extends Common.RequestDate {
    projectId: number
  }
  export interface Response {
    errorSum: number
    userSum: number
  }
}
declare namespace ErrorsChartProject {
  export interface Request extends Common.RequestDate {
    projectId: number
  }
  export interface Response {
    count: number
    date: string
  }
}

declare namespace ErrorsChartUserDropdown {
  export interface Request {
    projectId: number
  }
  export interface Response {
    name: string
    email: string
    id: number
  }
}

declare namespace ErrorsUpdateUser {
  export interface Request {
    userName: string
    userId: string
    errorId: number
  }
  export interface Response {
    name: string
    email: string
    id: number
  }
}

declare namespace NErrorsTable {
  export type List = IErrorBase
  export interface Request extends Common.RequestDate {
    projectId: number
    pageSize: number
    pageNum: number
    orderField: string
    isDesc: number
    status?: number
  }
  export interface Response {
    pageSize: number
    pageNum: number
    totalCount: number
    list: List[]
  }
}

declare namespace IErrorChartByErrorId {
  export type Response = Common.ChartItem[]
}

declare namespace NErrorInfoByErrorId {
  export type Response = IErrorBase
}

interface TagItem {
  label: string
  values: string[]
  sums: number[]
}

declare namespace NErrorTagsByErrorId {
  export type Response = TagItem[]
}

declare namespace NErrorsStatus {
  export interface Request {
    errorIds: number[]
    status: number
  }
  export type Response = Common.CommonMessage
}

declare namespace NErrorRemark {
  export interface Request {
    errorId: number
    remark: string
  }
  export type Response = Common.CommonMessage
}

declare namespace NErrorHealthProfile {
  export interface Request extends Common.RequestDate {
    projectId: number
  }
  interface IStatusStatistic extends Common.StatisticAndPercentage {
    status: number
  }
  interface ITypeSatistic extends Common.StatisticAndPercentage {
    type: string
  }
  export interface Response {
    score: number
    statusStatistic: IStatusStatistic[]
    typeStatistic: ITypeSatistic[]
  }
}

declare namespace NErrorTypeChart {
  export interface Request extends Common.RequestDate {
    projectId: number
  }
  interface ResponseItem {
    type: string
    chart: Common.ChartItem[]
  }
  type Response = ResponseItem[]
}

declare namespace NErrorHandleParams {
  export interface Response {
    slsListLength: number
    corn: string
    handleRedisCount: number
  }
}
