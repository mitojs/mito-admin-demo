import React, { useRef, useEffect } from 'react'
import ApexCharts from 'apexcharts'
import { ChartColors } from '@/common/constant'

type propsType = {
  xAxisData: any[]
  series: any
}
export default function ColumnChart(props: propsType) {
  const options = {
    series: props.series,
    colors: ChartColors,
    chart: {
      type: 'bar',
      height: 280,
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 4,
      // colors: ['transparent'],
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
      position: 'top',
      horizontalAlign: 'center',
    },
  }

  const dom = useRef(null)
  useEffect(() => {
    const chart = new ApexCharts(dom.current, options)
    chart.render()
  }, [])
  return <div ref={dom}></div>
}
