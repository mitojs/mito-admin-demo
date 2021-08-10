import request from '@/services/request'

export const getErrorsChartByErrorId = (errorId: number) =>
  request.get<null, IErrorChartByErrorId.Response>(`/errors/chart/errorId/${errorId}`, {})

export const getErrorsInfoErrorId = (errorId: number) =>
  request.get<null, NErrorInfoByErrorId.Response>(`/errors/errorId/${errorId}`, {})

export const getErrorTagsByErrorId = params =>
  request.get<null, NErrorTagsByErrorId.Response>(`/error_tag/tags`, { data: params })

export const getEventsTable = (params: NEventsTable.Request) =>
  request.get<null, NEventsTable.Response>(`/events/table`, { data: params })

export const getEventRecordsByEventIdFetch = (eventId: number) =>
  request.get<null, NRecordEvents.Response>(`/event_data/eventsRecord/eventId/${eventId}`)

export const getEventRecordsByErrorIdFetch = (errorId: number) =>
  request.get<null, NRecordEvents.Response>(`/event_data/eventsRecord/errorId/${errorId}`)

/**
 * 获取ossUrls
 * @param errorId
 * @returns
 */
export const getOssUrlsFetch = (errorId: number) =>
  request.get<null, NErrorOssUrls.Response>(`/errors/ossUrls/errorId/${errorId}`)
