import React, { useEffect, useState } from 'react'
import { THEMECOLORS, ICONTYPE } from '@/common/constant'
import useCount from '@/hooks/useCount'
import styled from 'styled-components'

type propsType = {
  title: string
  titleSize?: number
  num: number
  /**
   * 全局枚举的颜色
   */
  color: THEMECOLORS
}
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`
const TitleContainer = styled.div`
  margin-right: 6px;
`
export default function TitleCountNum(props: propsType) {
  const { title, num, color, titleSize } = props
  const numCount = useCount(num)
  return (
    <FlexContainer>
      <TitleContainer style={{ fontSize: `${titleSize ? titleSize + 'px' : '14px'}` }}>{title}</TitleContainer>
      <div style={{ color, fontSize: '24px' }}>{numCount}</div>
    </FlexContainer>
  )
}
