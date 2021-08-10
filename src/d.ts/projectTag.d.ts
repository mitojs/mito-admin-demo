declare namespace ProjectTag {
  export interface Request extends Common.RequestDate {
    projectId: number
    label?: string
  }
  export interface Response {
    label: string
    value: string
  }
}
