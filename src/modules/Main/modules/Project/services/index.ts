import request from '@/services/request'
import {
  AGetSourcemap,
  AProjectCardList,
  GlobalProjectList,
  NProjectDeleteMember,
  NProjectInfo,
  NProjectMemberNotify,
  NProjectMembers,
  NProjectMemberAddition,
  AProjectInfoUpdate,
  NProjectPutUserRole,
  NProjectPutErrorLevelConfig,
} from '@/d.ts/project'

/**
 * 获取项目卡片列表
 * @param params
 */
export const getProjectCardList = (params: AProjectCardList.Request) =>
  request.get<null, AProjectCardList.Response>('/project/list/card', { data: params })

/**
 * 获取头部项目列表下拉
 * @param params
 */
export const getHeaderProjectList = () => request.get<null, GlobalProjectList.Response>('/project/list')

/**
 * 获取项目详细信息
 * @param projectId
 */
export const getProjectInfoByIdFetch = (projectId: number) =>
  request.get<null, NProjectInfo.Response>(`/project/projectId/${projectId}`)

/**
 * 获取项目成员列表
 * @param projectId
 */
export const getProjectMembersFetch = (projectId: number) =>
  request.get<null, NProjectMembers.Response>(`/project/user/list/detail/projectId/${projectId}`)

/**
 * 根据团队id获取团队成员列表
 * @param teamId
 */
export const getTeamMemberListByTeamIdFetch = (teamId: number) =>
  request.get<null, NProjectMembers.Response>(`/team/user/list/teamId/${teamId}`)

/**
 * 更改项目信息
 * @param teamId
 */
export const putProjectInfoFetch = (projectId: number, params: AProjectInfoUpdate.Request) =>
  request.put<null, AProjectInfoUpdate.Response>(`/project/projectId/${projectId}`, params)

/**
 * 新增项目成员
 * @param params
 */
export const updateProjectMemberFetch = (params: NProjectMemberAddition.Request) =>
  request.put<null, NProjectMemberAddition.Response>(`/project/user`, params)

/**
 * 更改团队成员是否通知
 * @param params
 */
export const putMemberNotifyFetch = (params: NProjectMemberNotify.Request) =>
  request.put<null, string>('/project/user/notify', params)

/**
 * 删除项目成员
 * @param params
 */
export const deleteMemberFetch = (params: NProjectDeleteMember.Request) =>
  request.delete<null, string>('/project/user', { data: params })

export const createSourcemap = (params: any) => {
  return request.post('sourcemap/create', params)
}

export const getSourcemap = (params: AGetSourcemap.Request) => {
  return request.get<null, AGetSourcemap.Response>('sourcemap/url', { data: params })
}

export const deleteSourcemap = (params: { projectId: number; ids: number[] }) => {
  return request.post('sourcemap/delete', params)
}

/**
 * 更改项目成员角色
 * @param params
 */
export const putUserRole = (params: NProjectPutUserRole.Request) =>
  request.put<null, Common.CommonMessage>('/project/user/role', params)

export const putProjectErrorLevelConfigFetch = (projectId: number, params: NProjectPutErrorLevelConfig.Request) =>
  request.put<null, Common.CommonMessage>(`/project/level/config/projectId/${projectId}`, params)
