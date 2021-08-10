import useCount from '@/hooks/useCount'
import React from 'react'
import styled from 'styled-components'

type PropsType = {
  digital: number
  title: string
  dititalSize?: number
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DigitalWrap = styled.div`
  color: ${({ theme }) => theme.colors.blue};
`
const TitleWrap = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 2px;
  font-size: 12px;
`

export default function DigitalTitle(props: PropsType) {
  const { digital, title, dititalSize } = props
  return (
    <Container>
      <DigitalWrap style={{ fontSize: `${dititalSize || 22}px` }}>{useCount(digital)}</DigitalWrap>
      <TitleWrap>{title}</TitleWrap>
    </Container>
  )
}
