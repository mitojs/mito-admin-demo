import { getErrorTypeCN } from '@/common/constant'
import AreaChart from '@/components/AreaChart'
import CardWrapper from '@/components/CardWrapper'
import { RootState } from '@/store/index.type'
import { Col, Row, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getErrorTypesChartFetch } from '../services'
const WrapRow = styled(Row)`
  /* margin-top: 20px; */
`
export default function ErrorTypeTrendChart() {
  const time = useSelector<RootState>(state => state.global.time)
  const currentProject = useSelector<RootState, number>(state => state.global.currentProject)
  const [chartData, setChartData] = useState<NErrorTypeChart.Response>([])
  const [loading, setLoading] = useState(true)

  const getErrorTypesChart = async () => {
    setLoading(true)
    const res = await getErrorTypesChartFetch({ projectId: currentProject, startDate: time[0], endDate: time[1] })
    setChartData(res)
    setLoading(false)
  }
  useEffect(() => {
    getErrorTypesChart()
  }, [time, currentProject])
  const RenderChartCard = (row: NErrorTypeChart.ResponseItem) => {
    const series = [
      {
        data: row.chart.map(v => v.count),
        name: '错误数',
      },
    ]
    return (
      <CardWrapper title={getErrorTypeCN(row.type)}>
        <AreaChart series={series} xAxisData={row.chart.map(v => v.date)}></AreaChart>
      </CardWrapper>
    )
  }
  return (
    <WrapRow style={{ marginTop: '20px' }} gutter={[20, 20]}>
      <Skeleton active loading={loading}>
        {chartData.map(item => {
          return (
            <Col xl={{ span: 12 }} xs={{ span: 24 }} key={item.type}>
              {RenderChartCard(item)}
            </Col>
          )
        })}
      </Skeleton>
    </WrapRow>
  )
}
