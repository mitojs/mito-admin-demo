declare namespace NSourcemapRestore {
  export interface Request {
    fileName: string
    projectId: number
    line: number
    column: number
    mapFileUrl: string
  }
  export interface Response {
    line: number
    column: number
    name: string
    originFile: string[]
    originFileName: string
  }
}
