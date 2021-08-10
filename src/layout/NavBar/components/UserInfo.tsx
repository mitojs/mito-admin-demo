import { getUserInfo } from '@/modules/Login/services'
import { logout } from '@/services/user'
import { SET_CURRENT_TEAM_ID, SET_CURRENT_USER_ID } from '@/store/modules/global/action-types'
import { getLastName } from '@/utils'
import { Avatar, Button, Dropdown, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
export default function UserInfo() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [user, setUser] = useState<AUserInfo.Response>({
    userId: -1,
    name: '',
    email: '@',
    mobile: '',
    teamId: -1,
  })
  const fetchData = async () => {
    const res = await getUserInfo()
    dispatch({
      type: SET_CURRENT_USER_ID,
      payload: res.userId,
    })
    dispatch({
      type: SET_CURRENT_TEAM_ID,
      payload: res.teamId,
    })
    setUser(res)
  }
  const handleMenuClick = async e => {
    switch (e.key) {
      case 'logout':
        await logout()
        history.push('/login')
        break
      case 'create':
        history.push('/project/create')
        break
      default:
        break
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="create">新建项目</Menu.Item>
      <Menu.Item key="logout">注销</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <div>
        <Avatar
          style={{
            backgroundColor: '#4991FD',
            verticalAlign: 'middle',
            marginRight: '12px',
            cursor: 'pointer',
          }}
          size="large"
        >
          {getLastName(user.name)}
        </Avatar>
        <span style={{ cursor: 'pointer', fontSize: '16px' }}>{user.email.split('@')[0]}</span>
      </div>
    </Dropdown>
  )
}
