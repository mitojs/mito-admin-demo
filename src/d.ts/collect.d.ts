declare namespace NCollect {
  export interface item {
    errorId: number
    projectId: number
  }
  export interface Request {
    items: item[]
    isCollect: boolean
  }
  export type Response = Common.CommonMessage
}

declare namespace NCollectTable {
  export interface item {
    errorId: number
    projectId: number
  }
  export interface Request extends Common.RequestDate {
    projectId: number
    pageSize: number
    pageNum: number
    orderField: string
    isDesc: number
    status?: number
  }
  export type Response = NErrorsTable.Response
}
