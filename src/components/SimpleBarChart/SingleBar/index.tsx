import { THEMECOLORS } from '@/common/constant'
import { Tooltip } from 'antd'
import React, { memo } from 'react'
import * as styles from './index.module.less'

interface ISingleBarParcentage {
  text: string
  textShadow: string
}

interface ISingleBar {
  name: string
  width: string
  height: string
  data: string
  color: string
  xAxis: {
    text: string
  }
  parcentage: ISingleBarParcentage
  onPathClick: (e) => any
}

export const SingleBar = ({ name, width, height, data, color, xAxis, parcentage, onPathClick }: ISingleBar) => {
  const { textShadow } = parcentage
  return (
    <div className={styles.singleBarWrapper}>
      <Tooltip title={`${name}: ${parcentage.text}`} color={THEMECOLORS.blue}>
        <div className={styles.parcentage}>
          <span className={styles.nameMargin}>{name}</span> {parcentage.text}
        </div>
      </Tooltip>
      <svg style={{ marginLeft: 5 }} width={width} height={height}>
        <path className={styles.singleBarPath} d={data} fill={color} onClick={onPathClick} />
      </svg>
    </div>
  )
}

export default memo(SingleBar)
