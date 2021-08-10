import React, { useState, useEffect } from 'react'
import { Affix, Layout, Menu } from 'antd'
import styled from 'styled-components'
import NavBar from './NavBar'
import MainContent from './MainContent'
import { useLocation, useHistory } from 'react-router-dom'

function BaseLayout() {
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/project')
    }
  }, [])
  return (
    <Layout>
      <Affix offsetTop={0}>
        <NavBar />
      </Affix>
      <MainContent />
    </Layout>
  )
}

export default BaseLayout
