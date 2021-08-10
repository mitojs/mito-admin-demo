import { ProjectRoleOptions, TeamRoleOptions } from '@/common/constant'
import { Form, Input, message, Modal, Select } from 'antd'
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
const { Option } = Select
interface TProps {
  meRole: number
  fetchData: Function
  curUserInfo: ATeamUserList.TTeamUserListItem | any
  putRoleFetch: Function
  params: any
  isTeam: boolean
}
function ModalRoleAssign(props: TProps, ref) {
  const { fetchData, putRoleFetch, meRole, isTeam, curUserInfo, params } = props
  const title = isTeam ? '团队成员角色编辑' : '项目成员角色编辑'
  const options = isTeam ? TeamRoleOptions : ProjectRoleOptions
  const formRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const onOk = async () => {
    formRef.current.submit()
  }
  const handleForm = async values => {
    const res = await putRoleFetch({
      ...params,
      ...values,
    })
    message.success(res.message)
    setVisible(false)
    fetchData()
  }
  useEffect(() => {
    formRef.current && formRef.current.setFieldsValue({ role: curUserInfo.role })
  }, [curUserInfo.role])
  const showModal = (data: boolean) => setVisible(data)
  useImperativeHandle(ref, () => {
    return {
      showModal,
    }
  })
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  return (
    <Modal
      onCancel={() => {
        showModal(false)
        // formRef.current.resetFields()
      }}
      onOk={onOk}
      visible={visible}
      title={title}
      okText="确认"
      cancelText="取消"
    >
      <Form ref={formRef} onFinish={handleForm} labelAlign="left" {...formItemLayout}>
        <Form.Item label="当前成员">
          <span>{curUserInfo.userName}</span>
        </Form.Item>
        <Form.Item label="角色" name="role" hasFeedback rules={[{ required: true, message: '请选择角色' }]}>
          <Select placeholder="请选择角色">
            {options.map(item => (
              <Option
                disabled={meRole <= Number(item.value) ? false : true}
                key={item.value}
                value={Number(item.value)}
              >
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default forwardRef(ModalRoleAssign)
