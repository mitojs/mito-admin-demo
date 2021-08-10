import { createFromIconfontCN } from '@ant-design/icons'
import React from 'react'
import { ICONTYPE } from '@/common/constant'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1954571_7cnmn3esqbo.js',
})

function Icon(props: { icon: string; type?: ICONTYPE; size?: number }) {
  const { size, type } = props
  const fontSize = size ? `${size}px` : '20px'
  const iconType = type ? `mito-${props.icon}-${type}` : `mito-${props.icon}`
  return <IconFont style={{ fontSize }} type={iconType} />
}
export default Icon
