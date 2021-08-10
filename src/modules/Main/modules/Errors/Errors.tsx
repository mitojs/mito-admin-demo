import React, { Component, useState, useRef, useEffect, useMemo } from 'react'
import useQuery from 'src/hooks/useQuery'
import { useHistory, useLocation } from 'react-router-dom'
import * as qs from '@/utils/qs'
import * as styles from './index.module.less'
import { Button, Col, Row } from 'antd'
import StatisticsNum from '@components/StatisticsNum'
import { THEMECOLORS } from '@common/constant'
import LineChart from '@components/LineChart'
import ErrorsTable from '../components/ErrorsTable'
import MultiSelector from '@components/MultiSelector'
import { getProjectChart, getProjectLabels, getProjectValues, getStatisticsSum, getTable } from './services'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/index.type'
import CardWrapper from '@/components/CardWrapper'
import styled from 'styled-components'
import ErrorBoundary from '@/entry/ErrorBoundary'
import { useDebounceFn } from 'ahooks'

interface AntDPage {
  pageSize: number
  current: number
  total: number
}
const StatisicsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 327px;
`
function Errors() {
  const time = useSelector<RootState>(state => state.global.time)
  const currentProject = useSelector<RootState, number>(state => state.global.currentProject)
  const [statisticsData, setStatisticsData] = useState({
    errorSum: 0,
    userSum: 0,
  })
  const [chartData, setChartData] = useState(null)
  const [tableData, setTableData] = useState<NErrorsTable.List[]>([])
  const [tableLoading, setTableLoading] = useState(false)
  const [mutipleParams, setMutipleParams] = useState('')
  const [pagination, setPagination] = useState<AntDPage>({ total: 0, pageSize: 10, current: 1 })
  const [tableParams, setTableParams] = useState<any>({})
  const { query } = useQuery()
  const history = useHistory()
  const dateParams = {
    startDate: time[0],
    endDate: time[1],
    projectId: currentProject,
  }
  const fetchTableData = async (params = {}, hasLoading = true) => {
    hasLoading && setTableLoading(true)
    try {
      const res = await getTable({
        ...dateParams,
        slsQuery: mutipleParams,
        pageSize: pagination.pageSize,
        pageNum: pagination.current,
        ...tableParams,
        ...params,
      })
      setPagination({
        total: res.totalCount,
        pageSize: res.pageSize,
        current: res.pageNum,
      })
      setTableData(res.list)
    } finally {
      setTableLoading(false)
    }
  }
  const { run: runFetchTableData } = useDebounceFn(fetchTableData, { wait: 300 })

  const fetchStatisticsData = async () => {
    const res = await getStatisticsSum({
      ...dateParams,
    })
    setStatisticsData(res)
  }
  const fetchLineChartData = async () => {
    const res = await getProjectChart({
      ...dateParams,
    })
    setChartData(res)
  }
  useEffect(() => {
    runFetchTableData()
  }, [tableParams])

  useEffect(() => {
    if (currentProject !== -1) {
      fetchStatisticsData()
      fetchLineChartData()
      setTableParams(preParams => ({
        ...preParams,
        pageNum: 1,
      }))
    }
  }, [time, currentProject])

  useEffect(() => {
    setTableParams(preParams => ({
      ...preParams,
      pageNum: 1,
    }))
  }, [mutipleParams])
  const handleMultiSelectorChange = (slsQuery, raw) => {
    setMutipleParams(preState => {
      if (preState === slsQuery) return preState
      if (raw) {
        const res = raw.reduce((acc, node) => {
          const inputValue = node.value.value
          acc[node.option.value] = inputValue.replace(':', '\\:')
          return acc
        }, {})
        history.replace({
          search: qs.stringify(res),
        })
      }
      return slsQuery
    })
  }
  const lineChartRender = useMemo(() => {
    const series = []
    const eventCount = []
    const userSum = []
    chartData?.forEach(item => {
      eventCount.push(item.count)
      userSum.push(item.userSum)
    })
    series.push({
      name: '事件数',
      data: eventCount,
    })
    series.push({
      name: '用户数',
      data: userSum,
    })
    return (
      <CardWrapper loading={!chartData} title="事件曲线图">
        <LineChart series={series} xAxisData={chartData?.map(v => v.date) || []}></LineChart>
      </CardWrapper>
    )
  }, [chartData])
  const StatisticsNumRender = useMemo(
    () => (
      <StatisicsWrap>
        <CardWrapper title="错误数">
          <StatisticsNum num={statisticsData.errorSum} color={THEMECOLORS.red}></StatisticsNum>
        </CardWrapper>
        <CardWrapper title="用户数">
          <StatisticsNum num={statisticsData.userSum} color={THEMECOLORS.blue}></StatisticsNum>
        </CardWrapper>
      </StatisicsWrap>
    ),
    [statisticsData],
  )
  const onChangeTable = (paginationParam, filters, sorter) => {
    const isDesc = Object.keys(sorter).length > 0 ? (sorter.order === 'ascend' ? 1 : 0) : undefined,
      orderField = sorter.field,
      pageSize = paginationParam.pageSize,
      status = filters.status ? filters.status.join(',') : ''
    const isSorter = tableParams.isDesc !== isDesc || tableParams.orderField !== orderField
    const pageNum = isSorter ? 1 : paginationParam.current
    setTableParams({
      isDesc,
      orderField,
      pageNum,
      pageSize,
      status,
    })
  }

  const MultiSelectorRender = useMemo(
    () => (
      <MultiSelector
        initial={Object.keys(query).reduce((acc, key) => {
          acc.push({ option: { label: key, value: key }, value: { label: query[key], value: query[key] } })
          return acc
        }, [])}
        dataParams={dateParams}
        valueFetch={getProjectValues}
        labelFetch={getProjectLabels}
        onChange={handleMultiSelectorChange}
      />
    ),
    [query],
  )
  return (
    <div>
      <Row gutter={[20, 20]} className="no-wrap-row">
        <Col flex="162px">{StatisticsNumRender}</Col>
        <Col flex="auto">{lineChartRender}</Col>
      </Row>
      <CardWrapper title="错误列表">
        {MultiSelectorRender}
        <ErrorsTable
          fetchData={runFetchTableData}
          onChange={onChangeTable}
          loading={tableLoading}
          tableData={tableData}
          pagination={pagination}
        ></ErrorsTable>
      </CardWrapper>
    </div>
  )
}

export default Errors
