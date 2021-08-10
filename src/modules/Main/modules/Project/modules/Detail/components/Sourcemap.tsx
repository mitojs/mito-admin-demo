import React, { useEffect, useState } from 'react'
import * as styles from '../index.module.less'
import UploadSourcemap from './UploadSourcemap'
import { Card, Input, message, Modal, Table, Typography } from 'antd'
import { createSourcemap, deleteSourcemap, getSourcemap } from '@/modules/Main/modules/Project/services'
import { EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { formatTime } from '@/utils'
import { AGetSourcemap } from '@/d.ts/project'
import { useParams } from 'react-router-dom'

const { Text } = Typography

const sourceMapColumn = [
  {
    title: '文件名',
    dataIndex: 'fileName',
    ellipsis: true,
  },
  {
    title: '文件地址',
    dataIndex: 'url',
    render: (text: string) => <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>{text}</div>,
    width: 600,
  },
  {
    title: '上传时间',
    dataIndex: 'createdAt',
    render: createdAt => formatTime(new Date(createdAt).getTime()),
  },
]

const Sourcemap = () => {
  const params = useParams<{ id: string }>()
  const { id } = params
  const [sourcemap, setSourcemap] = useState<AGetSourcemap.Response>([])
  const [sourcemapKeyword, setSourcemapKeyword] = useState('')
  const [selectedFiles, setSelectedFiles] = useState<number[]>([])

  const fetchSourceMap = () => {
    getSourcemap({ projectId: +id, fileName: sourcemapKeyword }).then(res => {
      setSourcemap(res)
    })
  }

  const onConfirmUpload = files => {
    return createSourcemap({
      items: files.map(({ fileName, fullPath }) => ({ fileName, url: fullPath })),
      projectId: +id,
    }).then(() => {
      message.success('上传成功！')
      fetchSourceMap()
    })
  }

  useEffect(() => {
    fetchSourceMap()
  }, [sourcemapKeyword])

  const onSearchSourceMap = e => {
    if (e.keyCode === 13) {
      setSourcemapKeyword(e.currentTarget.value)
    }
  }

  const onDelete = () => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确定删除soucemap？',
      onOk: async () => {
        await deleteSourcemap({ ids: selectedFiles, projectId: +id })
        message.success('删除成功')
        await fetchSourceMap()
      },
    })
  }

  return (
    <Card
      extra={
        <>
          {selectedFiles.length > 0 && (
            <span onClick={onDelete}>
              <Text className={styles.delete} type="danger">
                删除
              </Text>
            </span>
          )}
          <UploadSourcemap
            onConfirm={onConfirmUpload}
            trigger={<span className={styles.editable}>上传Source Map</span>}
          />
        </>
      }
      className={styles.card}
      bordered={false}
      title="sourceMap"
    >
      <Input onKeyDown={onSearchSourceMap} className={styles.searchInput} placeholder="根据文件名搜索" />
      {
        <Table
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedRowKeys: number[]) => {
              setSelectedFiles(selectedRowKeys)
            },
          }}
          pagination={false}
          rowKey="id"
          columns={sourceMapColumn}
          dataSource={sourcemap}
        />
      }
    </Card>
  )
}

export default Sourcemap
