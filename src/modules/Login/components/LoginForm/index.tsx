import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/index.type'
import { Form, Input, Select, Checkbox, Button } from 'antd'
import { Translation as trans } from '../../utils/translation'
import { useHistory } from 'react-router'
import { loginAccount } from '../../services/index'
import { ButtonGroup } from '@/components/ButtonGroup'
import { getSingleLoginUrl } from '@/utils'
import Cookie from 'js-cookie'
import config from '@/config'
// 翻译
const { email, password, enterEmail, enterPassword, rememeberMe, login, intranetLogin, registerAccount } = trans

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export default function LoginForm(props) {
  // const [form] = Form.useForm()
  const history = useHistory()
  const lang = useSelector((state: RootState) => state.global.lang)
  const onFinish = async values => {
    const postQuery = { ...values }
    const response = await loginAccount(postQuery)
    Cookie.set('bearerToken', response.token, {
      domain: config.cookieDomain,
    })
    history.push('/project')
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const handleIntranet = () => {
    location.href = getSingleLoginUrl()
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={email[lang]}
        name={email[1].toLowerCase()} // 注意大小写
        rules={[{ required: true, message: enterEmail[lang] }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={password[lang]}
        name={password[1].toLowerCase()}
        rules={[{ required: true, message: enterPassword[lang] }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>{rememeberMe[lang]}</Checkbox>
            </Form.Item> */}

      <Form.Item {...tailLayout}>
        <ButtonGroup>
          <Button type="primary" htmlType="submit">
            {login[lang]}
          </Button>

          <Button type="primary" onClick={handleIntranet}>
            {intranetLogin[lang]}
          </Button>
        </ButtonGroup>

        {/*<span*/}
        {/*    className={styles.toRegister}*/}
        {/*    onClick={() => {*/}
        {/*        history.push(`/register`)*/}
        {/*    }}*/}
        {/*>*/}
        {/*    {registerAccount[lang]}*/}
        {/*</span>*/}
      </Form.Item>
    </Form>
  )
}
