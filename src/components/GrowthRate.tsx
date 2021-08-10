import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { THEMECOLORS } from '@/common/constant'
import { Statistic } from 'antd'
import React from 'react'
import styled from 'styled-components'
const WrapStatistic = styled(Statistic)`
  display: flex;
  .ant-statistic-title {
    margin: 0 0 0 6px;
    line-height: 25px;
  }
`
export default function GrowthRate({
  rateNum,
  title = '',
  fontSize = '16px',
}: {
  rateNum: number
  title?: string
  fontSize?: string
}) {
  const isGrow = rateNum > 0
  const color = isGrow ? THEMECOLORS.red : THEMECOLORS.green
  return (
    <div>
      <WrapStatistic
        title={title}
        value={rateNum}
        precision={1}
        valueStyle={{ color, fontSize }}
        prefix={rateNum !== 0 && (isGrow ? <ArrowUpOutlined /> : <ArrowDownOutlined />)}
        suffix="%"
      />
    </div>
  )
}
