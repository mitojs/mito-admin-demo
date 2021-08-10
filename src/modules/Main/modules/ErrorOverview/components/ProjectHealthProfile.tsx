import { COLORS, ErrorStatus } from '@/common/constant'
import CardWrapper from '@/components/CardWrapper'
import PieChart from '@/components/PieChart'
import { RootState } from '@/store/index.type'
import { Button, Col, Row } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { getErrorTypesStatisticFetch } from '../services'
import ErrorsTypeCircle from './ErrorsTypeCircle'
import { red } from '@ant-design/colors'
import { useHistory } from 'react-router-dom'

const reverseRed = red.slice(1, 9).reverse()
export default function ProjectHealthProfile() {
  const time = useSelector<RootState>(state => state.global.time)
  const currentProject = useSelector<RootState, number>(state => state.global.currentProject)
  const [loading, setLoading] = useState(false)
  const [statisticData, setStatisticData] = useState<NErrorHealthProfile.Response>({
    score: 0,
    statusStatistic: [],
    typeStatistic: [],
  })
  const history = useHistory()

  const getErrorTypesStatistic = async () => {
    setLoading(true)
    const data = await getErrorTypesStatisticFetch({
      projectId: currentProject,
      startDate: time[0],
      endDate: time[1],
    })
    setStatisticData(data)
    setLoading(false)
  }
  const gotoProjectError = () => {
    history.push(`/errors`)
  }
  useEffect(() => {
    if (currentProject !== -1) {
      getErrorTypesStatistic()
    }
  }, [time, currentProject])
  const PieChartRender = useMemo(() => {
    const { statusStatistic, score } = statisticData
    const series = [],
      labels = []
    if (Array.isArray(statusStatistic)) {
      statusStatistic.forEach(item => {
        labels.push(ErrorStatus[item.status])
        series.push(item.count)
      })
    }
    return <PieChart series={series} labels={labels}></PieChart>
  }, [statisticData])
  const TypeStatisticRender = useMemo(() => {
    const { typeStatistic } = statisticData
    return typeStatistic
      .sort((a, b) => b.percent - a.percent)
      .map((item, index) => {
        return (
          <Col key={item.type}>
            <ErrorsTypeCircle color={reverseRed[index]} {...item}></ErrorsTypeCircle>
          </Col>
        )
      })
  }, [statisticData])
  return (
    <CardWrapper
      title="项目健康概况"
      loading={loading}
      rightRender={() => (
        <Button type="link" onClick={() => gotoProjectError()}>
          进入错误列表
        </Button>
      )}
    >
      <Row className="no-wrap-row" align="middle" gutter={[20, 20]}>
        <Col flex="200px">{PieChartRender}</Col>
        <Col flex="auto">
          <Row justify="space-around" align="middle" gutter={[20, 20]}>
            {TypeStatisticRender}
          </Row>
        </Col>
      </Row>
    </CardWrapper>
  )
}
