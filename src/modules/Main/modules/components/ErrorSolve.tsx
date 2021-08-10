import { EnumErrorStatus } from '@/common/constant'
import { Button, message, Tooltip } from 'antd'
import React from 'react'
import { updateErrorsStatusFetch } from '../Errors/services'
import { ClockCircleFilled, CaretDownOutlined, CheckCircleTwoTone, DeleteOutlined } from '@ant-design/icons'

interface IErrorId {
  errorId: number
}

interface PropsType {
  disabled?: boolean
  items: IErrorId[]
  successUpdated: Function
}

const updateErrorsStatus = async (items: IErrorId[], status: EnumErrorStatus) => {
  const params = {
    errorIds: items.map(v => v.errorId),
    status,
  }
  const res = await updateErrorsStatusFetch(params)
  message.success(res.message)
}

export function ErrorSolvingBtn(props: PropsType) {
  const { disabled, items, successUpdated } = props
  const handleClick = async () => {
    await updateErrorsStatus(items, EnumErrorStatus.solving)
    successUpdated()
  }
  return (
    <Tooltip title="更改为解决中状态时，两天内再次发生错误时不会告警通知，两天后自动变成已解决">
      <Button
        disabled={disabled}
        onClick={() => handleClick()}
        icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}
        style={{ margin: '0px 10px' }}
      >
        解决中
      </Button>
    </Tooltip>
  )
}

export function ErrorIgnoreBtn(props: PropsType) {
  const { disabled, items, successUpdated } = props
  const handleClick = async () => {
    await updateErrorsStatus(items, EnumErrorStatus.ignored)
    successUpdated()
  }
  return (
    <Tooltip title="除了解决中状态，其他都可更改为忽视">
      <Button
        disabled={disabled}
        onClick={() => handleClick()}
        icon={<DeleteOutlined style={{ color: 'red' }} />}
        style={{ margin: '0px 10px' }}
      >
        忽视
      </Button>
    </Tooltip>
  )
}

interface TProps {
  status: number
  successUpdated: Function
  errorId: number
}
export function ErrorSolveBtns({ status, successUpdated, errorId }: TProps) {
  const solving = EnumErrorStatus.solving
  return (
    <>
      {solving !== status ? <ErrorSolvingBtn items={[{ errorId }]} successUpdated={successUpdated} /> : ''}
      {EnumErrorStatus.ignored !== status && solving !== status ? (
        <ErrorIgnoreBtn items={[{ errorId }]} successUpdated={successUpdated} />
      ) : (
        ''
      )}
    </>
  )
}
