import React, { useEffect, useState } from 'react'
import { Table, Tag, Button, Tooltip, Select, message } from 'antd'
import { getLastName, getNameAbbreviation } from '@/utils'
import { CaretDownOutlined } from '@ant-design/icons'
import * as styles from './index.module.less'
import { updateUserById } from '@/modules/Main/modules/Errors/services'

const { Option } = Select

interface IAsyncClickSelect {
  listQuery: any
  row: IErrorBase
}

export const AsyncClickSelect = ({ listQuery, row }: IAsyncClickSelect) => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [showText, setShowText] = useState(true)
  const [selectedUser, setSelectedUser] = useState({ id: row.userId, name: row.userName })
  useEffect(() => {
    setSelectedUser({ id: row.userId, name: row.userName })
  }, [row])
  useEffect(() => {
    async function getData() {
      const response = await listQuery()
      setList(response)
      setLoading(false)
    }

    if (!showText && list.length <= 0) {
      setLoading(true)
      getData()
    }
  }, [showText])

  const onClickText = () => {
    setShowText(false)
  }

  const onSelectValue = async id => {
    // 请求成功后再改变

    setShowText(true)
    if (id === selectedUser.id) return
    const user = list.find(e => e.id == id)
    const res = await updateUserById({ errorId: row.errorId, userName: user.name, userId: user.id })
    message.success(res.message || res)
    setSelectedUser(user)
  }

  return (
    <div className={styles.asyncClickSelect}>
      {showText ? (
        // 当前数据
        <div className={styles.display} onClick={onClickText}>
          <span className={styles.abbreviation}>{getLastName(selectedUser.name)}</span>
          <CaretDownOutlined />
        </div>
      ) : (
        // 下拉框
        <Select value={selectedUser.id} style={{ width: 120 }} loading={loading} onSelect={onSelectValue}>
          {list.map(item => (
            <Option value={item.id} key={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      )}
    </div>
  )
}
