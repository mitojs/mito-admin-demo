import React, { useMemo } from 'react'
import styled from 'styled-components'
import Logo from '@/components/Logo/Logo'
import SelectProjects from './SelectProjects'
import SelectTime from './SelectTime'
import useRoute from '@/hooks/useRoute'
import DocumentTitle from 'react-document-title'

const ContainerDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > div {
    margin-right: 10px;
  }
`

function NavLeft() {
  const route = useRoute()
  const selectContainer = useMemo(
    () =>
      route.isHideNavLeftSelect ? (
        ''
      ) : (
        <>
          <SelectProjects></SelectProjects>
          <SelectTime></SelectTime>
        </>
      ),
    [route.isHideNavLeftSelect],
  )
  return (
    <ContainerDiv>
      <Logo />
      {selectContainer}
      <DocumentTitle title={route.name}></DocumentTitle>
    </ContainerDiv>
  )
}

export default React.memo(NavLeft, () => false)
