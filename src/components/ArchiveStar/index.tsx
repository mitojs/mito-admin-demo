import React, { useState, useEffect } from 'react'
import { ICONTYPE } from '@/common/constant'
import * as styles from './index.module.less'
import Icon from '@components/Icon'

interface IArchiveStar {
  status: boolean
  size?: number
  onClick: (e) => any
}

/**
 * 收藏小星星
 * @param status
 */

export const ArchiveStar = ({ status, onClick, size = null }: IArchiveStar) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={styles.archiveStar}
      onClick={e => onClick(e)}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      {status || hover ? (
        <Icon icon="fillstar" type={ICONTYPE.irregular} size={size} />
      ) : (
        <Icon icon="emptystar" type={ICONTYPE.irregular} size={size} />
      )}
    </div>
  )
}
