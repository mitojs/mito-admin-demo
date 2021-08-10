import React, { useEffect, useState } from 'react'
import { Col, Row, Select } from 'antd'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import Icon from '@/components/Icon'
import { ICONTYPE, platformMap } from '@/common/constant'
import { RootState } from '@/store/index.type'
import { getHeaderProjectList } from '@/modules/Main/modules/Project/services'
import { ProjectListBase } from '@/d.ts/project'
import { CHANGE_PROJECT } from '@/store/modules/global/action-types'
const { Option } = Select

function SelectProjects() {
  const dispatch = useDispatch()
  const currentProject = useSelector<RootState, number>(state => state.global.currentProject)
  const [projectList, setProjectList] = useState<ProjectListBase[]>([])
  const fetchProjectList = async () => {
    const res = await getHeaderProjectList()
    setProjectList(res)
  }
  useEffect(() => {
    fetchProjectList()
  }, [])

  function handleChange(value) {
    dispatch({
      type: CHANGE_PROJECT,
      payload: value,
    })
  }
  return (
    <Select
      style={{ minWidth: '200px' }}
      placeholder="选择项目"
      value={currentProject}
      onChange={handleChange}
      optionLabelProp="label"
    >
      <Option value={0} label="全部项目">
        <div>全部项目</div>
      </Option>
      {projectList.map(v => (
        <Option key={v.projectId} value={v.projectId} label={v.name}>
          <Row align="middle" gutter={[2, 0]}>
            <Col style={{ marginTop: '4px' }}>
              <Icon icon={platformMap[v.platform]} type={ICONTYPE.irregular}></Icon>
            </Col>
            <Col>{v.name}</Col>
          </Row>
        </Option>
      ))}
    </Select>
  )
}

export default SelectProjects
