import React from 'react'
import { Row, Col, Table, Tag, Space, Button, Spin } from 'antd'

import * as styles from './index.module.less'

interface ICardWrapper {
  style?: Object
  title?: React.ReactNode | string
  btnTxt?: string
  btnCb?: (e) => any
  rightRender?: () => any
  children?: JSX.Element[] | JSX.Element
  loading?: boolean
}

/**
 * 带标题和按钮的Header 的卡片
 */
export default function CardWrapper({
  style,
  title,
  btnCb,
  btnTxt,
  rightRender,
  children,
  loading = false,
}: ICardWrapper) {
  return (
    <Spin tip={title + '加载中...'} spinning={loading}>
      <div style={style} className={styles.CardWrapper}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          {rightRender && <div>{rightRender()}</div>}
          {btnTxt && (
            <Button className={styles.btn} type="link" onClick={e => btnCb(e)}>
              {btnTxt}
            </Button>
          )}
        </div>
        {/* body */}
        <div className={styles.content}>{children}</div>
      </div>
    </Spin>
  )
}
