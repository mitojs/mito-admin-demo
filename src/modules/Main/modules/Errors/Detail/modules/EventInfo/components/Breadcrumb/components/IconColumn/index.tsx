import React from 'react'
import Icon from '@components/Icon'
import * as styles from './index.module.less'

import { Tooltip } from 'antd'
import { THEMECOLORS } from '@common/constant'

type DesPropsType = {
  data: any
}

export enum BREADCRUMBCATEGORYS {
  HTTP = 'http',
  USER = 'user',
  DEBUG = 'debug',
  EXCEPTION = 'exception',
  LIFECYCLE = 'lifecycle',
}

function getCategoryColor(category) {
  switch (category) {
    case BREADCRUMBCATEGORYS.HTTP:
      return 'rgb(77, 199, 113)'
    case BREADCRUMBCATEGORYS.USER:
      return THEMECOLORS.blue
    case BREADCRUMBCATEGORYS.DEBUG:
      return 'rgb(62, 44, 115)'
    case BREADCRUMBCATEGORYS.EXCEPTION:
      return THEMECOLORS.red
    case BREADCRUMBCATEGORYS.LIFECYCLE:
      return '#eb2f96'
    default:
      break
  }
}

export default function IconColumn(props: DesPropsType) {
  const { data } = props
  const color = getCategoryColor(data.category)
  return (
    <Tooltip title={data.category}>
      <div className={styles.category} style={{ color: color, borderColor: color }}>
        <Icon icon={`${data.category}-breadcrumb`} size={24}></Icon>
      </div>
    </Tooltip>
  )
}
