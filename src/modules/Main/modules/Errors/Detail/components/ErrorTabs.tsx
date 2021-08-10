import React, { useEffect, useState } from 'react'
import * as styles from './index.module.less'
import { Affix, Badge, Tabs } from 'antd'
import { TableOutlined, EyeOutlined, CameraOutlined, TagsOutlined } from '@ant-design/icons'

import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'
import useRoute from '@/hooks/useRoute'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { atomErrorInfo } from '@/recoil'
const { TabPane } = Tabs
const TabsWrap = styled(Tabs)`
  background-color: white;
  margin-top: 20px;
  border-radius: 10px 10px 0 0;
  padding: 0px 20px 0px 20px;
  .ant-tabs-nav {
    margin: 0;
    position: relative;
    top: 1px;
  }
  .ant-tabs-ink-bar {
    bottom: 1px !important;
  }
`
const ErrorQueryType = [
  {
    label: '详细信息',
    value: 'info',
    icon: <EyeOutlined />,
  },
  {
    label: '录制回放',
    value: 'replay',
    icon: <CameraOutlined />,
  },
  // {
  //   label: '事件列表',
  //   value: 'table',
  //   icon: <TableOutlined />,
  // },
  {
    label: '标签集合',
    value: 'tag',
    icon: <TagsOutlined />,
  },
]

export default function ErrorTabs() {
  const history = useHistory()
  const { errorId } = useParams<{ errorId: string }>()
  const route = useRoute()
  const [activeKey, setActiveKey] = useState(null)
  const [ossUrlsCount, setOssUrlsCount] = useState(0)

  const errorInfo = useRecoilValue<any>(atomErrorInfo)
  useEffect(() => {
    try {
      const urls = JSON.parse(errorInfo.ossUrls)
      setOssUrlsCount(Array.isArray(urls) ? urls.length : 0)
    } catch (error) {
      console.log('json parse ossUrls 出错')
    }
  }, [errorInfo])
  useEffect(() => {
    setActiveKey(route.path.split('/').pop())
  }, [route])
  function onChangeTabs(activeKey) {
    history.push(`/errors/${errorId}/${activeKey}`)
    setActiveKey(activeKey)
  }

  return (
    <TabsWrap activeKey={activeKey} onChange={onChangeTabs}>
      {ErrorQueryType.map(v => (
        <TabPane
          key={v.value}
          tab={
            <Badge count={v.value === 'replay' ? ossUrlsCount : 0} offset={[2, -2]}>
              <span>
                {v.icon}
                {v.label}
              </span>
            </Badge>
          }
        />
      ))}
    </TabsWrap>

    // </Affix>
  )
}
