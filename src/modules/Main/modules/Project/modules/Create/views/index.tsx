import React, { useEffect, useState } from 'react'
import * as styles from './index.module.less'

import ChoosePlatform from '../components/ChoosePlatform'
import SetName from '../components/SetName'
import { GlobalProjectList } from '@/d.ts/project'
import CodeContainer from '@/components/CodeContainer'
import { vueSdkCode, wxMiniSdkCode } from './code'
import { getTeamList } from '@/services/team'
import { addProjctFetch } from '@/services/project'
import { v1 as uuidv1 } from 'uuid'
import { message } from 'antd'
import CardWrapper from '@/components/CardWrapper'
import { EPlatform } from '@/common/constant'
import { downloadFile } from '@/utils'

const platformData = [
  {
    icon: 'vue',
    name: 'vue',
    platform: 1,
  },
  {
    icon: 'react',
    name: 'react',
    platform: 2,
  },
  {
    icon: 'js',
    name: 'js',
    platform: 3,
  },
  {
    icon: 'mini',
    name: 'mini',
    platform: 4,
  },
]
const teamData = [
  {
    teamId: 1,
    teamName: '1',
    role: 1,
    memberCount: 1,
    owner: '1',
    createdAt: '1',
    selected: 1,
  },
]

export default function CreateProject() {
  // 当前选中的平台
  const [currentPlatform, setCurrentPlatform] = useState(0)
  // 团队列表
  const [teamList, setTeamList] = useState<GlobalProjectList.Response[]>([])
  const [sdkCode, setSdkCode] = useState('')
  const addProject = async values => {
    const apikey = uuidv1()
    const params = {
      apikey,
      name: values.projectName,
      platform: currentPlatform,
      teamId: values.teamId,
      git: values.git,
    }
    const res = await addProjctFetch(params)
    if (res) {
      message.success(res)
      const code = currentPlatform === EPlatform.mini ? wxMiniSdkCode(apikey) : vueSdkCode(apikey)
      setSdkCode(code)
    }
  }
  const fetchProjectList = async () => {
    const res = await getTeamList()
    setTeamList(res)
  }

  useEffect(() => {
    fetchProjectList()
  }, [])

  const renderCodeContainer =
    sdkCode !== '' ? <CodeContainer codeString={sdkCode} metastring={0}></CodeContainer> : <span></span>
  return (
    <CardWrapper title="创建项目">
      <h1 className={styles.title}>创建一个新的项目</h1>
      <div className={styles.content}>项目使您能够将错误事件范围精确到项目级别</div>
      <h1 className={styles.title}>选择一个平台</h1>
      <ChoosePlatform
        dataList={platformData}
        onChange={platform => {
          setCurrentPlatform(platform)
        }}
      ></ChoosePlatform>
      <h1 className={styles.title}>给你的项目取个名字</h1>
      <SetName
        dataList={teamList}
        hasPlatform={Boolean(currentPlatform)}
        onSumbit={projectInfo => {
          addProject(projectInfo)
        }}
      />
      {renderCodeContainer}
    </CardWrapper>
  )
}
