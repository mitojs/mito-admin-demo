import React, { useEffect, useState } from 'react'
import { SimpleBarChart } from '@/components/SimpleBarChart'
import { getErrorTagsByErrorId } from '../../services'
import useRouteParams from '@/components/useRouteParams'
import { Col, Row, Spin } from 'antd'

export default function EventTags() {
  const [errorId] = useRouteParams()
  const [isLoading, setIsLoading] = useState(true)
  const [graphData, setGraphData] = useState<NErrorTagsByErrorId.Response>([])
  const fetchData = async () => {
    setIsLoading(true)
    const data = await getErrorTagsByErrorId({ errorId })
    setIsLoading(false)
    setGraphData(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Spin size="large" style={{ marginTop: '40px' }} tip="错误标签数据加载中..." spinning={isLoading}>
      <Row style={{ padding: '20px 0' }} gutter={[20, 20]}>
        {graphData.map((gd, index) => {
          return (
            <Col xl={{ span: 12 }} xs={{ span: 24 }} key={index}>
              <SimpleBarChart xAxisData={gd.values} yAxisData={gd.sums} title={gd.label} />
            </Col>
          )
        })}
      </Row>
    </Spin>
  )
}
