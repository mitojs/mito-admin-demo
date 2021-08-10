import { NProjectPvUvStats } from '@/d.ts/project'
import request from '@/services/request'
export const getErrorTypesStatisticFetch = (params: NErrorHealthProfile.Request) =>
  request.get<null, NErrorHealthProfile.Response>('/errors/types/statistics', {
    data: params,
  })

export const getErrorTypesChartFetch = (params: NErrorTypeChart.Request) =>
  request.get<null, NErrorTypeChart.Response>('/errors/types/chart', {
    data: params,
  })

export const getPvUvStatsFetch = (params: NProjectPvUvStats.Request) => {
  const { projectId, ...other } = params
  return request.get<null, NProjectPvUvStats.Response>(`/project/pvuv/projectId/${projectId}`, {
    data: other,
  })
}
