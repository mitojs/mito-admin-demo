import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { Card, Col, Input, Layout, message, Modal, Row, Switch, Table, Typography, Tabs, Button } from 'antd'
import { types } from '../../store/index'
import { getProjectInfoByIdFetch, createSourcemap, getSourcemap, deleteSourcemap } from '../../services'
import { NProjectInfo } from '@/d.ts/project'
import ProjectMembers from './components/ProjectMembers'
import Sourcemap from './components/Sourcemap'
import ProjectBaseInfo from './components/ProjectBaseInfo/ProjectBaseInfo'

const ProjectDetail = () => {
  const params = useParams<{ id: string }>()
  const { id } = params
  const [detail, setDetail] = useState<NProjectInfo.Response | any>({})

  const dispatch = useDispatch()

  const fetchProjectInfo = async () => {
    const res = await getProjectInfoByIdFetch(Number(id))
    setDetail(res)
  }
  useEffect(() => {
    fetchProjectInfo()
  }, [])

  useEffect(() => {
    dispatch({ type: types.ASYNC_GET_PROJECT_DETAIL, payload: { projectId: params.id } })
  }, [])
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <ProjectBaseInfo detail={detail} fetchProjectInfo={fetchProjectInfo}></ProjectBaseInfo>
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <ProjectMembers detail={detail}></ProjectMembers>
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Sourcemap />
        </Col>
      </Row>
    </>
  )
}

export default ProjectDetail
