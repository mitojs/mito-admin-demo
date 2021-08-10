import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Select } from 'antd'
import { UserOutlined, GitlabOutlined, LinkOutlined } from '@ant-design/icons'

import * as styles from './index.module.less'
import PlainLinkButton from '@/components/PlainLinkButton'
import config from '@/config'
const { Option } = Select
export default function SetName({ dataList, hasPlatform, onSumbit }) {
  const [form] = Form.useForm()
  const [sumbitAble, setsSumbitAble] = useState(false)
  const onFinish = values => {
    onSumbit(values)
  }
  const onFieldsChange = (changedFields, allFields) => {
    const fullInput = allFields.every(item => {
      if (item.value) return true
    })
    setsSumbitAble(fullInput)
  }
  const itemList = dataList.map((item, index) => (
    <Option value={item.teamId} key={index}>
      {item.teamName}
    </Option>
  ))

  return (
    <Form form={form} name="create-project" layout="vertical" onFinish={onFinish} onFieldsChange={onFieldsChange}>
      <div className={styles.formContent}>
        <Form.Item name="projectName" label="项目名称" className={styles.formItem}>
          <Input maxLength={12} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入项目名" />
        </Form.Item>
        <Form.Item name="git" label="项目git地址" className={styles.formItem}>
          <Input prefix={<GitlabOutlined className="site-form-item-icon" />} placeholder="请输入项目git地址" />
        </Form.Item>
        <Form.Item name="teamId" label="团队" className={styles.formItem}>
          <Select allowClear placeholder="请选择所属团队">
            {itemList}
          </Select>
        </Form.Item>
        <Form.Item label=" " style={{ marginLeft: '10px' }}>
          <Button type="primary" htmlType="submit" disabled={!(sumbitAble && hasPlatform)}>
            创建项目
          </Button>
        </Form.Item>
        <Form.Item label=" ">
          <PlainLinkButton icon={<LinkOutlined />} onClick={() => window.open(config.insertDoc)}>
            接入指南
          </PlainLinkButton>
        </Form.Item>
      </div>
    </Form>
  )
}
