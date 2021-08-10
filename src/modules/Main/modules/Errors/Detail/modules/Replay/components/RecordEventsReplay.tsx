import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import rrwebPlayer from 'rrweb-player'
import 'rrweb-player/dist/style.css'

const ReplayWrap = styled.div`
  padding: 20px;
  min-height: 600px;
  display: flex;
  justify-content: center;
  width: 100%;
`
type PropsType = {
  recordEvents: any[]
}
export default function RecordEventsReplay(props: PropsType) {
  const replayDom = useRef(null)
  function adjustPlayerStyle() {
    const rrPlayer = document.querySelector('.rr-player') as any
    const rrPlayerWrapper = document.querySelector('.replayer-wrapper') as any
    rrPlayerWrapper.style.width = '1px'
    rrPlayer.style.width = '100%'
    const rrController = document.querySelector('.rr-controller') as any
    rrController.style.textAlign = 'center'
  }
  useEffect(() => {
    if (Array.isArray(props.recordEvents) && props.recordEvents.length > 2) {
      new rrwebPlayer({
        target: replayDom.current,
        // v0.7.1
        props: {
          events: props.recordEvents,
          // showDebug: true,
          // width: 2000,
          // height: 1000,
          showWarning: false,
          speedOption: [1, 2, 4],
          // liveMode: true,
          mouseTail: true,
          // showController: false,
          autoPlay: true,
          // triggerFocus:true,
          // insertStyleRules: [''],
          // unpackFn: ,
        },
      })
    }
    return () => {
      if (replayDom.current.firstElementChild) {
        replayDom.current.removeChild(replayDom.current.firstElementChild)
      }
    }
  }, [props.recordEvents])

  return <ReplayWrap className="replay-dom" ref={replayDom}></ReplayWrap>
}
