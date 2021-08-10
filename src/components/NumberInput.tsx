import { Input, Tooltip } from 'antd'
import React, { useState } from 'react'

export default function NumberInput() {
  const [title, setTitle] = useState('')
  const onChange = (e: any) => {
    const { value } = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value)
    }
    setTitle(value)
  }
  const onBlur = () => {}
  return (
    <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
      <Input onChange={onChange} onBlur={onBlur} placeholder="请输入数字" maxLength={25} />
    </Tooltip>
  )
}
