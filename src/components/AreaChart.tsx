import React, { useRef, useEffect } from 'react'
import ApexCharts from 'apexcharts'
import { ChartColors } from '@/common/constant'

type propsType = {
  xAxisData: any[]
  series: any
  title?: string
  toolbar?: boolean
}
export default function AreaChart(props: propsType) {
  const options = {
    series: props.series,
    colors: ChartColors,
    chart: {
      type: 'area',
      height: 280,
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: !!props.toolbar,
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: props.title || '',
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: [3, 2, 1.5],
    },
    labels: props.xAxisData,
    yaxis: {
      opposite: false,
      labels: {
        align: 'left',
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val + ' : ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      },
      onItemHover: {
        highlightDataSeries: true,
      },
      horizontalAlign: 'left',
      position: 'top',
    },
  }

  const dom = useRef(null)
  useEffect(() => {
    const chart = new ApexCharts(dom.current, options)
    chart.render()
    return () => {
      chart.destroy()
    }
  }, [props])
  return <div ref={dom}></div>
}
