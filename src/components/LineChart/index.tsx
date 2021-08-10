import React, { useRef, useEffect } from 'react'
import ApexCharts from 'apexcharts'

type propsType = {
  xAxisData: any[]
  series: {
    name: string
    data: any[]
  }[]
}
export default function LineChart(props: propsType) {
  const options = {
    series: props.series,
    chart: {
      type: 'line',
      height: 240,
      tools: {
        download: false,
      },
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
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
    stroke: {
      width: [3.5, 2.5],
      dashArray: [0, 10],
      // colors: ['rgba(0, 133, 250,0.5)', ''],
      // opacity: 0.5,
      // curve: 'straight',
    },
    // title: {
    //     align: 'left',
    // },
    labels: props.xAxisData,
    yaxis: {
      opposite: false,
      labels: {
        align: 'left',
      },
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
