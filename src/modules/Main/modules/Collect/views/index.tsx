import CardWrapper from '@/components/CardWrapper'
import { RootState } from '@/store/index.type'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ErrorsTable from '../../components/ErrorsTable'
import { collectTableFetch } from '../service'
interface AntDPage {
  pageSize: number
  current: number
  total: number
}
export default function Collect() {
  const time = useSelector<RootState>(state => state.global.time)
  const currentProject = useSelector<RootState, number>(state => state.global.currentProject)
  const [tableData, setTableData] = useState<NErrorsTable.List[]>([])
  const [tableLoading, setTableLoading] = useState(false)
  const [pagination, setPagination] = useState<AntDPage>({ total: 0, pageSize: 10, current: 1 })
  const [tableParams, setTableParams] = useState<any>({})
  const dateParams = {
    startDate: time[0],
    endDate: time[1],
    projectId: currentProject,
  }
  const fetchTableData = async (params = {}) => {
    setTableLoading(true)
    const res = await collectTableFetch({
      ...dateParams,
      pageSize: pagination.pageSize,
      pageNum: pagination.current,
      ...tableParams,
    })
    setPagination({
      total: res.totalCount,
      pageSize: res.pageSize,
      current: res.pageNum,
    })

    setTableLoading(false)
    setTableData(res.list)
  }
  useEffect(() => {
    fetchTableData()
  }, [tableParams])
  useEffect(() => {
    if (currentProject !== -1) {
      fetchTableData(dateParams)
      setTableParams(preParams => ({
        ...preParams,
        pageNum: 1,
      }))
    }
  }, [time, currentProject])

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
  return (
    <div>
      <CardWrapper title="收藏列表">
        <ErrorsTable
          fetchData={fetchTableData}
          onChange={onChangeTable}
          loading={tableLoading}
          tableData={tableData}
          pagination={pagination}
        ></ErrorsTable>
      </CardWrapper>
    </div>
  )
}
