export interface IProjectMemberItem {
  userId: number
  email: string
  userName: string
  role: number
  notify: number
  createdAt: Date
  updatedAt: Date
  teamId: number
  isMe: boolean
}

export interface ProjectErrorLevelConfigItem {
  type: string
  data: {
    level: number
    value: number
  }[]
}
export interface IErrorLevelConfig {
  config: ProjectErrorLevelConfigItem[]
  isEvent: boolean
}
export interface ProjectListBase {
  projectId: number
  name: string
  git: string
  platform: number
  apikey?: string
  createdAt?: string
  updatedAt?: string
  memberCount?: number
  errorLevelConfig?: IErrorLevelConfig
}

export interface SourcemapBase {
  projectId: number
  id: string
  fileName: string
  url: string
  isDelete: 0 | 1
  createdAt: string
  updatedAt: string
}

declare namespace GlobalProjectList {
  export type Response = ProjectListBase[]
}

declare namespace AProjectCardList {
  export interface Request extends Common.pageInfo {}
  export type Response = {
    pageSize: number
    pageNum: number
    totalCount: number
    list: ProjectListCardItem[]
  }

  export interface ProjectListCardItem extends ProjectListBase {
    chart?: ProjectListCardItemType
    errorSum?: number
    pvSum?: number
    uvSum?: number
    creatorUserName?: string
    errorRate?: number
    pvRate?: number
    uvRate?: number
  }

  export interface ProjectListCardItemType {
    readonly errorYesterday: Common.CountTime[]
    readonly pvYesterday: Common.CountTime[]
    readonly uvYesterday: Common.CountTime[]
  }
}

declare namespace NAddProject {
  export interface Request {
    name: string
    apikey: string
    platform: number
    teamId: number
  }
}

declare namespace NProjectInfo {
  export type Response = ProjectListBase
}

declare namespace NProjectMembers {
  export type Response = IProjectMemberItem[]
}

declare namespace NProjectMembersUpdate {
  export type Response = Common.CommonMessage
}

declare namespace NProjectMemberNotify {
  export interface Request {
    notify: number
    userId: number
    projectId: number
  }
}
export declare namespace NProjectMemberAddition {
  export interface Request {
    projectId: number
    deleteUserIds: number[]
    addUserIds: number[]
  }
  export type Response = Common.CommonMessage
}

declare namespace NProjectDeleteMember {
  export interface Request {
    projectId: number
    userId: number
  }
}

declare namespace AGetSourcemap {
  export interface Request {
    projectId: number
    fileName?: string
  }

  export type Response = SourcemapBase[]
}

export declare namespace AProjectInfoUpdate {
  export interface Request {
    projectName: string
    platform: number
  }

  export type Response = Common.CommonMessage
}

declare namespace NProjectPutUserRole {
  export interface Request {
    userId: number
    role: number
    teamId: number
  }
}

declare namespace NProjectPutErrorLevelConfig {
  export type Request = IErrorLevelConfig
}

declare namespace NProjectPvUvStats {
  export interface Request extends Common.RequestDate {
    projectId: number
  }
  export class PvUvChart {
    pvCount: number
    uvCount: number
    date: string
  }

  export interface Response {
    chart?: PvUvChart[]
    pvSum: number
    uvSum: number
  }
}
