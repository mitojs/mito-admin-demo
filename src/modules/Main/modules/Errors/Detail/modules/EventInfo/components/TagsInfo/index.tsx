import { Col, Row, Typography } from 'antd'
import React from 'react'
import * as styles from './index.module.less'

type propsType = {
  title: string
  data: Common.LabelValue[]
}
const { Paragraph } = Typography

export default function TagsInfo(props: propsType) {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      {props.data.map((v, i) => {
        return (
          <Row className={['no-wrap-row', styles.info].join(' ')} key={i}>
            <Col flex="80px">
              <div className={styles.label}>{v.label}</div>
            </Col>
            <Col flex="auto">
              <Paragraph ellipsis className={styles.value} copyable>
                {v.value}
              </Paragraph>
            </Col>
          </Row>
        )
      })}
    </div>
  )
}
