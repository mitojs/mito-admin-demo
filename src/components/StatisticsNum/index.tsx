import React, { useEffect, useState } from 'react'
import * as styles from './index.module.less'
import { THEMECOLORS, ICONTYPE } from '@/common/constant'
import Icon from '../Icon'
import useCount from '../../hooks/useCount'

type propsType = {
  num: number
  /**
   * 全局枚举的颜色
   */
  color: THEMECOLORS
}

export default function StatisticsNum(props: propsType) {
  const num = useCount(props.num)
  return (
    <div className={styles.statistics}>
      <div style={{ color: props.color }} className="icon">
        <Icon icon="statistics-square" size={30}></Icon>
      </div>
      <div className={styles.content}>
        <div style={{ color: props.color }} className={styles.number}>
          {num}
        </div>
      </div>
    </div>
  )
}
