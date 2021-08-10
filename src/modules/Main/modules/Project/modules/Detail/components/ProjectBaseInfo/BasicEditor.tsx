import React, { useState } from 'react'
import { Form, Input, message, Modal, Select } from 'antd'
import { platformMap } from '@/common/constant'
import { putProjectInfoFetch } from '../../../../services'
const { Option } = Select

interface BasicEditorProps {
  projectName: string
  platform: number
  git: string
  projectId: number
  fetchTable: () => void
  trigger?: React.ReactNode
  onConfirm?: (source: UtilObject) => any
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const platformArr = Object.entries(platformMap).map(([value, label]) => ({
  value: Number(value),
  label,
}))

const BasicEditor = (props: BasicEditorProps) => {
  const [visible, setVisible] = useState(false)

  const [form] = Form.useForm()

  const { projectName, platform, git, projectId, fetchTable } = props

  const onClickVisible = () => setVisible(true)

  const onHide = () => setVisible(false)

  const onOk = async () => {
    await form.validateFields()
    const result = form.getFieldsValue()
    const res = await putProjectInfoFetch(projectId, result)
    message.success(res.message)
    fetchTable()
    onHide()
  }

  const defaultTrigger = <span onClick={onClickVisible}>修改</span>

  const trigger = React.isValidElement(props.trigger)
    ? React.cloneElement(props.trigger, {
        ...props.trigger.props,
        onClick: onClickVisible,
      })
    : defaultTrigger

  return (
    <>
      {trigger}
      <Modal onCancel={onHide} onOk={onOk} visible={visible} title="修改基本信息" okText="确认" cancelText="取消">
        <Form form={form} initialValues={{ projectName, platform, git }} {...layout} name="edit-basic">
          <Form.Item label="项目名称" name="projectName" rules={[{ required: true, message: '请输入项目名称' }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item label="git地址" name="git" rules={[{ required: true, message: '请输入git地址' }]}>
            <Input placeholder="请输入项目git地址" />
          </Form.Item>
          <Form.Item label="平台" name="platform">
            <Select style={{ width: 120 }}>
              {platformArr.map(item => (
                <Option key={item.value} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

BasicEditor.defaultProps = {
  visible: false,
  name: '',
  platform: '',
}

export default BasicEditor
