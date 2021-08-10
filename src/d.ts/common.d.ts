declare namespace Common {
  export interface pageInfo<T> {
    pageNum: number
    pageSize: number
    totalCount?: number
    list?: T[]
  }
  export interface RequestDate {
    startDate: string
    endDate: string
  }
  export interface ChartItem {
    count: number
    userSum: number
    date: string
  }
  export interface CountTime {
    count: number
    time: string
  }
  export interface LabelValue {
    value: string
    label: string
  }
  export interface CommonMessage {
    message: string
  }
  export interface StatisticAndPercentage {
    count: number
    percent: number
  }
}
