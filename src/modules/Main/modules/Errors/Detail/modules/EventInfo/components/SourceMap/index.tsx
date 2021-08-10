import React, { useEffect, useState } from 'react'
import { Collapse, Card, Empty, Col, Row } from 'antd'
import { useSelector } from 'react-redux'
import { v1 as uuidv1 } from 'uuid'
import { ExclamationCircleOutlined, LoadingOutlined } from '@ant-design/icons'

import * as styles from './index.module.less'
import { getSourcemapLookup } from '../../service'
import { RootState } from '@/store/index.type'
import CodeContainer from '@/components/CodeContainer'
import { getRangeArrIndexes } from '@/utils'

const { Panel } = Collapse
const mapSourceToFileName = {}
const HIGHLIGHT_RANGE = 6
interface StructedSourceMap {
  key: string
  args: any[]
  func: string // 前端分解后的报错
  column: number // 前端分解后的列
  line: number // 前端分解后的行
  url: string // 前端分解后的URL
  fileName: string // 前端分解后的文件名
  mapFileUrl: string // 前端分解后的map地址

  originFileName: string // 后端返回的报错文件名
  highlightLine: number // 后端返回的行
  highlightCol: number // 后端返回的列
}
export function structSourceMapErrorObject(str: string): StructedSourceMap[] {
  const structedError = []
  try {
    // url":"/parser/lib/index.js","func":"Object._raise","args":[],"line":766,"column":17
    const stacks = JSON.parse(str) as []
    stacks.forEach(item => {
      const { url, func, args, line, column } = item
      structedError.push({
        key: uuidv1(),
        args, // 请求参数
        func, // 前端分解后的报错
        column, // 前端分解后的列
        line, // 前端分解后的行
        url, // 前端分解后的URL
        fileName: url, // 前端分解后的文件名
        mapFileUrl: `${url}.map`,

        originFileName: null, // 后端返回的报错文件名
        highlightLine: null, // 后端返回的行
        highlightCol: null, // 后端返回的列
      })
    })
  } catch (error) {
    // const removeQuote = str.slice(1, str.length - 1)
    const splitLine: string[] = str.split('\n')
    splitLine.forEach((ErrorLine: string, index) => {
      const regexGetFile = /\(([^)]+)\)/ // 获取 [ 有括号的文件 , 没括号的文件 ]
      const regexpGetFun = /at\s+([\S]+)\s+\(/ // 获取 [ 函数名 ]
      const regexGetFileNoParenthese = /([^)]+)/ // 获取 [ 有括号的文件 , 没括号的文件 ]

      const funcExec = regexpGetFun.exec(ErrorLine)
      let fileURLExec = regexGetFile.exec(ErrorLine)

      if (!fileURLExec) {
        // 假如为空尝试解析无括号的URL
        fileURLExec = regexGetFileNoParenthese.exec(ErrorLine)
      }

      const funcNameMatch = Array.isArray(funcExec) && funcExec.length > 0 ? funcExec[1].trim() : ''
      const fileURLMatch = Array.isArray(fileURLExec) && fileURLExec.length > 0 ? fileURLExec[1] : ''
      const lineInfo = fileURLMatch.split(':')
      const mapFileUrl = `http:${lineInfo[1]}.map`
      if (index) {
        // 第一条不要
        structedError.push({
          key: uuidv1(),
          args: [], // 请求参数
          func: funcNameMatch || '', // 前端分解后的报错
          column: lineInfo.pop() || '', // 前端分解后的列
          line: lineInfo.pop() || '', // 前端分解后的行
          url: lineInfo.join(':'), // 前端分解后的URL
          fileName: lineInfo.join(':').split('/').pop(), // 前端分解后的文件名
          mapFileUrl,

          originFileName: null, // 后端返回的报错文件名
          highlightLine: null, // 后端返回的行
          highlightCol: null, // 后端返回的列
        })
      }
    })
  }
  return structedError
}
export default function SourceMap({ data, projectId }) {
  const [sourceMapData, setSourceMapData] = useState<StructedSourceMap[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // str => source-map Object
    setSourceMapData(structSourceMapErrorObject(data) || [])
  }, [data])

  // 展开单个错误文件
  const onPanelChange = async key => {
    const newSourceMapData = sourceMapData.find(e => e.key === key)

    if (newSourceMapData == undefined) return

    const requestParams = {
      mapFileUrl: newSourceMapData.mapFileUrl,
      projectId,
      fileName: newSourceMapData.fileName,
      line: newSourceMapData.line,
      column: newSourceMapData.column,
    }

    setLoading(true)
    try {
      const res = await getSourcemapLookup(requestParams)
      // 假如文件名相同 缓存后端返回的文件
      if (!mapSourceToFileName.hasOwnProperty(res.originFileName)) {
        mapSourceToFileName[res.originFileName] = res.originFile
      }
      setSourceMapData(
        //找到对应的 obj, 更新返回的 SourceMap
        sourceMapData.map(e => {
          return e.key == key
            ? {
                ...e,
                originFileName: res.originFileName,
                highlightLine: res.line,
                highlightCol: res.column,
              }
            : e
        }),
      )
    } finally {
      setLoading(false)
    }
  }

  const renderHeader = (row: StructedSourceMap) => (
    <div>
      <Row justify="start" gutter={[10, 0]}>
        <Col>
          文件名:<span className={styles.panelHeader}>{row.fileName}</span>
        </Col>
        <Col>
          函数名:<span className={styles.panelHeader}>{row.func}</span>
        </Col>
        <Col>
          {row.originFileName ? '还原后路径:' : ''}
          <span className={styles.panelHeader}>{row.originFileName}</span>
        </Col>
      </Row>
    </div>
  )

  return (
    <Card title="SourceMap" className={styles.container}>
      {sourceMapData.length > 0 ? (
        <Collapse accordion expandIconPosition="left" onChange={onPanelChange}>
          {sourceMapData.map(sm => {
            const source = sm.originFileName ? mapSourceToFileName[sm.originFileName] : [] // 有缓存取缓存
            const { start, end } = getRangeArrIndexes(source, sm.highlightLine, HIGHLIGHT_RANGE)
            const code = source.slice(start, end).join('\n')
            return (
              <Panel header={renderHeader(sm)} key={sm.key} className={styles.sourceMapPanel}>
                {code || loading ? (
                  code ? (
                    <CodeContainer key={sm.key} codeString={code} metastring={`{${HIGHLIGHT_RANGE}}`}></CodeContainer>
                  ) : (
                    <LoadingOutlined style={{ fontSize: '18px' }} />
                  )
                ) : (
                  <span>
                    <ExclamationCircleOutlined style={{ color: 'red', fontSize: '18px', marginRight: 10 }} />
                    Oops, SourceMap Failed Fetching
                  </span>
                )}
              </Panel>
            )
          })}
        </Collapse>
      ) : (
        <Empty description="暂无SourceMap数据"></Empty>
      )}
    </Card>
  )
}
