/**
 * 页面正在加载中效果
 */

import React from 'react'
import styles from './page-loading.module.less'
import { Spin } from 'antd'

export class PageLoading extends React.Component<
  {
    message?: string
    className?: string
    style?: React.CSSProperties
  },
  {}
> {
  render() {
    const { style, message = 'Loading...', className } = this.props
    return (
      <div className={styles.container}>
        <Spin size="large" />
      </div>
    )
  }
}
