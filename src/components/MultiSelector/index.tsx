import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { produce } from 'immer'
import { Select, Tag, Input, Button, Row, Col } from 'antd'
import { selectOption, selectValue } from '../../common/mock'
import { DeleteOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { transformObjToSlsQuery } from '@/utils/sls'
import { getMultipleLabel } from '@/common/constant'
import { isEmpty } from '@/utils'

const { Search } = Input
const types = {
  SET_OPTION: 'SET_OPTION',
  SET_VALUE: 'SET_VALUE',
  CLEAR_ITEM: 'clear item', // 清除item
}
const TagWrap = styled(Tag)`
  font-size: 14px;
  margin-bottom: 10px;
  padding: 4px 6px;
`
const initialState: SelectorItem[] = []

const reducers = produce((selected: SelectorItem[], action: { type: string; payload: SelectorItemNode | number }) => {
  const { type, payload } = action
  switch (type) {
    case types.SET_OPTION:
      selected.push({ option: payload as SelectorItemNode })
      break
    case types.SET_VALUE:
      selected[selected.length - 1].value = payload as SelectorItemNode
      break
    case types.CLEAR_ITEM:
      selected.splice(payload as number, 1)
      break
    default:
      return selected
  }
}, initialState)

const COLORS = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan']

interface SelectorItemNode {
  label: string
  value: string
}

export interface SelectorItem {
  option: SelectorItemNode
  value?: SelectorItemNode
}

/**
 * 多选项组件
 * 选择完option, 选择value
 * 当value 和 option 组合完，触发props.onChange时间
 * props.onChange: (res: SelectorItem[]) => any
 * */

interface MultiSelectorProps {
  onChange?: (res: string, raw?: SelectorItem[]) => unknown
  onSelectOption?: (option: SelectorItemNode) => unknown
  labelFetch: Function
  valueFetch: Function
  dataParams: any
  options?: SelectorItem[]
  values?: SelectorItem[]
  initial: SelectorItem[]
}

const MultiSelector = (props: MultiSelectorProps) => {
  const renderType = useRef(0) // 0 渲染options  1 渲染values
  const [selected, dispatch] = useReducer(reducers, props.initial)
  const [options, setOptions] = useState([])
  const [isInput, setIsInput] = useState(false)
  const [toggle, setToggle] = useState(true)
  const containerNode = useRef(null)
  const inputNode = useRef(null)
  const switchRenderType = v => {
    renderType.current = v
  }

  const fetchLabels = async () => {
    try {
      setToggle(true)
      const res = await props.labelFetch({ ...props.dataParams })
      setOptions(res)
    } finally {
      setToggle(false)
    }
  }
  const listenCtrlI = () => {
    const node = containerNode.current as Element
    node.addEventListener('keydown', function (e: any) {
      const { ctrlKey, keyCode } = e
      // 73 => i=
      if (ctrlKey && keyCode === 73) {
        setIsInput(preState => {
          return !preState
        })
      }
    })
  }
  const fetchValues = async (label: string) => {
    try {
      setToggle(true) // true
      const res = await props.valueFetch({ ...props.dataParams, label })
      setOptions(res)
    } finally {
      setToggle(false)
    }
  }

  useEffect(() => {
    fetchLabels()
    listenCtrlI()
  }, [])

  useEffect(() => {
    if (isInput) {
      inputNode.current.focus()
    }
  }, [isInput])

  const toSlsQuery = (selected: SelectorItem[]) => {
    const params = {}
    selected.forEach(item => {
      params[item.option.label] = item.value.label
    })
    return transformObjToSlsQuery(params)
  }

  const selectToInput = (selected: SelectorItem[]) => {
    const query = toSlsQuery(selected)
    if (!isEmpty(query)) {
      return `${query}`
    }
    return ''
  }

  useEffect(() => {
    if (renderType.current === 0 && props.onChange) {
      props.onChange(toSlsQuery(selected), selected)
    }
    // props, selected
  }, [selected])

  const onChange = (e, nodeArray) => {
    if (toggle) return
    let payload: SelectorItemNode
    let value
    // 自定义输入
    if (Object.keys(nodeArray[0]).length === 0) {
      value = e[0]
      payload = {
        label: e[0],
        value: e[0],
      }
    } else {
      const { children } = nodeArray[0]
      value = nodeArray[0].value
      payload = {
        label: children,
        value,
      }
    }
    if (renderType.current === 0) {
      dispatch({ type: types.SET_OPTION, payload })
      props.onSelectOption && props.onSelectOption(payload)
      fetchValues(value)
      // setOptions(selectValue[value])
    } else {
      dispatch({ type: types.SET_VALUE, payload })
      fetchLabels()
    }
    switchRenderType(renderType.current === 0 ? 1 : 0)
  }

  const onCloseTag = (index: number) => {
    dispatch({ type: types.CLEAR_ITEM, payload: index })
    if (index === selected.length - 1) {
      switchRenderType(0)
      setOptions(selectOption)
    }
    fetchLabels()
  }
  const renderInput = () => {
    const onSearch = (value: string) => {
      props.onChange(value)
    }
    return (
      <Search
        enterButton
        placeholder="input search text"
        allowClear
        defaultValue={selectToInput(selected)}
        onSearch={onSearch}
        ref={inputNode}
      />
    )
  }
  const renderSelect = () => (
    <div style={{ position: 'relative' }}>
      <Row>
        <div>
          {selected.map(({ option, value }, i) => {
            return (
              <TagWrap key={option.value + i} color={COLORS[i % COLORS.length]}>
                {`${option.label}:${value?.label ?? '-'}`}
                <DeleteOutlined size={20} style={{ marginLeft: '5px' }} onClick={() => onCloseTag(i)} />
              </TagWrap>
            )
          })}
        </div>
      </Row>
      <Row className="no-wrap-row" gutter={[20, 0]}>
        <Col flex="auto">
          <Select
            placeholder="请选择筛选条件"
            value={[]}
            onChange={onChange}
            style={{ width: '100%' }}
            // onFocus={}
            // onBlur={}
            mode="tags"
          >
            {options.map(n => (
              <Select.Option
                disabled={selected.findIndex(item => n.value === item.option.value) > -1}
                value={n.value}
                key={n.value}
              >
                {n.label}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col flex="116px">
          <Button size="middle" type="primary" onClick={() => setIsInput(true)}>
            高级搜索
          </Button>
        </Col>
      </Row>
    </div>
  )

  return (
    <div ref={containerNode} style={{ marginBottom: '10px' }}>
      {!isInput ? renderSelect() : renderInput()}
    </div>
  )
}

export default MultiSelector
