import { Button, Col, Row } from 'antd'
import React, { Component } from 'react'
import UserInfo from './UserInfo'
import GithubBtn from '@/components/GithubBtn'
import config from '@/config'
import { LinkOutlined } from '@ant-design/icons'
import PlainLinkButton from '@/components/PlainLinkButton'

export default class NavRight extends Component {
  render() {
    return (
      <Row align="middle">
        <Col>
          {/* <PlainLinkButton icon={<LinkOutlined />} onClick={() => window.open(config.doc)}>
            使用文档
          </PlainLinkButton> */}
        </Col>
        <Col>
          <GithubBtn></GithubBtn>
        </Col>
        <Col>
          <UserInfo></UserInfo>
        </Col>
      </Row>
    )
  }
}
