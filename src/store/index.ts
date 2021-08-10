import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import history from './history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import { reducer as globalReducer, effect as globalEffect } from './modules/global/index'
import createPromiseMiddleware from './middleware/createPromiseMiddleware'

declare let window: ExtendWindow

const reducers = combineReducers({
  global: globalReducer,
})

const rootSaga = function* () {
  yield all([fork(globalEffect)])
}

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(routerMiddleware(history), sagaMiddleware, createPromiseMiddleware()),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
)

const store = createStore(reducers, {}, enhancer)

sagaMiddleware.run(rootSaga)

export default store
