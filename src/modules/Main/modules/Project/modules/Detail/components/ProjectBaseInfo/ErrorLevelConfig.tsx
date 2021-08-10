import { ErrorLevelBadgeColor, ERRORTYPES } from '@/common/constant'
import { Badge, Button, Col, Divider, Form, Input, message, Modal, Radio, Row, Select, Space, Switch } from 'antd'
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import styled from 'styled-components'
import { IErrorLevelConfig, ProjectErrorLevelConfigItem } from '@/d.ts/project'

const Option = Select.Option
const Item = Form.Item
let previousSelect = ''

const ColBorder = styled(Col)`
  border-right: 1px solid rgba(0, 0, 0, 0.06);
`
interface ErrorLevelConfigProps {
  errorLevelConfig: IErrorLevelConfig
  callback: (params: IErrorLevelConfig) => Promise<void>
}
function ErrorLevelConfig(props: ErrorLevelConfigProps, ref) {
  const [visible, setVisible] = useState(false)
  const [errorLevelArrState, setErrorLevelArrState] = useState<ProjectErrorLevelConfigItem[]>([])
  const errorLevelArr = useRef<ProjectErrorLevelConfigItem[]>([])
  const [form] = Form.useForm()
  const { errorLevelConfig, callback } = props
  const showModal = (data: boolean) => setVisible(data)

  useEffect(() => {
    if (Array.isArray(errorLevelConfig?.config) && errorLevelConfig.config.length > 0 && visible) {
      errorLevelArr.current = errorLevelConfig.config
      setErrorLevelArrState(errorLevelArr.current)
      form.setFieldsValue({
        errorType: errorLevelConfig.config[0].type,
        levels: errorLevelConfig.config[0].data,
        isEvent: errorLevelConfig.isEvent,
      })
      previousSelect = errorLevelConfig.config[0].type
    }
  }, [props.errorLevelConfig, visible])
  const onOk = async () => {
    try {
      await form.validateFields()
    } catch (error) {
      message.warning('请检查错误等级数量间的大小！')
      return
    }
    errorLevelArr.current.find(item => item.type === previousSelect).data = form
      .getFieldsValue()
      .levels.map(item => ({ ...item, value: Number(item.value) }))
    await callback({
      isEvent: form.getFieldValue('isEvent'),
      config: errorLevelArr.current,
    })
    showModal(false)
    // onCancel()
  }
  const handleSelectChange = async (errorType: ERRORTYPES) => {
    try {
      await form.validateFields()
    } catch (error) {
      form.setFieldsValue({
        errorType: previousSelect,
      })
      return
    }
    errorLevelArr.current.find(item => item.type === previousSelect).data = form
      .getFieldsValue()
      .levels.map(item => ({ ...item, value: Number(item.value) }))
    setErrorLevelArrState(JSON.parse(JSON.stringify(errorLevelArr.current)))
    form.setFieldsValue({
      levels: errorLevelArr.current.find(item => item.type === errorType).data,
    })
    previousSelect = errorType
  }
  useImperativeHandle(ref, () => {
    return {
      showModal,
    }
  })
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  }
  function onCancel() {
    form.resetFields()
    showModal(false)
  }

  return (
    <Modal
      onCancel={onCancel}
      onOk={onOk}
      width={1000}
      visible={visible}
      title="错误等级配置"
      okText="确认"
      cancelText="取消"
      maskClosable={false}
    >
      <Row>
        <ColBorder span={12}>
          <Form form={form} labelAlign="right" {...formItemLayout}>
            <Item label="错误类型" name="errorType">
              <Select onChange={errorType => handleSelectChange(errorType as ERRORTYPES)}>
                {Array.isArray(errorLevelArr.current) &&
                  errorLevelArr.current.map(item => {
                    return (
                      <Option value={item.type} key={item.type}>
                        {item.type}
                      </Option>
                    )
                  })}
              </Select>
            </Item>
            <Form.List name="levels">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => {
                    return (
                      <div key={field.key}>
                        <Item
                          name={[field.fieldKey, 'value']}
                          rules={[
                            { required: true, message: '请输入错误等级对应数量' },
                            ({ getFieldValue }) => {
                              return {
                                validator(_, value) {
                                  if (index === 0) {
                                    return Promise.resolve()
                                  }
                                  // const curValue = getFieldValue('levels').find(item => item.level === index + 1)
                                  const preValue = getFieldValue('levels')[index - 1].value
                                  if (value && Number(value) > Number(preValue)) {
                                    return Promise.reject('当前等级数量需要比上一级小')
                                  }
                                  return Promise.resolve()
                                },
                              }
                            },
                          ]}
                          key={field.key}
                          label={`P${index + 1}`}
                        >
                          {/* todo 需要换成整数 */}
                          <Input type="number" />
                        </Item>
                        {/* {index === fields.length - 1 && <MinusCircleOutlined onClick={() => remove(field.name)} />} */}
                      </div>
                    )
                  })}
                  {/* <Form.Item>
                    <Button type="dashed" onClick={() => add(1)} block icon={<PlusOutlined />}>
                      添加错误等级
                    </Button>
                  </Form.Item> */}
                </>
              )}
            </Form.List>
            <Item valuePropName="checked" label="等级划分" name="isEvent">
              <Switch checkedChildren="事件数" unCheckedChildren="用户数" />
            </Item>
          </Form>
        </ColBorder>
        {/* <Divider type="vertical" /> */}
        <Col span={12}>
          <ShowErrorLevelConfig errorLevelArr={errorLevelArrState}></ShowErrorLevelConfig>
        </Col>
      </Row>
    </Modal>
  )
}
type PropsType = {
  errorLevelArr: ProjectErrorLevelConfigItem[]
}
function ShowErrorLevelConfig(props: PropsType) {
  return (
    <div>
      {props.errorLevelArr.map(item => {
        return (
          <Row key={item.type} gutter={[10, 10]}>
            <Col span={8} style={{ textAlign: 'right' }}>
              {item.type}
            </Col>
            {item.data.map(level => (
              <Col key={level.level}>
                <Badge status="processing" color={ErrorLevelBadgeColor[level.level] || 'gray'} />P{level.level}:
                {level.value}
              </Col>
            ))}
          </Row>
        )
      })}
    </div>
  )
}

export default forwardRef(ErrorLevelConfig)
