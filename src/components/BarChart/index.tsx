import React, { useRef, useEffect } from 'react'
import { useHistory, useLocation, useRouteMatch } from 'react-router'
import useRoute from '@/hooks/useRoute'
import ApexCharts from 'apexcharts'

type propsType = {
  xAxisData: any[]
  yAxisData: any[]
  title: string
}

interface MatchParams {
  id: string
}

export default function BarChart(props: propsType) {
  const history = useHistory()
  const match = useRouteMatch<MatchParams>()

  const options = {
    series: [
      {
        data: props.yAxisData,
      },
    ],
    chart: {
      type: 'bar',
      height: 180,
      events: {
        click: function (e, { grid }, { config: { series }, dataPointIndex }) {
          const key = grid.xaxisLabels[dataPointIndex]
          const value = series[0].data[dataPointIndex]

          // TODO: react router 蓝色光标没变化
          history.push({
            pathname: `/errors/${match.params.id}/table`,
            search: `?key=${key}&value=${value}`,
          })
        },
      },
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        horizontal: true,
        dataLabels: {
          enabled: false,
          position: 'bottom',
        },
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      textAnchor: 'start',
      style: {
        colors: ['black'],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      categories: props.xAxisData,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    title: {
      text: props.title,
      align: 'left',
      floating: true,
    },
    tooltip: {
      theme: 'light',
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return ''
          },
        },
      },
    },
  }

  const dom = useRef(null)
  useEffect(() => {
    const chart = new ApexCharts(dom.current, options)
    chart.render()
  }, [])
  return <div ref={dom}></div>
}
