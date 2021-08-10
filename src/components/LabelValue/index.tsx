import React from 'react'
import styled from 'styled-components'

const LabelWrap = styled.span`
  font-weight: 600;
  margin-right: 6px;
`
type PropsType = {
  label: string
  children?: React.ReactNode
}
export default function LabelValue({ label, children }: PropsType) {
  return (
    <div>
      <LabelWrap>{label}</LabelWrap>
      {children}
    </div>
  )
}
