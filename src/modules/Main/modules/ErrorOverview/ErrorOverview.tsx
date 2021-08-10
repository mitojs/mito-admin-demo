import { Col, Row } from 'antd'
import React from 'react'
import ErrorStatsSum from '../components/ErrorStatsSum'
import ErrorTypeTrendChart from './components/ErrorTypeTrendChart'
import ProjectHealthProfile from './components/ProjectHealthProfile'
import PvUvAreaChart from './components/PvUvAreaChart'

export default function Overview() {
  return (
    <div>
      <Row gutter={[20, 20]} className="no-wrap-row">
        {/* <Col><ErrorStatsSum></ErrorStatsSum></Col> */}
        <Col flex="auto">
          <PvUvAreaChart></PvUvAreaChart>
        </Col>
      </Row>
      <ProjectHealthProfile></ProjectHealthProfile>
      <ErrorTypeTrendChart></ErrorTypeTrendChart>
    </div>
  )
}
