import React from 'react'
import { Row, Col, Table, Tag, Space, Button } from 'antd'

import * as styles from './index.module.less'
import HoverCard, { IHoverCard } from './components/HoverCard'

export interface IEditCard extends IHoverCard {
  title?: string
  text?: string
  btnTxt?: string
  btnCb?: (e) => any
}

export default function EditCard({ title, text, btnTxt, btnCb, ...props }: IEditCard) {
  return (
    <HoverCard {...props}>
      <div className={styles.editWrapper}>
        <span style={{ fontWeight: 500, fontSize: '14px' }}>{title}</span>
        <div className={styles.content}>
          <span className={styles.txt}>{text}</span>
          {btnTxt && (
            <Button className={styles.btn} type="link" onClick={e => btnCb(e)}>
              {btnTxt}
            </Button>
          )}
        </div>
      </div>
    </HoverCard>
  )
}
