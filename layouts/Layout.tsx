import { ReactNode } from 'react'
import TopNavbar from '@/components/Navigation/TopNavbar/TopNavbar'
import Footer from '@/components/Navigation/Footer/Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
