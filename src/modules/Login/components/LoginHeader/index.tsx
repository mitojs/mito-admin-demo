import React from 'react'
import { useSelector } from 'react-redux'
import { PageHeader, Button } from 'antd'
import { RootState } from '@/store/index.type'
import { Translation } from '@/modules/Register/utils/translation'
import config from '@/config'
// 登陆注册页面的 Page Header
export function LoginHeader() {
  const lang = useSelector((state: RootState) => state.global.lang)
  return (
    <PageHeader
      className="site-page-header"
      title="TRY CATCH!"
      subTitle={Translation.projeectDesc[lang]}
      extra={[
        <Button key="2">
          <a href="https://github.com/clouDr-f2e/mitojs" target="_blank" rel="noreferrer">
            {' '}
            SDK Github
          </a>
        </Button>,
        <Button key="1" type="primary">
          <a href={config.cookDoc} target="_blank" rel="noreferrer">
            {Translation.projectDocument[lang]}
          </a>
        </Button>,
      ]}
    ></PageHeader>
  )
}
