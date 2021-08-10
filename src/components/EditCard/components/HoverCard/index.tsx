import React from 'react'
import { Row, Col, Table, Tag, Space, Button } from 'antd'

import * as styles from './index.module.less'
export interface IHoverCard {
  height?: number
  children?: JSX.Element
}

/**
 * hover 有阴影的卡片
 * @params height 高度
 */
export default function HoverCard({ height, children }: IHoverCard) {
  return (
    <div className={styles.HoverCard} style={{ height: height ? `${height}px` : '' }}>
      {children}
    </div>
  )
}
