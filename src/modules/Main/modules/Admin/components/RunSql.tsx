import CardWrapper from '@/components/CardWrapper'
import { isEmpty } from '@/utils'
import { Input, message, Modal } from 'antd'
import React from 'react'
import { runSqlFetch } from '../services'
const { confirm } = Modal

const postRunSql = async (sql: string) => {
  try {
    const res = await runSqlFetch({ sql })
    message.success('sql执行成功，执行结果在控制台')
    console.log(res)
  } catch (error) {
    message.error('sql执行异常')
  }
}
export default function RunSql() {
  const handleOnPressEnter = async e => {
    const sql = e.currentTarget.value
    if (!isEmpty(sql)) {
      confirm({
        title: '执行sql确认',
        content: `确认执行该sql:${sql}`,
        onOk() {
          postRunSql(sql)
        },
        onCancel() {
          //
        },
      })
    }
  }
  return (
    <CardWrapper title="sql执行">
      <Input.TextArea
        placeholder="请输入sql后按下enter键"
        style={{ height: '120px' }}
        onPressEnter={handleOnPressEnter}
      ></Input.TextArea>
    </CardWrapper>
  )
}
