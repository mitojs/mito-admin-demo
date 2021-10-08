import { Button, Popover, Tooltip } from 'antd'
import React from 'react'
import { GithubOutlined } from '@ant-design/icons'
import PlainLinkButton from './PlainLinkButton'

export default function GithubBtn() {
  return (
    <PlainLinkButton onClick={() => window.open('https://github.com/mitojs/mitojs')} icon={<GithubOutlined />}>
      Github
    </PlainLinkButton>
  )
}
