import { Form, Input, message, Modal } from 'antd'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { addTeamFetch } from '../services'

function ModalAddTeam(props: any, ref) {
  const { fetchData } = props
  const formRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const onOk = async () => {
    formRef.current.submit()
  }
  const handleForm = async values => {
    const res = await addTeamFetch({
      ...values,
    })
    message.success(res.message)
    setVisible(false)
    fetchData()
  }
  const showModal = data => setVisible(data)
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
        formRef.current.resetFields()
        showModal(false)
      }}
      onOk={onOk}
      visible={visible}
      title="新增团队"
      okText="确认"
      cancelText="取消"
    >
      <Form ref={formRef} onFinish={handleForm} labelAlign="right" {...formItemLayout} name="edit-basic">
        <Form.Item
          label="团队名称"
          name="teamName"
          rules={[{ required: true, type: 'string', max: 20, message: '请输入团队名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="钉钉通知地址"
          name="dingtalkRobot"
          rules={[{ required: true, message: '请输入团队钉钉通知地址' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default forwardRef(ModalAddTeam)
