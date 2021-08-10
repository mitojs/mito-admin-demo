import request from '@/services/request'

/**
 * 团队列表获取
 */
export const teamListFetch = () => request.get<null, ATeamList.Response>('/team/list')

/**
 * 切换当前选中的团队id
 * @param teamId 团队id
 */
export const switchCurrentTeamIdFetch = (teamId: number) =>
  request.put<null, Common.CommonMessage>(`/user/selected/teamId/${teamId}`)

/**
 * 团队成员列表获取
 */
export const teamUserListFetch = (teamId: number) =>
  request.get<null, ATeamUserList.Response>(`/team/user/list/teamId/${teamId}`)

/**
 * 删除团队成员
 */
export const deleteTeamUserFetch = (params: ATeamUserDelete.Request) =>
  request.delete<null, ATeamUserDelete.Response>(`/team/user`, { data: params })

/**
 * 获取团队信息
 */
export const teamInfoFetch = (teamId: number) => request.get<null, ATeamInfo.Response>(`/team/teamId/${teamId}`)

/**
 * 根据用户名或者email模糊搜索用户
 * @param params
 */
export const userFuzzySearchFetch = (params: AUserSearch.Request) =>
  request.get<null, AUserSearch.Response>('/user/search', {
    data: params,
  })

/**
 * 批量新增团队成员
 * @param params
 */
export const addTeamMemberFetch = (params: ATeamAddUser.Request) =>
  request.post<null, ATeamAddUser.Response>('/team/users', params)

/**
 * 更改团队信息
 * @param teamId 团队id
 */
export const putTeamInfoFetch = (teamId: number, params: NTeamPutInfo.Request) =>
  request.put<null, Common.CommonMessage>(`/team/teamId/${teamId}`, params)

/**
 * 新增团队
 */
export const addTeamFetch = (params: NTeamAdd.Request) => request.post<null, Common.CommonMessage>(`/team`, params)

/**
 * 更改团队成员角色
 * @param params
 */
export const putUserRole = (params: NTeamPutUserRole.Request) =>
  request.put<null, Common.CommonMessage>('/team/user/role', params)
