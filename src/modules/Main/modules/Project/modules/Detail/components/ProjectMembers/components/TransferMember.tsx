import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Modal, Button, Transfer, Switch, Table, Tag, message } from 'antd'
import { getTeamMemberListByTeamIdFetch, updateProjectMemberFetch } from '@/modules/Main/modules/Project/services'
import { TeamRoleMap } from '@/common/constant'
import TableTransfer from './TableTransfer'
import _ from 'lodash'

export default function TransferMember({ modalVisible, detail, currentMember, setUpdate }) {
  const [visible, setVisible] = modalVisible // modal

  const [members, setMembers] = useState([]) // dataSource
  const [addUserIds, setAddUserIds] = useState([]) // 提交添加人员
  const [deleteUserIds, setDeleteUserIds] = useState([]) // 提交删除人员
  const [originTargetKeys, setOriginTargetKeys] = useState([]) //
  const [targetKeys, setTargetKeys] = useState(originTargetKeys) // 添加人员
  const [disabled, setDisabled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const params = useParams<{ id: string }>()
  const { id } = params
  const projectId = Number(id)

  const currentMemberId = currentMember.map(m => m.userId)

  useEffect(() => {
    setTargetKeys(currentMemberId)
  }, [currentMember])

  // 根据 teamID 获取人员列表
  useEffect(() => {
    const getTeamMemberListByTeamId = async () => {
      if (detail.teamId) {
        const res = await getTeamMemberListByTeamIdFetch(detail.teamId)
        setMembers(res.map(d => ({ ...d, key: d.userId })))
      }
    }
    getTeamMemberListByTeamId()
  }, [detail.teamId])

  const leftTableColumns = [
    {
      dataIndex: 'userName',
      title: '用户人',
      render: (_, record) => {
        return <span>{record.userName ? record.userName : '' + (record.isMe ? '(You)' : '')}</span>
      },
    },
    {
      dataIndex: 'email',
      title: '邮箱📮',
    },
    {
      dataIndex: 'role',
      title: '团队角色',
      render: role => <Tag>{TeamRoleMap[role]}</Tag>,
    },
  ]
  const rightTableColumns = [
    {
      dataIndex: 'userName',
      title: '用户人',
    },
  ]

  // 提交人员更变
  const confirmUpdate = async () => {
    const res = await updateProjectMemberFetch({
      projectId,
      deleteUserIds: _.without(deleteUserIds, ...originTargetKeys),
      addUserIds: _.without(addUserIds, ...currentMemberId),
    })
    message.success(res.message)
    setVisible(false)
    setUpdate(s => !s)
  }

  // 更改人员
  const onChange = async (nextTargetKeys, direction, moveKeys) => {
    if (direction == 'left') {
      setAddUserIds(_.without(addUserIds, ...moveKeys)) // 添加
      setDeleteUserIds(_.uniq([...deleteUserIds, ...moveKeys])) // 删除
    } else {
      setAddUserIds(_.uniq([...addUserIds, ...moveKeys])) // 添加
      setDeleteUserIds(_.without(deleteUserIds, ...moveKeys)) // 删除
    }
    setTargetKeys(nextTargetKeys)
  }

  return (
    <Modal
      title="更新成员"
      centered
      visible={visible}
      onOk={confirmUpdate}
      onCancel={() => setVisible(false)}
      width={1000}
    >
      <TableTransfer
        dataSource={members || []}
        targetKeys={targetKeys}
        disabled={disabled}
        showSearch={showSearch}
        onChange={onChange}
        filterOption={(inputValue, item) =>
          item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
        }
        leftColumns={leftTableColumns}
        rightColumns={rightTableColumns}
      />
    </Modal>
  )
}
