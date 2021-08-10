import { NAddProject } from '@/d.ts/project'
import request from '@/services/request'

export const addProjctFetch = (params: NAddProject.Request) => request.post<null, string>('/project/add', params)
