import React from 'react'
import { Input } from 'antd'
const { Search } = Input
interface ILabelValue {
  label: string
  value: string
}
type propsType = {
  value: ILabelValue[]
  onSearch(inputValue: string)
}
export default function InputSearch(props: propsType) {
  const value = props.value.map(item => `${item.label}:${item.value}`).join(' ')
  return (
    <Search
      placeholder="请输入搜索字段:对应值，多重标签搜索，用空格隔开，例子：ip:198.168.1.123 traceId:123123-123123-123"
      onSearch={value => props.onSearch(value)}
      defaultValue={value}
      enterButton
    />
  )
}
