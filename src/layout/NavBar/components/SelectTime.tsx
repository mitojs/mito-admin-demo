import { DatePicker, Space } from 'antd'
import React, { useEffect, useState } from 'react'
const { RangePicker } = DatePicker
import moment, { Moment } from 'moment'
import { useDispatch } from 'react-redux'
import { SYNC_CHANGE_TIME } from '@/store/modules/global/action-types'

export default function SelectTime() {
  const dispatch = useDispatch()
  const defaultValue: [Moment, Moment] = [moment().subtract(1, 'month'), moment()]
  // localStorage.getItem('')
  // if(localStorage.getItem(''))
  dispatch({
    type: SYNC_CHANGE_TIME,
    payload: [defaultValue[0].format('YYYY-MM-DD'), defaultValue[1].format('YYYY-MM-DD')],
  })
  function onChange(_, dateStrings) {
    dispatch({
      type: SYNC_CHANGE_TIME,
      payload: dateStrings,
    })
  }
  // 只允许用户选择近60天的日期
  const disabledDate = current => {
    const laterDay = current && current > moment().endOf('day')
    const olderDay = current && current < moment().subtract(2, 'month')
    return laterDay || olderDay
    // 默认选中30天
    // if (!dates || dates.length === 0) {
    //     return laterDay
    // }
    // const tooLate = dates[0] && current.diff(dates[0], 'days') > 7
    // const tooEarly = dates[1] && dates[1].diff(current, 'days') > 60
    // console.log(laterDay)
  }

  return (
    <RangePicker
      allowClear={false}
      disabledDate={disabledDate}
      defaultValue={defaultValue}
      ranges={{
        七天: [moment().subtract(6, 'days'), moment()],
        三十天: [moment().subtract(1, 'month'), moment()],
        六十天: [moment().subtract(2, 'month'), moment()],
      }}
      onChange={onChange}
    />
  )
}
