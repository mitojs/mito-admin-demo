import CardWrapper from '@/components/CardWrapper'
import { Empty, Pagination, Spin } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getEventRecordsByErrorIdFetch, getEventRecordsByEventIdFetch, getOssUrlsFetch } from '../../services'
import RecordEventsReplay from './components/RecordEventsReplay'
import SwitchRecord from './components/SwitchRecord'
const Container = styled.div`
  margin-top: 20px;
`
interface IRouteParams {
  errorId?: string
  eventId?: string
}
export default function Replay() {
  const params = useParams<IRouteParams>()
  const [ossUrls, setOssUrls] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getOssUrls()
  }, [params])
  async function getOssUrls() {
    setIsLoading(true)
    const res = await getOssUrlsFetch(Number(params.errorId))
    setIsLoading(false)
    setOssUrls(res.ossUrls)
  }
  return (
    <Container>
      <Spin size="large" style={{ marginTop: '40px' }} tip="录制数据加载中..." spinning={isLoading}>
        <CardWrapper title="录制回放">
          {ossUrls.length === 0 ? (
            <Empty description="暂无录制数据"></Empty>
          ) : (
            <SwitchRecord ossUrls={ossUrls}></SwitchRecord>
          )}
        </CardWrapper>
      </Spin>
    </Container>
  )
}
