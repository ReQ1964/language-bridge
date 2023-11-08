import { ReactNode } from 'react'
import TopNavbar from '@/components/Navigation/TopNavbar/TopNavbar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
