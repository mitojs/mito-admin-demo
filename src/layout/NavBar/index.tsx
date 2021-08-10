import React, { Component } from 'react'
import styled from 'styled-components'
import NavLeft from './components/NavLeft'
import NavRight from './components/NavRight'
import UserInfo from './components/UserInfo'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background-color: white;
  box-shadow: rgba(32, 33, 36, 0.28) 0px 1px 6px 0px;
`
const ContainerFlex = styled.div`
  display: flex;
`

function NavBar() {
  return (
    <Container>
      <ContainerFlex>
        <NavLeft></NavLeft>
      </ContainerFlex>
      <ContainerFlex>
        <NavRight></NavRight>
      </ContainerFlex>
    </Container>
  )
}
export default React.memo(NavBar)
