declare namespace ErrorTag {
  export interface Request {
    errorId: number
    label?: string
  }
  export interface Response {
    label: string
    value: string
  }
}
