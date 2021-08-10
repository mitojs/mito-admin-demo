import { THEMECOLORS } from '@/common/constant'
import CardWrapper from '@/components/CardWrapper'
import StatisticsNum from '@/components/StatisticsNum'
import React, { useState } from 'react'

export default function ErrorStatsSum() {
  const [statisticsData, setStatisticsData] = useState({
    errorSum: 0,
    userSum: 0,
  })
  return (
    // <CardWrapper title="错误统计">
    {
      /* <StatisticsNum title="错误数" num={122} color={THEMECOLORS.red}></StatisticsNum> */
    }
    // </CardWrapper>
  )
}
