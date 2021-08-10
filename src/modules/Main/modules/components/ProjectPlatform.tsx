import React from 'react'
import styled from 'styled-components'
import { Table, Tag, Button, Tooltip, Badge, Select, Menu, Dropdown, message } from 'antd'
import Icon from '@components/Icon'
import { ICONTYPE, platformMap, THEMECOLORS } from '@/common/constant'

const FlexBlock = styled.div`
  display: flex;
  align-items: center;
`
interface propsType {
  platform: number
  projectName: string
}
export default function ProjectPlatform({ platform, projectName }: propsType) {
  return (
    <FlexBlock>
      <Tooltip title={platformMap[platform]}>
        <div style={{ height: '22px' }}>
          <Icon size={22} icon={platformMap[platform]} type={ICONTYPE.square} />
        </div>
      </Tooltip>

      <Tooltip title="项目名">
        <Tag style={{ margin: '0 0 0 10px' }} color={THEMECOLORS.blue}>
          {projectName && projectName.toUpperCase()}
        </Tag>
      </Tooltip>
    </FlexBlock>
  )
}
