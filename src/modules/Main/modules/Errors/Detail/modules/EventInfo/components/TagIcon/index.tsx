import React from 'react'
import * as styles from './index.module.less'
import Icon from '@components/Icon'
import { Col, Row } from 'antd'
import styled from 'styled-components'
import { formatTime } from '@/utils'
const RowWrap = styled(Row)`
  background-color: #fbfbfb;
  padding: 0 20px 20px;
`
type TagIconType = {
  os: string
  osVersion: string
  browser: string
  browserVersion: string
  device: string
  location: string
  isp: string
}
// ip 地址 系统 浏览器 设备 发生时间
export default function TagIcon(props: TagIconType) {
  const tags = [
    {
      icon: 'tag-ip',
      label: 'iP',
      render: data => <div>{data.ip}</div>,
    },
    {
      icon: 'tag-location',
      label: 'location',
      render: data => <div>{data.location}</div>,
    },
    {
      icon: 'tag-os',
      label: 'os',
      render: data => (
        <div>
          {data.os} {data.osVersion}
        </div>
      ),
    },
    {
      icon: 'tag-browser',
      label: 'browser',
      render: data => (
        <div>
          {data.browser} {data.browserVersion}
        </div>
      ),
    },
    {
      icon: 'tag-device',
      label: 'device',
      render: data => <div>{data.device || '暂无'}</div>,
    },
    {
      icon: 'tag-date',
      label: 'date',
      render: data => <div>{formatTime(Number(data.time))}</div>,
    },
  ]

  return (
    <RowWrap gutter={[0, 16]} style={{ marginTop: '-10px' }} justify="space-between">
      {tags.map(v => (
        <Col xl={{ span: 3 }} sm={{ span: 7 }} key={v.icon} className={styles.tagTtem}>
          <Icon icon={v.icon} size={36}></Icon>
          <div>
            <div className={styles.title}>{v.label}</div>
            <div className={styles.value}>{v.render(props)}</div>
          </div>
        </Col>
      ))}
    </RowWrap>
  )
}
