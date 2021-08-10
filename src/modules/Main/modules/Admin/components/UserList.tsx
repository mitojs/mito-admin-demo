import CardWrapper from '@/components/CardWrapper'
import { useRequest } from 'ahooks'
import { Button, message, Popconfirm, Table } from 'antd'
import React from 'react'
import { putAdminFetch, userListFetch } from '../services'

const getUseList = (pageNum: number, pageSize: number) => {
  return userListFetch({
    pageNum,
    pageSize,
  })
}

export default function UserList() {
  const { data, loading, pagination, refresh } = useRequest(
    ({ current: pageNum, pageSize }) => getUseList(pageNum, pageSize),
    {
      paginated: true,
      defaultPageSize: 10,
      formatResult(res: Common.pageInfo<null>) {
        return {
          list: res.list,
          total: res.totalCount,
        }
      },
    },
  )
  const setToAdmin = async (userId: number, status: number) => {
    const res = await putAdminFetch(userId, { status })
    message.success(res.message)
    refresh()
  }
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 100,
      key: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
      width: 100,
      key: 'mobile',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 100,
      key: 'email',
    },
    {
      title: '超管',
      dataIndex: 'isAdmin',
      width: 100,
      key: 'isAdmin',
      render: isAdmin => <span>{isAdmin ? '是' : '否'}</span>,
    },
    {
      title: '操作',
      width: 100,
      key: 'isAdmin',
      render: (row: AUserList.ListItem) => (
        <div>
          {row.isAdmin ? (
            <Popconfirm
              onConfirm={() => setToAdmin(row.userId, 0)}
              title={`确定移除"${row.name}"超管吗？`}
              okText="确认"
              cancelText="取消"
            >
              <Button danger>移除超管</Button>
            </Popconfirm>
          ) : (
            <Popconfirm
              onConfirm={() => setToAdmin(row.userId, 1)}
              title={`确定将"${row.name}"置为超管吗？`}
              okText="确认"
              cancelText="取消"
            >
              <Button>置为超管</Button>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ]
  return (
    <CardWrapper title="用户列表">
      <Table
        pagination={pagination}
        rowKey="userId"
        columns={columns}
        dataSource={data?.list}
        loading={{ size: 'large', tip: '用户列表正在加载中...', spinning: loading }}
      ></Table>
    </CardWrapper>
  )
}
