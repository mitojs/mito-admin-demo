import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/index.type'
import { Form, Input, Select, Checkbox, Button } from 'antd'
import { Translation as trans } from '../../utils/translation'
import { useHistory } from 'react-router'
import { regitserAccount } from '../../services/index'

import * as styles from './index.module.less'

const { Option } = Select

// 翻译
const {
  username,
  email,
  password,
  confirmPassword,
  phone,
  agreement,
  register,
  enterEmail,
  enterPassword,
  enterUsername,
  enterPhone,
  acceptAgreement,
  InvalidEmail,
  UnmatchedPassword,
  iHaveRead,
  verification,
  enterVerification,
  useExistingAccount,
} = trans

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

/**
 * 注册表单
 * @param props
 */
export default function RegisterForm(props) {
  const [form] = Form.useForm()
  // const store = useStore()
  const lang = useSelector((state: RootState) => state.global.lang)
  const history = useHistory()
  const onFinish = async values => {
    const postQuery = { ...values }
    const response = await regitserAccount(postQuery)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  )

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      validateTrigger="onBlur"
      onFinish={onFinish}
      initialValues={{
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label={username[lang]}
        rules={[{ required: true, message: enterUsername[lang], whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label={email[lang]}
        rules={[
          {
            type: 'email',
            message: InvalidEmail[lang],
          },
          {
            required: true,
            message: enterEmail[lang],
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label={password[lang]}
        rules={[
          {
            required: true,
            message: enterPassword[lang],
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label={confirmPassword[lang]}
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: confirmPassword[lang],
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(UnmatchedPassword[lang])
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="phone" label={phone[lang]} rules={[{ required: true, message: enterPhone[lang] }]}>
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="verification"
        label={verification[lang]}
        rules={[{ required: true, message: enterVerification[lang] }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) => (value ? Promise.resolve() : Promise.reject(acceptAgreement[lang])),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          {iHaveRead[lang]} <a href="">{agreement[lang]}</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          {register[lang]}
        </Button>

        <span
          className={styles.useAccount}
          onClick={() => {
            history.push(`/login`)
          }}
        >
          {useExistingAccount[lang]}
        </span>
      </Form.Item>
    </Form>
  )
}
