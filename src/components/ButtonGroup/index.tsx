import React from 'react'
import styled from 'styled-components'

const ButtonGroupWrap = styled.div`
  button {
    margin-right: 12px;
  }
`
export const ButtonGroup = ({ children }) => <ButtonGroupWrap>{children}</ButtonGroupWrap>
