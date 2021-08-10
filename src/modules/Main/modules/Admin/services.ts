import request from '@/services/request'

export const handleParamsFetch = () => request.get<null, NErrorHandleParams.Response>(`/errors/handle/params/`)
export const userListFetch = (params: AUserList.Request) =>
  request.get<null, AUserList.Response>(`/user/list`, {
    data: params,
  })

export const runSqlFetch = (params: { sql: string }) => request.post<null, unknown>(`/user/sql`, params)

export const putAdminFetch = (userId: number, params: { status: number }) =>
  request.put<null, Common.CommonMessage>(`/user/admin/userId/${userId}`, params)
