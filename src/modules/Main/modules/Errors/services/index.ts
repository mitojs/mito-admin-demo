import request from '@/services/request'
export const getStatisticsSum = (params: ErrorsStatistics.Request) =>
  request.get<null, ErrorsStatistics.Response>('/errors/statistics', {
    data: params,
  })
export const getProjectChart = (params: ErrorsChartProject.Request) =>
  request.get<null, ErrorsChartProject.Response[]>('/errors/chart/project', {
    data: params,
  })

export const getUserListByProjectId = (params: ErrorsChartUserDropdown.Request) =>
  request.get<null, ErrorsChartUserDropdown.Response[]>(`/project/user/list/projectId/${params.projectId}`)

export const updateUserById = (params: ErrorsUpdateUser.Request) =>
  request.put<null, Common.CommonMessage>(
    `/errors/user/errorId/${params.errorId}?userName=${params.userName}&userId=${params.userId}`,
  )

export const getTable = (params: NErrorsTable.Request) =>
  request.get<null, NErrorsTable.Response>(`/errors/table`, {
    data: params,
  })

/**
 * 批量更改错误状态
 * @param params
 */
export const updateErrorsStatusFetch = (params: NErrorsStatus.Request) =>
  request.put<null, NErrorsStatus.Response>(`/errors/status`, params)

/**
 * 批量更改错误状态
 * @param params
 */
export const updateErrorRemark = (params: NErrorRemark.Request) =>
  request.put<null, NErrorsStatus.Response>(`/errors/remark/errorId/${params.errorId}`, params)

/**
 * 批量收藏/取消收藏
 * @param params
 */
export const collectErrorsFetch = (params: NCollect.Request) => request.post<null, NCollect.Response>('collect', params)

// export const getProjectLabels = (params: ProjectTag.Request) => {
//   return request.get<null, ProjectTag.Response[]>('/project_tag/label', { data: params })
// }

// todo 临时替换
export const getProjectLabels = (params: ProjectTag.Request) => [
  {
    label: 'type',
    value: 'type',
  },
  {
    label: 'message',
    value: 'message',
  },
  {
    label: 'ip',
    value: 'ip',
  },
  {
    label: 'cookies',
    value: 'cookies',
  },
]

export const getProjectValues = (params: ProjectTag.Request) =>
  request.get<null, ProjectTag.Response[]>('/project_tag/value', { data: params })
// export const getProjectValues = async (params: ProjectTag.Request) => {
//   return new Promise(resolve => {
//     resolve([
//       {
//         label: 'type',
//         value: 'type',
//       },
//     ])
//   })
// }

export const errorTagLabelsFetch = (params: ErrorTag.Request) =>
  request.get<null, ProjectTag.Response[]>('/error_tag/label', { data: params })

export const errorTagValuesFetch = (params: ErrorTag.Request) =>
  request.get<null, ProjectTag.Response[]>('/error_tag/value', { data: params })
