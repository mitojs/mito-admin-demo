import React from 'react'
import { Switch as TransSwitch } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { Translation as trans } from './translation'
import { RootState } from '@/store/index.type'
import { TOGGLE_LANGUAGE } from '@/store/modules/global/action-types'

// 切换语言按钮
export default function () {
  const lang = useSelector((state: RootState) => state.global.lang)
  const dispatch = useDispatch()

  // 状态存在 Global store
  function onChange() {
    dispatch({
      type: TOGGLE_LANGUAGE,
    })
    location.reload()
  }

  return (
    <TransSwitch
      checkedChildren={`${trans.CN[lang]}`}
      unCheckedChildren={`${trans.EN[lang]}`}
      // defaultChecked
      onChange={onChange}
      checked={lang === 0}
    />
  )
}
