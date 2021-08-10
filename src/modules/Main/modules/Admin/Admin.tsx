import { Col, Row } from 'antd'
import React from 'react'
import RunSql from './components/RunSql'
import ShowParams from './components/ShowParams'
import UserList from './components/UserList'

export default function Admin() {
  return (
    <Row gutter={[20, 20]}>
      <Col flex="214px">
        <ShowParams></ShowParams>
      </Col>
      <Col flex="auto">
        <RunSql></RunSql>
      </Col>
      <Col span={24}>
        <UserList></UserList>
      </Col>
      {/* <div>当前项目活跃成功</div>
      <div>排行版</div> */}
    </Row>
  )
}
