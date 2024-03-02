import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import useBackNavigation from '@/hooks/useBackNavigation'
import { BackNavigationNav } from './BackNavigationBar.styles'

const BackNavigationBar = ({ currentPageName }: { currentPageName: string }) => {
  const { goBack } = useBackNavigation()

  return (
    <BackNavigationNav>
      <LeftOutlined onClick={goBack} data-testid="navIcon" />
      <h3>{currentPageName}</h3>
    </BackNavigationNav>
  )
}

export default BackNavigationBar
