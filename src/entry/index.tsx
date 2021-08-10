/**
 * 样式
 */
import '@styles/index.less'

// mito初始化
// import './mitoInit'

/**
 * 第三方库
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import RouteLoader from '@routes/route-loader'

// import 'moment/locale/zh-cn';
/**
 * 自定义脚本
 */
import { routesConfig } from '@/routes/routes'
import store from '@store/index'
import history from '@store/history'
import { HashRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import '@/assets/prism/index'
import '@/assets/prism/index.css'
import DocumentTitle from 'react-document-title'
/**
 * 组件
 */
import { PageLoading } from '@components/page-loading/PageLoading'
import App from './App'
import { SWRConfig } from 'swr'
import { RecoilRoot } from 'recoil'
import ErrorBoundary from './ErrorBoundary'
import { ThemeProvider } from 'styled-components'
import { ERRORTYPES, THEMECOLORS } from '@/common/constant'

const LuckNumber = 16 * 1000
const theme = {
  colors: {
    ...THEMECOLORS,
  },
}
function renderApp() {
  ReactDOM.render(
    <App>
      {/* <ErrorBoundary> */}

      <ConfigProvider locale={zh_CN}>
        <Provider store={store}>
          <Router
            getUserConfirmation={(message, callback) => {
              const allowTransition = window.confirm(message)
              callback(allowTransition)
            }}
          >
            <ThemeProvider theme={theme}>
              <RecoilRoot>
                <SWRConfig value={{ refreshInterval: LuckNumber }}>
                  <DocumentTitle title="前端监控系统">
                    <RouteLoader>{renderRoutes(routesConfig)}</RouteLoader>
                  </DocumentTitle>
                </SWRConfig>
              </RecoilRoot>
            </ThemeProvider>
          </Router>
        </Provider>
      </ConfigProvider>
      {/* </ErrorBoundary> */}
    </App>,
    document.getElementById('root'),
  )
}

renderApp()

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { worker } = require('../mocks/browser')

if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV development')
  worker.start({
    url: 'mockServiceWorker.js',
  })
  if (module.hot) {
    module.hot.accept()
  }
} else {
  console.log('prod mockServiceWorker')
  worker.start({
    serviceWorker: {
      url: '/mito-admin-demo/mockServiceWorker.js',
    },
  })
}
