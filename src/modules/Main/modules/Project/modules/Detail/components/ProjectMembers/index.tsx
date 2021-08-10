import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Popconfirm, Space, Switch, Table, Tag, Tooltip } from 'antd'
import * as styles from './index.module.less'
import { deleteMemberFetch, getProjectMembersFetch, putMemberNotifyFetch, putUserRole } from '../../../../services'
import { useParams } from 'react-router-dom'
import { IProjectMemberItem, NProjectMembers } from '@/d.ts/project'
import { ProjectRoleMap } from '@/common/constant'
import { message } from 'antd'
import TransferMember from './components/TransferMember'
import RoleAssign from '@/modules/Main/modules/components/RoleAssign'

export default function ProjectMembers({ detail }) {
  const params = useParams<{ id: string }>()
  const { id } = params
  const projectId = Number(id)
  const roleModalRef = useRef(null)
  const [members, setMembers] = useState<NProjectMembers.Response>([])
  const [meRole, setMeRole] = useState(0)
  const [curUser, setCurUser] = useState<ATeamUserList.TTeamUserListItem | any>({})

  const [update, setUpdate] = useState(false)

  const modalVisible = useState(false)
  const getProjectMembers = async () => {
    const res = await getProjectMembersFetch(projectId)
    setMembers(res)
    const me = res.find(item => item.isMe)
    if (me) {
      setMeRole(me.role)
    }
  }
  useEffect(() => {
    getProjectMembers()
  }, [update])
  const onChangeNotify = async (status, member: IProjectMemberItem) => {
    const params = {
      projectId,
      notify: Number(status),
      userId: member.userId,
    }
    const res = await putMemberNotifyFetch(params)
    message.success(res)
  }
  const onConfirmDelete = async (userId: number) => {
    const res = await deleteMemberFetch({
      userId,
      projectId,
    })
    message.success(res)
    getProjectMembers()
  }
  const onClickChangeRole = (record: any) => {
    setCurUser(record)
    roleModalRef.current.showModal(true)
  }
  const memberColumn = [
    {
      title: '姓名',
      dataIndex: 'userName',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '角色',
      render(member: IProjectMemberItem) {
        return <Tag>{ProjectRoleMap[member.role]}</Tag>
      },
    },
    {
      title: '消息通知',
      render(member: IProjectMemberItem) {
        return <Switch onChange={status => onChangeNotify(status, member)} defaultChecked={!!member.notify} />
      },
    },
    {
      title: '操作',
      render(member: IProjectMemberItem) {
        const removeOther =
          meRole < member.role ? (
            <Space size="middle">
              <Button onClick={() => onClickChangeRole(member)}>更改角色</Button>

              <Popconfirm
                onConfirm={() => onConfirmDelete(member.userId)}
                title={`确定将"${member.userName}"移出该项目吗？`}
                okText="移出"
                cancelText="取消"
              >
                <Button danger>移出</Button>
              </Popconfirm>
            </Space>
          ) : (
            ''
          )
        const removeMe =
          member.role === 1 ? (
            <Tooltip title="你是project leader，请先指派另一位成员为project leader">
              <Button disabled danger>
                退出项目
              </Button>
            </Tooltip>
          ) : (
            <Space size="middle">
              <Popconfirm
                onConfirm={() => onConfirmDelete(member.userId)}
                title={`确定要推出该项目吗？`}
                okText="退出项目"
                cancelText="取消"
              >
                <Button type="link" danger>
                  退出项目
                </Button>
              </Popconfirm>
            </Space>
          )
        return member.isMe ? removeMe : removeOther
      },
    },
  ]
  return (
    <Card
      extra={
        <>
          <span className={styles.editable} onClick={() => modalVisible[1](true)}>
            添加
          </span>
        </>
      }
      className={styles.card}
      title="项目成员"
    >
      <RoleAssign
        ref={roleModalRef}
        params={{ projectId, userId: curUser.userId }}
        putRoleFetch={putUserRole}
        meRole={meRole}
        fetchData={getProjectMembers}
        isTeam={true}
        curUserInfo={curUser}
      ></RoleAssign>
      <TransferMember modalVisible={modalVisible} detail={detail} currentMember={members} setUpdate={setUpdate} />
      <Table dataSource={members} pagination={false} rowKey="userId" columns={memberColumn} />
    </Card>
  )
}
