import React from 'react'
import MITO from '@zyf2e/mitojs'

interface Props {}

interface State {
  hasErrors: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = { hasErrors: false }
    console.log('init error')
  }

  // static getDerivedStateFromError(error) {
  //   console.log('getDerivedStateFromError', error)
  //   // 更新 state 使下一次渲染能够显示降级后的 UI
  //   return { hasError: true }
  // }

  // 此生命周期函数可以用来捕获错误和信息
  componentDidCatch(err, info) {
    MITO.errorBoundaryReport(err)
    if (err) {
      // console.log('componentDidCatch', err, info)
      this.setState({
        hasErrors: true,
      })
    }
  }

  render() {
    // if (this.state.hasErrors) {
    //   return <div style={{ position: 'relative', display: 'inline-block' }}>子组件发生未知错误，无法正常显示</div>
    // }
    return this.props.children
  }
}
