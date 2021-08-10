import './App.css'
import React, { Suspense } from 'react'
import GlobalContext from '@common/global-context'

interface AppProps {
  routes?: RouteConfigDeclaration[]
}
class App extends React.Component<AppProps> {
  globalContext
  constructor(props) {
    super(props)
    this.globalContext = {}
  }
  render() {
    return <GlobalContext.Provider value={this.globalContext}>{this.props.children}</GlobalContext.Provider>
  }
}

export default App
