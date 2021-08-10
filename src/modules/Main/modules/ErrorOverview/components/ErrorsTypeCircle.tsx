import { ErrorStatus, getErrorTypeCN } from '@/common/constant'
import { Progress } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

type propsType = {
  percent: number
  type: string
  count: number
  color: string
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const TitleDiv = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 6px;
  cursor: pointer;
  color: volcano;
`

export default function ErrorsTypeCircle(props: propsType) {
  const history = useHistory()
  function format(percent, successPercent) {
    return percent + '%'
  }

  function onClickTitle() {
    history.push(`errors?type=${props.type}`)
  }
  return (
    <Container>
      <Progress
        strokeLinecap="round"
        strokeWidth={8}
        strokeColor={props.color}
        format={format}
        type="circle"
        percent={props.percent}
      />
      <TitleDiv onClick={onClickTitle} style={{ color: props.color }}>
        {getErrorTypeCN(props.type)}:<span style={{ fontSize: '20px' }}>{props.count}</span>
      </TitleDiv>
    </Container>
  )
}
