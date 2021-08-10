import CardWrapper from '@/components/CardWrapper'
import React, { useEffect, useState } from 'react'
import { handleParamsFetch } from '../services'
import { Col, Row } from 'antd'
import DigitalTitle from '@/components/DigitalTitle'
import LabelValue from '@/components/LabelValue'
import useCount from '@/hooks/useCount'
export default function ShowParams() {
  const [params, setParams] = useState<NErrorHandleParams.Response>({
    slsListLength: 0,
    corn: '',
    handleRedisCount: 0,
  })
  const getHandleParams = async () => {
    const res = await handleParamsFetch()
    setParams(res)
  }
  useEffect(() => {
    getHandleParams()
    const timer = setInterval(() => {
      getHandleParams()
    }, 60000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <CardWrapper title="处理队列">
      <Row>
        <Col span={24}>
          <DigitalTitle dititalSize={36} digital={params.slsListLength} title="剩余队列数量"></DigitalTitle>
        </Col>
        <Col span={24}>
          <Col span={24}>
            <LabelValue label="单次处理数量:">{useCount(params.handleRedisCount)}</LabelValue>
          </Col>
        </Col>
        <Col span={24}>
          <LabelValue label="定时任务:">{params.corn}</LabelValue>
        </Col>
      </Row>
    </CardWrapper>
  )
}
