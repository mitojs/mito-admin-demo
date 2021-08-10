import React, { useEffect, useMemo, useState } from 'react'
import { Badge, Col, message, Row, Tooltip, Typography } from 'antd'
import LineChart from '@components/LineChart'
import useRouteParams from '@/components/useRouteParams'
import { THEMECOLORS } from '@/common/constant'
import CardWrapper from '@/components/CardWrapper'
import StatisticsNum from '@/components/StatisticsNum'
import { getErrorsChartByErrorId, getErrorsInfoErrorId } from '../../services'
import HeaderLeft from './components/HeaderLeft'
import { useRecoilState } from 'recoil'
import { atomErrorInfo } from '@/recoil'

export default function ErrorHeaderInfo() {
  const [chartData, setChartData] = useState<IErrorChartByErrorId.Response>([])
  // const [errorInfo, setErrorInfo] = useState<NErrorInfoByErrorId.Response | any>({
  //   eventSum: 0,
  //   trackerSum: 0,
  //   userName: '',
  // })
  const [errorInfo, setErrorInfo] = useRecoilState<any>(atomErrorInfo)
  const [errorId] = useRouteParams()
  const fetchChartData = async () => {
    const res = await getErrorsChartByErrorId(errorId)
    setChartData(res)
  }
  const fetchErrorInfo = async () => {
    const res = await getErrorsInfoErrorId(errorId)
    setErrorInfo(res)
  }
  const successUpdated = () => {
    fetchErrorInfo()
  }
  useEffect(() => {
    fetchChartData()
    fetchErrorInfo()
  }, [errorId])
  const lineChartRender = useMemo(() => {
    const series = []
    const eventCount = []
    const userSum = []
    chartData.forEach(item => {
      eventCount.push(item.count)
      userSum.push(item.userSum)
    })
    series.push({
      name: '事件数',
      data: eventCount,
    })
    series.push({
      name: '用户数',
      data: userSum,
    })
    return (
      <CardWrapper loading={chartData.length === 0} title="事件曲线图">
        <LineChart series={series} xAxisData={chartData.map(v => v.date)}></LineChart>
      </CardWrapper>
    )
  }, [chartData])
  return (
    <>
      <Row className="no-wrap-row" gutter={[20, 20]}>
        <Col flex="auto">
          <HeaderLeft errorInfo={errorInfo} successUpdated={successUpdated}></HeaderLeft>
        </Col>
        <Col flex="162px">
          <CardWrapper title="事件数">
            <StatisticsNum num={errorInfo.eventSum} color={THEMECOLORS.blue}></StatisticsNum>
          </CardWrapper>
        </Col>
        <Col flex="162px">
          <CardWrapper title="用户数">
            <StatisticsNum num={errorInfo.trackerSum} color={THEMECOLORS.red}></StatisticsNum>
          </CardWrapper>
        </Col>
      </Row>
      {lineChartRender}
    </>
  )
}
