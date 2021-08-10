import React from 'react'
import { Tooltip } from 'antd'
import { AsyncClickSelect } from '@/components/AsyncClickSelect'
import { getUserListByProjectId } from '../Errors/services'
import Icon from '@/components/Icon'
// todo 待优化：列表可以缓存getUserListByProjectId返回的数据，第二次可以先从缓存中取出，没有的话再请求接口
export default function ErrorAssign({ row }: { row: IErrorBase }) {
  return (
    <div>
      <Tooltip title="负责人">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <AsyncClickSelect row={row} listQuery={() => getUserListByProjectId({ projectId: row.projectId })} />
          <Icon icon="assigned" size={24}></Icon>
        </div>
      </Tooltip>
    </div>
  )
}
