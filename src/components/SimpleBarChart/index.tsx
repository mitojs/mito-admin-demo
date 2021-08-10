import React, { useRef, useEffect, useState, useCallback } from 'react'
import _ from 'lodash'
import * as styles from './index.module.less'
import SingleBar from './SingleBar'
import { rightRoundedRect } from '@/utils'
import { barColors } from '@/common/constant'
import { useHistory, useParams, useRouteMatch } from 'react-router'
import CardWrapper from '../CardWrapper'

interface ISimpleBarChart {
  xAxisData: string[]
  yAxisData: number[]
  title: string
}

export const SimpleBarChart = ({ xAxisData, yAxisData, title }: ISimpleBarChart) => {
  const [size, setSize] = useState(window.outerWidth)
  const [maxWidth, setMaxWidth] = useState(0)
  const barRef = useRef(null)
  const history = useHistory()
  const { errorId } = useParams<{ errorId: string }>()
  const sum = yAxisData.reduce((total, val) => (total += val), 0)
  const maxVal = Math.max(...yAxisData)

  // 监听浏览器宽度变化
  const throttledResize = _.throttle(() => {
    const w = window.outerWidth
    setSize(w)
  }, 250)

  // 添加监听

  // 移除监听
  useEffect(() => {
    window.addEventListener('resize', throttledResize)
    return () => {
      window.removeEventListener('resize', throttledResize)
    }
  }, [])

  // 根据父节点宽度 设置最大图形长度
  useEffect(() => {
    if (barRef.current) {
      const width = barRef.current.offsetWidth
      setMaxWidth(width)
    }
  }, [size])

  return (
    <CardWrapper style={{ minHeight: '260px' }} title={title}>
      <div className={styles.barChartWrapper} ref={barRef}>
        <div>
          {xAxisData.map((d, index) => {
            const ratio = (yAxisData[index] / sum) * 100

            //  x, y, bar length, bar width, radius
            const path = rightRoundedRect(0, 0, ((maxWidth - 20) * ratio) / 100, 15, 9)
            const barConfig = {
              name: xAxisData[index],
              width: '100%',
              height: '20px',
              color: barColors[index],
              xAxis: {
                text: d,
              },
              data: path,
              parcentage: {
                text: ratio.toFixed(2) + '%',
                textShadow: 'grey',
              },
              onPathClick: () => {
                // history.push({
                //     pathname: `/errors/${errorId}/table`,
                //     search: `?key=${title}&value=${d}`,
                // })
              },
            }

            return <SingleBar key={index} {...barConfig} />
          })}
        </div>
      </div>
    </CardWrapper>
  )
}
