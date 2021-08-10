import React, { useEffect, useMemo, useState } from 'react'
import * as styles from './index.module.less'
import TagIcon from './components/TagIcon'
import SourceMap from './components/SourceMap'
import Breadcrumb from './components/Breadcrumb'
import TagsInfo from './components/TagsInfo'
import { getFirstEvent, infoByEventIdFetch } from './service'
import { isEmpty, isEmptyObj } from '@/utils'
import { Col, Row, Spin } from 'antd'
import { useParams } from 'react-router-dom'
import { atomEventInfo } from '@/recoil'
import { useRecoilState } from 'recoil'

type TBottomTag = {
  userAgent?: Common.LabelValue[]
  sdkInfo?: Common.LabelValue[]
  trackerId?: Common.LabelValue[]
  url: Common.LabelValue[]
}

const pushTag = (source: any[], label, value) => {
  if (!isEmpty(value)) {
    source.push({
      label,
      value,
    })
  }
}
const setLabelValue = (source: { [key: string]: string }) => {
  const target: TBottomTag = {
    userAgent: [],
    sdkInfo: [],
    trackerId: [],
    url: [],
  }
  if (source) {
    Object.entries(source).forEach(([key, value]) => {
      switch (key) {
        case 'sdkVersion':
        case 'sdkName':
        case 'apikey':
        case 'customTag':
          pushTag(target.sdkInfo, key, value)
          break
        case 'ua':
        case 'cookies':
        case 'userId':
          pushTag(target.userAgent, key, value)
          break
        case 'trackerId':
          pushTag(target.trackerId, key, value)
          break
        case 'url':
          pushTag(target.url, key, value)
          break
        default:
          break
      }
    })
  }
  return target
}
interface IRouteParams {
  errorId?: string
  eventId?: string
}
export default function EventInfo() {
  const [eventInfo, setEventInfo] = useRecoilState<Events.IEventSls | any>(atomEventInfo)
  const [breadcrumb, setBreadcrumb] = useState([])
  const [bottomTag, setBottomTag] = useState<TBottomTag | any>({})
  const params = useParams<IRouteParams>()
  const getFirstEventFetch = async () => {
    const res = await getFirstEvent(Number(params.errorId))
    handleRes(res)
  }
  const getInfoByEventId = async () => {
    const res = await infoByEventIdFetch(Number(params.eventId))
    handleRes(res)
  }
  function handleRes(res: Events.IEventSls) {
    const { sdkVersion, ua, sdkName, trackerId, apikey, url, cookies, customTag, userId } = res
    const { breadcrumb, ...otherParams } = res
    setBottomTag(setLabelValue({ sdkVersion, ua, sdkName, trackerId, apikey, url, cookies, customTag, userId }))
    setBreadcrumb(breadcrumb)
    setEventInfo(otherParams)
  }
  useEffect(() => {
    if (params.eventId) {
      getInfoByEventId()
    } else {
      getFirstEventFetch()
    }
  }, [params])
  const TagsInfosRender = useMemo(
    () => (
      <>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <TagsInfo title="App" data={bottomTag.url || []}></TagsInfo>
          </Col>
          <Col span={24}>
            <TagsInfo title="Header" data={bottomTag.userAgent || []}></TagsInfo>
          </Col>
          <Col span={12}>
            <TagsInfo title="Info" data={bottomTag.trackerId || []}></TagsInfo>
          </Col>
          <Col span={12}>
            <TagsInfo title="Sdk" data={bottomTag.sdkInfo || []}></TagsInfo>
          </Col>
        </Row>
      </>
    ),
    [bottomTag],
  )
  return (
    <Spin size="large" style={{ marginTop: '40px' }} tip="数据正在加载中..." spinning={isEmptyObj(eventInfo)}>
      <Row style={{ marginTop: 0 }} gutter={[20, 20]}>
        <Col span={24}>
          <TagIcon {...eventInfo}></TagIcon>
        </Col>
        <Col span={24}>
          <Breadcrumb data={breadcrumb || []}></Breadcrumb>
        </Col>
        <Col span={24}>
          <SourceMap projectId={eventInfo.projectId} data={eventInfo.stack || ''}></SourceMap>
        </Col>
        <Col span={24}>{TagsInfosRender}</Col>
      </Row>
    </Spin>
  )
}
