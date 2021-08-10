import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
const StyleImg = styled.img`
  margin: 0 35px 0 50px;
  cursor: pointer;
`
import imgURL from './../../assets/images/mito.jpg'

function Logo() {
  const history = useHistory()
  const goToHome = () => {
    history.push('/project')
  }
  return <StyleImg onClick={goToHome} src={imgURL} height="50"></StyleImg>
}
export default React.memo(Logo)
