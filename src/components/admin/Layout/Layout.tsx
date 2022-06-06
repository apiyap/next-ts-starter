import React, { ReactElement, ReactNode } from 'react'

import { useRouter } from 'next/router'
import { Layout as RMDLayout, useLayoutNavigation , } from 'react-md'
 

import navItems from './navItems'
import LinkUnstyled from '../LinkUnstyled'

import PageTitle from './PageTitle'
import NavHeaderTitle from './NavHeaderTitle'




interface LayoutProps {
  children: ReactNode
}

// Check out the documentation for Configuring your Layout for more information:
// - https://react-md.dev/guides/configuring-your-layout
export default function Layout({ children }: LayoutProps): ReactElement {
  const { pathname } = useRouter()

 
  return (
    <RMDLayout
      title={PageTitle}
      navHeaderTitle={NavHeaderTitle}
      phoneLayout="temporary"
      tabletLayout="temporary"
      landscapeTabletLayout="temporary"
      desktopLayout="temporary"
      appBarProps={{ fixed: false }}
      treeProps={useLayoutNavigation(navItems, pathname, LinkUnstyled)}

    >
      {children}
    </RMDLayout>
  )
}
