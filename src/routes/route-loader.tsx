import React from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { History, Location } from 'history'
import { renderRoutes, matchRoutes } from 'react-router-config'
import { routesConfig } from './routes'
import NProgress from 'nprogress'
import store from '@/store/index'
import { types } from '@/store/modules/global/index'

interface RouteLoaderState {
  ctor: boolean
  prevLocation: null | History
  currentLocation: null | History
}

interface RouteLoaderProps {
  history: History
  location: Location
}

type RouterGuardItem = (from: Location, to: Location, next: () => any) => any

export function runQueue(queue: unknown[], fn: Function, cb: Function) {
  const step = index => {
    if (index >= queue.length) {
      Promise.resolve().then(() => {
        cb()
      })
    } else {
      if (queue[index]) {
        fn(queue[index], () => {
          step(index + 1)
        })
      } else {
        step(index + 1)
      }
    }
  }
  step(0)
}

/**
 * 全局路由加载
 * 1. 路由监听守卫 next('xxx')
 * 2. 进度条
 * 3. 渲染第一层router
 *
 * 路由嵌套
 * {renderRoutes(this.props.routes)} 等同于 <router-view />
 * */
class RouteLoader extends React.Component<RouteLoaderProps, RouteLoaderState> {
  static RouterGuards: RouterGuardItem[] = []
  static history: any

  static addGuard(func) {
    RouteLoader.RouterGuards.push(func)
  }

  constructor(props) {
    super(props)
    this.state = {
      prevLocation: null,
      currentLocation: props.location,
      ctor: false,
    }
    RouteLoader.history = props.history
    runQueue(RouteLoader.RouterGuards, this.iteratorGuard, () => {
      NProgress.done()
      this.setState({
        ctor: true,
      })
    })
  }

  iteratorGuard = (func, next) => {
    func(this.state.prevLocation, this.state.currentLocation, err => {
      if (err) {
        this.abort(err)
      } else {
        next()
      }
    })
  }

  abort = err => {
    NProgress.fail()
  }

  static getDerivedStateFromProps(props, state) {
    const currentLocation = props.location
    const prevLocation = state.currentLocation
    const navigated = currentLocation.pathname !== prevLocation.pathname
    if (navigated) {
      NProgress.start()
      return {
        prevLocation,
        currentLocation,
      }
    }
    return null
  }

  componentDidUpdate(prevProps: Readonly<RouteLoaderProps>, prevState: Readonly<RouteLoaderState>, snapshot?: any) {
    const navigated = prevProps.location.pathname !== this.props.location.pathname
    if (navigated) {
      runQueue(RouteLoader.RouterGuards, this.iteratorGuard, () => {
        NProgress.done()
        this.setState({
          prevLocation: null,
        })
      })
    }
  }

  render() {
    const { children, location } = this.props
    const { prevLocation, ctor } = this.state
    if (!ctor) return null
    return <Route location={(prevLocation || location) as Location} render={() => children} />
  }
}

RouteLoader.addGuard((from, to, next) => {
  const branch = matchRoutes(routesConfig, to.pathname)
  const { route } = branch[branch.length - 1]
  // 过滤掉动态组件否则报错
  const { component, ...rest } = route

  store.dispatch({
    type: types.SET_CURRENT_ROUTE,
    payload: rest,
  })
  next()
})

export default withRouter(RouteLoader)
