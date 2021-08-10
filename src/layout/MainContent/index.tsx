import React from 'react'
import { Layout, Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import SiderBar from '@/layout/SiderBar'
import TransitionContainer from '@/components/TransitionContainer'
const { Content } = Layout
import './index.css'
import routes from '@/modules/Main/routes'
import { renderRoutes } from 'react-router-config'

function MainContent() {
  const location = useLocation()
  const CommonContent = (
    <Content>
      <TransitionContainer pageKey={location.key} duration={500} transition="main-content">
        <div className="main-content">{renderRoutes(routes)}</div>
      </TransitionContainer>
    </Content>
  )
  return (
    <Layout>
      <SiderBar />
      {CommonContent}
    </Layout>
  )
}
export default MainContent
