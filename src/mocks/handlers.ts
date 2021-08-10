import { rest } from 'msw'
import {
  chartDataMap,
  ErrorDataType,
  errorInfoMap,
  eventInfoMap,
  recordDataMap,
  sourceMap,
  tagsMap,
} from './modules/ErrorDetail'
interface ErrorIdType {
  errorId: number
}

function getSuccessData(data: any) {
  return {
    success: true,
    code: 200,
    data,
  }
}
export const handlers = [
  rest.get<ErrorIdType>('/errors/errorId/:errorId', (req, res, ctx) => {
    const { errorId } = req.params
    return res(ctx.json(getSuccessData(errorInfoMap.get(Number(errorId)))))
  }),
  rest.get<ErrorIdType>('/user/info', (req, res, ctx) => {
    return res(
      ctx.json(getSuccessData({ name: '游客', email: 'youke@youke.com', userId: 1, mobile: '1234567890', teamId: 1 })),
    )
  }),
  rest.get<ErrorIdType>('/events/errorId/:errorId', (req, res, ctx) => {
    const { errorId } = req.params
    return res(ctx.json(getSuccessData(eventInfoMap.get(Number(errorId)))))
  }),
  rest.get<ErrorIdType>('/errors/chart/errorId/:errorId', (req, res, ctx) => {
    const { errorId } = req.params
    return res(ctx.json(getSuccessData(chartDataMap.get(Number(errorId)))))
  }),
  rest.get<ErrorIdType>('/error_tag/tags', (req, res, ctx) => {
    const errorId = req.url.searchParams.get('errorId')
    return res(ctx.json(getSuccessData(tagsMap.get(Number(errorId)))))
  }),
  rest.get<ErrorIdType>('/errors/ossUrls/errorId/:errorId', (req, res, ctx) => {
    const { errorId } = req.params
    console.log(recordDataMap.get(Number(errorId)))
    return res(ctx.json(getSuccessData(recordDataMap.get(Number(errorId)))))
  }),
  rest.get<ErrorIdType>('/sourcemap/restore', (req, res, ctx) => {
    const projectId = req.url.searchParams.get('projectId')
    // projectId = 14 是react sourcemap
    if (Number(projectId) === 14) return res(ctx.json(getSuccessData(sourceMap.get(Number(ErrorDataType.react)))))
    // projectId = 14 是js sourcemap
    if (Number(projectId) === 1) return res(ctx.json(getSuccessData(sourceMap.get(Number(ErrorDataType.js)))))
  }),
]
