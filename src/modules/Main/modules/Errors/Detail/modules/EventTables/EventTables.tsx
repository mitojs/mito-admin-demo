import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Button, Table } from 'antd'
import useRouteParams from '@/components/useRouteParams'
import { getEventsTable } from '../../services'
import MultiSelector from '@/components/MultiSelector'
import type { SelectorItem } from '@/components/MultiSelector'
import { errorTagLabelsFetch, errorTagValuesFetch } from '../../../services'
import CardWrapper from '@/components/CardWrapper'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import useQuery from '@/hooks/useQuery'
import * as qs from '@utils/qs'
import { formatTime } from '@/utils'

export default function EventTables() {
  const [errorId] = useRouteParams()
  const history = useHistory()
  const [tableData, setTableData] = useState<Events.IEventErrorInfo[]>([])
  const [loading, setLoading] = useState(false)
  const { query } = useQuery()
  const [mutipleParams, setMutipleParams] = useState('')
  const [tableParams, setTableParams] = useState({
    pageSize: 10,
    pageNum: 1,
  })
  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageNum: 1,
    total: 0,
  })

  const fetchEventTable = async () => {
    setLoading(true)
    try {
      const res = await getEventsTable({
        errorId,
        ...tableParams,
        slsQuery: mutipleParams,
      })
      const { pageNum, pageSize, totalCount: total } = res
      setPagination({
        pageNum,
        pageSize,
        total,
      })
      setTableData(res.list)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchEventTable()
  }, [errorId, tableParams, mutipleParams])
  const onChange = paginationParam => {
    const { current, pageSize } = paginationParam
    setTableParams({ pageNum: current, pageSize })
  }
  const columns = [
    {
      title: 'eventId',
      key: 'eventId',
      width: 100,
      render: row => (
        <Button type="link" onClick={() => history.push(`/errors/${errorId}/info/${row.eventId}`)}>
          {row.eventId}
        </Button>
      ),
    },
    {
      title: 'ip',
      key: 'ip',
      width: 100,
      render: row => <div>{row.ip}</div>,
    },
    {
      title: 'location',
      key: 'location',
      width: 100,
      render: row => <div>{row.location}</div>,
    },
    {
      title: 'isp',
      key: 'isp',
      width: 100,
      render: row => <div>{row.isp}</div>,
    },
    {
      title: 'URL',
      key: 'URL',
      width: 160,
      render: row => <div>{row.url}</div>,
    },
    {
      title: 'browser',
      key: 'browser',
      width: 100,
      render: row => (
        <div>
          {row.browser} {row.browserVersion}
        </div>
      ),
    },
    {
      title: 'os',
      key: 'browser',
      width: 100,
      render: row => (
        <div>
          {row.os} {row.osVersion}
        </div>
      ),
    },
    {
      title: 'date',
      key: 'date',
      width: 130,
      fixed: 'right' as const,
      render: row => <div>{formatTime(Number(row.time))}</div>,
    },
  ]
  const handleMultiSelectorChange = (slsQuery, raw) => {
    setMutipleParams(preState => {
      if (preState === slsQuery) return preState
      if (raw) {
        const res = raw.reduce((acc, node) => {
          acc[node.option.value] = node.value.value
          return acc
        }, {})
        history.replace({
          search: qs.stringify(res),
        })
      }
      return slsQuery
    })
  }
  const MultiSelectorRender = useMemo(
    () => (
      <MultiSelector
        initial={Object.keys(query).reduce((acc, key) => {
          acc.push({ option: { label: key, value: key }, value: { label: query[key], value: query[key] } })
          return acc
        }, [])}
        dataParams={{ errorId }}
        valueFetch={errorTagValuesFetch}
        labelFetch={errorTagLabelsFetch}
        onChange={handleMultiSelectorChange}
      />
    ),
    [],
  )

  return (
    <CardWrapper style={{ marginTop: '20px' }} title="事件列表">
      {MultiSelectorRender}
      <Table
        onChange={onChange}
        pagination={pagination}
        rowKey="eventId"
        columns={columns}
        dataSource={tableData}
        loading={{ size: 'large', tip: '事件列表正在加载中...', spinning: loading }}
      ></Table>
    </CardWrapper>
  )
}
