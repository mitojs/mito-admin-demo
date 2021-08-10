import CardWrapper from '@/components/CardWrapper'
import { IErrorLevelConfig, NProjectInfo, NProjectPutErrorLevelConfig } from '@/d.ts/project'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getProjectInfoByIdFetch, putProjectErrorLevelConfigFetch } from '../../../../services'
import BasicEditor from './BasicEditor'
import { EditOutlined } from '@ant-design/icons'
import { formatTime } from '@/utils'
import { Button, Col, message, Row, Typography } from 'antd'
import { vueSdkCode } from '../../../Create/views/code'
import { platformMap } from '@/common/constant'
import { types } from '../../../../store'
import ErrorLevelConfig from './ErrorLevelConfig'
const { Text, Link, Paragraph } = Typography

const SpanWrap = styled.span`
  color: #1890ff;
  margin-left: 8px;
  cursor: pointer;
`
const configData = {
  VUE_ERROR: {
    3: 1,
    2: 500,
    1: 2000,
  },
  REACT_ERROR: {
    3: 1,
    2: 40,
    1: 400,
  },
  JAVASCRIPT_ERROR: {
    3: 1,
    2: 600,
    1: 1500,
  },
  RESOURCE_ERROR: {
    4: 1,
    3: 500,
    2: 1000,
    1: 3000,
  },
  HTTP_ERROR: {
    4: 1,
    3: 200,
    2: 500,
    1: 3000,
  },
  LOG_ERROR: {
    4: 1,
    3: 100,
    2: 600,
    1: 800,
  },

  PROMISE_ERROR: {
    4: 1,
    3: 500,
    2: 1000,
    1: 1600,
  },
  ROUTE_ERROR: {
    4: 1,
    3: 500,
    2: 1000,
    1: 1600,
  },
}
export default function ProjectBaseInfo({
  detail,
  fetchProjectInfo,
}: {
  detail: NProjectInfo.Response
  fetchProjectInfo: () => void
}) {
  const errorLevelConfigModalRef = useRef(null)
  const errorLevelConfigCallback = async (params: IErrorLevelConfig) => {
    const res = await putProjectErrorLevelConfigFetch(detail.projectId, params)
    message.success(res.message)
    fetchProjectInfo()
  }
  return (
    <CardWrapper
      title={
        <>
          <span>基本信息</span>
          <BasicEditor
            trigger={
              <SpanWrap>
                <EditOutlined />
              </SpanWrap>
            }
            git={detail.git}
            projectId={detail.projectId}
            platform={detail.platform}
            projectName={detail.name}
            fetchTable={fetchProjectInfo}
          />
        </>
      }
    >
      <Row gutter={[0, 8]}>
        <Col span={8}>
          项目名称：
          <a href={detail.git} target="_blank" rel="noreferrer">
            {detail.name}
          </a>
        </Col>
        <Col span={8}>语言：{platformMap[detail.platform]}</Col>
        <Col span={8}>成员个数：{detail.memberCount}</Col>
        <Col span={8}>创建时间：{formatTime(detail.createdAt)}</Col>
        <Col span={8}>更新时间：{formatTime(detail.updatedAt)}</Col>
        <Col span={8}>
          错误等级配置：
          <Button type="link" onClick={() => errorLevelConfigModalRef.current.showModal(true)}>
            点击配置
          </Button>
          <ErrorLevelConfig
            ref={errorLevelConfigModalRef}
            callback={errorLevelConfigCallback}
            errorLevelConfig={detail.errorLevelConfig}
          ></ErrorLevelConfig>
        </Col>
        <Col span={24}>
          <div style={{ display: 'flex' }}>
            <span>script:</span>
            <Paragraph code copyable>
              {vueSdkCode(detail.apikey)}
            </Paragraph>
          </div>
        </Col>
      </Row>
    </CardWrapper>
  )
}
