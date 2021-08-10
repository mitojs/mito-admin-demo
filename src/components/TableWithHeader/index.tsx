import React from 'react'
import { Table, Tag, Button, Tooltip } from 'antd'
import * as styles from './index.module.less'
import styled from 'styled-components'

const TableWrap = styled(Table)`
  .ant-table-container {
  }
`
/**
 * Table 会自己带有 Header, Children => Header Content
 */
export const TableWithHeader = props => {
  return (
    <div className={styles.TableWithHeader}>
      <div className={styles.header}>{props.children}</div>
      <TableWrap bordered {...props} />
    </div>
  )
}
