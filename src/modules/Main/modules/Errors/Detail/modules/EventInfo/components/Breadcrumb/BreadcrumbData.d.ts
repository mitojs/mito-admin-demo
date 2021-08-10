export interface MITOHttp {
  type: HTTPTYPE
  method?: string
  url?: string
  status?: number
  reqData?: any
  statusText?: string
  sTime?: number
  elapsedTime?: number
  responseText?: any
  time?: number
  isSdkUrl?: boolean
}
