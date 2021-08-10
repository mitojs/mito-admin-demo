import React, { useEffect, useState } from 'react'
import * as styles from './style.module.less'
import { Button, Col, Empty, Pagination, Row, Skeleton, Spin } from 'antd'
import ProjectCard from '../components/ProjectCard'
import { getProjectCardList } from '../services'
import { useHistory } from 'react-router-dom'
import useRequest from '@ahooksjs/use-request'

function Project() {
  const { data, loading, pagination, error } = useRequest(
    ({ current }) => getProjectCardList({ pageNum: Number(current), pageSize: 4 }),
    {
      paginated: true,
      onError(err) {
        console.log('err', err)
      },
    },
  )
  const history = useHistory()
  const goCreateProject = () => {
    history.push('/project/create')
  }
  const CardSkeleton = () => (
    <Row className={styles.row} gutter={[20, 20]}>
      {[1, 2, 3, 4].map(v => (
        <Col key={v} span={12}>
          <Skeleton avatar active={true} paragraph={{ rows: 8 }}></Skeleton>
        </Col>
      ))}
    </Row>
  )
  if (error) {
    return <CardSkeleton></CardSkeleton>
  }
  return (
    <div className={styles.project}>
      {loading ? (
        <CardSkeleton></CardSkeleton>
      ) : (
        <div>
          <Row className={styles.row} gutter={[20, 20]}>
            {data &&
              (data.list.length > 0 ? (
                data.list.map(project => {
                  return (
                    <Col key={project.projectId} title={project.name} span={12}>
                      <ProjectCard project={project} />
                    </Col>
                  )
                })
              ) : (
                <Col span={24}>
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>暂无项目</span>}>
                    <Button type="primary" onClick={goCreateProject}>
                      创建项目
                    </Button>
                  </Empty>
                </Col>
              ))}
          </Row>
          <Pagination
            hideOnSinglePage
            style={{ float: 'right', marginRight: '20px' }}
            onChange={pagination.onChange}
            current={data.pageNum}
            pageSize={data.pageSize}
            total={data.totalCount}
          />
        </div>
      )}
    </div>
  )
}

export default Project
