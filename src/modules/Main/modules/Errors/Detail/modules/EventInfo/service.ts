import request from '@/services/request'

/**
 * 获取错误id下的第一条事件信息
 */
export const getFirstEvent = (errorId: number) => request.get<null, Events.IEventSls>(`/events/errorId/${errorId}`)

/**
 * 根据事件id获取事件详情
 * @param eventId 事件id
 */
export const infoByEventIdFetch = (eventId: number) => request.get<null, Events.IEventSls>(`/events/eventId/${eventId}`)

export const getSourcemapLookup = (params: NSourcemapRestore.Request) => {
  return request.get<null, NSourcemapRestore.Response>(`/sourcemap/restore`, {
    data: params,
  })
}
