declare namespace Login {
  export interface Request {
    email: string
    password: string
  }
  export interface Response {
    name: string
    email: string
    token: string
  }
}

interface IUserBase {
  name: string
  email: string
  userId: number
  mobile: string
  isAdmin: number
  selectedTeamId: number
}

declare namespace AUserSearch {
  export interface Request {
    fuzzyName: string
  }

  export type Response = IUserBase[]
}

declare namespace AUserInfo {
  export type Response = IUserBase
}

declare namespace AUserList {
  export type Request = Common.pageInfo<null>
  export type Response = Common.pageInfo<IUserBase>
  export type ListItem = IUserBase
}
