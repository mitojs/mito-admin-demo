import React, { useEffect, useState } from 'react'
import * as styles from './style.module.less'
import { Button, Col, Empty, Pagination, Row, Skeleton, Spin } from 'antd'
import ProjectCard from '../components/ProjectCard'
import { getProjectCardList } from '../services'
import { AProjectCardList } from '@/d.ts/project'
import useSWR, { mutate, useSWRInfinite } from 'swr'
import { useHistory } from 'react-router-dom'

function useProjectCardListSWR() {
  const getProjectCardListData = (pageNum = '') => {
    return getProjectCardList({
      pageNum: Number(pageNum),
      pageSize: 4,
    })
  }
  const { data, error, size, setSize } = useSWRInfinite<AProjectCardList.Response>(
    pageNum => String(pageNum + 1),
    getProjectCardListData,
    // 手动在useEffect中初始化数据，这样返回当前页面时才能重置到第一页
    {
      initialSize: 0,
    },
  )
  return {
    swrCardList: data && data[size - 1],
    isLoading: !error && data && !data[size - 1],
    // isError: error,
    pageNum: size,
    setPageNum: setSize,
  }
}

function Project() {
  const { swrCardList, pageNum, isLoading, setPageNum } = useProjectCardListSWR()
  const history = useHistory()
  const goCreateProject = () => {
    history.push('/project/create')
  }
  useEffect(() => {
    setPageNum(1)
  }, [])

  const onChange = (page, _) => {
    setPageNum(page)
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
  return (
    <div className={styles.project}>
      {isLoading ? (
        <CardSkeleton></CardSkeleton>
      ) : (
        <div>
          <Row className={styles.row} gutter={[20, 20]}>
            {swrCardList &&
              (swrCardList.list.length > 0 ? (
                swrCardList.list.map(project => {
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
          {Boolean(swrCardList && swrCardList.totalCount) && (
            <Pagination
              hideOnSinglePage
              style={{ float: 'right', marginRight: '20px' }}
              current={pageNum}
              onChange={onChange}
              pageSize={swrCardList.pageSize}
              total={swrCardList.totalCount}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Project
