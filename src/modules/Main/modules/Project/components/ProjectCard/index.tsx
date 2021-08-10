import React from 'react'
import { Avatar, Button, Card, Col, Row, Spin, Tooltip } from 'antd'
import { SettingTwoTone, BugTwoTone, QuestionCircleOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { ICONTYPE, platformMap } from '@common/constant'
import Icon from '@components/Icon'
import useCount from '@/hooks/useCount'
import * as styles from './index.module.less'
import { useDispatch } from 'react-redux'
import { CHANGE_PROJECT } from '@/store/modules/global/action-types'
import { AProjectCardList } from '@/d.ts/project'
import GrowthRate from '@/components/GrowthRate'
import styled from 'styled-components'
import AreaChart from '@/components/AreaChart'
const WrapSpan = styled.span`
  font-weight: 500;
  margin-left: 4px;
  /* color: ${({ theme }) => theme.colors.blue}; */
`
type propsType = {
  project: AProjectCardList.ProjectListCardItem
}
const ProjectCard = (props: propsType) => {
  const { project } = props
  const history = useHistory()
  const dispatch = useDispatch()
  const dispatchProject = (projectId: Number) => {
    dispatch({
      type: CHANGE_PROJECT,
      payload: projectId,
    })
  }
  const gotoProjectError = (projectId: number) => {
    dispatchProject(projectId)
    history.push(`/errors`)
  }
  const errorNum = useCount(project.errorSum)
  const pvSum = useCount(project.pvSum)
  const uvSum = useCount(project.uvSum)

  const goToProjectConfig = (id: number) => {
    history.push(`/project/${id}`)
  }

  const goToProjectErrorStatistic = (projectId: number) => {
    dispatchProject(projectId)
    history.push('/errorOverview')
  }
  const series = [
    {
      name: 'PV',
      data: project.chart.pvYesterday.map(v => v.count),
    },
    {
      name: 'UV',
      data: project.chart.uvYesterday.map(v => v.count),
    },
    {
      name: '错误数',
      data: project.chart.errorYesterday.map(v => v.count),
    },
  ]
  return (
    <Card
      bordered
      extra={
        <div className={styles.projectHeader}>
          <div className={styles.total}>
            负责人:<WrapSpan>{project.creatorUserName}</WrapSpan>
          </div>
          {/* <div className={styles.total}>近24小时</div> */}
          <div className={styles.total}>
            PV:<WrapSpan>{pvSum}</WrapSpan>
          </div>
          <div className={styles.total}>
            UV:<WrapSpan>{uvSum}</WrapSpan>
          </div>
          <div className={styles.total}>
            错误数:<WrapSpan>{errorNum}</WrapSpan>
          </div>
          <Tooltip title="点击进入错误列表">
            <BugTwoTone
              onClick={() => gotoProjectError(project.projectId)}
              style={{ cursor: 'pointer', marginRight: '6px', fontSize: '16px' }}
            />
          </Tooltip>
          <Tooltip title="点击进入项目设置">
            <SettingTwoTone
              onClick={() => goToProjectConfig(project.projectId)}
              style={{ cursor: 'pointer', marginRight: '6px', fontSize: '16px' }}
            />
          </Tooltip>
          <Tooltip title="近24小时统计数据">
            <QuestionCircleOutlined style={{ cursor: 'pointer', fontSize: '16px' }} />
          </Tooltip>
        </div>
      }
      size="small"
      title={
        <div className={styles.cardTitle}>
          <Tooltip title={platformMap[project.platform]}>
            <Avatar
              shape="square"
              className={styles.cardBadge}
              size={20}
              icon={<Icon icon={platformMap[project.platform]} type={ICONTYPE.square}></Icon>}
            />
          </Tooltip>
          <Button onClick={() => goToProjectErrorStatistic(project.projectId)} type="link">
            {project.name}
          </Button>
        </div>
      }
    >
      <div style={{ height: '280px', position: 'relative' }}>
        <AreaChart series={series} xAxisData={project.chart.errorYesterday.map(v => v.time)}></AreaChart>
        <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', fontSize: '12px', color: 'gray' }}>同比前一天</div>
          <GrowthRate title="PV:" rateNum={project.pvRate || (project.pvSum !== 0 ? Infinity : 0)}></GrowthRate>
          <GrowthRate title="UV:" rateNum={project.uvRate || (project.uvSum !== 0 ? Infinity : 0)}></GrowthRate>
          <GrowthRate
            title="错误数:"
            rateNum={project.errorRate || (project.errorSum !== 0 ? Infinity : 0)}
          ></GrowthRate>
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
