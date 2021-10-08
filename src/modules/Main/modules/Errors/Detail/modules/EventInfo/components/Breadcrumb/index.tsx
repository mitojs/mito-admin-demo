import React, { useState, useMemo, useEffect, useRef } from 'react'
import * as styles from './index.module.less'
import { Button, Card, Col, Empty, Row, Table, Tag, Tooltip } from 'antd'
import { dataToString, formatTime } from '@/utils'
import { THEMECOLORS, ICONTYPE, BREADCRUMBTYPES, Severity } from '@common/constant'
import { Input } from 'antd'
import moment from 'moment'
import config from '@/config'

import IconColumn, { BREADCRUMBCATEGORYS } from './components/IconColumn'
import { atomEventInfo } from '@/recoil'
import { useRecoilValue } from 'recoil'

const { Search } = Input

type propsType = {
  data: any[]
}
type DesPropsType = {
  data: any
}

type RowType = {
  type: BREADCRUMBTYPES
  category: BREADCRUMBCATEGORYS
  level: Severity
  time: number
  data: Events.ReportDataType
}
function LevelColumn(props: { level: Severity }) {
  switch (props.level) {
    case Severity.Info:
      return <Tag color={THEMECOLORS.blue}>{props.level}</Tag>
    case Severity.Error:
      return <Tag color={THEMECOLORS.red}>{props.level}</Tag>
    default:
      return <Tag color="gold">{props.level}</Tag>
  }
}
function XhrDescription(props: { row: RowType }) {
  const eventInfo = useRecoilValue<Events.IEventSls | any>(atomEventInfo)
  const { row } = props
  const { data } = row
  const { request } = data
  const onClickTraceId = (traceId: string) => {
    const from_time = moment().subtract(7, 'days').format('YYYY-MM-DD')
    const client_trace_id = traceId
    const url = `${config.apigwLog}`
    const remote = eventInfo.ip
    const result = {
      from_time,
      client_trace_id,
      remote,
    }
    const str = Object.entries(result)
      .map(([key, value]) => {
        return `${key}=${value}`
      })
      .join(';')
    window.open(`${url};${str}`)
  }
  if (row.category !== BREADCRUMBCATEGORYS.EXCEPTION) {
    return (
      <div className={[styles.xhr, styles.description].join(' ')}>
        <div className={styles.request}>
          <Row className="no-wrap-row" gutter={[0, 6]}>
            <Col flex="30px">
              <span className={(styles.method, styles.weight)}>{request.method}</span>
            </Col>
            <Col flex="auto">
              <a className={styles.url} href={request ? request.url : data.url}>
                {request ? request.url : data.url}
              </a>
            </Col>
          </Row>
          <Row gutter={[0, 6]}>
            <Col span={24}>
              <span className={(styles.status, styles.weight)}>请求参数:</span>
              {dataToString(request?.data)}
            </Col>
            <Col span={24}>
              <span className={(styles.status, styles.weight)}>traceId:</span>
              <Tooltip title="点击跳转到对应接口网关服务">
                <Button style={{ padding: 0 }} type="link" onClick={() => onClickTraceId(request?.traceId)}>
                  {request?.traceId}
                </Button>
              </Tooltip>
            </Col>
            <Col span={24}>
              <span className={(styles.status, styles.weight)}>message:</span>
              {data.message}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
  return (
    <div className={[styles.xhrError, styles.weight].join(' ')}>Error： Network Error 接口耗时{data.elapsedTime}ms</div>
  )
}
function ConsoleDescription(props: DesPropsType) {
  const { data } = props
  return (
    <div className={[styles.clg, styles.description].join(' ')}>
      <div className={styles.print}>{data.args.join('')}</div>
      <div className={styles.level}>
        <span className={styles.weight}>type:</span>
        <span>console.{data.level}</span>
      </div>
      <div className={styles.args}>
        <span className={styles.weight}>arguments:</span>
        <span>{JSON.stringify(data.args)}</span>
      </div>
    </div>
  )
}
function ClickDescription(props: DesPropsType) {
  return <div className={(styles.click, styles.weight)}>{props.data}</div>
}
function RouteDescription(props: DesPropsType) {
  const { data } = props
  return (
    <div className={[styles.route, styles.description].join(' ')}>
      <div>
        <span className={styles.weight}>from:</span>
        {data.from}
      </div>
      <div>
        <span className={styles.weight}>to:</span>
        {data.to}
      </div>
      {data.message && (
        <div>
          <span className={styles.weight}>message:</span>
          {data.message}
        </div>
      )}
    </div>
  )
}
function VueDescriptiopn(props: DesPropsType) {
  const { data } = props
  return (
    <div className={[styles.route, styles.description].join(' ')}>
      <div className={styles.from}>
        <span className={styles.weight}>组件名:</span>
        {data.componentName}
      </div>
      <div className={styles.to}>
        <span className={styles.weight}>错误信息:</span>
        {data.message}
      </div>
    </div>
  )
}
function UnhandledrejectionDescription(props: DesPropsType) {
  const { data } = props
  return <div>{data.message}</div>
}

function CodeErrorDescription(props: DesPropsType) {
  const { data } = props
  const { stack } = data
  return (
    <div>
      <Row gutter={[0, 10]}>
        {data.name}:{data.message}
      </Row>
      {Array.isArray(stack)
        ? stack.map((item, index) => {
            return (
              <Row key={index}>
                <Col span={8}>
                  <span className={styles.weight}>func:</span>
                  {item.func}
                </Col>
                <Col span={16}>
                  <span className={styles.weight}>args:</span>
                  {item.args}
                </Col>
                <Col span={8}>
                  <span className={styles.weight}>line:</span>
                  {item.line}
                </Col>
                <Col span={16}>
                  <span className={styles.weight}>column:</span>
                  {item.column}
                </Col>

                <Col span={24}>
                  <span className={styles.weight}>file url:</span>
                  {item.url}
                </Col>
              </Row>
            )
          })
        : 'Error Stack为空'}
    </div>
  )
}
function CustomerDescription(props: DesPropsType) {
  const { data } = props
  return (
    <Row>
      <Col>
        <span className={styles.weight}>message:</span>
        {dataToString(data)}
      </Col>
    </Row>
  )
}

function ResourceDescription(props: DesPropsType) {
  const { data } = props
  return (
    <Row gutter={[0, 6]}>
      <Col span={24}>
        <span className={(styles.status, styles.weight)}>页面地址:</span>
        {data.url}
      </Col>
      <Col span={24}>
        <span className={(styles.status, styles.weight)}>name:</span>
        {data.name}
      </Col>
      <Col span={24}>
        <span className={(styles.status, styles.weight)}>message:</span>
        {data.message}
      </Col>
    </Row>
  )
}

function WxLifecycleDescription(props: DesPropsType) {
  const { data } = props
  return (
    <Row gutter={[0, 6]}>
      <Col span={24}>
        <span className={(styles.status, styles.weight)}>path:</span>
        {data?.path}
      </Col>
      <Col span={24}>
        <span className={(styles.status, styles.weight)}>query:</span>
        {dataToString(data?.query)}
      </Col>
    </Row>
  )
}

function WxShareOnMessageDescription(props: DesPropsType) {
  const { data } = props
  return (
    <Row gutter={[0, 6]}>
      <Col span={24}>
        <span className={(styles.status, styles.weight)}>path:</span>
        {data.path}
      </Col>
      <Col span={24}>
        <span className={(styles.status, styles.weight)}>query:</span>
        {dataToString(data.query)}
      </Col>
      <Col span={24}>
        <span className={(styles.status, styles.weight)}>options:</span>
        {dataToString(data.options)}
      </Col>
    </Row>
  )
}
function ReactDescription(props: DesPropsType) {
  const { data } = props
  const { stack } = data
  return (
    <div>
      <Row gutter={[0, 10]}>
        {data.name}:{data.message}
      </Row>
    </div>
  )
}

function DescriptionColumn(props: { row: RowType }) {
  const { row } = props
  switch (row.type) {
    case BREADCRUMBTYPES.XHR:
    case BREADCRUMBTYPES.FETCH:
      return <XhrDescription row={row}></XhrDescription>
    case BREADCRUMBTYPES.CONSOLE:
      return <ConsoleDescription data={row.data}></ConsoleDescription>
    case BREADCRUMBTYPES.CLICK:
    case BREADCRUMBTYPES.TAP:
      return <ClickDescription data={row.data}></ClickDescription>
    case BREADCRUMBTYPES.ROUTE:
      return <RouteDescription data={row.data}></RouteDescription>
    case BREADCRUMBTYPES.VUE:
      return <VueDescriptiopn data={row.data}></VueDescriptiopn>
    case BREADCRUMBTYPES.UNHANDLEDREJECTION:
      return <UnhandledrejectionDescription data={row.data}></UnhandledrejectionDescription>
    case BREADCRUMBTYPES.REACT:
    case BREADCRUMBTYPES.CODE_ERROR:
      return <CodeErrorDescription data={row.data}></CodeErrorDescription>
    case BREADCRUMBTYPES.CUSTOMER:
      return <CustomerDescription data={row.data}></CustomerDescription>
    case BREADCRUMBTYPES.RESOURCE:
      return <ResourceDescription data={row.data}></ResourceDescription>
    case BREADCRUMBTYPES.APP_ON_LAUNCH:
    case BREADCRUMBTYPES.APP_ON_SHOW:
    case BREADCRUMBTYPES.APP_ON_HIDE:
    case BREADCRUMBTYPES.PAGE_ON_SHOW:
    case BREADCRUMBTYPES.PAGE_ON_HIDE:
    case BREADCRUMBTYPES.PAGE_ON_SHARE_TIMELINE:
      return <WxLifecycleDescription data={row.data}></WxLifecycleDescription>
    case BREADCRUMBTYPES.PAGE_ON_SHARE_APP_MESSAGE:
      return <WxShareOnMessageDescription data={row.data}></WxShareOnMessageDescription>
    default:
      return <div>BREADCRUMBTYPES类型缺失:{row.type}</div>
  }
}

function FilterBreadcrumb(props: { setData: Function; originData: any[] }) {
  const { setData, originData } = props
  function onSearch(value: string) {
    setData(originData.filter(item => item.type.includes(value)))
  }
  return <Search placeholder="input search text" onSearch={onSearch} style={{ width: 250 }} />
}
const MemoFilterBreadcrumb = React.memo(FilterBreadcrumb)

export default function Breadcrumb(props: propsType) {
  const [tableData, setTableData] = useState(props.data)
  const [originData, setOriginData] = useState(props.data)
  tableData.forEach((v, i) => {
    v.index = i
    v.fullTime = formatTime(v.time)
    v.dayTime = formatTime(v.time, 'HH:mm:ss')
  })
  useEffect(() => {
    setTableData(props.data)
    setOriginData(props.data)
    const tableBody = document.querySelector('.ant-table-body')
    if (tableBody) {
      tableBody.scrollTop = tableBody.scrollHeight
    }
  }, [props])

  // todo 新增select 分组 来过滤 category level
  const columns = [
    {
      title: '种类',
      key: 'category',
      width: 80,
      fixed: 'left' as const,
      render: row => <IconColumn data={row} />,
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: type => {
        return (
          <div className={styles.type}>
            <div className={styles.title}>{type}</div>
          </div>
        )
      },
      width: 170,
    },
    {
      title: '描述',
      key: 'data',
      render: row => {
        return <DescriptionColumn row={row}></DescriptionColumn>
      },
    },
    {
      title: '等级',
      dataIndex: 'level',
      key: 'level',
      render: level => {
        return <LevelColumn level={level}></LevelColumn>
      },
      width: 80,
    },
    {
      title: '时间',
      key: 'time',
      render: row => {
        return (
          <Tooltip title={row.fullTime}>
            <span>{row.dayTime}</span>
          </Tooltip>
        )
      },
      width: 100,
      fixed: 'right' as const,
    },
  ]
  return (
    <Card
      title="Breadcrumb"
      extra={<MemoFilterBreadcrumb originData={originData} setData={setTableData}></MemoFilterBreadcrumb>}
      className={styles.container}
    >
      {tableData.length > 0 ? (
        <Table
          scroll={{ x: 1300, y: 400 }}
          rowKey="index"
          bordered
          pagination={false}
          key="index"
          columns={columns}
          dataSource={tableData}
        ></Table>
      ) : (
        <Empty description="用户行为栈数据为空"></Empty>
      )}
    </Card>
  )
}
