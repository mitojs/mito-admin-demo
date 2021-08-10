interface teamListItem {
  teamId: number
  teamName: string
  role: number
  memberCount: number
  owner: string
  createdAt: string
  selected: number
}

interface teamUserListItem {
  userId: number
  userName: string
  role: number
  email: string
  createdAt: string
  isMe: boolean
}
declare namespace ATeamList {
  export type Response = teamListItem[]
}

declare namespace ATeamUserList {
  export type TTeamUserListItem = teamUserListItem
  export type Response = teamUserListItem[]
}

declare namespace ATeamUserDelete {
  export interface Request {
    userId: number
    teamId: number
  }
  export type Response = Common.CommonMessage
}

declare namespace ATeamInfo {
  export interface Response {
    teamId: number
    teamName: string
    dingtalkRobot: string
    createdAt: string
    updatedAt: string
  }
}

declare namespace ATeamAddUser {
  export interface Request {
    userIds: number[]
    teamId: number
  }
  export type Response = Common.CommonMessage
}

declare namespace NTeamPutInfo {
  export interface Request {
    dingtalkRobot: string
    teamName: string
  }
  export type Response = Common.CommonMessage
}

declare namespace NTeamAdd {
  export interface Request {
    dingtalkRobot: string
    teamName: string
  }
}

declare namespace NTeamPutUserRole {
  export interface Request {
    userId: number
    role: number
    teamId: number
  }
}
