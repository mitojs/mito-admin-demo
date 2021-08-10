import request from '@/services/request'

export const collectTableFetch = (params: NCollectTable.Request) =>
  request.get<null, NCollectTable.Response>('/collect/table', {
    data: params,
  })
