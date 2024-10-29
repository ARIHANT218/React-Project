import 'react'
import { Outlet } from 'react-router-dom'
import Header from './componenets/Header/header'
import Footer from './componenets/Footer/footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout