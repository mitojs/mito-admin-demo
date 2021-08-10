import { newTabErrorInfo } from '@/utils'
import { Button, Col, message, Pagination, Row, Spin, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import RecordEventsReplay from './RecordEventsReplay'

interface PropsType {
  ossUrls: string[]
}
export default function SwitchRecord(props: PropsType) {
  const { ossUrls } = props
  const [curOssUrl, setCurOssUrl] = useState('')
  const [recordEvents, setRecordEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const onChange = (value: number) => {
    setCurOssUrl(ossUrls[value - 1])
  }
  const onClickUrl = (url: string) => {
    const mitoOssPrefix = 'mito/'
    const [errorId, eventId] = url.split(mitoOssPrefix)[1].split('_')
    newTabErrorInfo(Number(errorId), Number(eventId))
  }
  useEffect(() => {
    if (ossUrls.length > 0) {
      setCurOssUrl(ossUrls[0])
    }
  }, [ossUrls])
  useEffect(() => {
    if (curOssUrl !== '') {
      setIsLoading(true)
      fetch(curOssUrl)
        .then(res => {
          res.text().then(result => {
            setIsLoading(false)
            setRecordEvents(JSON.parse(result))
          })
        })
        .catch(err => {
          console.log('获取oss文件内容失败', err)
          message.error('获取oss文件内容失败')
          setIsLoading(false)
        })
    }
  }, [curOssUrl])
  return (
    <Spin size="large" style={{ marginTop: '40px' }} tip="OSS录制数据加载中..." spinning={isLoading}>
      <Row>
        <Col span={6}>
          <Tooltip title="跳转到该录制数据对应的事件信息">
            <Button type="link" onClick={() => onClickUrl(curOssUrl)}>
              事件详细信息
            </Button>
          </Tooltip>
        </Col>
        <Col span={18}>
          <Pagination
            style={{ float: 'right' }}
            onChange={onChange}
            defaultCurrent={1}
            pageSize={1}
            total={ossUrls && ossUrls.length}
          />
        </Col>
        <Col span={24}>
          <RecordEventsReplay recordEvents={recordEvents}></RecordEventsReplay>
        </Col>
      </Row>
    </Spin>
  )
}
