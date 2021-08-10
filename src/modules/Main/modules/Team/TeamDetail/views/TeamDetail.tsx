import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, Table, Tag, Space, Modal, Input, Button, Popconfirm, message, Tooltip } from 'antd'

import * as styles from './index.module.less'
import CardWrapper from '@/components/CardWrapper'
import EditCard, { IEditCard } from '@/components/EditCard'
import { deleteTeamUserFetch, putUserRole, teamInfoFetch, teamUserListFetch } from '../../services'
import { useParams } from 'react-router-dom'
import { TeamRoleMap, THEMECOLORS } from '@/common/constant'
import AddTeamMember from '../components/AddTeamMember'
import useSWR from 'swr'
import { formatTime } from '@/utils'
import ModalEditTeamName from '../components/ModalEditTeam'
import RoleAssign from '../../../components/RoleAssign'

const CardConfigData = [
  {
    height: 70,
    title: '团队名称',
    text: '横向中台小组',
  },
  {
    height: 70,
    title: '钉钉通知地址',
    text: 'dingtalk：~~',
  },
  {
    height: 70,
    title: '更新时间',
    text: '2020-09-01 12:12:00',
  },
  {
    height: 70,
    title: '创建时间',
    text: '2020-09-01 12:12:00',
  },
]

export default function TeamDetail() {
  const { id } = useParams<{ id: string }>()
  const teamId = Number(id)
  const modalRef = useRef(null)
  const roleModalRef = useRef(null)
  const [modalShow, setModalShow] = useState(false)
  const [cardConfig, setCardConfig] = useState(CardConfigData)
  const [teamInfo, setTeamInfo] = useState({})
  const [curUser, setCurUser] = useState<ATeamUserList.TTeamUserListItem | any>({})
  const [meRole, setMeRole] = useState(0)
  const swrTeamListFetch = () => teamUserListFetch(teamId)
  const { data: teamUserList, error, mutate } = useSWR('getTeamUserList', swrTeamListFetch)
  useEffect(() => {
    if (Array.isArray(teamUserList) && teamUserList.length > 0) {
      const me = teamUserList.find(item => item.isMe)
      if (me) {
        setMeRole(me.role)
      }
    }
  }, [teamUserList])
  const getTeamInfo = async () => {
    const res = await teamInfoFetch(teamId)
    const { teamName, dingtalkRobot, createdAt, updatedAt } = res
    cardConfig[0].text = teamName
    cardConfig[1].text = dingtalkRobot
    cardConfig[2].text = formatTime(updatedAt)
    cardConfig[3].text = formatTime(createdAt)
    setCardConfig(cardConfig)
    setTeamInfo(res)
  }
  const deleteTeamUser = async (userId: number) => {
    const res = await deleteTeamUserFetch({
      userId,
      teamId,
    })
    message.success(res.message)
    mutate()
  }
  useEffect(() => {
    getTeamInfo()
  }, [])

  const onConfirmDelete = (userId: number) => {
    deleteTeamUser(userId)
  }
  const onClickChangeRole = (record: any) => {
    setCurUser(record)
    roleModalRef.current.showModal(true)
  }
  const columns = [
    {
      title: '姓名',
      key: 'userName',
      width: 160,
      render: row => (
        <div>
          <span>{row.userName}</span>
          {row.isMe ? (
            <Tag style={{ marginLeft: '10px' }} color={THEMECOLORS.blue}>
              当前账号
            </Tag>
          ) : (
            ''
          )}
        </div>
      ),
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: role => <Tag>{TeamRoleMap[role]}</Tag>,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '加入时间',
      key: 'createdAt',
      dataIndex: 'createdAt',
      render: createdAt => <div>{formatTime(createdAt)}</div>,
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record: ATeamUserList.TTeamUserListItem) => {
        const removeOther =
          meRole < record.role ? (
            <Space size="middle">
              <Button onClick={() => onClickChangeRole(record)}>更改角色</Button>
              <Popconfirm
                onConfirm={() => onConfirmDelete(record.userId)}
                title={`确定将"${record.userName}"移出该团队吗？`}
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
          record.role === 1 ? (
            <Tooltip title="你是team leader，请先指派另一位成员为team leader">
              <Button disabled danger>
                退出团队
              </Button>
            </Tooltip>
          ) : (
            <Space size="middle">
              <Popconfirm
                onConfirm={() => onConfirmDelete(record.userId)}
                title={`确定要推出该团队吗？`}
                okText="退出团队"
                cancelText="取消"
              >
                <Button danger>退出团队</Button>
              </Popconfirm>
            </Space>
          )
        return record.isMe ? removeMe : removeOther
      },
    },
  ]
  return (
    <div className={styles.teamManagement}>
      <AddTeamMember visible={modalShow} getTeamUserList={mutate} close={() => setModalShow(false)}></AddTeamMember>
      <ModalEditTeamName ref={modalRef} {...teamInfo} fetchData={getTeamInfo}></ModalEditTeamName>
      <RoleAssign
        ref={roleModalRef}
        params={{ teamId, userId: curUser.userId }}
        putRoleFetch={putUserRole}
        meRole={meRole}
        fetchData={mutate}
        isTeam={true}
        curUserInfo={curUser}
      ></RoleAssign>
      <Row>
        <Col span={8} push={16}>
          <CardWrapper
            title={'团队信息'}
            btnTxt={'编辑团队信息'}
            btnCb={() => {
              modalRef.current.showModal(true)
            }}
          >
            {cardConfig.map(({ height, title, text }, index) => (
              <EditCard height={height} title={title} text={text} key={index} />
            ))}
          </CardWrapper>
        </Col>
        <Col span={16} pull={8} style={{ paddingRight: 20 }}>
          <CardWrapper
            title={'团队成员列表'}
            btnTxt={'添加新成员'}
            btnCb={() => {
              setModalShow(true)
            }}
          >
            <Table
              bordered
              rowKey="userId"
              columns={columns}
              dataSource={teamUserList}
              pagination={{ hideOnSinglePage: true }}
            />
          </CardWrapper>
        </Col>
      </Row>
    </div>
  )
}
