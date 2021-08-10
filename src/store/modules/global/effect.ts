import { delay, put, takeLatest, take } from 'redux-saga/effects'
import types from './action-types'
import { sagasCollectionCreator } from '@/utils'

const effects = {
  toggleCollapsed: function* () {
    yield delay(1000)
    yield put({ type: 'ADD_NAV_TAG' })
  },
}

export default sagasCollectionCreator(effects)
