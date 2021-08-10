import { THEMECOLORS } from '@/common/constant'
import AreaChart from '@/components/AreaChart'
import CardWrapper from '@/components/CardWrapper'
import TitleCountNum from '@/components/TitleCountNum'
import { NProjectPvUvStats } from '@/d.ts/project'
import { RootState } from '@/store/index.type'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getPvUvStatsFetch } from '../services'
const TitleNumContainer = styled.div`
  display: flex;
  position: absolute;
  right: 40px;
  top: 0;
  > div {
    margin-left: 10px;
  }
`
export default function PvUvAreaChart() {
  const time = useSelector<RootState>(state => state.global.time)
  const currentProject = useSelector<RootState, number>(state => state.global.currentProject)
  const [pvUvStats, setPvUvStats] = useState<NProjectPvUvStats.Response>({
    chart: [],
    pvSum: 0,
    uvSum: 0,
  })
  const [loading, setLoading] = useState(false)
  const dateParams = {
    startDate: time[0],
    endDate: time[1],
    projectId: currentProject,
  }
  const fetchPvUvStats = async () => {
    setLoading(true)
    const res = await getPvUvStatsFetch(dateParams)
    setPvUvStats(res)
    setLoading(false)
  }
  useEffect(() => {
    fetchPvUvStats()
  }, [time, currentProject])

  const RenderAreaChart = (chart: NProjectPvUvStats.PvUvChart[]) => {
    const pvCounts = []
    const uvCounts = []
    const dates = []
    chart.forEach(item => {
      pvCounts.push(item.pvCount)
      uvCounts.push(item.uvCount)
      dates.push(item.date)
    })
    const series = [
      {
        data: pvCounts,
        name: 'PV',
      },
      {
        data: uvCounts,
        name: 'UV',
      },
    ]
    return <AreaChart series={series} xAxisData={dates}></AreaChart>
  }
  return (
    <CardWrapper title="PvUv统计" loading={loading}>
      <div style={{ height: '295px' }}>
        <TitleNumContainer>
          <TitleCountNum title="总PV:" num={pvUvStats.pvSum} color={THEMECOLORS.apexBlue}></TitleCountNum>
          <TitleCountNum title="总UV:" num={pvUvStats.uvSum} color={THEMECOLORS.apexGreen}></TitleCountNum>
        </TitleNumContainer>
        {pvUvStats.chart.length > 0 && RenderAreaChart(pvUvStats.chart)}
      </div>
    </CardWrapper>
  )
}
