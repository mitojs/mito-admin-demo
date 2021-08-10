import { call, put, take, takeLatest } from 'redux-saga/effects'

import types, { ASYNC_DELETE_SOURCEMAP, ASYNC_UPDATE_PROJECT, ASYNC_CREATE_SOURCEMAP } from './action-types'
import { sagasCollectionCreator, Action } from '@utils/helper'
import { createSourcemap, getHeaderProjectList, getSourcemap } from '../services'
import { AGetSourcemap } from '@/d.ts/project'

interface SourceMapAction extends Action {
  payload: AGetSourcemap.Request
}

const effects = {
  [types.ASYNC_GET_PROJECT_SOURCEMAP]: function* (action: SourceMapAction) {
    const res = yield call(getSourcemap, action.payload)
    yield put({ type: types.GET_PROJECT_SOURCEMAP, payload: res as AGetSourcemap.Response })
  },
  [ASYNC_CREATE_SOURCEMAP]: function* (action) {
    yield call(createSourcemap, action.payload)
  },
}

export default sagasCollectionCreator(effects)
