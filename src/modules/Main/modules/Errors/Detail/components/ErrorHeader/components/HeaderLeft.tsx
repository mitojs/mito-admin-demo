import { ArchiveStar } from '@/components/ArchiveStar'
import CardWrapper from '@/components/CardWrapper'
import ErrorAssign from '@/modules/Main/modules/components/ErrorAssign'
import { Row, Col, Typography, Tooltip, Badge, message } from 'antd'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { collectErrorsFetch } from '@/modules/Main/modules/Errors/services'
import { ErrorLevel, ErrorLevelBadgeColor, ErrorStatus, ErrorStatusBadgeStatus } from '@/common/constant'
import ProjectPlatform from '@/modules/Main/modules/components/ProjectPlatform'
import { ErrorSolveBtns } from '@/modules/Main/modules/components/ErrorSolve'
import ErrorRemark from '@/modules/Main/modules/components/ErrorRemark'
import { copyTextSplit } from '@/utils'

interface TPropsType {
  errorInfo: NErrorInfoByErrorId.Response
  successUpdated: Function
}
const SpanLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
`
const { Paragraph } = Typography

const ParagraphWrap = styled(Paragraph)`
  margin-bottom: 0 !important;
`
const FlexBlock = styled.div`
  display: flex;
  align-items: center;
`
const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`
export default function HeaderLeft(props: TPropsType) {
  const { errorInfo, successUpdated } = props
  const handleCollect = async (items: NCollect.item[] = [], isCollect: boolean) => {
    const res = await collectErrorsFetch({
      items,
      isCollect,
    })
    message.success(res.message)
    successUpdated()
  }
  const ErrorOperate = useMemo(
    () => (
      <FlexBlock>
        <ErrorSolveBtns
          errorId={errorInfo.errorId}
          status={errorInfo.status}
          successUpdated={successUpdated}
        ></ErrorSolveBtns>
        <Tooltip title="收藏">
          <div style={{ marginRight: '10px' }}>
            <ArchiveStar
              status={errorInfo.isCollect}
              size={24}
              onClick={() =>
                handleCollect([{ errorId: errorInfo.errorId, projectId: errorInfo.projectId }], !errorInfo.isCollect)
              }
            />
          </div>
        </Tooltip>
        <ErrorAssign row={errorInfo}></ErrorAssign>
      </FlexBlock>
    ),
    [errorInfo],
  )
  return (
    <CardWrapper title={errorInfo.type} rightRender={() => ErrorOperate}>
      <div>
        <Row className="no-wrap-row" gutter={[0, 2]}>
          <Col flex="50px">
            <SpanLabel>Name：</SpanLabel>
          </Col>
          <Col flex="auto">
            <ParagraphWrap ellipsis>{errorInfo.name}</ParagraphWrap>
          </Col>
        </Row>
        <Row className="no-wrap-row" gutter={[0, 2]}>
          <Col flex="75px">
            <SpanLabel>Message：</SpanLabel>
          </Col>
          <Col flex="auto">
            <ParagraphWrap ellipsis copyable={{ text: copyTextSplit(errorInfo.message || '') }}>
              {errorInfo.message}
            </ParagraphWrap>
          </Col>
        </Row>
        <Row justify="start">
          <Col flex="110px">
            <SpanLabel>等级：</SpanLabel>
            <Badge status="processing" color={ErrorLevelBadgeColor[errorInfo.level]} />
            {ErrorLevel[errorInfo.level]}
          </Col>
          <Col flex="120px">
            <SpanLabel>状态：</SpanLabel>
            <Badge status={ErrorStatusBadgeStatus[errorInfo.status]} />
            {ErrorStatus[errorInfo.status]}
          </Col>
          <Col flex="auto">
            <ErrorRemark
              style={{ padding: '0 11px' }}
              errorId={errorInfo.errorId}
              remark={errorInfo.remark}
            ></ErrorRemark>
          </Col>
          <Col flex="160px">
            <FlexEnd>
              <ProjectPlatform projectName={errorInfo.projectName} platform={errorInfo.platform}></ProjectPlatform>
            </FlexEnd>
          </Col>
        </Row>
      </div>
    </CardWrapper>
  )
}
