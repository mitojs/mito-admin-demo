import { ProjectListBase } from '@/d.ts/project'
import { GlobalState, Language } from './modules/global/reducer'

declare interface ProjectState {
  detail: AProjectDetail.Response
  detailSourceMap: ASourceMap.Response
  detailMemberList: AProjectMember.Response
  projectList: ProjectListBase
}

declare interface MemberState {
  detail: AMemberDetail.Response
}

declare interface ErrorsState {
  tabActiveKey: string
}

export declare type RootState = {
  project: ProjectState
  member: MemberState
  errors: ErrorsState
  global: GlobalState
}
