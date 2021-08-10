import { Row, Col, Modal, Input, AutoComplete, Button, Popconfirm, message, Select } from 'antd'
import React, { useMemo, useState } from 'react'
import { PoweroffOutlined, SearchOutlined } from '@ant-design/icons'
import debounce from 'lodash/debounce'
import { addTeamMemberFetch, userFuzzySearchFetch } from '../../services'
import { useParams } from 'react-router-dom'
const { Option } = Select

export default function AddTeamMember({
  visible,
  close,
  getTeamUserList,
}: {
  visible: boolean
  close: Function
  getTeamUserList: Function
}) {
  const { id } = useParams<{ id: string }>()
  const teamId = Number(id)
  const [options, setOptions] = useState<AUserSearch.Response>([])
  const [selectOptions, setSelectOptions] = useState([])
  const handleOk = async () => {
    const res = await addTeamMemberFetch({
      teamId,
      userIds: selectOptions.map(item => item.value),
    })
    message.success(res.message)
    getTeamUserList()
    close()
  }
  const handleCancel = () => {
    close()
  }
  const handleSearch = async (fuzzyName: string) => {
    const res = await userFuzzySearchFetch({ fuzzyName })
    setOptions(res)
  }
  const fetchSearch = debounce(handleSearch, 400)
  const handleChange = (value, option) => {
    setSelectOptions(value)
  }
  return (
    <Modal
      title="添加新成员"
      okButtonProps={{ disabled: selectOptions.length === 0 }}
      onOk={handleOk}
      onCancel={handleCancel}
      visible={visible}
      okText={'添加'}
    >
      <div>
        <Row>
          <Col span={24}>
            <Select
              size="large"
              mode="multiple"
              labelInValue
              value={selectOptions}
              optionLabelProp="label"
              allowClear
              placeholder="请输入用户名或者email"
              filterOption={false}
              onSearch={fetchSearch}
              onChange={handleChange}
              style={{ width: '100%' }}
            >
              {options.map(d => (
                <Option key={d.userId} value={d.userId} label={d.name}>
                  {d.name} {d.email} {d.mobile}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}
