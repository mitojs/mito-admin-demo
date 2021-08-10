import { variableTypeDetection } from '@/utils'
import { Button, Input, message } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { updateErrorRemark } from '../Errors/services'

type PropsType = {
  remark: string
  errorId: number
  style?: any
}
const ErrorRemark = (props: PropsType) => {
  const previousRemark = useRef(null)
  const [value, setValue] = useState('')
  useEffect(() => {
    setValue(props.remark)
    previousRemark.current = props.remark
  }, [props.remark])
  const updateRemark = async (remark: string) => {
    const res = await updateErrorRemark({
      errorId: props.errorId,
      remark,
    })
    message.success(res.message)
  }
  const hanldeOnBlur = async (e: any) => {
    const inputValue = e.target.value
    if (typeof inputValue === 'string' && inputValue.trim() !== '' && inputValue !== previousRemark.current) {
      await updateRemark(inputValue)
      setValue(inputValue)
      previousRemark.current = inputValue
    }
  }
  const handleOnChange = (e: any) => {
    const inputValue = e.target.value
    setValue(inputValue)
  }
  return (
    <Input
      bordered={false}
      placeholder="暂无备注"
      maxLength={1024}
      style={props.style}
      value={value}
      onBlur={hanldeOnBlur}
      onChange={handleOnChange}
    ></Input>
  )
}

export default ErrorRemark
