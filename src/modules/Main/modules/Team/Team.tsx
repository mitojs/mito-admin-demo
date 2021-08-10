import React, { useEffect, useRef, useState } from 'react'
import { Table, Tag, Space, Button, message } from 'antd'
import CardWrapper from '@/components/CardWrapper'
import { useHistory } from 'react-router'
import { switchCurrentTeamIdFetch, teamListFetch } from './services'
import { TeamRoleMap } from '@/common/constant'
import useSWR from 'swr'
import { formatTime } from '@/utils'
import ModalAddTeam from './components/ModalAddTeam'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CURRENT_TEAM_ID } from '@/store/modules/global/action-types'
import { RootState } from '@/store/index.type'

export default function Team() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { data: list, mutate } = useSWR('teamListFetch', teamListFetch, { initialData: [], revalidateOnMount: true })
  const modalRef = useRef(null)
  const currentTeamId = useSelector((state: RootState) => state.global.currentTeamId)
  const userInfo = useSelector((state: RootState) => state.global.currentUser)

  const switchCurrentTeam = async (teamId: number) => {
    const res = await switchCurrentTeamIdFetch(teamId)
    message.success(res.message)
    dispatch({ type: SET_CURRENT_TEAM_ID, payload: teamId })
    mutate()
  }
  const columns = [
    {
      title: '团队名',
      render: row => (
        <Button type="link" onClick={() => history.push(`/team/${row.teamId}`)}>
          {row.teamName}
        </Button>
      ),
    },
    {
      title: '我的角色',
      dataIndex: 'role',
      key: 'role',
      render: role => <Tag>{TeamRoleMap[role]}</Tag>,
    },
    {
      title: '成员数',
      dataIndex: 'memberCount',
      key: 'memberCount',
    },
    {
      title: '项目数',
      dataIndex: 'projectCount',
      key: 'projectCount',
    },
    {
      title: '负责人',
      dataIndex: 'ownerName',
      key: 'ownerName',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: createdAt => <div>{formatTime(createdAt)}</div>,
    },
    {
      title: '操作',
      // dataIndex: 'selected',
      // key: 'selected',
      render: (_, record) =>
        currentTeamId === record.teamId ? (
          <Button disabled>当前团队</Button>
        ) : (
          <Button
            type="primary"
            onClick={() => {
              switchCurrentTeam(record.teamId)
            }}
          >
            切换团队
          </Button>
        ),
    },
  ]

  const CreateTeamBtn = () => {
    return (
      userInfo.isAdmin && (
        <Button type="link" onClick={() => modalRef.current.showModal(true)}>
          创建团队
        </Button>
      )
    )
  }

  return (
    <CardWrapper title={'团队列表'} rightRender={CreateTeamBtn}>
      <ModalAddTeam ref={modalRef} fetchData={mutate}></ModalAddTeam>
      <Table bordered columns={columns} rowKey="teamId" dataSource={list} pagination={{ hideOnSinglePage: true }} />
    </CardWrapper>
  )
}
