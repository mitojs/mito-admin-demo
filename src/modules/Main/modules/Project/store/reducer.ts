import { produce } from 'immer'
import types from './action-types'

const initialState = {
  detail: {
    apiKey: '',
    frame: '',
    id: 0,
    platform: '',
    memberNum: 0,
    name: '',
    ownerId: 0,
    ownerName: '',
    role: 0,
    teamId: 0,
    updateAt: 0,
    members: [],
    createAt: 0,
  },
  detailSourceMap: [],
  detailMemberList: [],
  projectList: [],
}

const reducer = produce((draft: ProjectState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.GET_PROJECT_DETAIL:
      draft.detail = payload
      break
    case types.GET_PROJECT_SOURCEMAP:
      draft.detailSourceMap = payload
      break
    case types.GET_PROJECT_MEMBER:
      draft.detailMemberList = payload
      break
    default:
      return draft
  }
}, initialState)

export default reducer
