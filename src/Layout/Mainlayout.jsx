import React from 'react'
import Hero from '../components/hero'
import  Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


const Mainlayout = () => {
  return (
    <div>  {/* <Navbar /> */}
          <Hero />
         <Outlet/>
          <Footer/>
          </div>
  )
}

export default Mainlayout
