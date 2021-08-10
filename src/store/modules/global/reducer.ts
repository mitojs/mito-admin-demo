import { Reducer } from 'redux'
import { produce } from 'immer'
import types from './action-types'

export interface GlobalState {
  tags?: TagsDec[]
  currentRoute?: RouteConfigDeclaration | {}
  time?: string[]
  currentProject?: number
  currentTeamId?: number
  currentUserId?: number
  lang?: Language | number
}

export enum Language {
  CN = 0,
  EN = 1,
}
interface TagsDec {
  key: string
  title: string
}

const initialState: GlobalState = {
  tags: [],
  currentRoute: {} as RouteConfigDeclaration,
  time: [],
  currentProject: 0,
  currentTeamId: 1,
  lang: localStorage.getItem('lang') ? parseInt(localStorage.getItem('lang')) : Language.CN,
}

const reducer: Reducer = produce((state: GlobalState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_NAV_TAG':
      if (state.tags.findIndex(item => item.key === payload.key) === -1) state.tags.push(payload)
      break
    case 'CUT_NAV_TAG':
      const index = state.tags.findIndex(item => item.key === payload.key)
      if (index !== -1) state.tags.splice(index, 1)
      break
    case 'TOGGLE_LANGUAGE':
      const newLang = state.lang === 0 ? Language.EN : Language.CN
      state.lang = newLang
      localStorage.setItem('lang', newLang.toString())
      break
    case types.SET_CURRENT_ROUTE:
      state.currentRoute = payload
      break
    case types.SYNC_CHANGE_TIME:
      state.time = payload
      break
    case types.CHANGE_PROJECT:
      state.currentProject = payload
      localStorage.setItem(`userId:${state.currentUserId}&teamId:${state.currentTeamId}`, String(state.currentProject))
      break
    case types.SET_CURRENT_TEAM_ID:
      state.currentTeamId = payload
      const projectId = localStorage.getItem(`userId:${state.currentUserId}&teamId:${state.currentTeamId}`)
      if (projectId !== null) {
        state.currentProject = Number(projectId)
      } else {
        state.currentProject = 0
      }
      break
    case types.SET_CURRENT_USER_ID:
      state.currentUserId = payload
      break
    default:
      return state
  }
}, initialState)

export default reducer
