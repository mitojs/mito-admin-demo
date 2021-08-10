import React, { useState } from 'react'
import { Form, Input, Modal, Table } from 'antd'

interface MemberManageProps {
  memberList: AProjectMember.ResponseItem[]
  trigger?: React.ReactNode
}

const column = []

const MemberManage = (props: MemberManageProps) => {
  const { memberList } = props
  const [visible, setVisible] = useState(false)
  const onClickVisible = () => setVisible(true)
  const onHide = () => setVisible(false)
  const defaultTrigger = <span onClick={onClickVisible}>修改</span>

  const trigger = React.isValidElement(props.trigger)
    ? React.cloneElement(props.trigger, {
        ...props.trigger.props,
        onClick: onClickVisible,
      })
    : defaultTrigger

  return (
    <>
      {trigger}
      <Modal onCancel={onHide} onOk={onHide} visible={visible} title="修改基本信息" okText="确认" cancelText="取消">
        <Table dataSource={memberList}></Table>
      </Modal>
    </>
  )
}

export default MemberManage
