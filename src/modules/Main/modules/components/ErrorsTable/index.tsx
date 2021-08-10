import React, { useEffect, useRef, useState } from 'react'
import { Table, Tag, Button, Tooltip, Badge, Select, Menu, Dropdown, message, Row, Col } from 'antd'
import * as styles from './index.module.less'
import Icon from '@components/Icon'
import {
  THEMECOLORS,
  ICONTYPE,
  ErrorStatus,
  ErrorLevel,
  platformMap,
  EnumErrorStatus,
  ErrorLevelBadgeColor,
  ErrorStatusBadgeStatus,
  ErrorTableRotateTime,
} from '@common/constant'
import { formatTime, newTabErrorInfo } from '@/utils'
import { ClockCircleFilled, PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import { ArchiveStar } from '@/components/ArchiveStar'
import { TableWithHeader } from '@/components/TableWithHeader'
import { collectErrorsFetch } from '../../Errors/services/index'
import styled from 'styled-components'
import ProjectPlatform from '../ProjectPlatform'
import ErrorAssign from '../ErrorAssign'
import { ErrorIgnoreBtn, ErrorSolvingBtn } from '../ErrorSolve'
import config from '@/config'
import ErrorRemark from '../ErrorRemark'

type TableRow = NErrorsTable.List
type propsType = {
  tableData: TableRow[]
  pagination: { total: number; pageSize: number; current: number }
  loading: boolean
  fetchData: Function
  onChange: Function
}
const FlexBlock = styled.div`
  display: flex;
  align-items: center;
`
const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
`
const ErrorStatusFilters = Object.entries(ErrorStatus).map(([key, value]) => ({
  text: value,
  value: key,
}))
export default function ErrorsTable(props: propsType) {
  const [selectedItem, setSelectedItem] = useState<TableRow[]>([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [solvingDisabled, setSolvingDisabled] = useState(true)
  const [collectDisabled, setCollectDisabled] = useState(true)
  const [ignoreDisabled, setIgnoreDisabled] = useState(true)
  const [rotation, setRotation] = useState(true)
  const rotationTimer = useRef(null)
  function clearSelected() {
    setSelectedRowKeys([])
    setSolvingDisabled(true)
    setCollectDisabled(true)
    setIgnoreDisabled(true)
  }

  const handleCollect = async (items: NCollect.item[] = [], isCollect: boolean) => {
    const res = await collectErrorsFetch({
      items,
      isCollect,
    })
    message.success(res.message)
    props.fetchData()
    clearSelected()
  }

  const columns = [
    {
      title: () => {
        return (
          <div className={styles.header}>
            <div className={styles.title}>错误信息</div>
          </div>
        )
      },
      key: 'action',
      width: 600,
      fixed: 'left',
      render: (row: TableRow) => (
        <div className={styles.project}>
          <div className={styles.error} onClick={() => newTabErrorInfo(row.errorId)}>
            <div className={styles.url}>{row.url}</div>
            <div className={styles.message}>{row.message}</div>
            <div className={styles.timec}>
              <ClockCircleFilled style={{ fontSize: 16, color: THEMECOLORS.blue, marginRight: 8 }} />
              <span className={styles.time}>
                {formatTime(row.createdAt)} ~ {formatTime(row.updatedAt)}
              </span>
              {row.ossUrls !== '[]' && (
                <Tooltip title="存在录制回放">
                  <div style={{ height: '20px', marginLeft: '2px' }}>
                    <Icon icon="record"></Icon>
                  </div>
                </Tooltip>
              )}
            </div>
          </div>
          <Row>
            <Col flex="auto">
              <FlexBlock>
                <ProjectPlatform platform={row.platform} projectName={row.projectName}></ProjectPlatform>
                <ErrorRemark errorId={row.errorId} remark={row.remark}></ErrorRemark>
              </FlexBlock>
            </Col>
            <Col flex="200px">
              <FlexBlock style={{ justifyContent: 'flex-end' }}>
                <Tooltip title="收藏">
                  <div style={{ marginRight: '10px' }}>
                    <ArchiveStar
                      status={row.isCollect}
                      size={24}
                      onClick={() =>
                        handleCollect([{ errorId: row.errorId, projectId: row.projectId }], !row.isCollect)
                      }
                    />
                  </div>
                </Tooltip>

                <ErrorAssign row={row}></ErrorAssign>
              </FlexBlock>
            </Col>
          </Row>
          {/* <div className={styles.info}></div> */}
        </div>
      ),
    },
    {
      title: '错误类型',
      dataIndex: 'type',
      key: 'type',
      width: 140,
      render: type => <span>{type}</span>,
    },

    {
      title: '错误状态',
      dataIndex: 'status',
      width: 120,
      key: 'status',
      filters: ErrorStatusFilters,
      render: status => (
        <span>
          <Badge status={ErrorStatusBadgeStatus[status]} />
          {ErrorStatus[status]}
        </span>
      ),
    },
    {
      title: '等级',
      dataIndex: 'level',
      width: 120,
      sorter: true,
      key: 'level',
      render: level => (
        <span>
          <Badge color={ErrorLevelBadgeColor[level]} status="processing" />
          {ErrorLevel[level]}
        </span>
      ),
    },
    {
      title: '事件数',
      dataIndex: 'eventSum',
      width: 100,
      key: 'eventSum',
      sorter: true,
    },
    {
      title: '用户数',
      dataIndex: 'trackerSum',
      width: 100,
      key: 'trackerSum',
      sorter: true,
    },
  ]

  useEffect(() => {
    const length = selectedItem.length === 0
    const solvingBtndisabled = length
      ? true
      : selectedItem.some(item => [EnumErrorStatus.solved, EnumErrorStatus.solving].includes(item.status))
    const collectBtndisabled = length ? true : false
    const ignoreBtndisabled = length
      ? true
      : selectedItem.some(item => [EnumErrorStatus.solving, EnumErrorStatus.ignored].includes(item.status))
    setSolvingDisabled(solvingBtndisabled)
    setCollectDisabled(collectBtndisabled)
    setIgnoreDisabled(ignoreBtndisabled)
  }, [selectedItem])

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows: TableRow[]) => {
      console.log('selectedRowKeys', selectedRowKeys)
      console.log('selectedRows', selectedRows)
      setSelectedRowKeys(selectedRowKeys)
      setSelectedItem(selectedRows)
    },
    // onSelect: (record, selected, selectedRows: TableRow[]) => {},
    onSelectAll: (selected, selectedRows, changeRows) => {
      setSelectedItem(selectedRows)
    },
  }

  const updateErrorSuccess = async () => {
    await props.fetchData()
    clearSelected()
  }

  const onClickRotation = () => {
    const status = !rotation
    if (status) {
      rotationTimer.current = setInterval(() => {
        console.log('setInterval')
        props.fetchData({}, false)
      }, ErrorTableRotateTime)
    } else {
      console.log('clearInterval', rotationTimer.current)
      clearInterval(rotationTimer.current)
    }
    setRotation(status)
  }

  const RotationBtn = () => {
    return (
      <Button onClick={onClickRotation} icon={rotation ? <PauseCircleOutlined /> : <PlayCircleOutlined />}>
        {rotation ? '暂停实时更新' : '启用实时更新'}
      </Button>
    )
  }

  return (
    <TableWithHeader
      pagination={{
        ...props.pagination,
        showTotal: total => `共 ${total} 条`,
        showSizeChanger: true,
      }}
      loading={props.loading}
      scroll={{ x: 1000 }}
      rowKey="errorId"
      columns={columns}
      rowSelection={rowSelection}
      dataSource={props.tableData}
      onChange={props.onChange}
    >
      <ErrorSolvingBtn
        disabled={solvingDisabled}
        items={selectedItem}
        successUpdated={updateErrorSuccess}
      ></ErrorSolvingBtn>

      <Button
        disabled={collectDisabled}
        onClick={() =>
          handleCollect(
            selectedItem.map(v => ({ errorId: v.errorId, projectId: v.projectId })),
            true,
          )
        }
        icon={<Icon icon="fillstar" type={ICONTYPE.irregular} size={15} />}
        style={{ marginRight: 10 }}
      >
        收藏
      </Button>

      <ErrorIgnoreBtn
        disabled={ignoreDisabled}
        items={selectedItem}
        successUpdated={updateErrorSuccess}
      ></ErrorIgnoreBtn>
      <HeaderRight>
        <RotationBtn></RotationBtn>
      </HeaderRight>
    </TableWithHeader>
  )
}
