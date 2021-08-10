import { Col, Empty, Row } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import './NotFound.module.less'
const WrapRow = styled(Row)`
  /* is not work */
  /* @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch'); */
  background-color: white;
`
const ContentCol = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 50px;
  }

  h3 {
    font-size: 40px;
  }
  > h1,
  h2,
  h3 {
    text-align: center;
    font-weight: 800;
    font-family: 'Cabin Sketch', cursive;
  }
`
const NotFound = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/project')
  }
  return (
    <WrapRow justify="center" gutter={[20, 0]}>
      <Col>
        <img src="https://tva1.sinaimg.cn/large/008eGmZEly1goq6wxjofpg30m80go1kx.gif"></img>
      </Col>
      <ContentCol>
        <h1>404</h1>
        <h2>ARE YOU LOST?</h2>
        <h3>
          Do you want to go <a onClick={handleClick}>home</a>?
        </h3>
      </ContentCol>
    </WrapRow>
  )
}

export default NotFound
