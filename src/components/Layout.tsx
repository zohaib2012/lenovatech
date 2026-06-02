import { Outlet } from 'react-router-dom'
import GATracker from './GATracker'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <GATracker />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
